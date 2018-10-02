---
title: "ghost_head/foot"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Usage: `{{ghost_head}}` and `{{ghost_foot}}`

### Description

These helpers output vital system information at the top and bottom of the document, and provide hooks to inject additional scripts and styles.

### ghost_head

`{{ghost_head}}` – belongs just before the `</head>` tag in `default.hbs`, outputs the following:

* Meta description
* Structured data Shema.org microformats in JSON/LD - no need to clutter your theme markup!
* Structured data tags for Facebook Open Graph and Twitter Cards.
* RSS url paths to make your feeds easily discoverable by external readers.
* Scripts to enable the Ghost API _(if enabled in labs)_
* Canonical link to equivalent `amp` post  _(if enabled in apps)_
* Anything added in the `Code Injection` section globally, or at a page-level

### ghost_foot

`{{ghost_foot}}` – belongs just before the `</body>` tag in `default.hbs`, outputs the following:

* Anything added in the `Code Injection` section globally, or at a page-level
