FROM archlinux:base-20220227.0.49015

# Setup packages and poetry
RUN pacman -Syu --noconfirm git nodejs-lts-fermium gcc yarn python3 python-pip && \
  curl -sSL https://install.python-poetry.org | python3 -
 
# Update path to include poetry
ENV PATH="/root/.local/bin/:${PATH}"
  
# Git clone environment variable that can be override when running container
ENV GIT_CLONE=TRUE

WORKDIR /LibreLingo
  
# Setup LibreLingo 
RUN yarn set version classic && \
  yarn install --frozen-lockfile
 
# Setup tools to import courses
RUN poetry install && \
  cd /LibreLingo/apps/librelingo_yaml_loader && \
  poetry install && \
  cd /LibreLingo/apps/librelingo_json_export && \
  poetry install

# Entrypoint script that will convert all the courses in /LibreLingo/courses and make it available in Librelingo
COPY docker-entrypoint.sh /LibreLingo/docker-entrypoint.sh
RUN chmod +x /LibreLingo/docker-entrypoint.sh

EXPOSE 3000

# Run entrypoint script as the entrypoint
ENTRYPOINT ["/LibreLingo/docker-entrypoint.sh"]
