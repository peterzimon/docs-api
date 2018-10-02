---
title: "log"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Usage: `{{log value}}`

### Description

When running Ghost in development mode, you can use the `{{log}}` helper to output debug messages to the server console. In particular you can get handlebars to output the details of objects or the current context

For example, to output  the full 'context' that handlebars currently has access to:

`{{log this}}`

Or, to log each post in the loop:

```
{{#foreach posts}}
   {{log post}}
{{/foreach}}
```

