---
title: "Ghost Handlebars Themes"
path: /api/handlebars-themes/
date: "2018-10-01"
meta_title: "Ghost Handlebars Themes - Building a custom Ghost theme - Docs"
meta_description: "Our handlebars theme templating framework works with the Ghost API to build flexible publishing websites. Get all the tools you need to start building your custom theme here!"
next: 
  url: "/api/handlebars-themes/structure/"
  title: "Structure"
sidebar: "handlebars"
keywords:
    - ghost
    - handlebars
    - themes
    - templates
---

The Ghost theme layer has been engineered to give developers and designers the flexibility to build custom publications that are powered by the Ghost platform.

## Theme development

Ghost themes use the Handlebars templating language which creates a strong separation between templates (the HTML) and any JavaScript logic with the use of helpers. This allows themes to be super fast, with a dynamic client side app, and server side publication content that is sent to the browser as static HTML.

Ghost also makes use of an additional library called `express-hbs` which adds some additional features to Handlebars, such as layouts and partials.

This documentation gives you the tools required to create static HTML and CSS for a theme, using Handlebars expressions when you need to render dynamic data. 


## Handlebars

The Handlebars templating language provides the power to build semantic templates effectively. This documentation gives you all the knowledge you need to start developing a theme for your publication. In addition, if you would like to make yourself familiar with the official Handlebars docs and learn more about basic expressions, use these helpful resources:

* [Handlebars documentation](https://handlebarsjs.com/expressions.html)
* [Tutorials from Treehouse](https://blog.teamtreehouse.com/getting-started-with-handlebars-js)

Installation of Handlebars is already done for you in Ghost ✨


## GScan

Validating your Ghost theme is handled efficiently with the [GScan tool](https://gscan.ghost.org/). GScan will check your theme for errors, deprecations and compatibility issues. GScan is used in several ways: 

* The [GScan site](https://gscan.ghost.org/) is your first port of call to test any themes that you're building to get a full validation report

* When a theme is uploaded in Ghost admin, it will automatically be checked with `gscan` and any fatal errors will prevent the theme from being used

* `gscan` is also used as a command line tool

#### Command line

To use GScan as a command line tool, globally install the `gscan` npm package: 

```bashhtml:title=Terminal
# Install the npm package
npm install -g gscan

# Use gscan <file path> anywhere to run gscan against a folder
gscan /path/to/ghost/content/themes/casper

# Run gscan on a zip file
gscan -z /path/to/download/theme.zip
```

## What's next? 

That's all of the background context required to get started. From here you'll take a look at the structure of Ghost themes and templates, and learn everything you need to know about the `package.json` file.

For community led support about theme development, visit [the forum](https://forum.ghost.org/c/themes/).
