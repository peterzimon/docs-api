---
title: "Page"
path: /api/v2/handlebars-themes/context/page/
date: "2018-10-01"
meta_title: "Page Context: Ghost Themes"
meta_description: "The page context is used in Ghost themes to render pages in a publication. Learn more about contexts and building custom theme!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---


Use: `{{#is "page"}}{{/is}}` to detect this context

## Description

Whenever you're viewing a static page, you're in the `page` context. The `page` context is not set on posts, which uses the [post context](doc:post-context) instead.

## Routes

The URL used to render a static page is always `/:slug/`. This cannot be customised, unlike post permalinks.

## Templates

The default template for a page is `post.hbs`.

You can optionally include a `page.hbs` file in your theme which will be used for pages instead.

Additionally, you can provide a custom template for a specific page. If there is a `page-:slug.hbs` file with the `:slug` matching the static page's slug this will be used instead.

For example, if you have an 'About' page with the url `/about/`, adding a template called `page-about.hbs` will cause that template to be used for the about page, instead of page.hbs, or post.hbs.

These templates exist in a hierarchy. Ghost looks for a template which matches the slug (`page-:slug.hbs`) first, then looks for `page.hbs` and finally uses `post.hbs` if neither is available.

## Data

The `page` context provides access to the post object which matches the route. A page is just a special type of post, so the data object is called a post, not a page. As with all contexts, all of the `@blog` global data is also available.

When outputting the page, you can use a block expression (`{{#post}}{{/post}}`) to drop into the post scope and access all of the attributes. All of the data available for a page is the same as the data for a post. See a full list of attributes below:

### Post (page) object attributes

- **id** - the incremental ID of the page
- **title** - the title of your static page ([title helper](doc:title))
- **excerpt** - a short preview of your page content ([excerpt helper](doc:excerpt))
- **content** - the content of the page ([content helper](content))
- **url** - the web address for the static page ([url helper](doc:url))
- **feature_image** - the cover image associated with the page  ([img_url helper](doc:img_url))
- **featured** - indicates a featured page. Defaults to `false`
- **page** - `true` if the post is a static page. Defaults to `false`
- **meta_title** - custom meta title for the page ([meta_title helper](doc:meta_title))
- **meta_description**  -Custom meta description for the page ([meta_description helper](doc:meta_description) )
- **published_at:** - date and time when the page was published  ([date helper](doc:date))
- **updated_at:** - date and time when the page was last updated  ([date helper](doc:date))
- **created_at:** - date and time when the page was created  ([date helper](doc:date))
-  **author** - full details of the page's author (see [author](doc:author) for details)
- **tags** - a list of tags associated with the page (see [tags](doc:tags) for details)

## Helpers

Using the `{{#post}}{{/post}}` block expression is the key trick to having a happy time theming your static page. Once inside of the page, you can use any of these useful helpers (and many more) to output your page's data:

[{{title}}](doc:title), [{{content}}](doc:content), [{{url}}](doc:url), [{{author}}](doc:author), [{{date}}](doc:date), [{{excerpt}}](doc:excerpt), [{{img_url}}](doc:img_url), [{{post_class}}](doc:post_class), [{{tags}}](doc:tags)

## Example Code

```html
<!-- Everything inside the #post tags pulls data from the static page -->
{{#post}}

<article class="{{post_class}}">
  <header class="page-header">
    <h1 class="page-title">{{title}}</h1>
    <section class="page-meta">
      <time class="page-date" datetime="{{date format='YYYY-MM-DD'}}">
        {{date format="DD MMMM YYYY"}}
      </time>
      {{tags prefix=" on "}}
    </section>
  </header>
  <section class="page-content">
    {{content}}
  </section>
</article>

{{/post}}

```
