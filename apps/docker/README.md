[Docker Hub](https://hub.docker.com/r/librelingo/librelingo)
## Usage
After using one of the methods below successfully, you can access your LibreLingo instance at ```http://{ip address}:3000```

If you have volumed mounted your own course that was imported successfully, you can access the course here: ```http://{ip address}:3000/course/{name of course}```

Anything wrapped in curly braces in this README.md is for things to change
### Docker CLI
Without importing a course:
```
docker container run -p 3000:3000 -d --name LibreLingo librelingo/librelingo
```
With importing a course:
```
docker container run -v {path to course}:/LibreLingo/courses/{name of course} -p 3000:3000 -d --name LibreLingo librelingo/librelingo
```
### Docker-compose
```
version: '3.3'
services:
    librelingo:
        volumes:
            - '{path to course}:/LibreLingo/courses/{name of course}'
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
