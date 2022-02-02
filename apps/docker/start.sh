#!/bin/bash
set -euo pipefail
python3 /LibreLingo/apps/librelingo_json_export/librelingo_json_export/cli.py /LibreLingo/courses/your-course /LibreLingo/apps/web/src/courses/your-course
yarn web dev
