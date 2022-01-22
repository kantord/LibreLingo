#!/bin/bash

set -euo pipefail

for d in ./courses/*/ ; do
		d=$(echo "$d" | sed 's/[^/]*\/[^/]*\///' | sed 's/\///')
		./scripts/updateAudioForYamlCourse.sh "$d" "$@"
done
