#!/usr/bin/env bash

cat ./audios_to_fetch.csv | while read -r audio_description; do \
    ./fetchAudio.sh "$audio_description"; \
done
