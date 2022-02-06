import json
import sys
import os


def main():
    if len(sys.argv) != 2:
        exit(f"Usage: {sys.argv[0]} PATH_TO_CONFIG_FILE")
    config_filename = sys.argv[1]
    with open(config_filename) as fh:
        config = json.load(fh)

    for course in config:
        if course["deploy"]:
            cmd = f"""yarn installCourse "{course['url']}" {course['tdir']}"""
            print(cmd)
            exit_code = os.system(cmd)
            if exit_code != 0:
                exit("We failed to install {course['tdir']}. Terminating")


if __name__ == "__main__":
    main()
