#!/bin/bash
set -euo pipefail
if [[ "${GIT_REPO}" == "TRUE" ]]; then
    cd /
    git clone https://github.com/LibreLingo/LibreLingo.git
    cd /LibreLingo
    git pull
fi
yarn set version classic 
yarn install --frozen-lockfile
poetry install
cd /LibreLingo/apps/librelingo_yaml_loader
poetry install 
cd /LibreLingo/apps/librelingo_json_export 
poetry install
yarn exportAllCourses # Exports all courses in /LibreLingo/courses
yarn web dev # Runs LibreLingo
