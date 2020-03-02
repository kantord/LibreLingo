#!/usr/bin/env bash

tail -n +2 ./image_attributions.csv | while read -r photo_description; do \
    ./scripts/fetchPhoto.sh $photo_description; \
done
