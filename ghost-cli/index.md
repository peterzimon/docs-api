---
title: "Ghost CLI"
date: "2018-10-01"
meta_title: "Ghost CLI - How to manage and update Ghost"
meta_description: "The best way to install, manage, and update your site locally or when self-hosting Ghost. A full guide for our advanced CLI tool."
keywords:
    - cli
sidebar: "ghost-cli"
---

A fully loaded tool to help you get Ghost installed, setup & configured and to make it super easy to keep your Ghost install up to date.

The main aim of Ghost CLI is to make it possible to install or update Ghost in a *single command*. 

We understand that some users are going to want more flexibility and so the CLI has a whole host of flags and options that allow you to break the steps down and adjust what they do.

We really hope you're going to love this new approach to tooling. If you have any suggestions or find bugs 🐛, please head over to the [Ghost-CLI GitHub repository](https://github.com/TryGhost/Ghost-CLI) and let us know.

-------

### Install & Update

Ghost-CLI is an npm module that can be installed via either npm or yarn.

On a production server using a non-root user:

`sudo npm install -g ghost-cli@latest` or `sudo yarn global add ghost-cli@latest`

Using @latest means this command with either install or update ghost-cli & you only have to remember the one command for both ✨

Locally, you likely don't need sudo.

-------

Each command is documented in detail on its own page:

- [ghost config](doc:cli-config) 
- [ghost doctor](doc:cli-doctor)
- [ghost help](doc:cli-help)
- [ghost install](doc:cli-install) 
- [ghost log](doc:cli-log) 
- [ghost ls](doc:cli-ls) 
- [ghost setup](doc:cli-setup) 
- [ghost start](doc:cli-start)
- [ghost stop](doc:cli-stop) 
- [ghost restart](doc:cli-restart) 
- [ghost run](doc:cli-run) 
- [ghost update](doc:cli-update) 
- [ghost uninstall](doc:cli-uninstall)

There is more general CLI information surrounding permissions and certificates etc in our [CLI Knowledge Base](doc:cli-knowledge-base). 

Plus there are some general flags you may find useful:

```
ghost --verbose, -V
```

- Enables the verbose logging output (useful for debugging).

```
ghost --version, ghost -v, ghost version
```

- Will print your CLI version and if you run this command within a Ghost installation folder, it will also print the Ghost version you are on.

```
ghost --no-prompt
```

- If you use `--no-prompt` with any command, that command will attempt to run without asking you for any input. 
- Where possible default values will be used, however if required information is missing an error will be shown. 
- All required parameters can be added as flags, see the individual command pages for more details.
