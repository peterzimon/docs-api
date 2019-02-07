---
title: "URLs & Dynamic Routing"
date: "2019-02-05"
meta_title: "Ghost Themes - Dynamic URLs & Routing"
meta_description: "Build dedicated URL structures using Ghost's dynamic routing system, for custom homepages, podcasts, categories and more."
keywords:
    - handlebars
    - themes
    - routing
    - urls
    - routes
    - routing
    - homepage
    - structure
    - podcast
sidebar: "handlebars"
---

Routing is the system which maps URL patterns to data and templates within Ghost. It comes pre-configured by default, but it can also be customised extensively to build powerful custom site structures.

All of Ghost's routing configuration is defined in `content/settings/routes.yaml` - which you can edit directly, but you can also upload/download this file from within your Ghost admin panel under `Settings » Labs`.


## Base configuration

The default `routes.yaml` which comes with all new installs of Ghost sets things up with a traditional publication structure. The homepage of the site is a reverse-chronological list of the site's posts, with each post living on its own URL defined by a `{slug}` parameter, such as `my-great-post`. There are also additional archives of posts sorted by tag and author. 

```yaml:title=routes.yaml
routes:

collections:
  /:
    permalink: /{slug}/
    template: index

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

For most publications and use-cases, this structure is exactly what's needed and it's not necessary to make any edits in order to use Ghost or develop a theme for it.


## What's YAML?

YAML stands for **Y**et **A**nother **M**arkup **L**anguage - because aren't enough unfunny acronyms in computer science. You can think of it loosely like JSON without all the brackets and commas. In short, it's a document format used to store nested `key:value` pairs, commonly used for simple/readable configuration.

The most important thing to know when working with YAML is that it uses indentation to denote structure. That means the **only** type of nesting which works is **2 spaces**.

The most common reason for YAML files not working is when you accidentally uses the wrong type or quantity of spacing for indentation. So keep a close eye on that!


## When to use dynamic routing

Maybe you want your homepage to simple landing page, while all of your posts appear on `site.com/writing/`. Maybe you actually want to split your site into two main collections of content, like `/blog/` and `/podcast/`. Maybe you just want to change the URL of your archives from `/tag/news/` to `/archive/news/`.

If you're looking to create an alternative site structure to the one described above, then dynamic routing is what you need in order to achieve all your hopes and dreams.

Okay maybe not all your hopes and dreams but at least your URLs. We'll start there. 

Hopes and dreams come later.
