---
title: "@blog"
date: "2018-10-01"
meta_title: "Handlebars Theme Helpers: @blog"
meta_description: "How to access global data properties with @blog in your Ghost theme. Read more 👉"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

The `@blog` property provides access to [global data](/docs/handlebars#section-global-data) properties, which are available anywhere in your theme:

- `{{@blog.url}}` – the url specified for this blog in [your custom config file](/docs/config)
- `{{@blog.title}}` – the blog title from the settings page
- `{{@blog.description}}` – the blog description from the settings page
- `{{@blog.logo}}` – the blog logo from the settings page
- `{{@blog.cover_image}}` – the blog cover image from the settings page
- `{{@blog.twitter}}` – the twitter username from the settings page (see [twitter_url](doc:twitter_url))
- `{{@blog.facebook}}` – the facebook username / page name from the settings page (see [facebook_url](doc:facebook_url))
- `{{@blog.navigation}}` – the navigation information configured on the settings/navigation page (see [navigation](doc:navigation))
- `{{@blog.timezone}}` – the timezone as configured in settings

### Example Code

```handlebars
<nav class="main-nav overlay clearfix">
    {{#if @blog.logo}}
        <a class="blog-logo" href="{{@blog.url}}"><img src="{{@blog.logo}}" alt="Blog Logo" /></a>
    {{/if}}
    <a class="subscribe-button icon-feed" href="{{@blog.url}}/rss/">Subscribe</a>
 </nav>
```
