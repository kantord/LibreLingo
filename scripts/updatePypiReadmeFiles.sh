#!/bin/bash

set -euo pipefail

find apps/ -name pyproject.toml -exec dirname {} \; |
  while IFS="" read -r directory
    do
			echo "Updating README.md for Python package '$(basename "$directory")'..."
			cd "$directory" ||
			{
				echo -en "\r⚠️  Could not enter $directory"
				exit 1
			}
			pdm install
			make README.md -B ||
      {
        echo -en "\r⚠️  Could not update README.md for Python package '$(basename "$directory")'..."
      }
			cd - ||
			{
				echo -en "\r⚠️  Could not return to previous directory"
				exit 1
			}
			echo
    done
