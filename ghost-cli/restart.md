---
title: "restart"
date: "2018-10-01"
meta_title: "CLI commands: restart"
meta_description: "Stop and then start your site with this simple command."
next:
  url: "/api/ghost-cli/update/"
  title: "Update"
keywords:
    - cli
    - ghost
    - stop
    - install
sidebar: "ghost-cli"
---

Running `ghost restart` will stop and then start your site using whichever process manager.

The default process manager is systemd, or local for local installs. The command must be executed in the directory where the Ghost instance you are trying to restart lives.

## Debugging

If running `ghost restart` gives an error, try using `ghost run` to debug the error.
