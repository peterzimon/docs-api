---
title: "log"
tags:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{log value}}`

### Description

`{{log}}` is a helper which is part of Handlebars, but until Ghost 0.4.2 this hasn't done anything useful.

When running Ghost in development mode, you can now use the `{{log}}` helper to output debug messages to the server console. In particular you can get handlebars to output the details of objects or the current context

For example, to output  the full 'context' that handlebars currently has access to:

`{{log this}}`

Or to just log each post in the loop:

```
{{#foreach posts}}
   {{log post}}
{{/foreach}}
```

