#!/usr/bin/env bash

set -euo pipefail

tail -n +2 ../../docs/image_attributions.csv | while read -r photo_description; do \
    ./scripts/fetchPhoto.sh "$photo_description"; \
done
