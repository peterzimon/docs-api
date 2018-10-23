---
title: "Context Overview"
date: "2018-10-01"
path: /api/handlebars-themes/context/
meta_title: "Context Overview: Ghost Themes - Documentation"
meta_description: "Ghost themes use contexts to determine how to render pages on a publication. Learn more about contexts and building your own custom theme!"
keywords:
    - api
    - handlebars
    - themes
    - contexts
sidebar: "handlebars"
---

Each page in a Ghost theme belongs to a context, which determines which template is used, what data will be available and what content is output by the `{{body_class}}` helper.

## What is a context?

A Ghost publication follows a structure that allows URLs or routes to be mapped to views which display specific data. This data could be a list of posts, a single post or an RSS feed.

It is the route that determines what data is meant to be shown and what template is used to render it.

For example, a post on a new publication with the`/welcome-to-ghost/` URL is intended to show the content of the post, so the `post.hbs` template is be used, as well as some global data from `default.hbs`. This is called the `post` context and occurs whenever you view a single post.

Rather than providing access to all data in all contexts, Ghost optimises what data is fetched using contexts to ensure publications are super fast.

### Using contexts
Contexts play a big part in the building blocks of a Ghost theme.
Besides determining what data is available and what template to render, contexts also interact with [helpers](/api/handlebars-themes/helpers/), since the context also determines what dynamic data the helper outputs.

For example, the `{{meta_title}}` helper outputs different things based on the current context. If the context is `post` then the helper knows it can use `post.meta_title` and in a `tag` context it uses `tag.meta_title`.

To detect a context in your theme, use the `{{is}}` helper. For example, in a partial template that is shared between many contexts, using `{{is}}` will pass it a context and only execute the contained block when it is in that context.
