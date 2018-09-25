---
title: "encode"
tags:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{encode value}}`

### Description

`{{encode}}` is a simple output helper which will encode a given string so that it can be used in a URL.

The most obvious example of where this is useful is shown in Casper's `post.hbs`, for outputting a twitter share link:

```html
<a class="icon-twitter" href="http://twitter.com/share?text={{encode title}}&url={{url absolute="true"}}"
    onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;">
    <span class="hidden">Twitter</span>
</a>

```

Without using the `{{encode}}` helper on the post's title, the spaces and other punctuation in the title will not be handled correctly.
