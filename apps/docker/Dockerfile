FROM archlinux:base-20220227.0.49015

# Setup packages
RUN pacman -Syu --noconfirm git nodejs-lts-fermium gcc yarn python3 python-pip

# Setup Poetry
RUN curl -sSL https://install.python-poetry.org | python3 -

# Update path to include poetry
ENV PATH="/root/.local/bin/:${PATH}"
  
# Git clone LibreLingo repo
RUN git clone https://github.com/LibreLingo/LibreLingo.git
  
# Setup LibreLingo 
RUN cd /LibreLingo && \
  yarn install --frozen-lockfile && \
  yarn
 
# Setup tools to import courses
RUN cd /LibreLingo && \
  poetry install && \
  cd /LibreLingo/apps/librelingo_yaml_loader && \
  poetry install && \
  cd /LibreLingo/apps/librelingo_json_export && \
  poetry install

WORKDIR /LibreLingo

# Entrypoint script that will convert all the courses in /LibreLingo/courses and make it available in Librelingo
COPY docker-entrypoint.sh /LibreLingo/docker-entrypoint.sh
RUN chmod +x /LibreLingo/docker-entrypoint.sh

EXPOSE 3000

# Run entrypoint script as the entrypoint
ENTRYPOINT ["/LibreLingo/docker-entrypoint.sh"]
