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
yarn dev
```

Now you should be able to see your app on [http://localhost:3000/](http://localhost:3000/)

## Deploying to production

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

Check out Django's documentation about database dumps: [https://docs.djangoproject.com/en/3.0/ref/django-admin/#loaddata](https://docs.djangoproject.com/en/3.0/ref/django-admin/#loaddata)


