#!/bin/bash

echo -en "⏳ Exporting course $1"
cd ./workspaces/librelingo_tools/ > /dev/null
poetry run python librelingo_tools/cli.py ../../courses/$1 ../../workspaces/web/src/courses/$1
if [ $? -eq 0 ]; then
		echo -en "\r✅ Exported course $1"
else
		echo -en "\r⚠️  Couldn't export course $1"
fi
cd - > /dev/null
echo
