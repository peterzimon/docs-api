---
title: "update"
date: "2018-10-01"
meta_title: "Ghost-CLI commands: update - Documentation"
meta_description: "Find out how to update your Ghost version using the CLI tool. Read more in the official Ghost documentation."
next:
  url: "/api/ghost-cli/doctor/"
  title: "Doctor"
keywords:
    - cli
    - ghost
    - update
    - upgrade
sidebar: "ghost-cli"
---

Use the upgrade command to update to the latest version of Ghost and access all of the latest features. 

We recommend that you always run the latest version of Ghost to ensure your site is secure and has access to the best features in Ghost. 

Updating can be done using a single command, `ghost update`, however there are also some preliminary steps such as backups and theme compatibility updates. 

Check out the latest upgrade guides to ensure you carry out all of the necessary steps for a smooth upgrade: 

* [Ghost 1.0](/faq/upgrade-to-ghost-2-0/)
* [Ghost 2.0](/faq/upgrade-to-ghost-1-0/) (latest major version)


## Options

```bash
# If an upgrade goes wrong, use the rollback flag
--rollback

# Installs and re-download the latest version of Ghost
--force

# Updates to a specific version number
ghost update [version number]

# Checks what version is currently running
--version
```
