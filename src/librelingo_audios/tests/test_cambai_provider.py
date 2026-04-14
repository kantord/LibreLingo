import io
import json

import pytest

from librelingo_fakes import fakes
from librelingo_types import AudioSettings, Settings, TextToSpeechSettings

from librelingo_audios import cli
from librelingo_audios.update_audios import update_audios_for_course

cambai_course = fakes.customize(
    fakes.course1,
    settings=Settings(
        audio_settings=AudioSettings(
            enabled=True,
            text_to_speech_settings_list=[
                TextToSpeechSettings(
                    provider="CambAI", voice="147320", engine="mars-pro"
                )
            ],
        )
    ),
)


@pytest.fixture
def cambai_http(mocker, monkeypatch):
    monkeypatch.setenv("CAMB_API_KEY", "test-key")

    calls = []

    class FakeResponse:
        def __init__(self, payload):
            self._buf = io.BytesIO(payload)

        def read(self, size=-1):
            return self._buf.read(size) if size != -1 else self._buf.read()

        def __enter__(self):
            return self

        def __exit__(self, *_):
            return False

    def fake_urlopen(request, *args, **kwargs):
        calls.append(
            {
                "url": request.full_url,
                "method": request.get_method(),
                "headers": dict(request.header_items()),
                "body": json.loads(request.data.decode("utf-8")),
            }
        )
        return FakeResponse(b"fake-mp3-bytes")

    mocker.patch(
        "librelingo_audios.update_audios.urllib.request.urlopen",
        side_effect=fake_urlopen,
    )
    return calls


def test_cambai_provider_calls_api_and_writes_file(
    cambai_http, tmp_path, index_file
):
    update_audios_for_course(
        tmp_path, "test", cambai_course, cli.Settings(dry_run=False, destructive=False)
    )

    assert len(cambai_http) == 4
    for call in cambai_http:
        assert call["url"] == "https://client.camb.ai/apis/tts-stream"
        assert call["method"] == "POST"
        assert call["headers"]["X-api-key"] == "test-key"
        assert call["body"]["voice_id"] == 147320
        assert call["body"]["language"] == "de-de"
        assert call["body"]["speech_model"] == "mars-pro"
        assert call["body"]["output_configuration"] == {"format": "mp3"}

    generated_files = sorted(p.name for p in tmp_path.iterdir() if p.suffix == ".mp3")
    assert len(generated_files) == 4
    for mp3 in tmp_path.glob("*.mp3"):
        assert mp3.read_bytes() == b"fake-mp3-bytes"


def test_cambai_provider_records_provider_in_index(
    cambai_http, tmp_path, index_file
):
    update_audios_for_course(
        tmp_path, "test", cambai_course, cli.Settings(dry_run=False, destructive=False)
    )
    with open(tmp_path / "test.json", "r") as f:
        entries = json.loads(f.read())
    assert len(entries) == 4
    for entry in entries:
        assert entry["ttsProvider"] == "CambAI"
        assert entry["ttsVoice"] == "147320"
        assert entry["ttsEngine"] == "mars-pro"


def test_cambai_provider_missing_api_key_raises(mocker, monkeypatch, tmp_path):
    monkeypatch.delenv("CAMB_API_KEY", raising=False)
    with pytest.raises(RuntimeError, match="CAMB_API_KEY"):
        update_audios_for_course(
            tmp_path,
            "test",
            cambai_course,
            cli.Settings(dry_run=False, destructive=False),
        )


def test_cambai_provider_non_numeric_voice_raises(
    mocker, monkeypatch, tmp_path
):
    monkeypatch.setenv("CAMB_API_KEY", "test-key")
    bad_course = fakes.customize(
        fakes.course1,
        settings=Settings(
            audio_settings=AudioSettings(
                enabled=True,
                text_to_speech_settings_list=[
                    TextToSpeechSettings(
                        provider="CambAI", voice="Lupe", engine="mars-pro"
                    )
                ],
            )
        ),
    )
    with pytest.raises(RuntimeError, match="numeric voice_id"):
        update_audios_for_course(
            tmp_path,
            "test",
            bad_course,
            cli.Settings(dry_run=False, destructive=False),
        )


def test_unknown_provider_raises(monkeypatch, tmp_path):
    monkeypatch.setenv("CAMB_API_KEY", "test-key")
    bad_course = fakes.customize(
        fakes.course1,
        settings=Settings(
            audio_settings=AudioSettings(
                enabled=True,
                text_to_speech_settings_list=[
                    TextToSpeechSettings(
                        provider="SomeOtherTTS", voice="X", engine="y"
                    )
                ],
            )
        ),
    )
    with pytest.raises(RuntimeError, match="Unknown TTS provider"):
        update_audios_for_course(
            tmp_path,
            "test",
            bad_course,
            cli.Settings(dry_run=False, destructive=False),
        )
