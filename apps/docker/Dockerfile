# Librelingo is not compatible with Node 16, using Node 14.18.3 image instead
FROM node:14.18.3 

# Setup Librelingo
RUN git clone https://github.com/LibreLingo/LibreLingo.git
WORKDIR /LibreLingo
RUN yarn set version classic && \
  yarn

# Setup python, poetry and python modules to be able to convert courses from YAML to JSON
RUN wget https://www.python.org/ftp/python/3.9.0/Python-3.9.0.tar.xz && \
  tar xf Python-3.9.0.tar.xz && \
  cd ./Python-3.9.0 && \
  ./configure && \
  make && \
  make install && \
  update-alternatives --install /usr/bin/python python /usr/local/bin/python3.9 10 && \
  ln -s /usr/share/pyshared/lsb_release.py /usr/local/lib/python3.9/site-packages/lsb_release.py && \
  pip3 install --upgrade pip && \
  pip install pipx && \
  pipx install poetry && \
  export PATH=$PATH:/root/.local/bin && \
  poetry install && \
  cd /LibreLingo/apps/librelingo_yaml_loader && \
  poetry install && \
  cd /LibreLingo/apps/librelingo_json_export && \
  poetry install && \
  pip install librelingo-yaml-loader && \
  pip install librelingo-json-export

# Entrypoint script that will convert the course at /LibreLingo/courses/your-course from YAML to JSON and make it available in Librelingo Web App copy and chmod
COPY start.sh /LibreLingo/start.sh
RUN chmod +x /LibreLingo/start.sh

EXPOSE 3000

# Run entrypoint script
ENTRYPOINT ["./start.sh"]
