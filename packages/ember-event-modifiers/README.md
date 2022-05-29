<h1 align="center">
    Ember Event Modifiers
</h1>
<div align="center">
    <a href="https://spdx.org/licenses/MITNFA.html"><img src="https://img.shields.io/badge/License-MIT%20%2Bno--false--attribs-blue" /></a>
    <a href="https://github.com/twyr/twyr-ember-modifiers/blob/main/CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/Contributor%20Covenant-v2.1%20adopted-ff69b4.svg" /></a>
</div>
<hr />

<div align="center">
    <a href="https://emberjs.com">Ember 4.0+</a> Modifiers for reacting to HTML DOM Events
</div>
<div align="center">
	Built on the <a href="">Embroider</a> build system
</div>
<div align="center">
    Built as part of the <a href="https://github.com/twyr">Twy&apos;r</a> effort by <a href="https://github.com/shadyvd">Vish Desai</a> and <a href="https://github.com/twyr/twyr-ember-modifiers/graphs/contributors">contributors</a>
</div>
<hr />

#### TABLE OF CONTENTS

-   [About](#about)
-   [Status](#status)
-   [Documentation](#documentation)
-   [Contributing](#contributing)
    -   [Code of Conduct](#code-of-conduct)
    -   [Developing](#developing)
    -   [Contributors](#contributors)
-   [License](#license)

#### ABOUT

This package contains an [Ember](https://emberjs.com) addon implementing modifiers that allow Emberistas to react to HTML DOM Events (click, etc.)
in the capture phase, or when they occur outside the Component's Elements

#### STATUS

| Category       | Status                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Conventions    | [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](CODE_OF_CONDUCT.md)                                                                                                                                                 |
| Code Stats     | [![Languages](https://badgen.net/lgtm/langs/g/twyr/twyr-ember-modifiers)](https://lgtm.com/projects/g/twyr/twyr-ember-modifiers) ![GitHub repo size](https://img.shields.io/github/repo-size/twyr/twyr-ember-modifiers) [![LoC](https://badgen.net/lgtm/lines/g/twyr/twyr-ember-modifiers)](https://lgtm.com/projects/g/twyr/twyr-ember-modifiers) [![Language grade](https://badgen.net/lgtm/grade/g/twyr/twyr-ember-modifiers)](https://lgtm.com/projects/g/twyr/twyr-ember-modifiers/context:javascript) [![Coverage Status](https://coveralls.io/repos/github/twyr/twyr-ember-modifiers/badge.svg?branch=main)](https://coveralls.io/github/twyr/twyr-ember-modifiers?branch=main) |
| Security       | [![Known Vulnerabilities](https://snyk.io/test/github/twyr/twyr-ember-modifiers/badge.svg?targetFile=package.json)](https://snyk.io/test/github/twyr/twyr-ember-modifiers?targetFile=package.json) [![Total alerts](https://img.shields.io/lgtm/alerts/g/twyr/twyr-ember-modifiers.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/twyr/twyr-ember-modifiers/alerts/) ![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@twyr/ember-event-modifiers)                                                                                                                                                    |
|                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Development    | ![GitHub commit activity](https://img.shields.io/github/commit-activity/m/twyr/twyr-ember-modifiers) ![GitHub last commit](https://img.shields.io/github/last-commit/twyr/twyr-ember-modifiers)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Issues & PRs   | ![GitHub open issues](https://img.shields.io/github/issues-raw/twyr/twyr-ember-modifiers) ![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/twyr/twyr-ember-modifiers) ![GitHub open prs](https://img.shields.io/github/issues-pr-raw/twyr/twyr-ember-modifiers) ![GitHub closed prs](https://img.shields.io/github/issues-pr-closed-raw/twyr/twyr-ember-modifiers)                                                                                                                                                                                                                                                                                              |
|                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Release Status | ![GitHub package.json version](https://img.shields.io/github/package-json/v/twyr/twyr-ember-modifiers/main) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/twyr/twyr-ember-modifiers?sort=semver) ![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/twyr/twyr-ember-modifiers?sort=semver)                                                                                                                                                                                                                                                                                                                                                  |
| Publish Status | ![node-current](https://img.shields.io/node/v/@twyr/ember-event-modifiers) ![npm bundle size](https://badgen.net/bundlephobia/min/@twyr/ember-event-modifiers) ![npm](https://img.shields.io/npm/dy/@twyr/ember-event-modifiers)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### DOCUMENTATION

[] TODO

#### CONTRIBUTING

##### Code of Conduct

All contributors to this project are expected to adhere to the [Code of Conduct](https://github.com/twyr/twyr-ember-modifiers/blob/main/CODE_OF_CONDUCT.md) specified.

##### Developing

Details on getting the code, setting up the development environment, and instructions on how to extend/build/test the code are detailed in the
[Contribution Guide](https://github.com/twyr/twyr-ember-modifiers/blob/main/CONTRIBUTING.md)

##### Contributors

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

This project owes its existence to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://twyr.github.io"><img src="https://avatars1.githubusercontent.com/u/5027975?v=4" width="100px;" alt=""/><br /><sub><b>Vish Desai</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification. Contributions of any kind are welcome!

#### LICENSE

This project is licensed under the [MIT +no-false-attribs](https://spdx.org/licenses/MITNFA.html) license.
You may get a copy of the license by following the link, or at [LICENSE.md](https://github.com/twyr/twyr-ember-modifiers/blob/main/LICENSE.md)
