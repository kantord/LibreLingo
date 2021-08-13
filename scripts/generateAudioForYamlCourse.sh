#!/bin/bash

echo -en "⏳ Generating audio for course $1"
cd ./apps/librelingo_audios/ > /dev/null
poetry run python librelingo_audios/cli.py ../../courses/$1 ../../apps/web/static/voice $1 "${@:2}"
if [ $? -eq 0 ]; then
		echo -en "\r✅ Generated audio for course $1"
else
		echo -en "\r⚠️  Couldn't generate audio for course $1"
fi
cd - > /dev/null
echo
