# Development

## Why does this project exist?
This project exists to create a beginner-friendly, community-oriented,
free software licensed language learning application. If you want to learn more
about LibreLingo's background, [I recommend reading my article](https://dev.to/kantord/why-i-built-librelingo-280o).

## Setting up the development environment

Clone the repository:

```sh
git clone git@github.com:kantord/LibreLingo.git
```

Move into the repo directory:

```sh
cd LibreLingo
```

### Web app

Install dependencies:

```sh
yarn
```

Start the development server:

```sh
yarn web dev
```

Now you should be able to see your app on [http://localhost:3000/](http://localhost:3000/)

## Setting up Semaphore CI in a clone

In order for Semaphore CI to correctly operate, you will need to set up certain secrets.

This might not be necessary for you in all cases, but it cannot be avoided if you want to fully fork the repo, or work on CI configuration related tasks.

[Consult this page to read about setting up secrets in Semaphore CI.](https://docs.semaphoreci.com/essentials/using-secrets/)

Here's a list of the tokens you need to set up. Each of them is a link to a page explaining how to obtain the token:

- [GH_TOKEN](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
- [KNAPSACK_PRO_TEST_SUITE_TOKEN_CYPRESS](https://www.npmjs.com/package/@knapsack-pro/cypress#configuration-steps)
- [PERCY_TOKEN](https://docs.percy.io/docs/environment-variables)
