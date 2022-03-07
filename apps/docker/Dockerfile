FROM archlinux:base-20220227.0.49015

# Setup packages and poetry
RUN pacman -Syu --noconfirm git nodejs-lts-fermium gcc yarn python3 python-pip && \
  curl -sSL https://install.python-poetry.org | python3 -
 
# Update path to include poetry
ENV PATH="/root/.local/bin/:${PATH}"
  
# Git clone environment variable that can be override when running container
ENV GIT_REPO=TRUE

WORKDIR /LibreLingo

# Entrypoint script that will convert all the courses in /LibreLingo/courses and make it available in Librelingo
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 3000

# Run entrypoint script as the entrypoint
ENTRYPOINT ["/docker-entrypoint.sh"]
