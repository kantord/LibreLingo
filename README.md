![Build status](https://kantord.semaphoreci.com/badges/LibreLingo.svg?style=shields "Build status")
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/LibreLingo/LibreLingo)
[![BCH compliance](https://bettercodehub.com/edge/badge/kantord/LibreLingo?branch=master)](https://bettercodehub.com/)
![GitHub PageSpeed](https://api.speedbadge.io/v1?url=librelingo.app)
![David](https://img.shields.io/david/kantord/LibreLingo)
 
<h1 align="center">
<img src="docs/logo_for_readme.svg" alt="LibreLingo" /></h1>
<p align="center"><em>an experiment to create a community-driven language-learning platform</em></p>


[Click here for live demo](https://librelingo.app/)

## Project goal

My goal is to start a community-driven language-learning platform that gives it's users and contributors a way to influence it's future and adapt it to special requirements.

To achieve that, I release all source code under the GPLv3 free software license, which guarantees end users the freedom to run, study, share, and modify the software.

In addition to licensing the software under a free software license, the course content will be decoupled from the software itself, and the development of GPLv3 or public domain course content will be encouraged. This should allow course developers to retain the freedom to choose how they use their work.

Once course content is properly decoupled from the software, it should be possible to experiment with alternative ways of using course content: for example, the creation of audiobooks or print material.

## Screenshots

<div align="center">
    <img src="/docs/screenshots/screenshot1.png" width="400px"></img> 
    <img src="/docs/screenshots/screenshot2.png" width="400px"></img> 
    <img src="/docs/screenshots/screenshot3.png" width="400px"></img> 
    <img src="/docs/screenshots/screenshot4.png" width="400px"></img> 
</div>


## Milestones

Here's a rough sketch of how  I imagine the milestones of this project:

### First demo

* ☑️ Demo course content in Spanish for English speakers
* ☑️ Some basic building blocks of course content implemented
* ☑️ Developers can use course editor
* ☑️ Basic theme/branding

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

## Become a contributor

### Contribute to course material
If you are interested in contributing to course development, please fill the following form: https://danielkantor196881.typeform.com/to/V00Paz. The project is in a very early stage right now, so you might not be able to contribute right away. Your work will be released in this GitHub repository and you will show up as a contributor here.

### Contribute to software development
If you are interested in writing code for LibreLingo, you can simply start submitting pull requests. You can also use this form to get in touch: https://danielkantor196881.typeform.com/to/jTe9jX. **You don't _need_ to fill this form. You can just start submitting issues and pull requests if your wish!**

### Other forms of contribution
You can help LibreLingo by testing it and submitting feature requests or bug reports: https://github.com/kantord/LibreLingo/issues/new. If you want to get in touch, you can simply the contacts on [my GitHub profile](https://github.com/kantord).

There is also a Matrix/FreeNode IRC channel `#LibreLingo`, instructions for joining:

* Matrix: [`#LibreLingo`](https://riot.im/app/#/room/#librelingo:matrix.org) on `matrix.org`
* IRC: connect to `irc.freenode.net` with your favourite client and join `#LibreLingo`

## Tech stack

​       | Web app/PWA   | Course editor |
--------| ------------- | ------------- |
Frontend| Svelte        | Django Admin* |
Backend | CouchDB       |               |

\* Djando Admin might be replaced in the future

Testing is done using Jest and Cypress. Other technology in use include: bulma, webpack, etc.

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo?ref=badge_large)

## Development

[Development documentation is available on Read the Docs](https://librelingo.readthedocs.io/en/latest/)


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.daniel-kantor.com/cv/"><img src="https://avatars2.githubusercontent.com/u/3704904?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Kantor</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=kantord" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/aha999"><img src="https://avatars3.githubusercontent.com/u/50620416?v=4" width="100px;" alt=""/><br /><sub><b>Klemen Skerbiš</b></sub></a><br /><a href="#ideas-aha999" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/12people"><img src="https://avatars0.githubusercontent.com/u/7361228?v=4" width="100px;" alt=""/><br /><sub><b>Mirek Mazel</b></sub></a><br /><a href="#ideas-12people" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://tbg.asciiking.com/about.html"><img src="https://avatars0.githubusercontent.com/u/12728?v=4" width="100px;" alt=""/><br /><sub><b>Chris Babcock</b></sub></a><br /><a href="#ideas-swift2plunder" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://wake.st"><img src="https://avatars2.githubusercontent.com/u/7890201?v=4" width="100px;" alt=""/><br /><sub><b>Liaizon Wakest</b></sub></a><br /><a href="#ideas-wakest" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/schmittlauch"><img src="https://avatars3.githubusercontent.com/u/1479555?v=4" width="100px;" alt=""/><br /><sub><b>Trolli Schmittlauch</b></sub></a><br /><a href="#ideas-schmittlauch" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://deuchnord.fr"><img src="https://avatars3.githubusercontent.com/u/7600265?v=4" width="100px;" alt=""/><br /><sub><b>Jérôme Deuchnord</b></sub></a><br /><a href="#ideas-Deuchnord" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://gitea.nutomic.com/nutomic"><img src="https://avatars1.githubusercontent.com/u/1044450?v=4" width="100px;" alt=""/><br /><sub><b>Felix Ableitner</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3ANutomic" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://navanchauhan.me"><img src="https://avatars1.githubusercontent.com/u/29234112?v=4" width="100px;" alt=""/><br /><sub><b>Navan Chauhan</b></sub></a><br /><a href="#infra-navanchauhan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kantord/LibreLingo/commits?author=navanchauhan" title="Code">💻</a> <a href="#design-navanchauhan" title="Design">🎨</a> <a href="https://github.com/kantord/LibreLingo/commits?author=navanchauhan" title="Documentation">📖</a></td>
    <td align="center"><a href="http://roshanjossey.github.io"><img src="https://avatars0.githubusercontent.com/u/8488446?v=4" width="100px;" alt=""/><br /><sub><b>Roshan Jossy</b></sub></a><br /><a href="#ideas-Roshanjossey" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/commits?author=Roshanjossey" title="Code">💻</a> <a href="https://github.com/kantord/LibreLingo/commits?author=Roshanjossey" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ledgelight"><img src="https://avatars0.githubusercontent.com/u/57244557?v=4" width="100px;" alt=""/><br /><sub><b>ledgelight</b></sub></a><br /><a href="#ideas-ledgelight" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://xixona.dlsi.ua.es/~fran/"><img src="https://avatars3.githubusercontent.com/u/449545?v=4" width="100px;" alt=""/><br /><sub><b>Francis Tyers</b></sub></a><br /><a href="#ideas-ftyers" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/commits?author=ftyers" title="Documentation">📖</a></td>
    <td align="center"><a href="https://netspring.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/7551116?v=4" width="100px;" alt=""/><br /><sub><b>titanix</b></sub></a><br /><a href="#ideas-titanix" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://diasp.eu/u/airon90"><img src="https://avatars2.githubusercontent.com/u/139841?v=4" width="100px;" alt=""/><br /><sub><b>Michael Moroni</b></sub></a><br /><a href="#translation-airon90" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/pssandhu"><img src="https://avatars1.githubusercontent.com/u/11130930?v=4" width="100px;" alt=""/><br /><sub><b>pssandhu</b></sub></a><br /><a href="#design-pssandhu" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/StefanLobbenmeier"><img src="https://avatars2.githubusercontent.com/u/36509607?v=4" width="100px;" alt=""/><br /><sub><b>Stefan Lobbenmeier</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3AStefanLobbenmeier" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://kylepollina.github.io/"><img src="https://avatars2.githubusercontent.com/u/13981456?v=4" width="100px;" alt=""/><br /><sub><b>kylepollina</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=kylepollina" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/slesingerm"><img src="https://avatars1.githubusercontent.com/u/62794315?v=4" width="100px;" alt=""/><br /><sub><b>slesingerm</b></sub></a><br /><a href="#ideas-slesingerm" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/iasonasma"><img src="https://avatars3.githubusercontent.com/u/44037134?v=4" width="100px;" alt=""/><br /><sub><b>iasonasma</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=iasonasma" title="Code">💻</a> <a href="https://github.com/kantord/LibreLingo/commits?author=iasonasma" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

