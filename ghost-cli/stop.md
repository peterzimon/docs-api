---
title: "stop"
date: "2018-10-01"
meta_title: "Ghost-CLI commands: stop - Documentation"
meta_description: "Stop Ghost from running in the background with a single command using Ghost-CLI. Read more in the official documentation."
next:
  url: "/api/ghost-cli/restart/"
  title: "Restart"
keywords:
    - cli
    - ghost
    - stop
    - install
sidebar: "ghost-cli"
---

Running `ghost stop` stops your site from running in the background.

The command must be executed in your Ghost directory. The CLI stops the site in the folder you have navigated to.

## Options

```bash
# Tells the process manager that Ghost should not start on server reboot
--disable
```
