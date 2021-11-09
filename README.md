![Build status](https://kantord.semaphoreci.com/badges/LibreLingo.svg?style=shields "Build status")
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/LibreLingo/LibreLingo)
[![BCH compliance](https://bettercodehub.com/edge/badge/kantord/LibreLingo?branch=main)](https://bettercodehub.com/)
![David](https://img.shields.io/david/kantord/LibreLingo)

<img align="right" src="/docs/branding/LibreLingo_Mascot/LightShadow/Turtle1_jetPack.svg" alt="" height="250" />

<p align="center">
 <h1 align="center">LibreLingo</h1>
 <p align="right"><em>a community-owned language-learning platform</em></p>
 <h4 align="center">»<a href="https://librelingo.app/">&nbsp;Try&nbsp;LibreLingo&nbsp;now!&nbsp;</a>«</h4>
</p>

<p align="center">
  <a href="https://app.element.io/#/room/#space-librelingo:matrix.org">💬 Chat</a> •
  <a href="#become-a-contributor">👩‍💻 Contribute!</a> •
  <a href="https://github.com/sponsors/kantord">💵 Sponsor</a>  •
  <a href="https://librelingo.app/docs/">📄 Development docs</a>  •
  <a href="https://app.harmonizely.com/harmonizely-uoicqk">☎️ Schedule a call about Librelingo</a>
</p>



## About LibreLingo

LibreLingo's mission is to create a modern language-learning platform that is owned by the community of its users. All software is licensed under AGPLv3, which guarantees the freedom to run, study, share, and modify the software. Course authors are encouraged to release their courses with free licenses.

 If you want to know why I built LibreLingo, [I recommend reading my article](https://dev.to/kantord/why-i-built-librelingo-280o). If you agree with LibreLingo's mission, [consider helping to build and maintain it](#become-a-contributor), and [please consider making a monetary contribution](https://github.com/sponsors/kantord).

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-librelingo">About LibreLingo</a>
    </li>
    <li>
      <a href="#platform">Platform</a>
      <ul>
        <li><a href="#web-app">Web app</a></li>
        <li><a href="#librelingo-yaml-loader">librelingo-yaml-loader</a></li>
        <li><a href="#librelingo-json-export">librelingo-json-export</a></li>
      </ul>
    </li>
    <li>
     <a href="#milestones">Milestones</a>
   </li>
    <li>
     <a href="#attributions">Attributions</a>
   </li>
    <li>
     <a href="#articles">Articles</a>
   </li>
    <li>
      <a href="#become-a-contributor">Become a contributor</a>
    </li>
    <li>
      <a href="#see-also">See also</a>
    </li>
  </ol>
</details>

## Platform

<table>
<tbody>
<thead>
<tr>
<td>
 
### Web app

</td>
</tr>
</thead>
<tr>
<td>

The [LibreLingo web app](https://librelingo.app/) is a lightweight, interactive web app for learning
foreign languages using LibreLingo courses.

Features:
* 🎯 practice using interactive exercises
* 🗓️ spaced repetition
* 💾 save and monitor progress
* 🔁 synchronise progress across multiple devices
* 📱 works on various devices such as phones, tablets and desktop computers

#### Screenshots
 
<p align="center">
    <img src="/docs/screenshots/screenshot1.png" width="15%"></img> 
    <img src="/docs/screenshots/screenshot2.png" width="15%"></img>   
    <img src="/docs/screenshots/screenshot3.png" width="15%"></img> 
    <img src="/docs/screenshots/screenshot4.png" width="15%"></img> 
</p>


</td>
</tr>
</tbody>
</table>

</td>
</tr>
</thead>
<tr>
<td>




</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<thead>
<tr>
<td>
 
 
### librelingo-yaml-loader
 
</td>
</tr>
</thead>
<tr>
<td>

[librelingo-yaml-loader](https://pypi.org/project/librelingo-yaml-loader/) is a Python 🐍 package that lets you load
LibreLingo courses to create software based on LibreLingo.

To see an extensive tutorial, [check out this article](https://dev.to/kantord/practice-tdd-by-creating-a-librelingo-based-language-learning-app-4apf).

#### Setup
[librelingo-yaml-loader](https://pypi.org/project/librelingo-yaml-loader/) can be installed using pip:

```sh
pip install librelingo-yaml-loader
```

#### Loading courses in a Python program

You can use librelingo-yaml-loader to load YAML-based LibreLingo courses in your
Python program.

```python
from librelingo_yaml_loader import yaml_loader

course = yaml_loader.load_course("./path/to/my/course")
```

`load_course` returns a [Course()](https://github.com/kantord/LibreLingo/blob/main/apps/librelingo_yaml_loader/librelingo_yaml_loader/data_types.py) object

</td>
</tr>
</tbody>
</table>


<table>
<tbody>
<thead>
<tr>
<td>
 
 
### librelingo-json-export
 
</td>
</tr>
</thead>
<tr>
<td>


[librelingo-json-export](https://pypi.org/project/librelingo-json-export/) is a Python 🐍 package that contains modules that let's you
export LibreLingo courses into JSON files that will be read by the web app. This might be useful if you want to deploy
YAML-based LibreLingo courses as a web app.

#### Setup
[librelingo-json-export](https://pypi.org/project/librelingo-json-export/) can be installed using pip:

```sh
pip install librelingo-json-export
```

#### Exporting courses to JSON
[librelingo-json-export](https://pypi.org/project/librelingo-json-export/) has a command line program that can export YAML-based LibreLingo
courses into the JSON format used by the web app.

```
Usage: cli.py [OPTIONS] INPUT_PATH OUTPUT_PATH

  Convert a YAML course into a JSON course.

Options:
  --dry-run / --no-dry-run
  --help                    Show this message and exit.
```

</td>
</tr>
</tbody>
</table>





## Milestones

<p align="center">
  <table>
    <thead>
      <tr>
        <td>
        <h3>
          Current focus
        </h3>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
        <p>
          Make it possible to contribute to courses through GitHub
        </p>
        </td>
      </tr>
    </tbody>
  </table>
</p>

* 🏁 Demo course content in Spanish for English speakers
* 🏁 Some basic building blocks of course content implemented
* 🏁 Developers can use course editor
* 🏁 Basic theme/branding
* 🏁 Course progress can be properly synchronised across devices
* 🏁 Course editor can be accessed by all course contributors
* 🏁 At least the basics of the Spanish course are ready
* 🏁 Most of the course building blocks are implemented
* 🏁 All of the basic building blocks of courses are implemented
* 🏁 Spaced repetition implemented


## Become a contributor


<table>
  <tr>
    <td>
      <table>
        <tr>
          <td>
            <h3>🌍 UI translation</h3>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li>
                <a href="https://poeditor.com/join/project?hash=jKiKfen2Ye">🔗 POEditor translation project!</a>
              </li>
              <li></li>
            </ul>
          </td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <td>
            <h3>📖 Course content</h3>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <li><a href="https://github.com/kantord/LibreLingo/tree/main/docs/courses">Getting started</a></li>
              <li></li>
            </ul>
          </td>
        </tr>
      </table>
    </td>
    <td>
      <table>
        <tr>
          <td>
                <h3>👩🏾‍💻 Development</h3>
          </td>
        </tr>
        <tr>
          <td>
              <ul>
                <li>
                  <a href="https://github.com/kantord/LibreLingo/blob/main/docs/CONTRIBUTING.md">🌟 Getting started</a>
                </li>
                <li>
                  <a href="https://librelingo.app/docs/">📜 Development documentation</a>
                </li>
              </ul>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

You can help LibreLingo by testing it and submitting feature requests or bug reports: https://github.com/kantord/LibreLingo/issues/new. If you want to get in touch, you can use my contact details on [my GitHub profile](https://github.com/kantord).

#### Confused? Have a question?

There is a Matrix/FreeNode IRC channel `#LibreLingo`, instructions for joining:

* Matrix: [`#LibreLingo`](https://riot.im/app/#/group/+librelingo:matrix.org) on `matrix.org`
* IRC: connect to `irc.freenode.net` with your favourite client and join `#LibreLingo`

## Articles

- [Why I built LibreLingo](https://dev.to/kantord/why-i-built-librelingo-280o)
- [Practice TDD by creating a LibreLingo-based language-learning app](https://dev.to/kantord/practice-tdd-by-creating-a-librelingo-based-language-learning-app-4apf)

## License
LibreLingo is licensed under the AGPL-3.0 License. Course content and other creative content might be licensed under other licenses, such as CC.

This image shows a summary of the licensing of our dependencies:

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fkantord%2FLibreLingo?ref=badge_large)

### Attributions
#### Mascot

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />Mascot images are released under <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.

The mascot is designed by [@almostdesigner](https://github.com/almostdesigner).

## Contributors ✨

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-73-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.daniel-kantor.com/cv/"><img src="https://avatars2.githubusercontent.com/u/3704904?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Kantor</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=kantord" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/aha999"><img src="https://avatars3.githubusercontent.com/u/50620416?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Klemen Skerbiš</b></sub></a><br /><a href="#ideas-aha999" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/12people"><img src="https://avatars0.githubusercontent.com/u/7361228?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mirek Mazel</b></sub></a><br /><a href="#ideas-12people" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://tbg.asciiking.com/about.html"><img src="https://avatars0.githubusercontent.com/u/12728?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Babcock</b></sub></a><br /><a href="#ideas-swift2plunder" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://wake.st"><img src="https://avatars2.githubusercontent.com/u/7890201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Liaizon Wakest</b></sub></a><br /><a href="#ideas-wakest" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/schmittlauch"><img src="https://avatars3.githubusercontent.com/u/1479555?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Trolli Schmittlauch</b></sub></a><br /><a href="#ideas-schmittlauch" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://deuchnord.fr"><img src="https://avatars3.githubusercontent.com/u/7600265?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jérôme Deuchnord</b></sub></a><br /><a href="#ideas-Deuchnord" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://gitea.nutomic.com/nutomic"><img src="https://avatars1.githubusercontent.com/u/1044450?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Felix Ableitner</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3ANutomic" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://navanchauhan.me"><img src="https://avatars1.githubusercontent.com/u/29234112?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Navan Chauhan</b></sub></a><br /><a href="#infra-navanchauhan" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kantord/LibreLingo/commits?author=navanchauhan" title="Code">💻</a> <a href="#design-navanchauhan" title="Design">🎨</a> <a href="https://github.com/kantord/LibreLingo/commits?author=navanchauhan" title="Documentation">📖</a></td>
    <td align="center"><a href="http://roshanjossey.github.io"><img src="https://avatars0.githubusercontent.com/u/8488446?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Roshan Jossy</b></sub></a><br /><a href="#ideas-Roshanjossey" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/commits?author=Roshanjossey" title="Code">💻</a> <a href="https://github.com/kantord/LibreLingo/commits?author=Roshanjossey" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/ledgelight"><img src="https://avatars0.githubusercontent.com/u/57244557?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ledgelight</b></sub></a><br /><a href="#ideas-ledgelight" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://xixona.dlsi.ua.es/~fran/"><img src="https://avatars3.githubusercontent.com/u/449545?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francis Tyers</b></sub></a><br /><a href="#ideas-ftyers" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/commits?author=ftyers" title="Documentation">📖</a></td>
    <td align="center"><a href="https://netspring.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/7551116?v=4?s=100" width="100px;" alt=""/><br /><sub><b>titanix</b></sub></a><br /><a href="#ideas-titanix" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://diasp.eu/u/airon90"><img src="https://avatars2.githubusercontent.com/u/139841?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Moroni</b></sub></a><br /><a href="#translation-airon90" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/pssandhu"><img src="https://avatars1.githubusercontent.com/u/11130930?v=4?s=100" width="100px;" alt=""/><br /><sub><b>pssandhu</b></sub></a><br /><a href="#design-pssandhu" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/StefanLobbenmeier"><img src="https://avatars2.githubusercontent.com/u/36509607?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stefan Lobbenmeier</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3AStefanLobbenmeier" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://kylepollina.github.io/"><img src="https://avatars2.githubusercontent.com/u/13981456?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kylepollina</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=kylepollina" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/slesingerm"><img src="https://avatars1.githubusercontent.com/u/62794315?v=4?s=100" width="100px;" alt=""/><br /><sub><b>slesingerm</b></sub></a><br /><a href="#ideas-slesingerm" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/issues?q=author%3Aslesingerm" title="Bug reports">🐛</a> <a href="https://github.com/kantord/LibreLingo/pulls?q=is%3Apr+reviewed-by%3Aslesingerm" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/iasonasma"><img src="https://avatars3.githubusercontent.com/u/44037134?v=4?s=100" width="100px;" alt=""/><br /><sub><b>iasonasma</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=iasonasma" title="Code">💻</a> <a href="https://github.com/kantord/LibreLingo/commits?author=iasonasma" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://carolinedelesalle.com"><img src="https://avatars3.githubusercontent.com/u/19930411?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Caroline Delesalle</b></sub></a><br /><a href="#design-almostdesigner" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/borbota"><img src="https://avatars3.githubusercontent.com/u/9154908?v=4?s=100" width="100px;" alt=""/><br /><sub><b>borbota</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3Aborbota" title="Bug reports">🐛</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://decentral1.se/"><img src="https://avatars1.githubusercontent.com/u/1991377?v=4?s=100" width="100px;" alt=""/><br /><sub><b>decentral1se</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=decentral1se" title="Documentation">📖</a> <a href="#ideas-decentral1se" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.drought.gov/drought/data-maps-tools/software"><img src="https://avatars1.githubusercontent.com/u/1328158?v=4?s=100" width="100px;" alt=""/><br /><sub><b>James Adams</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3Amonocongo" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://innercircles.community"><img src="https://avatars3.githubusercontent.com/u/5111931?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arnold Schrijver</b></sub></a><br /><a href="#ideas-aschrijver" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://dalevisser.wordpress.com/"><img src="https://avatars1.githubusercontent.com/u/490575?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dale Visser</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3Adwvisser" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/oscarfrancois"><img src="https://avatars2.githubusercontent.com/u/32189143?v=4?s=100" width="100px;" alt=""/><br /><sub><b>oscarfrancois</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=oscarfrancois" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/dhelmr"><img src="https://avatars2.githubusercontent.com/u/16763338?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dhelmr</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=dhelmr" title="Code">💻</a></td>
    <td align="center"><a href="https://doamatto.xyz"><img src="https://avatars0.githubusercontent.com/u/30969346?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matt</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/pulls?q=is%3Apr+reviewed-by%3Adoamatto" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/kantord/LibreLingo/issues?q=author%3Adoamatto" title="Bug reports">🐛</a> <a href="#maintenance-doamatto" title="Maintenance">🚧</a> <a href="https://github.com/kantord/LibreLingo/commits?author=doamatto" title="Code">💻</a> <a href="https://github.com/kantord/LibreLingo/commits?author=doamatto" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.lakka.tv"><img src="https://avatars1.githubusercontent.com/u/442722?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jean-André Santoni</b></sub></a><br /><a href="#ideas-kivutar" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/commits?author=kivutar" title="Documentation">📖</a> <a href="#design-kivutar" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/LucasCTN"><img src="https://avatars2.githubusercontent.com/u/16941916?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucas Campos Teixeira e Nascimento</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=LucasCTN" title="Documentation">📖</a> <a href="#ideas-LucasCTN" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/issues?q=author%3ALucasCTN" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/poojadesur"><img src="https://avatars1.githubusercontent.com/u/54051795?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pooja Desur</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=poojadesur" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/wesleymutwiri"><img src="https://avatars2.githubusercontent.com/u/36151585?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Mutwiri</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=wesleymutwiri" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sesam"><img src="https://avatars0.githubusercontent.com/u/8921?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Simon B.</b></sub></a><br /><a href="#ideas-sesam" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/karthikshetty03"><img src="https://avatars0.githubusercontent.com/u/45932358?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Karthik Shetty</b></sub></a><br /><a href="#maintenance-karthikshetty03" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/joshyide"><img src="https://avatars3.githubusercontent.com/u/25023919?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joshua Ide</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=joshyide" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jobedylbas"><img src="https://avatars0.githubusercontent.com/u/13896705?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jobe Dylbas</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=jobedylbas" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/DavidLuterancik"><img src="https://avatars3.githubusercontent.com/u/72352073?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dávid Kristián Luterančík</b></sub></a><br /><a href="#ideas-DavidLuterancik" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/commits?author=DavidLuterancik" title="Code">💻</a></td>
    <td align="center"><a href="http://heliostrike.github.io"><img src="https://avatars1.githubusercontent.com/u/34064492?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sai Sandeep Mutyala</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=HelioStrike" title="Code">💻</a></td>
    <td align="center"><a href="https://arturbauer.1mb.site/"><img src="https://avatars0.githubusercontent.com/u/27014858?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Artur Bauer</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=ArturBa" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/panditita"><img src="https://avatars0.githubusercontent.com/u/27155534?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Etza</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=panditita" title="Code">💻</a></td>
    <td align="center"><a href="https://kylemumma.github.io"><img src="https://avatars3.githubusercontent.com/u/24424170?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kyle Mumma</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=kylemumma" title="Code">💻</a> <a href="#ideas-kylemumma" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/zinovik"><img src="https://avatars1.githubusercontent.com/u/26196125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>zinovik</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=zinovik" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://himankpathak.me"><img src="https://avatars0.githubusercontent.com/u/26011845?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Himank Pathak</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=himankpathak" title="Code">💻</a> <a href="https://github.com/kantord/LibreLingo/issues?q=author%3Ahimankpathak" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/x4th"><img src="https://avatars0.githubusercontent.com/u/12177451?v=4?s=100" width="100px;" alt=""/><br /><sub><b>x4th</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=x4th" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kenanchristian"><img src="https://avatars1.githubusercontent.com/u/11202498?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christian Dimas</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=kenanchristian" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/ciampix"><img src="https://avatars2.githubusercontent.com/u/372887?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marco Ciampa</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3Aciampix" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://blog.dc7ia.eu"><img src="https://avatars.githubusercontent.com/u/26351852?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joshua &#124; DC7IA</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3ADC7IA" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://reyzadren.neocities.org/"><img src="https://avatars.githubusercontent.com/u/38787026?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Reyzadren</b></sub></a><br /><a href="#ideas-Reyzadren" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/saeub"><img src="https://avatars.githubusercontent.com/u/38892775?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andreas</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=saeub" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/myxor"><img src="https://avatars.githubusercontent.com/u/1397377?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marco H</b></sub></a><br /><a href="#content-myxor" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.learncube.com"><img src="https://avatars.githubusercontent.com/u/1441472?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dan OReilly</b></sub></a><br /><a href="#ideas-diydan" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/douglasferlini"><img src="https://avatars.githubusercontent.com/u/1099602?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Douglas Ferlini</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=douglasferlini" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/chickendude"><img src="https://avatars.githubusercontent.com/u/2564517?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Nock</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=chickendude" title="Code">💻</a> <a href="#ideas-chickendude" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://codeberg.org/davidak"><img src="https://avatars.githubusercontent.com/u/91113?v=4?s=100" width="100px;" alt=""/><br /><sub><b>davidak</b></sub></a><br /><a href="#ideas-davidak" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/adnan360"><img src="https://avatars.githubusercontent.com/u/7857310?v=4?s=100" width="100px;" alt=""/><br /><sub><b>adnan360</b></sub></a><br /><a href="#content-adnan360" title="Content">🖋</a> <a href="#ideas-adnan360" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/kantord/LibreLingo/commits?author=adnan360" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Lamdarer"><img src="https://avatars.githubusercontent.com/u/50927784?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lamdarer</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=Lamdarer" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://luthert.net"><img src="https://avatars.githubusercontent.com/u/1281696?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luther</b></sub></a><br /><a href="#ideas-luther9" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/danielinux7"><img src="https://avatars.githubusercontent.com/u/2645266?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nart Tlisha</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3Adanielinux7" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://binyam.in"><img src="https://avatars.githubusercontent.com/u/39805353?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Binyamin Aron Green</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=binyamin" title="Documentation">📖</a></td>
    <td align="center"><a href="https://stragu.gitlab.io/"><img src="https://avatars.githubusercontent.com/u/1747497?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Stéphane Guillou</b></sub></a><br /><a href="#ideas-stragu" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://aerabi.com"><img src="https://avatars.githubusercontent.com/u/44623032?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mohammad-Ali A'RÂBI</b></sub></a><br /><a href="#content-aerabi" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/RGBradley"><img src="https://avatars.githubusercontent.com/u/78659707?v=4?s=100" width="100px;" alt=""/><br /><sub><b>RGBradley</b></sub></a><br /><a href="#content-RGBradley" title="Content">🖋</a> <a href="#ideas-RGBradley" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/radmorecameron"><img src="https://avatars.githubusercontent.com/u/55817894?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cameron Radmore</b></sub></a><br /><a href="#content-radmorecameron" title="Content">🖋</a> <a href="https://github.com/kantord/LibreLingo/commits?author=radmorecameron" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://zebburkeconte.com"><img src="https://avatars.githubusercontent.com/u/13357648?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Zeb Burke-Conte</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=zmbc" title="Documentation">📖</a> <a href="https://github.com/kantord/LibreLingo/commits?author=zmbc" title="Code">💻</a> <a href="https://github.com/kantord/LibreLingo/issues?q=author%3Azmbc" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Poslovitch"><img src="https://avatars.githubusercontent.com/u/20014332?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Florian CUNY</b></sub></a><br /><a href="#ideas-Poslovitch" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/uberstar100"><img src="https://avatars.githubusercontent.com/u/59891590?v=4?s=100" width="100px;" alt=""/><br /><sub><b>uberstar100</b></sub></a><br /><a href="#ideas-uberstar100" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/gdomingu"><img src="https://avatars.githubusercontent.com/u/4443635?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabe D</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3Agdomingu" title="Bug reports">🐛</a> <a href="https://github.com/kantord/LibreLingo/commits?author=gdomingu" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/EkaterinaMozheiko"><img src="https://avatars.githubusercontent.com/u/15523524?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ekaterina Mozheiko</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=EkaterinaMozheiko" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/GeraAlcantara"><img src="https://avatars.githubusercontent.com/u/32178037?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gerardo Alcantara</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=GeraAlcantara" title="Code">💻</a></td>
    <td align="center"><a href="https://cyrili.co"><img src="https://avatars.githubusercontent.com/u/19289022?v=4?s=100" width="100px;" alt=""/><br /><sub><b>JP Damas</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=cyrilico" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/frostedkitsune"><img src="https://avatars.githubusercontent.com/u/92984571?v=4?s=100" width="100px;" alt=""/><br /><sub><b>frostedkitsune</b></sub></a><br /><a href="#ideas-frostedkitsune" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/sinhalaquiz"><img src="https://avatars.githubusercontent.com/u/15131066?v=4?s=100" width="100px;" alt=""/><br /><sub><b>sinhalaquiz</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/issues?q=author%3Asinhalaquiz" title="Bug reports">🐛</a> <a href="https://github.com/kantord/LibreLingo/commits?author=sinhalaquiz" title="Code">💻</a></td>
    <td align="center"><a href="https://capecod.world"><img src="https://avatars.githubusercontent.com/u/26460352?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Peter Cruckshank</b></sub></a><br /><a href="https://github.com/kantord/LibreLingo/commits?author=petercr" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


## See also

- [omnilingo](https://omnilingo.xyz/), listening-based language learning
