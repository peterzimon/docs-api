---
title: "setup"
date: "2018-10-01"
meta_title: "CLI commands: setup"
meta_description: "The real magic in the Ghost-CLI is the automated setup process. Find out how to get started with Ghost using a single command"
next:
  url: "/api/ghost-cli/start/"
  title: "Start"
keywords:
    - cli
    - ghost
    - setup
    - install
sidebar: "ghost-cli"
---

`ghost setup` is the real magic in Ghost-CLI. You will probably never need to run it yourself, as it is called automatically by `ghost install`.


## How it works

Setup configures your server ready for running Ghost in production. It assumes the [recommended stack](/install/ubuntu/#prerequisites/) and leaves your site in a production-ready state. 

Setup is broken down into stages:

- **mysql** - create a specific MySQL user that is used only for talking to Ghost's database.
- **nginx** - creates an nginx configuration
- **ssl** - setup SSL with letsencrypt, using [acme.sh](https://github.com/Neilpang/acme.sh)
- **migrate** - initialises the database
- **linux-user** - creates a special low-privilege `ghost` user for running Ghost


## What if I want to do something else?

The `Ghost-CLI` tool is designed to work with the recommended stack and is the only supported install method. However, since Ghost is a fully open-source project, and many users have different requirements, it is possible to setup and configure your site manually. 

The CLI  tool is flexible and each stage can be run individually by running `ghost setup <stage-name>` or skipped by passing the `--no-setup-<stage-name>` flag.


## Arguments

```bash

# Creates a new mysql user with minimal privileges 
ghost setup mysql

# Creates an nginx config file in `./system/files/` and adds a symlink to `/etc/nginx/sites-enabled/`
ghost setup nginx

# Creates an SSL service for Ghost
ghost setup ssl

# Creates a low-privieleged linux user called `ghost`
ghost setup linux-user

# Creates a systemd unit file for your site
ghost setup systemd

# Runs a database migration
ghost setup migrate
```

## Flags

```bash

# Disables the system stack during setup.
--no-stack

# Setup ghost in local development mode
--local

# The CLI will not prompt you to start Ghost
--no-start

# Stops the CLI from asking configuration questions
--no-prompt

# Skips a setup stage
--no-setup-mysql
--no-setup-nginx
--no-setup-ssl
--no-setup-systemd
--no-setup-linux-user
--no-setup-migrate

# Tells the CLI what your process name should be (default: ghost-local)
--pname
```
