#!/usr/bin/env bash

set -euo pipefail

yarn installCourse "https://github.com/LibreLingo/LibreLingo-EU-from-EN/archive/refs/heads/main.zip" basque-from-english
yarn installCourse "https://github.com/LibreLingo/LibreLingo-ES-from-EN/archive/refs/heads/main.zip" spanish-from-english
yarn installCourse https://codeberg.org/Lamdarer/LibreLingo-DE-from-EN/archive/main.zip german-from-english
yarn installCourse "https://github.com/szabgab/LibreLingo-Judeo-Spanish-from-English/archive/refs/heads/main.zip" ladino-from-english
yarn installCourse "https://github.com/szabgab/LibreLingo-Judeo-Spanish-from-Spanish/archive/refs/heads/main.zip" ladino-from-spanish
yarn installCourse "https://github.com/szabgab/LibreLingo-Judeo-Spanish-from-Hebrew/archive/refs/heads/main.zip" ladino-from-hebrew
