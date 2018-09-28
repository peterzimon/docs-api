---
title: "facebook_url"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{facebook_url}}` or `{{facebook_url @blog.facebook}}` or `{{facebook_url "myfavouritepage"}}`

### Description

This helper exists to make it easy to output a URL for a facebook page. Ghost has access two facebook page names/usernames for both users and for the blog itself. When used without passing a username, the helper will look for a facebook username in the current template context, and then fallback to using `@blog.facebook`.

If there is no facebook username set, the helper will output nothing at all.

If you pass a variable or string to the helper, it will concatenate the value with the full url for a facebook page.


### Examples

Output the author's facebook, using an `author` block:

```html
{{#foreach posts}}
  {{#author}}
    {{#if facebook}}<a href="{{facebook_url}}">Follow me on Facebook</a>{{/if}}
  {{/author}}
{{/foreach}}

```

