#!/usr/bin/env bash

sentence=$(echo $1 | cut -d'|' -f3)
filename=$(echo $1 | cut -d'|' -f2)

echo $sentence
echo $filename

voice=$(echo $1 | cut -d'|' -f1 \
       	| sed 's/spanish/Lupe/g' \
)


if test -f "./static/voice/$filename.mp3"; then
	exit 0
fi


aws2 polly synthesize-speech \
    --output-format mp3 \
    --voice-id $voice \
    --engine neural \
    --text "$sentence" \
    ./static/voice/$filename.mp3 \
    > /dev/null
