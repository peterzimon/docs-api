---
title: "stop"
date: "2018-10-01"
meta_title: "CLI commands: stop"
meta_description: "Run Ghost in the background using your default process manager."
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
