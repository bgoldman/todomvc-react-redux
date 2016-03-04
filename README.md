# todo-mvc-react

An implementation of TodoMVC using React.

Or at least it started out that way.

Over time, I'm making this project more opinionated by adding different npm scripts, packages, build tools, deployment, and other functionality. These will serve as sensible defaults and save a tremendous amount of time. Using these defaults, a developer can build any kind of app, and start with a combination of some well-researched quality tools in one convenient place.

This will eventually evolve into a fantastic skeleton project for any new Javascript front-end project that agrees with the philisophy of this repo.

## Contents

* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Directory Structure](#directory-structure)
* [Developing](#developing)
* [Testing](#testing)
* [Deployment](#deployment)
* [Documentation](#documentation)
* [Contributing](#contributing)

## Tech Stack

### Application

Category                      | Name                                               | Comments
----------------------------- | -------------------------------------------------- | --------
Process manager on dev        | [nodemon](http://nodemon.io/)                      | The best tool for restarting your node process every time you make a code change
Configuration                 | [config](https://github.com/lorenwest/node-config) | Has everything we need: auto-loads based on environment name, applies the chosen config file over a default config file, performs a deep merge, and doesn't allow accidental or intentional config overriding in code

### Libraries

Category           | Name                                                     | Comments
------------------ | -------------------------------------------------------- | --------
Markdown previewer | [Markdown Live](https://github.com/mobily/markdown-live) | Hot reload a live preview page showing the markdown file you're editing, like the README

## Installation

### Prerequisites

* Node.js >= 5.6.0
* npm >= 3.6.0

If you don't have Node.js and npm, download Homebrew, download nvm,
and then install node using that, which also comes with npm.

### Instructions

Install packages

```bash
npm install
```

Make sure the local server runs properly

```bash
npm start
```

Run database migrations

```bash
npm run db:migrate
```

Go to http://127.0.0.1:3000/ and make sure you see something.
If you see something, it's working :)

## Directory Structure

Path               | Comments
------------------ | --------
/                  | Root directory contains .gitignore, LICENSE, package.json, README.md, and server.js.
/config            | One config file for each environment, plus default.json.
/public            | Public directory for static files. At the minimum, contains index.html.
/src               | Where all your source code lives. Contains other folders.
/tests             | Your tests, separated by type in different folders.
/tests/unit        | TBD

## Developing

Update packages each time you pull new code from Github

```bash
npm install
```

Run the local server at the beginning of each coding session

```bash
npm start
```

View your app here: http://127.0.0.1:3000/

Static files are available under this path: http://127.0.0.1:3000/static/

Every time you save your code, nodemon restarts the server :)

## Testing

TBD

## Deployment

TBD

## Documentation

Run Markdown Preview to preview the README file as you edit it,
with hot reloading

```bash
npm run preview:readme
```

## Contributing

Do you know of other packages that you think would be useful for a general
purpose but very useful Javascript front-end skeleton project?

Do you think any of these defaults can be improved with alternate packages?

Did you find a bug?

Or just want to tell say that you found this useful?

...then reach out! :)

Please feel free to create issues on GitHub and/or fork the repo and make pull
requests.
