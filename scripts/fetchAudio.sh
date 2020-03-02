#!/usr/bin/env bash

sentence=$1
filename=`echo $1 | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g'`

if test -f "./static/voice/$filename.mp3"; then
	exit 0
fi

aws2 polly synthesize-speech \
    --output-format mp3 \
    --voice-id Lupe \
    --engine neural \
    --text "$sentence" \
    ./static/voice/$filename.mp3
