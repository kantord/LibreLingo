#!/bin/bash

echo -en "⏳ Updating audio for course $1"
cd ./apps/librelingo_audios/ > /dev/null
if poetry run python librelingo_audios/cli.py ../../courses/"$1" ../../apps/web/static/voice "$1" "${@:2}"; then
		echo -en "\r✅ Updated audio for course $1"
else
		echo -en "\r⚠️  Couldn't update audio for course $1"
fi
echo
