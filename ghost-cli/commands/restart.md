---
title: "restart"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

Running `ghost restart` will stop and then start your site using whichever process manager is configured (default is systemd, or local for local installs). The command must be executed in the directory where the Ghost instance you are trying to restart lives.


[block:callout]
{
  "type": "warning",
  "title": "Ghost restart not working?",
  "body": "If running `ghost restart` gives you an error, try using [`ghost run`](doc:cli-run) to debug whether Ghost is throwing an error."
}
[/block]
