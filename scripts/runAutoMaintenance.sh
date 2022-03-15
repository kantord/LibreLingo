#!/bin/bash

set -euo pipefail

yarn exportAllCourses
./scripts/updatePypiReadmeFiles.sh
