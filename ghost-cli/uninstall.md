---
title: "uninstall"
date: "2018-10-01"
meta_title: "Ghost-CLI commands: uninstall - Documentation"
meta_description: "Diagnose potential issues for installing and updating Ghost using a single command in the Ghost-CLI tool."
next:
  url: "/api/ghost-cli/help/"
  title: "Help"
keywords:
    - cli
    - ghost
    - uninstall
    - remove
sidebar: "ghost-cli"
---

Securely removes a Ghost installation and all related configuration and data.

**Use with caution** - this command completely removes a Ghost install along with all of its related data and config. There is no recovery from this if you have no backups. 

The command `ghost uninstall` must be executed in the directory containing the Ghost install that you would like to remove. 

The following prompts appear: 

```bash
WARNING: Running this command will delete all of your themes, images, data, and any files related to this Ghost instance!`
> There is no going back!
> Are you sure you want to do this?

Type Y to confirm, or N to abort.
```

The following tasks are performed:

- stop ghost
- disable systemd if necessary
- remove the `content` folder
- remove any related systemd or nginx configuration
- remove the remaining files inside the install folder

> ⚠ Running `ghost uninstall --no-prompt` will skip the warning and remove Ghost without a prompt.
