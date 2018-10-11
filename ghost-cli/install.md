---
title: "install"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

`ghost install` is your one-stop-shop to get a running production install of Ghost. Including all the necessary mysql, nginx & systemd configuration to keep your publication online. You will be prompted for any information Ghost requires and given the option to setup SSL.

The `ghost install` command is special in that it is composed of several other commands. During the process the commands `ghost doctor`, `ghost config` and `ghost setup` will all be run, resulting in a fully installed, configured and setup instance with just one simple command. 

This nested command structure means that `ghost install` accepts every flag or option that is accepted by `ghost [setup](doc:cli-setup)` and `ghost [config](doc:cli-config)`. 
[block:callout]
{
  "type": "info",
  "title": "Need a quick development install?",
  "body": "If you're not trying to setup Ghost ready for production, <code>ghost install local</code> does a development mode install using sqlite3 and a local process manager. It's simpler, and is specially tailored for things like theme development.\n\nThis is not suitable for a production install."
}
[/block]
## What does it do?

As the install process runs, you'll be prompted to confirm certain steps or provide information. Here's a run down of what happens:

First, `ghost [doctor](doc:cli-doctor)` will be run to check that your environment is compatible with Ghost CLI. If the checks pass, the local folder will be setup with a specific layout which makes upgrades easy. Ghost will then be downloaded from npm and installed into the `/versions/` folder. A symlink is created from `/current/` to the latest version. Ghost is now installed.

Next, `ghost [setup](doc:cli-setup)` will be run, which in turn calls `ghost [config](doc:cli-config)` to ensure that it has all of the information it needs to complete the tasks.

There's more information about what `ghost [setup](doc:cli-setup)` does on its own page, but the TL;DR is: it creates a MySQL user, initialises a database, a linux user, configures nginx, sets up SSL via letsencrypt and then configures systemd to keep your site running.

Finally, Ghost is started for you!

## What if I want to do something else?

If you want to skip any part of the default install you absolutely can. Each setup step or "stage" has a name, and you can skip it with `--no-setup-<stage name>`. See ghost [setup](doc:cli-setup) for explicit examples. 

You can skip **all** the setup steps in favour of your own setup by calling `ghost install --no-setup`. If you don't want Ghost to check your system, you can call `ghost install --no-stack`. You can pass as many flags as you like.

## Developer / Local installs

If you're looking to perform a quick local install to test out Ghost, or to develop a theme, you can use a specially tailored version of ghost install: `ghost install local`.

