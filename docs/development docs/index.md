# Development

## Setting up the development environment

Clone the repository:

```
git clone git@github.com:kantord/LibreLingo.git
```

Move into the repo directory:

```
cd LibreLingo
```

### Frontend

Install dependencies:

```
yarn
```

Start the development server:

```
yarn web dev
```

Now you should be able to see your app on [http://localhost:3000/](http://localhost:3000/)

### Course editor (backend)

Make sure you have `pipenv` installed.

Install dependencies using `pipenv`:

```
pipenv install
```

In order to configure the local database, simply create `.env` file with these contents:

```
DATABASE_URL=sqlite:///db.sqlite3
DEBUG=true
```

You can now drop into a Pipenv shell so that you can make use of the dependencies you installed.

```
pipenv shell
```

To be able to run the course editor locally, first we have to install migrations in the local database:

```
python manage.py migrate
```

On OSX, you will have to specifically use python3:

```
python3 manage.py migrate
```

You are able to run the course editor now, but you will need to create a user to actually log in into the interface. Let's do it:

```
python manage.py createsuperuser
```

Now you should be able to launch the course editor server using:

```
python manage.py runserver
```

Open the course editor on [https://localhost:8000/admin](https://localhost:8000/admin) and log in using your newly created user.

### Loading real course data into the course editor

If you've set up the course editor locally, you can load production course data into your local server using:

```
python manage.py loaddata dumps/courseData.json
```

## Deployment to production

LibreLingo's frontend is a static site, therefore you can simply deploy it using the static HTTP server of your choice!

To generate the static files (assuming that you have set up a working development mode), you just have to export them using:

```
yarn export
```

This will create a `__sapper__/export` folder with a production-ready build of your site.

See Sapper's documentation for more detail: [https://sapper.svelte.dev/docs#Exporting](https://sapper.svelte.dev/docs#Exporting)

## Using the course editor

The course editor is in a very early stage, and is only usable by developers. Since it's not publicly hosted yet, you can only use it for testing purposes.

The course editor is implemented as a django project in the `course_editor` folder.

If you want to set up your course editor with real data, you can find a database dump here: `src/courses/spanish-from-english/courseData.json`

To export a course created from the course editor directly to the frontend, use the command `pipenv run python manage.py exportcourse $COURSE_ID`, where `$COURSE_ID` is the ID of the course in the database.

Check out Django's documentation about database dumps: [https://docs.djangoproject.com/en/3.0/ref/django-admin/#loaddata](https://docs.djangoproject.com/en/3.0/ref/django-admin/#loaddata)


## Setting up Semaphore CI in a clone

In order for Semaphore CI to correctly operate, you will need to set up certain secrets.

This might not be necessary for you in all cases, but it cannot be avoided if you want to fully fork the repo, or work on CI configuration related tasks.

[Consult this page to read about setting up secrets in Semaphore CI.](https://docs.semaphoreci.com/essentials/using-secrets/)

Here's a list of the tokens you need to set up. Each of them is a link to a page explaining how to obtain the token:

- [GH_TOKEN](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
- [KNAPSACK_PRO_TEST_SUITE_TOKEN_CYPRESS](https://www.npmjs.com/package/@knapsack-pro/cypress#configuration-steps)
- [PERCY_TOKEN](https://docs.percy.io/docs/environment-variables)
