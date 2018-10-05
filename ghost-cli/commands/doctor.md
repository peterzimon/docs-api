---
title: "doctor"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

Running `ghost doctor` will check the system for any potential hiccups when installing/updating Ghost and give you hints for how to solve any existing issues.

The checks also run in the background when installing, updating, starting or setting Ghost up.

## Arguments
```
ghost doctor startup
```

- Will check if the required configuration file exists and also validates the values.

```
ghost doctor setup
```

- Will check if the setup process was successful, e. g. if nginx and systemd are installed, if you're running Ghost on the recommended OS (Ubuntu 16) as well as checking the system stack.
