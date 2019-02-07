---
title: "Content Taxonomies"
date: "2019-02-05"
meta_title: "Ghost Themes - Content Taxonomies"
meta_description: "Customise and control how Ghost outputs content with taxonomies, using dedicated tag and author archives to organise your content."
keywords:
    - handlebars
    - themes
    - urls
    - taxonomies
    - taxonomy
    - authors
    - tags
    - labels
    - architecture
    - structure
    - navigation
sidebar: "handlebars"
---

Taxonomies are groupings of post based on a common relation. In Ghost, this is always defined by the post's author or tag

Using taxonomies, Ghost will automatically generate post archives for tags and authors like `/tag/getting-started/` which will render a list of associated content. 

Unlike [collections](/api/handlebars-themes/routing/collections/), posts can appear in multiple taxonomies and the URL of the post is not affected by which taxonomies are applied.

Taxonomies are structured like this:

```yaml
taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

If a post by `Cameron` is tagged with `News` then it will be included in archives appearing on:

- `site.com` – (The collection index)
- `site.com/author/cameron`
- `site.com/tag/news/`

and each of these places also come with their own automatically generated RSS feeds which can always be accessed by adding `/rss/` to the end of the URL.

---

## Customising taxonomies

The configration options for taxonomies are a lot more basic than [routes](/api/handlebars-themes/routing/routes/) and [collections](/api/handlebars-themes/routing/collections/). You can't define new or custom taxonomies, you can only modify those which are already there and adapt their syntax a small amount.

```yaml
taxonomies:
  tag: /topic/{slug}/
  author: /host/{slug}/
```

If you don't like the prefixes for taxonomies, you can customise them to something else which suits your site and your content better. If you're running a publication which is primarily a podcast, for example, you might prefer `author` and `topic`.

---

## Removing taxonomies

One small extra trick is that you can actually remove taxonomies entirely and not generate those pages for your site. If you prefer to keep things minimal, just leave the taxonomies field empty.

```yaml
taxonomies:
  # Nothing but silence
```

Just make sure you also update your template files to not link to any tag or author archives, which will now 404!
