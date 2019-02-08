---
title: "Channels"
date: "2019-02-05"
meta_title: "Ghost Themes - Channels"
meta_description: "Customise and control how Ghost outputs content with taxonomies, using dedicated tag and author archives to organise your content."
keywords:
    - handlebars
    - themes
    - urls
    - architecture
    - structure
    - navigation
    - channels
    - routing
    - routes
sidebar: "handlebars"
---

If you want something more flexible than tags, but less rigid than collections, then channels might be for you.

A channel is a custom stream of paginated content matching a specific filter. This allows you to create subsets and supersets of content by combining or dividing existing posts into content hubs.

Unlike [collections](/api/handlebars-themes/routing/collections/), channels have no influence over a post's URL or location within the site, so posts can belong to any number of channels.

**The best way to think of channels is as a set of permanent search results.** It's a filtered slice of content from across your site, without modifying the content itself.

---

## Creating a channel

Channels are defined as a [custom route](/api/handlebars-themes/routing/routes/), with a custom `controller` property called `channel`, and a filter to determine which posts to return.

```yaml
routes:
  /apple-news/:
    controller: channel
    filter: tag:[iphone,ipad,mac]
  /editors-column/:
    controller: channel
    filter: tag:column+author:cameron
```

In this example there are two channels. The first is a channel which will return any posts tagged `iPhone`, `iPad` or `Mac` on a custom route of `site.com/apple-news/`.

The second is a special Editor's Column area, which will return any posts tagged with `Column`, but only if they're explicitly authored by `Cameron`.

These are two small examples of how you can use channels to include and exclude groups of posts from appearing together on a custom paginated route, with full automatic RSS feeds included as standard. Just add `/rss/` to any channel URL to get the feed.

---

## When to use channels vs collections

Collections and channels share a lot of similarities, because they're both methods of filtering a set of posts and returning them on a custom URL.

So how do you know when to use which?

### You should generally use a collection when...

There's a need to define permanent site structure and information architecture

- **You're sorting different types/formats of content**<br>
_eg. posts are blog posts OR podcasts_
- **You're filtering incompatible content**<br>
_eg. posts are either in English OR German_
- **You want the parent filter to influence the post's URL**<br>
_eg. an index page called `/news/` and posts like `/news/my-story/`_

### You might be better off with a channel if...

All you need is a computed view of a subsection of existing content

- **You're combining/grouping different pieces of content**<br>
_eg. posts tagged with `news` AND `featured`_
- **You're dividing existing streams of content with multiple properties**<br>
_eg. posts tagged with `news` but NOT authored by `steve`_
- **You want to be able to update/change properties without affecting post URLs**<br>
_eg. quickly creating/destroying new sections of a site without any risk_

<br>

If you're still not sure which is the best fit for you, drop by the [Ghost Forums](https://forum.ghost.org) and share what structure you're hoping to accomplish. There's a large community of Ghost developers around to help. 
