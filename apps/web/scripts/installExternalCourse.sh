#!/usr/bin/env bash

wget "https://github.com/$1/archive/refs/heads/main.zip" -O temp.zip
unzip temp.zip "*/course/*" -d ../../courses/$2
mv ../../courses/$2/*/course/* ../../courses/$2
rm temp.zip

wget "https://codeberg.org/Lamdarer/LibreLingo-DE-from-EN/archive/main.zip" -O temp.zip
unzip temp.zip "*/course/*" -d ../../courses/$2
mv ../../courses/$2/*/course/* ../../courses/$2
rm temp.zip