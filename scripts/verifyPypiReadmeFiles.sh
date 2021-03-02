#!/bin/bash

./scripts/updatePypiReadmeFiles.sh

if git diff-index --quiet HEAD --; then
	echo "🎉 Amazing, PyPi readme files are up to date"
else
	echo "😿 Outdated PyPi readme files detected."
	echo "Run the following script to automatically update the readme files:"
	echo "./scripts/updatePypiReadmeFiles.sh"
fi
