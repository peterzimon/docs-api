---
title: "twitter_url"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{twitter_url}}` or `{{twitter_url @blog.twitter}}` or `{{twitter_url "myfavouritepage"}}`

### Description

This helper exists to make it easy to output a URL for a twitter page. Ghost has access two twitter page names/usernames for both users and for the blog itself. When used without passing a username, the helper will look for a twitter username in the current template context, and then fallback to using `@blog.twitter`.

If there is no twitter username set, the helper will output nothing at all.

If you pass a variable or string to the helper, it will concatenate the value with the full url for a twitter page.


### Examples

Output the author's twitter, using an `author` block:

```html
{{#foreach posts}}
  {{#author}}
    {{#if twitter}}<a href="{{twitter_url}}">Follow me on twitter</a>{{/if}}
  {{/author}}
{{/foreach}}

```

