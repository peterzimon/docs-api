---
title: "uninstall"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

Securely removes a Ghost installation and all related configuration and data.
[block:callout]
{
  "type": "danger",
  "title": "Use with caution",
  "body": "This an extremely destructive command. It will completely remove a Ghost install, along with all of its related data and configuration. There is absolutely no recovery from this command unless you have your own backups."
}
[/block]

The command must be executed in the directory containing the Ghost install that you would like to remove. 

Running `ghost uninstall` inside of a recognisable ghost install directory will prompt you with the following:

> WARNING: Running this command will delete all of your themes, images, data, and any files related to this Ghost instance!`
> There is no going back!
> Are you sure you want to do this?

Type Y to confirm, or N to abort.

Running `ghost uninstall --no-prompt` will skip the warning.

You do not need to run `ghost stop` beforehand, this will be done automatically.


[block:api-header]
{
  "title": "Tasks"
}
[/block]
`ghost uninstall` will perform the following tasks:

- stop ghost
- disable systemd if necessary
- remove the `content` folder
- remove any related systemd or nginx configuration
- remove the remaining files inside the install folder
