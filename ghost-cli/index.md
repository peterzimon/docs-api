---
title: "Ghost CLI"
date: "2018-10-01"
meta_title: "CLI - A fully loaded tool for installation and configuration"
meta_description: "The best way to install, manage, and update your site locally or when self-hosting Ghost. A full guide for our advanced CLI tool."
next:
  url: "/api/ghost-cli/config/"
  title: "Config"
keywords:
    - cli
    - ghost
    - install
    - configuration
sidebar: "ghost-cli"
---

A fully loaded tool to help you get Ghost installed and configured and to make it super easy to keep your Ghost install up to date.

The main aim of the Ghost CLI is to make it possible to install or update Ghost in a *single command*. 

We understand that some users are going to want more flexibility, so the CLI has a whole host of flags and options that allow you to break the steps down and adjust what they do.

We hope you love using this new approach to tooling. If you have any suggestions or find bugs 🐛, head over to the [Ghost-CLI GitHub repository](https://github.com/TryGhost/Ghost-CLI) and let us know.

-------

### Install & Update

Ghost-CLI is an npm module that can be installed via either npm or yarn.

```bash
# On a production server using a non-root user:
sudo npm install -g ghost-cli@latest

# or
sudo yarn global add ghost-cli@latest
```

Locally, you likely don't need sudo. Using `@latest` means this command with either install or update ghost-cli and you only have to remember the one command for both ✨

Each command is documented in detail on its own page:

- [ghost config](/api/ghost-cli/config/) 
- [ghost doctor](/api/ghost-cli/doctor/)
- [ghost help](/api/ghost-cli/help/)
- [ghost install](/api/ghost-cli/install/) 
- [ghost log](/api/ghost-cli/log/) 
- [ghost ls](/api/ghost-cli/ls/) 
- [ghost setup](/api/ghost-cli/setup/) 
- [ghost start](/api/ghost-cli/start/)
- [ghost stop](/api/ghost-cli/stop/) 
- [ghost restart](/api/ghost-cli/restart/) 
- [ghost run](/api/ghost-cli/run/) 
- [ghost update](/api/ghost-cli/update/) 
- [ghost uninstall](/api/ghost-cli/unstall/)


## Useful flags

There are some general flags you may find useful when using `ghost-cli`:

```bash
# Enables the verbose logging output for debugging
ghost --verbose, -V

# Print your CLI version and Ghost version
ghost --version, ghost -v, ghost version

# Runs command without asking for any input
ghost --no-prompt
```

## Next steps 

The rest of this documentation walks you through the commands and utilities of `ghost-cli` and can be referenced at any time when working with the tool. Navigate the left hand menu to find the information you're looking for. For more advanced CLI information, check out the [knowledge base](/api/ghost-cli/knowledgebase/). 
