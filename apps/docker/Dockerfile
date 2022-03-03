FROM archlinux:base-20220227.0.49015

# Setup packages and Librelingo
RUN pacman -Syu --noconfirm git nodejs-lts-fermium gcc yarn python3 python-pip && \
  curl -sSL https://install.python-poetry.org | python3 - && \
  pip install librelingo-yaml-loader && \
  pip install librelingo-json-export && \
  git clone https://github.com/LibreLingo/LibreLingo.git && \
  cd /LibreLingo && \
  yarn set version classic && \
  yarn && \
  /root/.local/bin/poetry install && \
  cd /LibreLingo/apps/librelingo_yaml_loader && \
  /root/.local/bin/poetry install && \
  cd /LibreLingo/apps/librelingo_json_export && \
  /root/.local/bin/poetry install

WORKDIR /LibreLingo

# Entrypoint script that will convert all the courses in /LibreLingo/courses and make it available in Librelingo
COPY docker-entrypoint.sh /LibreLingo/docker-entrypoint.sh
RUN chmod +x /LibreLingo/start.sh

EXPOSE 3000

# Run entrypoint script as the entrypoint
ENTRYPOINT ["/LibreLingo/docker-entrypoint.sh"]
