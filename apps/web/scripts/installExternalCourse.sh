#!/usr/bin/env bash

set -euo pipefail

wget "$1" -O temp.zip
unzip temp.zip "*/course/*" -d ../../courses/"$2"
mv ../../courses/"$2"/*/course/* ../../courses/"$2"
rm temp.zip
