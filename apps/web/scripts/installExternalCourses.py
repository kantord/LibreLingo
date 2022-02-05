import json
import sys
import os

def main():
    if len(sys.argv) != 2:
        exit(f"Usage: {sys.argv[0]} PATH_TO_CONFIG_FILE")
    filename = sys.argv[1]
    with open(filename) as fh:
        config = json.load(fh)
    for course in config:
        if course['deploy']:
            cmd = f'''yarn installCourse "{course['url']}" {course['tdir']}'''
            print(cmd)
            exit_code = os.system(cmd)
            if exit_code != 0:
                exit("We failed to deploy {course['tdir']}. Terminating")

main()

