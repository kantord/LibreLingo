#!/bin/bash

./scripts/updatePypiReadmeFiles.sh -B

git diff --exit-code --name-only

if [ "$?" -eq "0" ]; then
	echo "🎉 Amazing, PyPi readme files are up to date"
else
	echo "😿 Outdated PyPi readme files detected."
	echo "The following files were outdated:"
	git diff --name-only 
	echo
	echo "See the full list of changes:"
	git diff
	echo "Run the following script to automatically update the readme files:"
	echo
	echo "./scripts/updatePypiReadmeFiles.sh"
	exit 1
fi
