from librelingo_audios.list_missing_audios import list_missing_audios


def test_returns_hello_world():
    assert list_missing_audios() == "Hello World"
