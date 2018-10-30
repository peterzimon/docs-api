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

The vast majority of upgrades in Ghost are completely automatic. Typically, we release a minor version of Ghost 1-2 times per week.

The Ghost-CLI has a single command for upgrades: `ghost update`. 

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

## Major upgrades

Every 12-18 months we release a [major version](/faq/major-versions-lts/) which breaks backwards compatibility and requires a more involved upgrade process, including backups and theme compatibility. 

Use the relevant upgrade documentation as a guide to the necessary steps for a smooth upgrade experience: 

* [Upgrading to Ghost 1.0](/faq/upgrade-to-ghost-1-0/)
* [Upgrading to Ghost 2.0](/faq/upgrade-to-ghost-2-0/)
