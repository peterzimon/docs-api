---
title: "@site"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: @site"
meta_description: "How to access global data properties with @site in your Ghost theme. Read more 👉"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

The `@site` property provides access to global settings, which are available anywhere in your theme:

- `{{@site.url}}` – the url specified for this site in your custom config file
- `{{@site.title}}` – the site title from general settings
- `{{@site.description}}` – the site description from general settings
- `{{@site.icon}}` - The publication icon from general settings
- `{{@site.logo}}` – the site logo from general settings
- `{{@site.cover_image}}` – the site cover image from general settings
- `{{@site.twitter}}` – the twitter URL from general settings
- `{{@site.facebook}}` – the facebook URL from general settings
- `{{@site.navigation}}` – the navigation information configured in settings/design
- `{{@site.timezone}}` – the timezone as configured in general settings
- `{{@site.lang}}` - the configured site language.

### Example Code

```handlebars:title=default.hbs
<html lang="{{@site.lang}}">

...

<nav class="main-nav overlay clearfix">
    {{#if @site.logo}}
        <a class="blog-logo" href="{{@site.url}}"><img src="{{@site.logo}}" alt="Blog Logo" /></a>
    {{/if}}
    <a class="subscribe-button icon-feed" href="{{@site.url}}/rss/">Subscribe</a>
 </nav>

 ...

</html>
```

> You may see `@blog` used in older themes, this is outdated. `@site` should always be used instead.