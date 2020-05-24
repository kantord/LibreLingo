#!/usr/bin/env bash

if output=$(git status --porcelain) && [ -z "$output" ]; then
  echo "Working directory clean. Fetching course data..."
else 
  echo "Working directory not clean. Please commit your changes before running this script."
  exit 1
fi

# fetch things
yarn exportCourse 1
yarn fetchAudios
yarn fetchPhotos


# commit changes
git add dumps/courseData.json
git add src/courses/
git add static
git commit -m "feat: update course data"
