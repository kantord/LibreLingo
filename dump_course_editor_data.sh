#!/usr/bin/env bash

cd course_editor
python manage.py dumpdata "course" --indent=2 > ./dumps/courseData.json
cd -
