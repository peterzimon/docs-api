---
title: "content"
date: "2018-10-01"
meta_title: "Handlebars Theme Helpers: content"
meta_description: "How to work with the content handlebars helper in your Ghost theme! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Usage: `{{content}}`

### Description

`{{content}}` is a very simple helper used for outputting post content. It makes sure that your HTML gets output correctly.

You can limit the amount of HTML content to output by passing one of the options:

`{{content words="100"}}` will output just 100 words of HTML with correctly matched tags.
