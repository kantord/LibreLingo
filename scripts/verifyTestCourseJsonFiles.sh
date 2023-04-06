#!/bin/bash

set -euo pipefail

yarn exportCourse test-1

if git diff --exit-code --name-only; then
	echo "🎉 Amazing, test course JSON files are up to date"
else
	echo "😿 Outdated test course JSON files detected."
	echo "The following files were outdated:"
	git diff --name-only
	echo
	echo "See the full list of changes:"
	git diff
	echo "Run the following script to automatically update the JSON files:"
	echo
	echo "yarn exportAllCourses"
	exit 1
fi
