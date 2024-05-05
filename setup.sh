set -e

curl -sSL https://install.python-poetry.org | python3 -
poetry install
cd apps/librelingo_yaml_loader
poetry install
cd ../librelingo_json_export
poetry install

source $NVM_DIR/nvm.sh;
nvm install 16
nvm use 16
yarn
