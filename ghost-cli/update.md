---
title: "update"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

Alias: upgrade

**Later** on, when there's a new Ghost version available, you can simply upgrade your current version using the CLI. Use this command to pull the newest Ghost version and install.
This command requires you to navigate to your Ghost installation folder.
[block:callout]
{
  "type": "info",
  "body": "There's no need to stop Ghost first. `ghost update` will handle stopping and restarting Ghost for you. One command is all you need 🎉",
  "title": "You don't even have to stop Ghost"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Ghost 1.18.3 Troubleshooting",
  "body": "If you are unable to update to 1.18.3 and you receive an error, please continue reading [here](/docs/troubleshooting#section-task-execute-is-not-a-function)."
}
[/block]
```
$ghost update
✔ Checking for latest Ghost version
✔ Downloading and updating Ghost to v1.0.0-beta.2
✔ Stopping Ghost
✔ Linking latest Ghost and recording versions
✔ Running database migrations
✔ Validating config
✔ Restarting Ghost
✔ Removing old Ghost versions
```

## Options

`ghost update` accepts two optional flags `--rollback` and `--force`.

```
ghost update --rollback
```

If you have run an update, this will switch Ghost back to the previously installed version. The current version will remain installed but won't be used unless you run `ghost update` again.

```
ghost update --force
```

This will install and re-download the latest version of ghost, if it was already installed it deletes the previous downloaded version.


```
ghost update [version number]
```

Update to a specific version number, e.g. `ghost update 1.11.0`.

Example flow where latest Ghost version is 2.0:

```
ghost install 1.0                         (Installs Ghost at version 1.0)
ghost update                             (Downloads Ghost version 2.0)
ghost update --rollback             (1.0 is running, both 1.0 and 2.0 are installed)
ghost update                             (2.0 is running, previously downloaded 2.0 version is used, both are installed)
- OR
ghost update --force                  (previously downloaded 2.0 is deleted, update proceeds as usual)
```

You can use `ghost --version` to see what version is currently being used.
