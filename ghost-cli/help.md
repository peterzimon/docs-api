---
title: "help"
date: "2018-10-01"
meta_title: "Ghost-CLI commands: help - Documentation"
meta_description: "Diagnose potential issues for installing and updating ghost using a single command in the CLI tool."
next:
  url: "/api/ghost-cli/ls/"
  title: "ls"
keywords:
    - cli
    - ghost
    - uninstall
    - remove
sidebar: "ghost-cli"
---

Use the help command to access a list of possible `ghost-cli` commands when required. 

This command is your port of call when you want to discover a list of available commands in the Ghost-CLI. You can call it at any time ✨

## Output

```bash
Commands:
  ghost buster                 Who ya gonna call? (Runs `yarn cache clean`)
  ghost config [key] [value]   View or edit Ghost configuration
  ghost doctor [categories..]  Check the system for any potential hiccups when installing/updating
                               Ghost
  ghost install [version]      Install a brand new instance of Ghost
  ghost log [name]             View the logs of a Ghost instance
  ghost ls                     View running ghost processes
  ghost migrate                Run system migrations on a Ghost instance
  ghost restart                Restart the Ghost instance
  ghost run                    Run a Ghost instance directly (used by process managers and for
                               debugging)
  ghost setup [stages..]       Setup an installation of Ghost (after it is installed)
  ghost start                  Start an instance of Ghost
  ghost stop [name]            Stops an instance of Ghost
  ghost uninstall              Remove a Ghost instance and any related configuration files
  ghost update [version]       Update a Ghost instance
  ghost version                Prints out Ghost-CLI version (and Ghost version if one exists)

Options:
  --help             Show help                                                             [boolean]
  -d, --dir          Folder to run command in
  -D, --development  Run in development mode                                               [boolean]
  -V, --verbose      Enable verbose output                                                 [boolean]
  --prompt           [--no-prompt] Allow/Disallow UI prompting             [boolean] [default: true]
  --color            [--no-color] Allow/Disallow colorful logging          [boolean] [default: true]
  --auto             Automatically run as much as possible                [boolean] [default: false]
```

## Options

It's also possible to run `ghost install help` and `ghost setup help` to get a specific list of commands and help for the install and setup processes. Don't worry - you got this! 💪
