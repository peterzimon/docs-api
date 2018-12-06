---
title: "@blog"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: @blog"
meta_description: "How to access global data properties with @blog in your Ghost theme. Read more 👉"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

The `@blog` property provides access to global data properties, which are available anywhere in your theme:

- `{{@blog.url}}` – the url specified for this blog in your custom config file
- `{{@blog.title}}` – the blog title from general settings
- `{{@blog.description}}` – the blog description from general settings
- `{{@blog.icon}}` - The publication icon from general settings
- `{{@blog.logo}}` – the blog logo from general settings
- `{{@blog.cover_image}}` – the blog cover image from general settings
- `{{@blog.twitter}}` – the twitter URL from general settings 
- `{{@blog.facebook}}` – the facebook URL from general settings
- `{{@blog.navigation}}` – the navigation information configured in settings/design
- `{{@blog.timezone}}` – the timezone as configured in general settings

### Example Code

```handlebars
<nav class="main-nav overlay clearfix">
    {{#if @blog.logo}}
        <a class="blog-logo" href="{{@blog.url}}"><img src="{{@blog.logo}}" alt="Blog Logo" /></a>
    {{/if}}
    <a class="subscribe-button icon-feed" href="{{@blog.url}}/rss/">Subscribe</a>
 </nav>
```
