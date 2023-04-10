# Development

## Why does this project exist?

This project exists to create a beginner-friendly, community-oriented,
free software licensed language learning application. If you want to learn more
about LibreLingo's background, [I recommend reading my article](https://dev.to/kantord/why-i-built-librelingo-280o).

## Project structure

### Clickable flow chart

```mermaid
graph LR
 YAML[YAML course] --> LOAD
 LOAD[librelingo-yaml-loader] --> EXPORT[librelingo-json-export]
 EXPORT -->|JSON files| APP
 LOAD -->|TODO| AUDIO
 LOAD -->|TODO| IMAGE
 AUDIO[Audio files] --> APP
 IMAGE[Image files] --> APP
 TYPES[librelingo-types] --> LOAD
 UTILS[librelingo-utils] --> LOAD

 click APP "https://github.com/LibreLingo/LibreLingo/tree/main/apps/web"
 click EXPORT "https://pypi.org/project/librelingo-json-export/"
 click UTILS "https://pypi.org/project/librelingo-utils/"
 click TYPES "https://pypi.org/project/librelingo-types/"
 click IMAGE "https://github.com/LibreLingo/LibreLingo/tree/main/apps/web/static/images"
 click AUDIO "https://github.com/LibreLingo/LibreLingo/tree/main/apps/web/static/voice"
 click LOAD "https://pypi.org/project/librelingo-yaml-loader/"
 click YAML "https://github.com/LibreLingo/LibreLingo/tree/main/courses"
```

## Setting up the development environment

### Prerequisites

In order to install the dependencies of this project, you will need to have some basic
development tools installed.

#### Ubuntu

If you are on Ubuntu, run this command in order to make sure you have all the basic dependencies:

```bash
apt-get install curl git python3-venv libpython3-dev wget unzip gcc libyaml-dev npm
```

On Ubuntu, it is also recommended to use Python 3.x as your default Python version:

```bash
apt-get install python-is-python3
```

### Obtaining the source code

Clone the repository:

```sh
git clone git@github.com:LibreLingo/LibreLingo.git
```

Move into the repo directory:

```sh
cd LibreLingo
```

### Web app

#### Having the correct version of Node

You will need [Node](https://nodejs.org/en/). Note that this project is not yet compatible with Node v16.

In order to make sure you have the correct `node` version, it's recommended to use
`nvm`. To install `nvm`, please [consult nvm's official documentation](https://github.com/nvm-sh/nvm#installing-and-updating).

First, install the correct `node` version with this command:

```bash
nvm install 14
```

Then, to choose this version of `node` in your terminal, use

```bash
nvm use 14
```

#### Install dependencies:

```sh
yarn install
```

#### Starting the development server

Start the development server:

```sh
yarn web dev
```

Now you should be able to see your app on <http://localhost:3000/>

### Setting up the development environment for Python

If you want to test new features in the YAML format, or some changes in how they are being used
in the frontend, you need to be able to export YAML courses locally.

#### Install Poetry

You will need [Poetry](https://python-poetry.org/). If you don't have Poetry, you can install it with

```bash
curl -sSL https://install.python-poetry.org | python -
```

For more information, check out [Poetry's official documentation](https://python-poetry.org/docs/#installation).

#### Install dependencies using Poetry

Install dependencies at the top level and for the apps:

```sh
poetry install

cd apps/librelingo_yaml_loader
poetry install
cd ../..

cd apps/librelingo_json_export
poetry install
cd ../..
```

##### Handling Outdated Local Dependencies

When you update your local repository by pulling remote changes, your local dependencies might become outdated. To ensure your local dependencies are in sync with the project requirements, follow these brief steps:

###### Updating JavaScript Dependencies with Yarn

Update your local dependencies:

```bash
yarn install
```

This command ensures your local dependencies match the project's **package.json** file. For more information, [refer to the Yarn documentation](https://yarnpkg.com/getting-started/usage).

###### Updating Python Dependencies with Poetry

Update your local dependencies:

```bash
poetry install
```

This command ensures your local dependencies match the project's **pyproject.toml** and **poetry.lock** files. For more information, [refer to the Poetry documentation](https://python-poetry.org/docs/cli/#install).

### Locally test LibreLingo with real courses

In order to test LiberLingo with real courses just like in the deployed production version, you
need to install courses locally and export them from YAML to JSON.

#### Install courses

The following command installs all courses listed in the courses.json file just like
in production. _Keep in mind that in order to use them in the frontend, the courses
also need to be exported!_

```bash
yarn web run installAllExternalCourses
```

#### Export courses

In order to use a locally installed course when locally testing the frontend, you should
export the course first. You should also export the course every time you make local
changes to this course and you want the changes to be visible in the frontend.

Use the following command:

```bash
yarn exportAllCourses
```

You can export a single course using the following command (change the name of the course for the one that you need to export):

```bash
yarn run exportCourse spanish-from-english
```

## Setting up Semaphore CI in a clone

In order for Semaphore CI to correctly operate, you will need to set up certain secrets.

This might not be necessary for you in all cases, but it cannot be avoided if you want to fully fork the repo, or work on CI configuration related tasks.

[Consult this page to read about setting up secrets in Semaphore CI.](https://docs.semaphoreci.com/essentials/using-secrets/)

Here's a list of the tokens you need to set up. Each of them is a link to a page explaining how to obtain the token:

- [GH_TOKEN](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
- [KNAPSACK_PRO_TEST_SUITE_TOKEN_CYPRESS](https://www.npmjs.com/package/@knapsack-pro/cypress#configuration-steps)
- [PERCY_TOKEN](https://docs.percy.io/docs/environment-variables)

## Testing courses using GitHub gists

It's possible to test courses without them as HTML and deploying them.

One way of doing that is using GitHub gists. You can create a GitHub gist with the course JSON files.

The first step is to export the course as JSON. Then, you have to create a GitHub gist with the
course files.

Keep in mind, that you have to prefix all file names with `librelingo___` and therefore
The first step is to export the course as JSON. Then, you have to create a GitHub gist with the
course files.

Keep in mind, that you have to prefix all file names with `librelingo___` and replace
`/` with `___` in your paths, as GitHub gists don't natively support uploading folders.

So, for example `challenges/animals.json` should be uploaded as the GitHub gist file
`librelingo___challenges___animals.json`.

## Mocks

For mocks in the frontend, LibreLingo uses [MSW](https://mswjs.io/). For Cypress tests, `cy.intercept()` is
used. All of these mocks are defined in apps/web/src/mocks/handlers.js.
