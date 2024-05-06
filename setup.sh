set -e

curl -sSL https://pdm-project.org/install-pdm.py | python3 -
pdm install

source $NVM_DIR/nvm.sh;
nvm install 16 --default
nvm use 16
nvm alias default 16
yarn
