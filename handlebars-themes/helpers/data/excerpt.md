---
title: "excerpt"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{excerpt}}`

### Description

`{{excerpt}}` outputs content but strips all HTML. This is useful for creating excerpts of posts.

If the post's [`custom_excerpt`](https://blog.ghost.org/custom-excerpts/) property is set, then the helper will always output the `custom_excerpt` content ignoring the `words` & `characters` attributes.

You can limit the amount of text to output by passing one of the options:

`{{excerpt characters="140"}}` will output 140 characters of text (rounding to the end of the current word).
