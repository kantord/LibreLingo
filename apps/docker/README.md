[Docker Hub](https://hub.docker.com/r/cutthroat78/librelingo-dev)

## Usage
After using one of the methods below and it runs successfully, you can access LibreLingo at http://(ip of host that is running the container):3000.

If you have volumed mounted your own course (to /LibreLingo/courses/your-course inside of the container), you can access it here http://(ip of host that is running the container):3000/course/your-course
### docker cli
```
docker container run -v (path to your course):/LibreLingo/courses/your-course -p 3000:3000 -d --name LibreLingo-Dev cutthroat78/librelingo-dev
```
### docker-compose
```
version: '3.3'
services:
    librelingo-dev:
        volumes:
            - '(path to your course):/LibreLingo/courses/your-course'
        ports:
            - '3000:3000'
        container_name: LibreLingo-Dev
        image: cutthroat78/librelingo-dev
```
### Build the image yourself
1. Move into this directory (using cd or other) 
Example:
```
cd LibreLingo/apps/docker/README.md
```
2. Build the image
```
docker build . -t (insert username here)/(insert image name here)
```
3. Then run using any of the above methods but substituting the image name of "cutthroat78/librelingo-dev" with your image name
