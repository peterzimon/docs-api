---
title: "config"
date: "2018-10-01"
meta_title: "CLI commands: config"
meta_description: "Create and manage configuration for a Ghost instance using advanced CLI tooling."
next:
  url: "/api/ghost-cli/install/"
  title: "Install"
keywords:
    - cli
    - ghost
    - install
    - config
sidebar: "ghost-cli"
---

Create and manage configuration for a Ghost instance using advanced CLI tooling. 

Configuring your Ghost publication can be done efficiently using the `ghost-cli` tool, which is the most popular way to install an instance of Ghost. 

> You can also edit your config manually - check out the [config guide](/concepts/config/) to find out more. 


## Arguments

`ghost config` accepts two optional arguments: `key` and `value`. Here are the three different combinations and what happens on each of them:

```bash 
# Create a new config file for the particular env
ghost config (no key or value specified)

# Find and return the value in the config for the key passed
ghost config [key] (no value specified)

# Set a key and a value in the config file
ghost config [key] [value]
```

The `ghost config` command only affects configuration files. In order for your new config to be used, run `ghost restart`


## Options

If you're using `ghost config` to generate a configuration file, you can supply multiple key-value pairs in the form of options to avoid being prompted for that value.

All of these options can also be passed to `ghost setup`, as this calls `ghost config` for you.

```bash
# URL of the site
--url

# Process name of the site, defaults to the hostname
--pname

# Port that Ghost should listen on (default: 2368)
--port

# Database engine to use
--db

# Path to database file if using sqlite
--dbpath

# Database host if using mysql (default: localhost)
--dbhost

# Database user name
--dbuser

# Database password
--dbpass

# Database name
--dbname
```
