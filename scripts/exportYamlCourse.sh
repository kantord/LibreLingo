#!/bin/bash

set -euo pipefail

echo -en "⏳ Exporting course $1"
cd ./apps/librelingo_json_export/ ||
{
  echo -en "\r⚠️  Wrong folder structure"
  exit 1
}
if poetry run librelingo-export-cli ../../courses/"$1" ../../apps/web/src/courses/"$1"; then
		echo -en "\r✅ Exported course $1"
else
		echo -en "\r⚠️  Couldn't export course $1"
		exit 1
fi
echo
