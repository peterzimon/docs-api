---
title: "doctor"
date: "2018-10-01"
meta_title: "Ghost-CLI commands: doctor - Documentation"
meta_description: "Diagnose potential issues for installing and updating ghost using a single command in the CLI tool."
next:
  url: "/api/ghost-cli/uninstall/"
  title: "Uninstall"
keywords:
    - cli
    - ghost
    - doctor
    - diagnostics
sidebar: "ghost-cli"
---

Running `ghost doctor` will check the system for any potential hiccups when installing or updating Ghost.

This command allows you to use `ghost-cli` as a diagnostic tool to find potential issues for your Ghost install, and provides information about what needs to be resolved if any issues arise. 

The CLI automatically runs this command when installing, updating, starting or setting up ghost - and you can use is manually with `ghost doctor`. 


## Arguments

```bash
# Check is the required config file exists and validates it's values
ghost doctor startup

# Check if the setup process was successful
ghost doctor setup
```

