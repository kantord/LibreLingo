[Docker Hub](https://hub.docker.com/r/librelingo/librelingo)
## Usage
After using one of the methods below successfully, you can access LibreLingo at http://(ip address):3000

If you have volumed mounted your own course (to /LibreLingo/courses/(name of course) inside of the container), you can access it here http://(ip address):3000/course/(name of course)
### Docker CLI
```
docker container run -v (path to course):/LibreLingo/courses/(name of course) -p 3000:3000 -d --name LibreLingo librelingo/librelingo
```
### Docker-compose
```
version: '3.3'
services:
    librelingo-dev:
        volumes:
            - '(path to course):/LibreLingo/courses/(name of course)'
        ports:
            - '3000:3000'
        container_name: LibreLingo
        image: librelingo/librelingo
```
### Building the image
1. Move into this directory (using cd or other) 
Example:
```
cd LibreLingo/apps/docker/
```
2. Build the image
```
docker build . -t {image name}
```
3. Then run using any of the above methods but substituting the image name of "librelingo/librelingo" with your image name
