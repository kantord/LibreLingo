#!/bin/bash

set -euo pipefail

echo -en "⏳ Exporting course $1"
if pdm run export-course ./courses/"$1" ./apps/web/src/courses/"$1"; then
		echo -en "\r\033[K✅ Exported course $1"
else
		echo -en "\r⚠️  Couldn't export course $1"
		exit 1
fi
echo
