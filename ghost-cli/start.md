---
title: "start"
date: "2018-10-01"
meta_title: "CLI commands: start"
meta_description: "Run Ghost in the background using your default process manager."
next:
  url: "/api/ghost-cli/stop/"
  title: "Stop"
keywords:
    - cli
    - ghost
    - start
    - install
sidebar: "ghost-cli"
---

Running `ghost start` will start your site in background using whichever process manager is configured.

The default process manager is systemd, or local for local installs. The command must be executed in the directory where the Ghost instance you are trying to start lives.


## Flags

```bash
# Tells the process manager that the ghost process starts on server reboot
--enable
```
