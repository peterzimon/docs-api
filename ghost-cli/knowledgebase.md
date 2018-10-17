---
title: "Knowledge Base"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

Ghost-CLI is a tool designed to provide a straightforward install, run and update process for Ghost. It provides a complete toolkit for maintaining Ghost long term. As Ghost moves forward and adds new features, Ghost-CLI will be improved to ensure that you get super smooth updates.

The key things that Ghost-CLI can do:

- Checks for common environment problems
- Creates a **useful folder structure**
- Provides for production or development installs
- Allows for **upgrading and rolling back**
- Handles **user management and permissions**
- Configures Ghost
- Configures **NGINX**
- Sets up **MySQL**
- Configures **systemd**
- Allows access to Ghost log files
- Provides a management console to start/stop/restart Ghost



## Folder Structure

When you install Ghost using Ghost-CLI, the local directory will be setup with a set of folders designed to keep the various parts of your install separate. After installing Ghost, you will have a folder structure like this:

**config.[env].json**
**/content** _(owned by ghost user)_
**/current**
**/system** (production only)
**/versions**
**.ghost-cli**

Please don't change this structure. Each item is explained below.

#### config.[env].json

Depending on the type of install you did, you may have a `config.production.json` or a `config.development.json`. These files contain the custom config for your site. Most people won't need to change these after using the install process to provide the key details. If you need to change them, you can use the [`ghost config`](doc:cli-config) command to make changes which are validated. If you need to edit the files manually running [`ghost doctor`](doc:cli-doctor) will validate the contents for you.

#### /content

This directory is for all user-provided content. Your themes, images and redirects as well as any custom adapters and hopefully soon, apps, will live in this folder. Anything you need to add to your install should live inside here.

This folder should be owned by the ghost user and group. If you add files manually, please run `sudo chown -R ghost:ghost content` afterwards to be sure that Ghost can read the files.

It's a good idea to backup this folder 😊

#### /current

This is a symlink to the currently active version of Ghost in the versions folder. Don't change this! If you want to upgrade or downgrade, use [`ghost update`](doc:cli-update) or [`ghost update --rollback`](doc:cli-update).

#### /system

This folder only appears on production installs. It contains additional tools and configuration files needed for nginx, systemd and for generating letsencrypt certificates.

##### /system/files

Inside the `/system` folder is a files folder, this is the location of any configuration that ghost-cli creates for 3rd party tools such as nginx and systemd. These files are always symlinked into their correct locations.

