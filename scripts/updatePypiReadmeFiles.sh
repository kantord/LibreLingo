#!/bin/bash

for directory in $(find apps/ -name pyproject.toml | xargs -n1 dirname); do
	echo "Updating README.md for Python package '$(basename "$directory")'..."
	cd "$directory" ||
	{
		echo -en "\r⚠️  Could not enter $directory"
		exit 1
	}
	poetry install
	make README.md -B "$1"
	cd -
	echo
done
