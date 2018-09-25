---
title: "ghost_head"
tags:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{ghost_head}}`

### Description

`{{ghost_head}}` – belongs just before the `</head>` tag in `default.hbs`, outputs the following:

* Any code entered in Ghost admin via *Code Injection*
* Any code entered in a post via *Post Excerpt*
* Meta description
* Structured data Shema.org microformats in JSON/LD - no need to clutter your theme markup!
* Structured data tags for Facebook Open Graph and Twitter Cards.
* RSS url paths to make your feeds easily discoverable by external readers.
* Scripts to enable the Ghost API _(if enabled in labs)_
* Canonical link to equivalent `amp` post  _(if enabled in apps)_
