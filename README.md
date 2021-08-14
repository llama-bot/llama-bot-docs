# llama-bot-docs

<div align="center">
   <a href="https://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/github/license/developomp/llama-bot?style=flat-square" /></a>
 
   <a href="https://www.python.org/downloads/release/python-395"><img alt="Python version 3.9" src="https://img.shields.io/badge/python-3.9-blue?style=flat-square" /></a>

<a href="https://github.com/psf/black"><img alt="Code style: black" src="https://img.shields.io/badge/code style-black-000000.svg?style=flat-square" /></a>

   <br />
   <br />
   <img alt="llama logo" src="/img/logo.png" />
</div>

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
