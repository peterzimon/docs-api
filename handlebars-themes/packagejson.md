---
title: "Package.json"
date: "2018-10-01"
meta_title: "Handlebars Themes - package.json"
meta_description: "The package.json file is a set of meta data about a theme, and is a requirement in your Ghost theme."
next: 
  url: "/api/handlebars-themes/context/"
  title: "Contexts"
keywords:
    - packagejson
    - handlebars
    - themes
    - specifications
sidebar: "handlebars"
---

The `package.json` file is a set of meta data about a theme.

## Overview

The `package.json` file is a required file and sets some information about your theme. Edit this file and keep it up to date with the relevant information about your publication's theme. 

To reference a working example of a `package.json` file, review the [Casper file](https://github.com/TryGhost/Casper/blob/master/package.json/), and for further information about specific details of package.json handling, read the [npm docs](https://docs.npmjs.com/files/package.json/). 


## Example

Below is an example of the required properties in `package.json`: 

```
{
    "name": "your-theme-name",
    "description": "A brief explanation of your theme",
    "version": "0.5.0",
    "engines": {
        "ghost": ">=1.0.0"
    },
    "license": "MIT",
    "author": {
        "email": "your@email.here"
    },
    "config": {
        "posts_per_page": 10
    }
}
```

The data in the file must be valid JSON, including double quotes around all property names. Every property except the last one should be separated by a comma.

## Additional properties

Here are some of the most common optional properties that can be used in the `package.json` file: 

* `config.posts_per_page` - the default number of posts per page is 5, or you can set a custom amount with this property
* `description` - provide a short description about your theme and what makes it unique
* `engines` - indicate what version of Ghost your theme is compatible with
* `licence` - a valid licence string, we recommend `MIT` 😉


## Next steps

This concludes the introduction to and overview of Ghost themes. The rest of this documentation explores how contexts and helpers work, and provides a full reference list of available helpers to guide your theme development. 

For community led support about theme development, visit [the forum](https://forum.ghost.org/c/themes/).
