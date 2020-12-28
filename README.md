# README

![Build status](https://kantord.semaphoreci.com/badges/LibreLingo.svg?style=shields) [![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/LibreLingo/LibreLingo) [![BCH compliance](https://bettercodehub.com/edge/badge/kantord/LibreLingo?branch=master)](https://bettercodehub.com/) ![David](https://img.shields.io/david/kantord/LibreLingo)

## LibreLingo

_an experiment to create a community-driven language-learning platform_

 [Start learning!](https://librelingo.app/) • [Chat with us!](https://riot.im/app/#/room/#librelingo:matrix.org) • [Become a contributor!](./#become-a-contributor) • [Why I built LibreLingo](https://dev.to/kantord/why-i-built-librelingo-280o) • [Good first issues!](https://github.com/kantord/LibreLingo/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)

### Project goal

My goal is to start a community-driven language-learning platform that gives its users and contributors a way to influence its future and adapt it to special requirements.

To achieve that, I release all source code under the AGPLv3 free software license, which guarantees end users the freedom to run, study, share, and modify the software.

In addition to licensing the software under a free software license, the course content will be decoupled from the software itself, and the development of AGPLv3 or public domain course content will be encouraged. This should allow course developers to retain the freedom to choose how they use their work.

Once course content is properly decoupled from the software, it should be possible to experiment with alternative ways of using course content: for example, the creation of audiobooks or print material.

If you want to learn more about LibreLingo's background, [I recommend reading my article](https://dev.to/kantord/why-i-built-librelingo-280o).

### Screenshots

 ![](.gitbook/assets/screenshot1.png) ![](.gitbook/assets/screenshot2.png) ![](.gitbook/assets/screenshot3.png) ![](.gitbook/assets/screenshot4.png)

### Milestones

Here's a rough sketch of how I imagine the milestones of this project:

#### First demo

* ☑️ Demo course content in Spanish for English speakers
* ☑️ Some basic building blocks of course content implemented
* ☑️ Developers can use course editor
* ☑️ Basic theme/branding

#### Alpha release

* ☑️ Course progress can be properly synchronised across devices
* ☑️ Course editor can be accessed by all course contributors
* ☐ Statistics about course contributors are collected and published
* ☑️ At least the basics of the Spanish course are ready
* ☑️ Most of the course building blocks are implemented

#### Beta release

* ☑️ All of the basic building blocks of courses are implemented
* ☐ More advanced learning features \(reading exercises\)
* ☑️ Spaced repetition implemented
* ☐ Spanish course is stable and useful
* ☐ Course editor publicly accessible 

#### Stable release\(s\)

* ☐ Any user can build their own course
* ☐ Users can suggest changes to course content
* ☐ There's a marketplace for "unofficial" courses
* ☐ Multiple stable courses available
* ☐ Mobile apps available
* ☐ Wiki features
* ☐ Dictionary
* ☐ Speaking exercises

### Become a contributor

#### Contribute to course material

If you are interested in contributing to course development, please fill the following form: [https://danielkantor196881.typeform.com/to/V00Paz](https://danielkantor196881.typeform.com/to/V00Paz). The project is in a very early stage right now, so you might not be able to contribute right away. Your work will be released in this GitHub repository and you will show up as a contributor here.

#### UI translation

[See docs](https://librelingo.readthedocs.io/en/latest/translation/#translation)

#### Development and other forms of contribution

* [Getting started](https://github.com/kantord/LibreLingo/blob/master/docs/CONTRIBUTING.md)
* [Development documentation is available on Read the Docs](https://librelingo.readthedocs.io/en/latest/)

You can help LibreLingo by testing it and submitting feature requests or bug reports: [https://github.com/kantord/LibreLingo/issues/new](https://github.com/kantord/LibreLingo/issues/new). If you want to get in touch, you can use my contact details on [my GitHub profile](https://github.com/kantord).

**Confused? Have a question?**

There is a Matrix/FreeNode IRC channel `#LibreLingo`, instructions for joining:

* Matrix: [`#LibreLingo`](https://riot.im/app/#/room/#librelingo:matrix.org) on `matrix.org`
* IRC: connect to `irc.freenode.net` with your favourite client and join `#LibreLingo`

### Tech stack

| ​ | Web app/PWA | Course editor |
| :--- | :--- | :--- |
| Frontend | Svelte | Django Admin\* |
| Backend | CouchDB |  |

\* Djando Admin might be replaced in the future

Testing is done using Jest and Cypress. Other technology in use include: bulma, webpack, etc.

### Articles

* [Why I built LibreLingo](https://dev.to/kantord/why-i-built-librelingo-280o)

### License

LibreLingo is licensed under the AGPL-3.0 License. Course content and other creative content might be licensed under other licenses, such as CC.

This image shows a summary of the licensing of our dependencies:

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo?ref=badge_large)

#### Mascot

  
Mascot images are released under [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

The mascot is designed by [@almostdesigner](https://github.com/almostdesigner).

### Contributors ✨

[![All Contributors](https://img.shields.io/badge/all_contributors-46-orange.svg?style=flat-square)](./#contributors-) 

Thanks goes to these wonderful people \([emoji key](https://allcontributors.org/docs/en/emoji-key)\):

| [![](https://avatars2.githubusercontent.com/u/3704904?v=4) **Daniel Kantor**](https://www.daniel-kantor.com/cv/) [💻](https://github.com/kantord/LibreLingo/commits?author=kantord) | [![](https://avatars3.githubusercontent.com/u/50620416?v=4) **Klemen Skerbiš**](https://github.com/aha999) [🤔](./#ideas-aha999) | [![](https://avatars0.githubusercontent.com/u/7361228?v=4) **Mirek Mazel**](https://github.com/12people) [🤔](./#ideas-12people) | [![](https://avatars0.githubusercontent.com/u/12728?v=4) **Chris Babcock**](http://tbg.asciiking.com/about.html) [🤔](./#ideas-swift2plunder) | [![](https://avatars2.githubusercontent.com/u/7890201?v=4) **Liaizon Wakest**](http://wake.st) [🤔](./#ideas-wakest) | [![](https://avatars3.githubusercontent.com/u/1479555?v=4) **Trolli Schmittlauch**](https://github.com/schmittlauch) [🤔](./#ideas-schmittlauch) | [![](https://avatars3.githubusercontent.com/u/7600265?v=4) **Jérôme Deuchnord**](https://deuchnord.fr) [🤔](./#ideas-Deuchnord) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [![](https://avatars1.githubusercontent.com/u/1044450?v=4) **Felix Ableitner**](https://gitea.nutomic.com/nutomic) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3ANutomic) | [![](https://avatars1.githubusercontent.com/u/29234112?v=4) **Navan Chauhan**](http://navanchauhan.me) [🚇](./#infra-navanchauhan) [💻](https://github.com/kantord/LibreLingo/commits?author=navanchauhan) [🎨](./#design-navanchauhan) [📖](https://github.com/kantord/LibreLingo/commits?author=navanchauhan) | [![](https://avatars0.githubusercontent.com/u/8488446?v=4) **Roshan Jossy**](http://roshanjossey.github.io) [🤔](./#ideas-Roshanjossey) [💻](https://github.com/kantord/LibreLingo/commits?author=Roshanjossey) [📖](https://github.com/kantord/LibreLingo/commits?author=Roshanjossey) | [![](https://avatars0.githubusercontent.com/u/57244557?v=4) **ledgelight**](https://github.com/ledgelight) [🤔](./#ideas-ledgelight) | [![](https://avatars3.githubusercontent.com/u/449545?v=4) **Francis Tyers**](http://xixona.dlsi.ua.es/~fran/) [🤔](./#ideas-ftyers) [📖](https://github.com/kantord/LibreLingo/commits?author=ftyers) | [![](https://avatars0.githubusercontent.com/u/7551116?v=4) **titanix**](https://netspring.wordpress.com) [🤔](./#ideas-titanix) | [![](https://avatars2.githubusercontent.com/u/139841?v=4) **Michael Moroni**](http://diasp.eu/u/airon90) [🌍](./#translation-airon90) |
| [![](https://avatars1.githubusercontent.com/u/11130930?v=4) **pssandhu**](https://github.com/pssandhu) [🎨](./#design-pssandhu) | [![](https://avatars2.githubusercontent.com/u/36509607?v=4) **Stefan Lobbenmeier**](https://github.com/StefanLobbenmeier) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3AStefanLobbenmeier) | [![](https://avatars2.githubusercontent.com/u/13981456?v=4) **kylepollina**](https://kylepollina.github.io/) [💻](https://github.com/kantord/LibreLingo/commits?author=kylepollina) | [![](https://avatars1.githubusercontent.com/u/62794315?v=4) **slesingerm**](https://github.com/slesingerm) [🤔](./#ideas-slesingerm) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3Aslesingerm) [👀](https://github.com/kantord/LibreLingo/pulls?q=is%3Apr+reviewed-by%3Aslesingerm) | [![](https://avatars3.githubusercontent.com/u/44037134?v=4) **iasonasma**](https://github.com/iasonasma) [💻](https://github.com/kantord/LibreLingo/commits?author=iasonasma) [⚠️](https://github.com/kantord/LibreLingo/commits?author=iasonasma) | [![](https://avatars3.githubusercontent.com/u/19930411?v=4) **Caroline Delesalle**](http://carolinedelesalle.com) [🎨](./#design-almostdesigner) | [![](https://avatars3.githubusercontent.com/u/9154908?v=4) **borbota**](https://github.com/borbota) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3Aborbota) |
| [![](https://avatars1.githubusercontent.com/u/1991377?v=4) **decentral1se**](https://decentral1.se/) [📖](https://github.com/kantord/LibreLingo/commits?author=decentral1se) [🤔](./#ideas-decentral1se) | [![](https://avatars1.githubusercontent.com/u/1328158?v=4) **James Adams**](https://www.drought.gov/drought/data-maps-tools/software) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3Amonocongo) | [![](https://avatars3.githubusercontent.com/u/5111931?v=4) **Arnold Schrijver**](https://innercircles.community) [🤔](./#ideas-aschrijver) | [![](https://avatars1.githubusercontent.com/u/490575?v=4) **Dale Visser**](http://dalevisser.wordpress.com/) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3Adwvisser) | [![](https://avatars2.githubusercontent.com/u/32189143?v=4) **oscarfrancois**](https://github.com/oscarfrancois) [📖](https://github.com/kantord/LibreLingo/commits?author=oscarfrancois) | [![](https://avatars2.githubusercontent.com/u/16763338?v=4) **dhelmr**](https://github.com/dhelmr) [💻](https://github.com/kantord/LibreLingo/commits?author=dhelmr) | [![](https://avatars0.githubusercontent.com/u/30969346?v=4) **Matt**](https://doamatto.xyz) [👀](https://github.com/kantord/LibreLingo/pulls?q=is%3Apr+reviewed-by%3Adoamatto) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3Adoamatto) [🚧](./#maintenance-doamatto) [💻](https://github.com/kantord/LibreLingo/commits?author=doamatto) [📖](https://github.com/kantord/LibreLingo/commits?author=doamatto) |
| [![](https://avatars1.githubusercontent.com/u/442722?v=4) **Jean-André Santoni**](http://www.lakka.tv) [🤔](./#ideas-kivutar) [📖](https://github.com/kantord/LibreLingo/commits?author=kivutar) [🎨](./#design-kivutar) | [![](https://avatars2.githubusercontent.com/u/16941916?v=4) **Lucas Campos Teixeira e Nascimento**](https://github.com/LucasCTN) [📖](https://github.com/kantord/LibreLingo/commits?author=LucasCTN) [🤔](./#ideas-LucasCTN) | [![](https://avatars1.githubusercontent.com/u/54051795?v=4) **Pooja Desur**](https://github.com/poojadesur) [📖](https://github.com/kantord/LibreLingo/commits?author=poojadesur) | [![](https://avatars2.githubusercontent.com/u/36151585?v=4) **Wesley Mutwiri**](https://github.com/wesleymutwiri) [💻](https://github.com/kantord/LibreLingo/commits?author=wesleymutwiri) | [![](https://avatars0.githubusercontent.com/u/8921?v=4) **Simon B.**](https://github.com/sesam) [🤔](./#ideas-sesam) | [![](https://avatars0.githubusercontent.com/u/45932358?v=4) **Karthik Shetty**](https://github.com/karthikshetty03) [🚧](./#maintenance-karthikshetty03) | [![](https://avatars3.githubusercontent.com/u/25023919?v=4) **Joshua Ide**](https://github.com/joshyide) [💻](https://github.com/kantord/LibreLingo/commits?author=joshyide) |
| [![](https://avatars0.githubusercontent.com/u/13896705?v=4) **Jobe Dylbas**](https://github.com/jobedylbas) [💻](https://github.com/kantord/LibreLingo/commits?author=jobedylbas) | [![](https://avatars3.githubusercontent.com/u/72352073?v=4) **Dávid Kristián Luterančík**](https://github.com/DavidLuterancik) [🤔](./#ideas-DavidLuterancik) [💻](https://github.com/kantord/LibreLingo/commits?author=DavidLuterancik) | [![](https://avatars1.githubusercontent.com/u/34064492?v=4) **Sai Sandeep Mutyala**](http://heliostrike.github.io) [💻](https://github.com/kantord/LibreLingo/commits?author=HelioStrike) | [![](https://avatars0.githubusercontent.com/u/27014858?v=4) **Artur Bauer**](https://arturbauer.1mb.site/) [💻](https://github.com/kantord/LibreLingo/commits?author=ArturBa) | [![](https://avatars0.githubusercontent.com/u/27155534?v=4) **Etza**](https://github.com/panditita) [💻](https://github.com/kantord/LibreLingo/commits?author=panditita) | [![](https://avatars3.githubusercontent.com/u/24424170?v=4) **Kyle Mumma**](https://kylemumma.github.io) [💻](https://github.com/kantord/LibreLingo/commits?author=kylemumma) [🤔](./#ideas-kylemumma) | [![](https://avatars1.githubusercontent.com/u/26196125?v=4) **zinovik**](https://github.com/zinovik) [💻](https://github.com/kantord/LibreLingo/commits?author=zinovik) |
| [![](https://avatars0.githubusercontent.com/u/26011845?v=4) **Himank Pathak**](https://himankpathak.me) [💻](https://github.com/kantord/LibreLingo/commits?author=himankpathak) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3Ahimankpathak) | [![](https://avatars0.githubusercontent.com/u/12177451?v=4) **x4th**](https://github.com/x4th) [💻](https://github.com/kantord/LibreLingo/commits?author=x4th) | [![](https://avatars1.githubusercontent.com/u/11202498?v=4) **Christian Dimas**](https://github.com/kenanchristian) [💻](https://github.com/kantord/LibreLingo/commits?author=kenanchristian) | [![](https://avatars2.githubusercontent.com/u/372887?v=4) **Marco Ciampa**](https://github.com/ciampix) [🐛](https://github.com/kantord/LibreLingo/issues?q=author%3Aciampix) |  |  |  |

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