These files can be customised if needed. For more information about the configurations that Ghost-CLI generates, see the sections below on [nginx](/docs/cli-knowledge-base#section-nginx) and [systemd](/docs/cli-knowledge-base#section-nginx).

#### /versions

Contains the versions of Ghost which are currently available on your machine. At the moment, Ghost-CLI keeps the last 5. There's no need to worry about this unless space is a particular issue for you.

#### .ghost-cli

This file contains some information that Ghost-CLI needs about your install in order to perform certain tasks. Please don't edit this file unless you're following a documented process.

## NGINX

NGINX is the web server that backs your Ghost publication. The CLI generates a NGINX config file for your domain and saves it in `[path/to/ghost/]system/files/your-domain.com.conf`. If you also setup ssl, you'll have a second nginx config file `[path/to/ghost/]system/files/your-domain.com-ssl.conf`.

These configuration files are activated via symlinks. Each config file is symlinked to `/etc/nginx/sites-available` to make the configuration available to nginx. The config is then enabled via a second symlink from `/etc/nginx/sites-enabled` to `/etc/nginx/sites-available` (this is standard nginx behaviour).

The config templates used by Ghost-CLI can be found in the [Ghost CLI GitHub repo](https://github.com/TryGhost/Ghost-CLI/tree/master/extensions/nginx/templates)
[block:callout]
{
  "type": "warning",
  "title": "Warning",
  "body": "If you modify your nginx config files, please run `sudo nginx -t` to validate them, and then `sudo nginx -s reload` to reload the config."
}
[/block]
## SSL

The CLI will generate a free SSL certificate from [Let’s Encrypt](#section-let-s-encrypt) using [acme.sh](#section-let-s-encrypt). The CLI will also generate a secondary NGINX config file to serve https traffic via port 443.

### How to find your ssl configuration

After a successful ssl setup, you can find your ssl certificate in `/etc/letsencrypt`. If you installed Ghost with Ghost-CLI < 1.2.0 you'll find them in `~/.acme.sh/` instead.

Furthermore you can find more details about the SSL configuration in these NGINX files:

 ```
[path/to/ghost/]system/files/your-domain.com-ssl.conf
[path/to/ghost/]system/files/ssl-params.conf
```

As with the standard nginx config files, these files are symlinked to `/etc/nginx/sites-available/` and from there again to `/etc/nginx/sites-enabled/`.

### SSL for additional domains

You may wish to have multiple domains that redirect to your site, e.g. to have an extra TLD or to support www. domains. **Ghost itself can only ever have one domain pointed at it.** This is intentional for SEO purposes, however you can always redirect extra domains to your Ghost install using nginx.

If you want to redirect an HTTPS domain, you must have a certificate for it. This is where letsencrypt comes in particularly handy, because who wants to pay for SSL for a redirect?!

If you want to use Ghost-CLI to generate an extra SSL setup, you can do this using a little trick, first run ghost config to change the domain. This will not restart Ghost, so the change won't be reflected.

```
ghost config url https://my-second-domain.com
```

Next, get Ghost-CLI to generate an SSL setup for you:

```
ghost setup nginx ssl
```

You've now got two domains setup with SSL. Next, change your Ghost config back before you forget.

```
ghost config url https://my-canonical-domain.com
```

Finally, you'll need to edit the nginx config files for your second domain to redirect to your canonical domain. Edit both `/system/files/my-second-domain.com.conf` and `/system/files/my-second-domain.com-ssl.conf`, making the following change:

- replace the content of the first location block (leave the .well-known location block - this is used for renewing certificates) with:

```
return 301 https://my-canonical-domain.com$request_uri;
```

Once you have made those changes run `sudo nginx -t` to get nginx to verify your config, and `sudo nginx -s reload` to reload nginx and pick up your new configuration.


### Let's Encrypt

[Let’s Encrypt](https://letsencrypt.org/) provides SSL certificates that are accepted by browsers, free of charge! This is provided by the non-profit Internet Security Research Group (ISRG). The Ghost-CLI will offer you to generate a free ssl certificate as well as renew it every 60 days.

Ghost uses [acme.sh](https://github.com/Neilpang/acme.sh) for provisioning and renewing SSL certificates from Let's Encrypt.

**Using acme.sh**

You can call `acme.sh` manually outside of Ghost-CLI if you need to perform extra tasks, the following command will output all available options:

```
/etc/letsencrypt/acme.sh --home "/etc/letsencrypt"
```

Please note you MUST add `--home "/etc/letsencrypt"` to all commands for them to run correctly.

To list all the certificates managed by `acme.sh` use `--list`:

```
/etc/letsencrypt/acme.sh --home "/etc/letsencrypt" --list
```

## Difference between systemd and local process manager

systemd is the default way of starting/stopping applications on Ubuntu. The advantage is that if Ghost crashes, systemd will restart your instance, as well as it will start Ghost after server reboot. This is the default and recommended option installing Ghost.

Alternatively, you can use the local process manager. In this case the CLI would spawn a process for Ghost. Read [here](doc:install#section-options) how.

## Permissions

### File Ownership

Ghost-CLI will create a new system user and user-group  called `ghost` during the installation process. The `ghost` user will be used to run your Ghost process in [systemd](https://github.com/systemd/systemd).

This means that Ghost will run with a user that has no system-wide permissions or a shell that can be used (similar to other services such as NGINX).

**The `<install-directory>/content/` folder is owned by the ghost user. Modification to files in the `<install-directory>/content/` folder requires sudo.**

It is advisable to execute all tasks (image upload, theme upload etc.) using the admin UI to prevent accidental permissions changes. Changing file ownership or adding files that are not fully accessible (owned) by ghost can impact the stability of the installation.

### File Permissions

`Ghost-cli` enforces default linux permissions (via `ghost doctor` hooks) for installations.

- For normal users, default directory permissions are 775, and default file permissions are 664.
- For root users, default directory permissions are 755, and default file permissions are 644.

Running ghost install as the non-root user will result in directories created with 775 (`drwxrwxr-x`) permissions and file with 664 (`-rw-r--r--`) permissions.

These file permissions don't need to be changed. The only change that is executed by ghost-cli is changing ownership, file permissions stay untouched.

If permissions were changed, the following two commands will revert file and directory permissions to the ones of a non-root user.

```
sudo find /var/www/ghost/* -type d -exec chmod 775 {} \;
sudo find /var/www/ghost/* -type f -exec chmod 664 {} \;
```

Note: The cli doesn't support directory flags (i.e. `setuid/setguid`). If your commands keep failing because of file permissions, make sure your directories have no flags!

```
sudo chmod g-s /var/www/ghost/* -R
```

Should get you on the right track.


## Codebase

### yargs

The CLI makes use of a library called [yargs](https://github.com/yargs/yargs) for processing the arguments that are passed in. It's is really quite a cool library and offers lots of features. Yargs generates `ghost help` for us, and there are tonnes of options to allow us to improve the output.

Each command (e.g. `ghost start`) is an instance of the [Command class](https://github.com/TryGhost/Ghost-CLI/blob/f7d69158f2b82897703bc462c463a679e09f2a83/lib/command.js). This is mostly a wrapper around yargs for taking arguments in, and around [lib/ui](https://github.com/TryGhost/Ghost-CLI/tree/f7d69158f2b82897703bc462c463a679e09f2a83/lib/ui), which contains a bunch of features such as prompt, log, etc. that allows output to be written in a consistent way.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Yargs supports the concept of adding `--no-{something}` to a flag, which negates it. So for every flag like  `--enable` or `--setup-ssl`, you can pass `--no-enable` and `--no-setup-ssl`. The CLI will be passed the original flag with a **false** value."
}
[/block]
### stages

All CLI command are composed of stages. Each stage [self registers](https://github.com/TryGhost/Ghost-CLI/blob/f7d69158f2b82897703bc462c463a679e09f2a83/extensions/nginx/index.js#L23) itself for a command. So for example `ghost install` contains the stage "setup", whereas `ghost setup` contains "ssl" and "nginx". That means you can disable "setup" using `ghost install --no-stetup`, as well as disabling "ssl" for the setup command with `ghost setup --no-setup-ssl` - very flexible.

## Keeping Ghost-CLI Up-to-date

Don't forget to keep Ghost-CLI up to date, as well as Ghost. Releases are less frequent, but often important. Details can be found in the [upgrading guide](/v1/docs/upgrade#section-upgrading-ghost-cli).
