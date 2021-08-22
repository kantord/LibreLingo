#!/usr/bin/env bash

wget "https://github.com/$1/archive/refs/heads/main.zip" -O temp.zip
unzip temp.zip -d ../../courses/$2
rm temp.zip
