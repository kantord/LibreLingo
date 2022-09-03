FROM ubuntu:jammy
RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm

# Make sure you have the latest version of things
RUN apt update

# Install basic dependencies
RUN apt-get install -y curl git

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Installing Node
SHELL ["/bin/bash", "--login", "-i", "-c"]
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
RUN source $NVM_DIR/nvm.sh && nvm install 14
SHELL ["/bin/bash", "--login", "-c"]

# Install npm
RUN apt-get install -y npm

# Install yarn
RUN npm install -g yarn

# Add project files
RUN git clone https://github.com/LibreLingo/LibreLingo.git

# Setup packages and poetry
# RUN pacman -Syu --noconfirm git nodejs-lts-fermium gcc yarn python3 python-pip && \
  # curl -sSL https://install.python-poetry.org | python3 -
 
# Update path to include poetry
# ENV PATH="/root/.local/bin/:${PATH}"
  
# ENV GIT_REPO=TRUE
WORKDIR /LibreLingo

RUN source $NVM_DIR/nvm.sh && nvm install 14 && yarn install

RUN apt-get install -y python-is-python3 python3-venv libpython3-dev wget unzip gcc libyaml-dev
RUN curl -sSL https://install.python-poetry.org | python - 
ENV PATH="/root/.local/bin:$PATH" 
RUN poetry install
RUN cd apps/librelingo_yaml_loader && poetry install && cd ../.. && cd apps/librelingo_json_export && poetry install && cd ../..

RUN yarn web run installAllExternalCourses
RUN yarn exportAllCourses

# Entrypoint script that will convert all the courses in /LibreLingo/courses and make it available in Librelingo
# COPY docker-entrypoint.sh /docker-entrypoint.sh
# RUN chmod +x /docker-entrypoint.sh

EXPOSE 3000

# Run entrypoint script as the entrypoint
ENTRYPOINT ["/docker-entrypoint.sh"]
