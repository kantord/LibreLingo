#!/bin/bash
set -euo pipefail
yarn exportAllCourses
yarn web dev
