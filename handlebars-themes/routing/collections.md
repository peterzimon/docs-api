---
title: "Content Collections"
date: "2019-02-05"
meta_title: "Ghost Themes - Content Collections"
meta_description: "Take control of your Ghost site's organisational architecture using custom post types and collections. Create advanced custom categories."
keywords:
    - handlebars
    - themes
    - urls
    - routes
    - collections
    - "custom post types"
    - categories
    - filter
    - tags
    - architecture
    - structure
    - navigation
sidebar: "handlebars"
---

Collections are the backbone of how posts on a Ghost site are organised, as well as what URLs they live on.

You can think of collections as major sections of a site which represent distinct and separate types of content, for example: `blog` and `podcast`.

**Collections serve two main purposes:**

1. To display all posts contained within them on a paginated index route
2. To determine the URL structure of their posts and where they 'live' on the site. For this reason, posts can only ever be in **one** collection.

A post must either be a blog or a podcast, it can't be both.

---

## The default collection

The [default routes.yaml file](/api/handlebars-themes/routing/) which comes with Ghost contains just a single collection on the root `/` URL which defines the entire structure of the site.

```yaml
collections:
  /:
    permalink: /{slug}/
    template: index
```

Here, the home route of `site.com` will display all posts, using the `index.hbs` template file, and render each post on a URL determined by the `{slug}` created in the Ghost editor.

In short: This is exactly how+why Ghost works by default!

---

## Using a custom homepage

One of the most minimal examples of editing the default collection is to move it to a new location, and make room for a custom home page.

```yaml
routes:
  /: home

collections:
  /blog/:
    permalink: /blog/{slug}/
    template: index
```

Using an example from the previous section on [custom routes](/api/handlebars-themes/routing/routes/), the home `/` route is now pointing at a static template called `home.hbs` — and the main collection has now been moved to load on `site.com/blog/`. Each post URL is also prefixed with `/blog/`.

---

## Filtering collections

Much like the [{{#get}}](/api/handlebars-themes/helpers/get/) helper, collections can be filtered to contain only a subset of content on your site, rather than all of it.

```yaml
collections:
  /blog/:
    permalink: /blog/{slug}/
    template: blog
    filter: primary_tag:blog
  /podcast/:
    permalink: /podcast/{slug}/
    template: podcast
    filter: primary_tag:podcast
```

Returning to the earlier example, all of the posts within Ghost here are divided into two collections of `blog` and `podcast`.

### Blog collection

- **Appears on:** `site.com/blog/`
- **Post URLs:** `site.com/blog/my-story/`
- **Contains posts with:** a `primary_tag` of `blog`

### Podcast collection

- **Appears on:** `site.com/podcast/`
- **Post URls:** `site.com/podcast/my-episode/`
- **Contains posts with:** a `primary_tag` of `podcast`

<br>

The `primary_tag` property is simply the _first_ tag which is entered in the tag list inside Ghost's editor. It's useful to filter against the **primary** tag because it will always be unique.

If posts match the filter property for _multiple_ collections this can lead to problems with post rendering and collection pagination, so it's important to try and always keep collection filters unique from one another. [More info here »](/api/handlebars-themes/routing/tips/)

---

## Doing more with collections

Collections are an incredibly powerful way to organise your content and your site structure, so its only limits are your imagination — and our clichés.

### Loading data into the index

Much like [custom routes](/api/handlebars-themes/routing/routes/), collections can also accept a data property in order to pass in the data to the collection's index. For example, you might have a collection called `portfolio` which lists all of your most recent work. But how do you set the title, description, and meta data for _that_ collection index?

```yaml
collections:
  /portfolio/:
    permalink: /work/{slug}/
    template: work
    filter: primary_tag:work
    data: tag.work
```

Now, your `work.hbs` template will have access to all of the data (and meta data) from your `work` tag. And don't forget: `site.com/tag/work/` will now also be redirected to `site.com/portfolio/` — so no duplicate content!

### Creating multi-lang sites

Another really popular use for collections is for sites which publish content in multiple languages, and want to create distinct areas and URL patterns for each locale. 

```yaml
collections:
  /:
    permalink: /{slug}/
    template: index
    filter: tag:-de
  /de/:
    permalink: /de/{slug}/
    template: index-de
    filter: tag:de
```

This would set the base URL to be in the site's default language, and add an additional `site.com/de/` section for all posts in German, tagged with `de`. The main collection excludes these same posts to avoid any overlap.

**[Full tutorial for creating a multi-lang site with Ghost »](https://docs.ghost.org/tutorials/multi-language-content/)**
