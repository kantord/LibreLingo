[Docker Hub](https://hub.docker.com/r/librelingo/librelingo)
## Usage
After using one of the methods below successfully, you can access your LibreLingo instance at ```http://{ip address}:3000```

If you have volumed mounted your own course that was imported successfully, you can access the course here: ```http://{ip address}:3000/course/{name of course}```

Anything wrapped in curly braces in this README.md is for things to change

The LibreLingo container has on environment variable you can change: GIT_REPO

If GIT_REPO is set to TRUE, then everytime the container starts the LibreLingo/LibreLingo repo will be git cloned into the /LibreLingo and have "git pull" ran on the repo to ensure the latest version.

If GIT_REPO is set to FALSE, then the git repo will NOT be git cloned and "git pull" will NOT be ran on the repo. You must clone the repo yourself and volume mount it to /LibreLingo. This is to allow developers to work on the project and test their changes.

If you volume mount any courses to /LibreLingo/courses then they will automatically be exported and put into LibreLingo
### Docker CLI Usage Example
Example:
```
docker container run -p 3000:3000 -d --name LibreLingo librelingo/librelingo
```
Example with importing a course:
```
docker container run -v /home/user/french-from-english:/LibreLingo/courses/french-from-english -p 3000:3000 -d --name LibreLingo librelingo/librelingo
```
Example for developers:
```
docker container run -p 3000:3000 --env GIT_REPO=FALSE -v /home/user/LibreLingo:/LibreLingo -d --name LibreLingo librelingo/librelingo
```
### Docker-compose Example
```
version: '3.3'
services:
    librelingo:
        volumes:
            - '/home/user/french-from-english:/LibreLingo/courses/french-from-english'
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
