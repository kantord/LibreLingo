#!/bin/bash
set -euo pipefail
if [ GIT_REPO = TRUE ] ; then
    cd /
    git clone https://github.com/LibreLingo/LibreLingo.git
    cd /LibreLingo
    git pull
fi
yarn exportAllCourses
yarn web dev