- Runs in development mode
- This will run Ghost with the local process manager. Read [here](doc:cli-knowledge-base#section-difference-between-systemd-and-local-process-manager) between the difference of systemd and local process manager.
- Uses SQLite3 database
- Does no further setup of nginx, etc
- Your ghost site will be available at **http://localhost:2368** (or the next available port if this is already in use).

For more information about this mode see [the local install guide](doc:install-local). 

Please note: this is not suitable for using in production.
[block:callout]
{
  "type": "info",
  "title": "ghost install help",
  "body": "Just type `ghost install help` anywhere where you are and you'll get a list of all commands and options. See the [help](doc:help) command for other helpful information"
}
[/block]
## Arguments

```ghost install [version]</strong></pre>

- Alias of `ghost install --version=[version]`
- Install a specific version of Ghost e.g. ghost install 1.0.2
- Ghost cli only works with version 1.0.0 or higher
- If you would like to install a specific version locally, you can use `ghost install [version] --local`

```ghost install local</strong></pre>

- Alias of `ghost install --local`
- Runs a [local development install](/docs/cli-install#section-developer-local-installs)
- Not to be confused with `ghost install --process=local` which does a production install with the local process manager.


## Options
 
```--process</strong></pre>

- Process manager to run Ghost with. If you install ghost with ghost install local, the process manager default is 'local'. Otherwise, the default is systemd.
- See [the knowledge base](doc:cli-knowledge-base#section-difference-between-systemd-and-local-process-manager) for more information

```--dir, -d [directory]</strong></pre>

- Picks a directory to install Ghost in (directory does not have to exist). If this option is omitted, the current working directory will be used.

```--no-setup, -N</strong></pre>

- Disable running of the ghost setup command after this command has finished.
- You can instead pass any of the `--no-setup-<stage name>` commands that are accepted by `ghost setup`.

```--no-stack</strong></pre>

This option is passed directly to the setup command, see ghost setup for more details

```--db --dbpath</strong></pre>

- You can specify using an sqlite3 database rather than the default MySQL.
- Example: **`ghost install --db sqlite3`**

```--development</strong></pre>

- Installs ghost in a development mode - useful for testing a staging environment.
- Uses MySQL database by default
[block:callout]
{
  "type": "warning",
  "title": "Development flag needs specifying in certain commands",
  "body": "Using `--development` requires you to use `--development` for every command e.g. `ghost run --development`."
}
[/block]

**There are several more advanced options that are used in the `ghost config` and `ghost setup` phases of the install, see [ghost config](doc:config) & and [ghost setup](doc:cli-setup) for more details.**

---

## Prompts
[block:callout]
{
  "type": "success",
  "title": "Press enter for defaults",
  "body": "Many prompts have a default value, press enter to use the default."
}
[/block]
You will be prompted for the following pieces of information:

### Enter your site Url:

This is the url your site will be available at and must include the protocol. e.g `http://mysite.com` for HTTP or `https://mysite.com` for HTTPS. 

If you want to setup SSL, your domain must already be pointing at your server. If your domain is ready and resolved, then you can enter the https version of your domain, and choose "yes" later when asked if you want to setup SSL.

If your domain is not yet ready, enter the http version of your domain and choose no when prompted about SSL. When your domain is resolved, you can run `ghost config url [https domain] && ghost setup ssl` to run the ssl setup.

Note: you can't use the IP address of your hosting, only a domain name.

### Enter your MySQL hostname [localhost]: 

This determines where your MySQL database can be accessed from. For the most cases the user installs MySQL on the same server, in this case use `localhost` (press [enter] to use the default value).

### Enter your MySQL username:

Enter your MySQL username. If you have already created a mysql user, password and database with the correct credentials ready for Ghost, enter those details now. Else, enter `root` and your MySQL root password and Ghost will generate a custom MySQL user for you.

### Enter your MySQL password: [hidden]

The password for the MySQL user you entered in the previous step.

### Ghost database name:

Here you have to enter the name of your database. If you install multiple instances of ghost on your server you need to specify a different database for each instance. If the database you entered does not exist already and you provided your root credentials it will be created for you. 

If you pass a non-root MySQL username and password, this database must already exist and your user must have privileges for this database.

### Do you wish to set up a ghost MySQL user?

If you provided your root MySQL user, Ghost CLI can create a custom MySQL user that can only access/edit your Ghost database. This is recommended, and Ghost-CLI takes care of this for you if you accept.

### Do you wish to set up nginx? 

Sets NGINX up for your site enabling it to be viewed by the outside world. You can optionally set this  up yourself.

### Do you wish to set up ssl?

If you do not already have a valid ssl certificate installed for your site and wish to use secure protocol, Ghost-CLI can take of this for you using the [Let's Encrypt](doc:cli-knowledge-base#section-let-s-encrypt) certification service. Otherwise you have to setup ssl by your own.

Your domain _must_ have resolved to your server in order for the SSL setup to work. If you choose no now, you can run `ghost setup ssl` later to rerun this step.

### Enter your email (used for SSL certificate generation)

This is required for SSL certification so that you can be kept informed if there is any issue with your certificate such as requiring renewal.

### Do you wish to set up systemd?

`systemd` is the recommended process manager tool for keeping Ghost running. Choose yes to have it configured for you, or no if you're happy setting up process management yourself.

### Do you want to start Ghost?

Choose whether you want to have Ghost running right away.
