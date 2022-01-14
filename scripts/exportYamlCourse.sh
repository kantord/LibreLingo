#!/bin/bash

echo -en "⏳ Exporting course $1"
cd ./apps/librelingo_json_export/ > /dev/null
if poetry run export-cli ../../courses/"$1" ../../apps/web/src/courses/"$1"; then
		echo -en "\r✅ Exported course $1"
else
		echo -en "\r⚠️  Couldn't export course $1"
		exit 1
fi
echo
