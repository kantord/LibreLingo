#!/usr/bin/env bash

set -euo pipefail

for course in $(seq 0 $(jq length config/courses.json)); do
	if jq .[$course].dev config/courses.json | grep -q 'true'; then
		yarn installCourse $(jq -r .[$course].url config/courses.json) $(jq -r .[$course].tdir config/courses.json)
		echo "Installed $(jq .[$course].tdir config/courses.json)"
	fi
done
