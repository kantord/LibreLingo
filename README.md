<h1 align="center">
<img src="logo_for_readme.svg" alt="LibreLingo" /></h1>
<p align="center"><em>an experiment to create a community-driven language-learning platform</em></p>


## Project goal

My goal is to start a community-driven language-learning platform that gives it's users and contributors a way to influence it's future and adapt it to special requirement.

To achieve that, I release all source code under the GPLv3 free software license, which guarantees end users the freedom to run, study, share, and modify the software.

In addition to licensing the software under a free software license, the course content will be decoupled from the software itself, and the development of GPLv3 or public domain course content will be encouraged. This should allow course developers to retain the freedom to choose how they use their work.

Once course content is properly decoupled from the software, it should be possible to experiment with alternative ways of using course content: for example, the creation of audiobooks or print material.

Here's a rough sketch of how  I imagine the milestones of this project:

### First demo

* ☐ Demo course content in Spanish for English speakers
* ☑️ Some basic building blocks of course content implemented
* ☑️ Developers can use course editor
* ☐ Basic theme/branding

### Alpha release

* ☐ Course progress can be properly syncronised across devices
* ☐ Course editor can be accessed by all course contributors
* ☐ Statistics about course controbutors are collected and published
* ☐ At least the basics of the Spanish course are ready
* ☐ Most of the course building blocks are implemented


### Beta release

* ☐ All of the basic building blocks of courses are implemented
* ☐ More advanced learning features (reading exercises)
* ☐ Spaced repetition implemented
* ☐ Spanish course is stable and useful

### Stable release(s)

* ☐ Any user can build their own course
* ☐ Users can suggest changes to course content
* ☐ There's a marketplace for "unofficial" courses
* ☐ Multiple stable courses available
* ☐ Mobile apps available
* ☐ Wiki features
* ☐ Dictionary
* ☐ Speaking exercises

## Tech stack

​       | Web app/PWA   | Course editor |
--------| ------------- | ------------- |
Frontend| Svelte        | Django Admin* |
Backend | CouchDB       |               |

\* Djando Admin might be replaced in the future

Testing is done using Jest and Cypress. Other technology in use include: bulma, webpack, etc.

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo?ref=badge_large)

