---
title: "install"
date: "2018-10-01"
meta_title: "Ghost-CLI commands: install - Documentation"
meta_description: "Your one-stop-shop to install a running production instance of Ghost."
next:
  url: "/api/ghost-cli/setup/"
  title: "Setup"
keywords:
    - cli
    - ghost
    - install
    - setup
sidebar: "ghost-cli"
---

The `ghost install` command is your one-stop-shop to get a running production install of Ghost.

This command includes the necessary mysql, nginx and systemd configuration to get your publication online, and provides a series of setup questions to configure your new publication. The end result is a fully installed and configured instance ✨

> Not ready for production yet? `ghost install local` installs ghost in development mode using sqlite3 and a local process manager. Read more about [local installs](/install/local/). 


## How it works

The `ghost install` command runs a nested command structure, but you only ever have to enter a single command. 

First, it will run `ghost doctor` to check your environment is compatible. If checks pass, a local folder is setup, and Ghost is then downloaded from npm and installed.

Next, `ghost setup` runs, which will provide [prompts](/install/ubuntu/#install-questions) for you to configure your new publication, including creating a MySQL user, initialising a database, configure nginx and sets up SSL. 

As the install process runs, you'll be prompted to confirm certain steps or provide information. Here's a run down of what happens:

Finally, the CLI will prompt to see if you want to run Ghost and if you choose yes `ghost start` will run. 

Ta-da 🎉 a single command has successfully installed Ghost. To read more about the full install process for production check out the [setup guide](/install/ubuntu/).


## Arguments

Here are some useful options when using the `ghost install` command: 

```bash
# Install a specific version (1.0.0 or higher)
ghost install [version]</strong></pre>

# Install locally for development
ghost install local

# Process manager to run ghost with (default: systemd)
--process

# Picks a directory to install Ghost in
--dir

# Install without running setup
--no-setup

# Specify an sqlite3 database rather than the default MySQL
--db sqlite3

# Install in development mode for a staging env
--development
```
