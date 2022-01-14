#!/bin/bash

ANY_FAILED="0"
for d in ./courses/*/ ; do
		d=$(echo "$d" | sed 's/[^/]*\/[^/]*\///' | sed 's/\///')
		./scripts/exportYamlCourse.sh "$d"
		if [ "$?" -eq "1" ]; then
			ANY_FAILED="1"
		fi
done

if [ "$ANY_FAILED" -eq "1" ]; then
	echo "😿 Could not export all yaml courses"
	exit 1
fi
