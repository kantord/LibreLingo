#!/bin/bash

for directory in $(find apps/ -name pyproject.toml | xargs -n1 dirname); do
	echo "Updating README.md for Python package '$(basename $directory)'..."
	cd $directory
	make README.md
	cd -
	echo
done

