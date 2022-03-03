FROM archlinux:base-20220227.0.49015

# Setup packages and Librelingo
RUN pacman -Syu --noconfirm git nodejs-lts-fermium gcc yarn python3 python-pip

# Setup Poetry and LibreLingo Python Packages
RUN curl -sSL https://install.python-poetry.org | python3 - && \
  mv /root/.local/bin/poetry /bin
  pip install librelingo-yaml-loader && \
  pip install librelingo-json-export
  
# Git clone LibreLingo repo
RUN git clone https://github.com/LibreLingo/LibreLingo.git
  
# Setup LibreLingo and ability to import courses
RUN cd /LibreLingo && \
  yarn set version classic && \
  yarn && \
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
