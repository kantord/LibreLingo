#!/bin/bash
set -euo pipefail
if [ "GIT_CLONE" = true ] ; then
    cd /
    git clone https://github.com/LibreLingo/LibreLingo.git
fi
yarn exportAllCourses
yarn web dev
