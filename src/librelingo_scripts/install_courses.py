import os
import sys
import json
import requests
import zipfile
import shutil
from concurrent.futures import ThreadPoolExecutor, as_completed
from tqdm import tqdm

def download_file(url, dest_path):
    response = requests.get(url, stream=True)
    response.raise_for_status()

    with open(dest_path, 'wb') as f:
        for chunk in response.iter_content(chunk_size=8192):
            f.write(chunk)

def unzip_file(zip_path, extract_path):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_path)

def move_files(source_dir, dest_dir):
    for root, dirs, files in os.walk(source_dir):
        if 'course' in dirs:
            course_path = os.path.join(root, 'course')
            for file in os.listdir(course_path):
                shutil.move(os.path.join(course_path, file), dest_dir)
            shutil.rmtree(os.path.join(root, 'course'))
        if root != source_dir:
            shutil.rmtree(root)

def process_course(course):
    url = course['url']
    dest_dir = os.path.abspath(os.path.join('./courses', course["paths"]["jsonFolder"]))
    
    temp_zip = os.path.join(dest_dir, 'temp.zip')
    
    if os.path.exists(dest_dir):
        shutil.rmtree(dest_dir)
    
    os.makedirs(dest_dir, exist_ok=True)
    
    try:
        print(f"Downloading {url}...")
        download_file(url, temp_zip)
        
        print(f"Unzipping to {dest_dir}...")
        unzip_file(temp_zip, dest_dir)
        
        print(f"Moving files in {dest_dir}...")
        move_files(dest_dir, dest_dir)
    except Exception as e:
        print(f"Failed to process {course['paths']['jsonFolder']}: {e}")
        raise e
    finally:
        if os.path.exists(temp_zip):
            os.remove(temp_zip)

def main():
    config_filename = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../apps/librelingo-web/src/courses/config.json'))
    
    if not os.path.isfile(config_filename):
        sys.exit(f"Error: The file {config_filename} does not exist.")
    
    try:
        with open(config_filename) as fh:
            config = json.load(fh)
    except json.JSONDecodeError as e:
        sys.exit(f"Error: Failed to parse JSON file {config_filename}: {e}")
    
    courses_to_deploy = [course for course in config if course.get('deploy')]

    with ThreadPoolExecutor() as executor:
        futures = {executor.submit(process_course, course): course for course in courses_to_deploy}

        for future in tqdm(as_completed(futures), total=len(futures)):
            course = futures[future]
            try:
                future.result()
            except Exception as e:
                print(f"Error processing {course['paths']['jsonFolder']}: {e}")
                sys.exit(1)

    print("All courses processed successfully.")

if __name__ == "__main__":
    main()
