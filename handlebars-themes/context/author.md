---
title: "Author"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Functional helpers are used to work with data objects


Use: `{{#is "author"}}{{/is}}` to detect this context

## Description

Authors in Ghost each get their own page which lists out the posts that user wrote. You are in the `author` context when viewing the page thats lists all posts written by that user, as well as subsequent pages of posts. The `author` context is not set on posts or pages written by those authors, only on the list of posts for that author.

## Routes

The default URL for author pages is `/author/:slug/`. The `author` context is also set on subsequent pages of the post list, which live at `/author/:slug/page/:num/`. The `slug` part of the URL is based on the name of the author and can be configured in the user admin, no other part of the URL can be configured at present.

## Templates

The default template for an author page is `index.hbs`.

You can optionally include an `author.hbs` file in your theme which will be used for author pages instead.

Additionally, you can provide a custom template for a specific author. If there is a `author-:slug.hbs` file with the `:slug` matching the user's slug this will be used instead.

For example, if you have an author 'John' with the url `/author/john/`, adding a template called `author-john.hbs` will cause that template to be used for John's list of posts instead of `author.hbs`, or `index.hbs`.

These templates exist in a hierarchy. Ghost looks for a template which matches the slug (`author-:slug.hbs`) first, then looks for `author.hbs` and finally uses `index.hbs` if neither is available.

## Data

When in the `author` context, a template gets access to 3 objects: the [author object](/docs/author-context#author-object-attributes) which matches the route, an array of [post objects](/docs/post-context#post-object-attributes) and a [pagination object](/docs/pagination#pagination-attributes). As with all contexts, all of the `@blog` global data is also available.

### Author object

When outputting the author attributes, you can use a block expression (`{{#author}}{{/author}}`) to drop into the author scope and access all of the attributes. See a full list of attributes below:

### Author object attributes

- **id** - the incremental ID of the author
- **name** - the name of the author
- **bio** - the bio of the author
- **location** - the author's location
- **website** - the author's website
- **twitter** - the author's twitter username ([twitter_url helper](doc:twitter_url))
- **facebook** - the author's facebook username ([facebook_url helper](doc:facebook_url))
- **profile_image** - the profile image associated with the author ([img_url helper](doc:img_url))
- **cover_image** - the author's cover image ([img_url helper](doc:img_url))
- **url** - the web address for the tag's page ([url helper](doc:url))

### Post list

Each of the posts can be looped through using [`{{#foreach 'posts'}}{{/foreach}}`](doc:foreach). The template code inside the block will be rendered for each post, and have access to all of the [post object attributes](/docs/post-context#post-object-attributes).

### Pagination

The [pagination object](/docs/pagination#pagination-attributes) provided is the same everywhere. The best way to output pagination is to use the [pagination](doc:pagination) helper.

## Helpers

The `{{#author}}{{/author}}` block expression is useful for accessing all of the author attributes. Once inside the author you can access the attributes and use helpers like [{{img_url}}](doc:img_url) and [{{url}}](doc:url) to output the author's details.

Using `{{#foreach 'posts'}}{{/foreach}}` is the best way to loop through your posts and output each one.

If your theme does have a `tag.hbs` and `author.hbs` file all outputting similar post lists to `index.hbs` you may wish to use a partial to define your post list item, e.g. `{{> "loop"}}`. There's an example showing this in detail below.

The [{{pagination}}](doc:pagination) helper is the best way to output pagination. This is fully customisable, see the [pagination helper](doc:pagination) docs for details.

## Example Code

```html
<!-- Everything inside the #author tags pulls data from the author -->
{{#author}}
  <header>
  	{{#if profile_image}}
    	<img src="{{profile_image}})" alt="{{name}}'s Picture" />
    {/if}}
  </header>

  <section class="author-profile">
  	<h1 class="author-title">{{name}}</h1>
    {{#if bio}}<h2 class="author-bio">{{bio}}</h2>{{/if}}

    <div class="author-meta">
      {{plural ../pagination.total empty='No posts' singular='% post' plural='% posts'}}
     </div>
  </section>
{{/author}}

<main role="main">
    <!-- includes the post loop - partials/loop.hbs -->
    {{> "loop"}}
</main>

<!-- Previous/next page links - displayed on every page -->
{{pagination}}

```
