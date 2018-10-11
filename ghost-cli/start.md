---
title: "start"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

Running `ghost start` will start your site in background using whichever process manager is configured (default is systemd, or local for local installs). The command must be executed in the directory where the Ghost instance you are trying to start lives.

## Flags

```--enable</strong></pre>

- The process manager `systemd` is told that the Ghost process starts on server reboot

[block:callout]
{
  "type": "warning",
  "title": "Ghost start not working?",
  "body": "If running `ghost start` gives you an error, try using [`ghost run`](doc:cli-run) to debug whether Ghost is throwing an error."
}
[/block]
