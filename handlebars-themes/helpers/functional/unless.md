---
title: "unless"
tags:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#unless featured}}{{/unless}}`

The `{{#unless}}` block helper comes built in with Handlebars.

### Description

`{{#unless}}` is essentially the opposite of `{{#if}}`. If you want to test a negative conditional only, i.e. if you only need the `{{else}}` part of an `{{#if}}` statement, then `{{#unless}}` is what you need.

It works exactly the same as `{{#if}}` and supports both `{{else}}` and `^` negation if you want to get really confusing!

Unless also uses the exact same conditional evaluation rules as [`{{#if}}`](/docs/helpers/if).

### Example code

Basic unless example, will execute the template between its start and end tags only if `featured` evaluates to false.

```html
{{#unless featured}}
  ...do something...
{{/unless}}
```

If you want, you can also include an else block, although in the majority of cases, if you need an else, then using `{{#if}}` is more readable:

```html
// This is identical to if, but with the blocks reversed
{{#unless featured}}
  ...do thing 1...
{{else}}
  ...do thing 2...
{{/unless}}
```
