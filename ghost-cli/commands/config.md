---
title: "config"
date: "2018-10-01"
meta_title: ""
meta_description: ""
keywords:
    - cli
sidebar: "ghost-cli"
---

Create and manage configuration for a Ghost instance. You can also edit your config manually, if you'd prefer that. See the [configuration guide](doc:config) for detailed description on how Ghost uses the configuration files, where to find them and which properties are available.

The `ghost config` command only affects configuration files. In order for your new config to be used, you'll need to run `ghost restart`

Or just use the CLI to edit your config:

## Arguments

`ghost config` accepts two optional arguments: `key` and `value`. Here are the three different combinations and what happens on each of them:

```
ghost config (no key or value specified)
```

- If no key or value is specified, ghost config will create a new config file for the particular environment (development or production) that Ghost-CLI is running in. It will create this config by prompting for values or taking various options and generating the config file based on that.
- Run `ghost restart` to get Ghost to use your new config

```
ghost config [key] (no value specified)
```

- If a key is specified but no value is specified, the CLI will find and return the value in the config for the particular key you passed in. If no such value exists, nothing is output.

```
ghost config [key] [value]
```

- If both key and value are specified, the CLI will set key = value in the config file.
- Run `ghost restart` to get Ghost to use your new config

## Options

If you're using `ghost config` to generate a configuration file, you can supply multiple key-value pairs in the form of options to avoid being prompted for that value.

All of these options can also be passed to `ghost setup`, as this calls `ghost config` for you.

```
--url
```

- URL of the site. Must include the protocol (e.g. http or https) and the fully qualified domain name

```
--pname
```

- Process name of the site. Defaults to the hostname of your site (e.g. url = 'http://example.com', pname = 'example')

```
--port
```

- Port that the Ghost instance should listen on. If not specified, it will default to the lowest available port >= 2368, unless you specify a port in your url (e.g. localhost:2369). If you specify a port in your URL and that port is not available, your url will be updated to reflect the port that is open.

```
--db
```

- Database engine to use. Possible values are mysql and sqlite3.

```
--dbpath
```

- Path to database file (if using sqlite). e. g. `./content/data/ghost_production.db`

```
--dbhost
```

- Database host (if using mysql). Default value is `localhost`

```
--dbuser
```

- Database username (if using mysql)

```
--dbpass
```

- Database password (if using mysql)

```
--dbname
```

- Database name (if using mysql)

## Examples

```
ghost config url https://my.ghostsite.com
```
- Change your URL
- Don't forget to restart

```
ghost config --dbuser ghostuser --dbpass xyz --dbname my_ghost_prod
```
- Generate a new config file
- Pass in your database username, password and name values in advance
- You'll be prompted for other values
- Don't forget to restart
