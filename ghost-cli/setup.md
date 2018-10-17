---
title: "setup"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

`ghost setup` is the real magic in Ghost CLI. You will probably never need to run it yourself, as it is called automatically by `ghost install`.

## What does it do?

Setup aims to configure your server ready for running Ghost in production. It assumes the [recommended stack](/v1.0.0/docs/hosting#section-recommended-stack) and aims to leave your site in a production-ready state.

Setup is broken down into stages. The default stages are:

- **mysql** - create a specific MySQL user that is used only for talking to Ghost's database.
- **nginx** - create an nginx configuration, and enable it
- **ssl** - setup SSL with letsencrypt, using [acme.sh](https://github.com/Neilpang/acme.sh)
- **migrate** - initialises the database
- **linux-user** - creates a special low-privilege `ghost` user for running Ghost

Each stage can be run individually by running `ghost setup <stage-name>` or skipped by passing the `--no-setup-<stage-name>` flag.


## What if I want to do something else?

The Ghost CLI tool, and `ghost setup` particularly, is designed to work with our [recommended stack](/v1.0.0/docs/hosting#section-recommended-stack) and get your site ready for production use. However, we understand that it might not fit your needs exactly.

If you want to use a different stack, or skip a setup stage because you want to do the configuration manually, you absolutely can. The `Ghost CLI` way of doing things is what is officially supported, but the tool is flexible enough that you can use it your way and still get all the benefits.

You can skip any one of the stages with `--no-setup-<stage-name>`
[block:callout]
{
  "type": "info",
  "body": "Just type `ghost setup help` anywhere where you are and you'll get a list of all commands and options. See the [help](doc:cli-help) command for other helpful information",
  "title": "ghost setup help"
}
[/block]
## Arguments

```
ghost setup mysql
```

- Creates a new mysql user called `ghost-<123>` where 123 is a random number
- Grants the MySQL user minimal privileges on the Ghost database

```
ghost setup nginx
```

- Creates an nginx config file in `./system/files/`
- Adds a symlink to `/etc/nginx/sites-enabled/`

```
ghost setup ssl
```

- Depends on the `nginx` stage
- Creates an ssl nginx config file in `./system/files/`
- Adds a symlink to `/etc/nginx/sites-enabled/`
- Will setup only the SSL service for Ghost
- Can also be run with `--sslstaging` flag, which will let you use the Letsencrypt staging server

```
ghost setup linux-user
```

- Creates a low-privileged linux user called `ghost` that will be used for running Ghost
- Will not create a user if the `ghost` user already exists
- Makes the `ghost` user the owner of the `./content/` folder

```
ghost setup systemd
```

- Depends on the `linux-user` stage
- Creates a systemd unit file for your site in the local `./system/files/` folder
- Symlinks the unit file to `/lib/systemd/system`
- Reloads systemd

```
ghost setup migrate
```

- Run database migration specifically
- This command will ensure that the Ghost database exists, the tables are created and the fixtures are inserted

## Flags

```
--no-stack
```

- Disables the system stack check during setup. By default, if Ghost is not running in local development mode, it tries to enforce the default recommended system stack. See more information about the system stack in our [hosting guide](/docs/hosting#section-recommended-stack).

```
--local
```

- This sets up ghost in local development mode. It is automatically passed in by ghost install local if you run that command, but if you run the install and setup steps separately for local development, make sure to pass in this option

```
--process
```

- Process manager to run Ghost with. If you install ghost with ghost install local, the process manager default is 'local'. Otherwise, the default is systemd.
- See [the knowledge base](doc:cli-knowledge-base#section-difference-between-systemd-and-local-process-manager) for more information

```
--no-start
```

- The CLI will not prompt you if you want to start Ghost after you finished the setup process.

```
--no-prompt
```

- Will stop the CLI from asking you questions. Handy, when you gave all the information already with setup flags, e. g. config.

```
--no-setup-<stage-name>
```

- You can call `ghost setup` (or `ghost install`) with `--no-setup-<stage-name>` to skip any stage:
- `--no-setup-mysql`
- `--no-setup-nginx` (will automatically skip SSL as that is dependent
- `--no-setup-ssl`
- `--no-setup-systemd`
- `--no-setup-linux-user` - will cause systemd to break and should only be used if you're handling this yourself.
- `--no-setup-migrate`

```
--pname
```

- Tell the CLI how your process name should be
- Default is: `ghost-local`
