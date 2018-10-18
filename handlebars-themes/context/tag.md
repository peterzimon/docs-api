---
title: "Tag"
date: "2018-10-01"
meta_title: "Tag Context: Ghost Themes"
meta_description: "The tag context is used in Ghost themes to render lists of posts with the same tag in a publication. Learn more about contexts and building custom theme!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---


Use: `{{#is "tag"}}{{/is}}` to detect this context

## Description

Tags in Ghost each get their own page which lists out the associated posts. You are in the `tag` context when viewing the page thats lists all posts with that tag, as well as subsequent pages of posts. The `tag` context is not set on posts or pages with tags, only on the list of posts for that tag.

## Routes

The default URL for tag pages is `/tag/:slug/`. The `tag` context is also set on subsequent pages of the post list, which live at `/tag/:slug/page/:num/`. The `slug` part of the URL is based on the name of the tag and can be configured in the tag admin, no other part of the URL can be configured at present.

## Templates

The default template for a tag page is `index.hbs`.

You can optionally include a `tag.hbs` file in your theme which will be used for tag pages instead.

Additionally, you can provide a custom template for a specific tag. If there is a `tag-:slug.hbs` file with the `:slug` matching the tag's slug this will be used instead.

For example, if you have a tag 'photo' with the url `/tag/photo/`, adding a template called `tag-photo.hbs` will cause that template to be used for the photo tag instead of `tag.hbs`, or `index.hbs`.

These templates exist in a hierarchy. Ghost looks for a template which matches the slug (`tag-:slug.hbs`) first, then looks for `tag.hbs` and finally uses `index.hbs` if neither is available.

## Data

When in the `tag` context, a template gets access to 3 objects: the [tag object](/docs/author-context#tag-object-attributes) which matches the route, an array of [post objects](/docs/post-context#post-object-attributes) and a [pagination object](/docs/pagination#pagination-attributes). As with all contexts, all of the `@blog` global data is also available.

### Tag object

When outputting the tag attributes, you can use a block expression (`{{#tag}}{{/tag}}`) to drop into the tag scope and access all of the attributes.

#### Tag object attributes

- **id** - the incremental ID of the tag
- **name** - the name of the tag
- **description** - a description of the tag
- **feature_image** - the cover image associated with the tag  ([img_url helper](doc:img_url))
- **meta_title** - custom meta title for the page ([meta_title helper](doc:meta_title))
- **meta_description** - Custom meta description for the page ([meta_description helper](doc:meta_description) )
-**url** - the web address for the tag's page ([url helper](doc:url))

### Post list

Each of the posts can be looped through using [`{{#foreach 'posts'}}{{/foreach}}`](doc:foreach). The template code inside the block will be rendered for each post, and have access to all of the [post object attributes](/docs/post-context#post-object-attributes).

### Pagination

The [pagination object](/docs/pagination#pagination-attributes) provided is the same everywhere. The best way to output pagination is to use the [pagination](doc:pagination) helper.

## Helpers

The `{{#tag}}{{/tag}}` block expression is useful for accessing all of the author attributes. Once inside the tag you can access the attributes and use helpers like [{{img_url}}](doc:img_url) and [{{url}}](doc:url) to output the tag's details.

Using `{{#foreach 'posts'}}{{/foreach}}` is the best way to loop through the list of posts and output each one.

If your theme does have a `tag.hbs` and `author.hbs` file all outputting similar post lists to `index.hbs` you may wish to use a partial to define your post list item, e.g. `{{> "loop"}}`. There's an example showing this in detail below.

The [{{pagination}}](doc:pagination) helper is the best way to output pagination. This is fully customisable, see the [pagination helper](doc:pagination) docs for details.

## Example Code

```handlebars:title=tag.hbs
<!-- Everything inside of #tag pulls data from the tag -->
{{#tag}}
  <header>
  	{{#if feature_image}}
    	<img src="{{feature_image}}" alt="{{name}}" />
    {{/if}}
  </header>

  <section class="author-profile">
  	<h1>{{name}}</h1>
    {{#if description}}
      <h2>{{description}}</h2>
    {{/if}}
  </section>
{{/tag}}

<main role="main">
    <!-- includes the post loop - partials/loop.hbs -->
    {{> "loop"}}
</main>

<!-- Previous/next page links - displayed on every page -->
{{pagination}}

```
