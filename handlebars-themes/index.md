---
title: "Ghost Handlebars Themes"
path: /api/handlebars-themes/
date: "2018-10-01"
meta_title: "Handlebars Themes"
meta_description: "Our handlebars theme templating framework works with the Ghost API to build flexible publishing websites. Start building your custom theme here!"
image: "https://unsplash.it/400/300/?random?BoldMage"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
next:
    url: "/setup/ghost-pro/"
    title: "Setup Ghost(Pro)"
    description: "Setup Ghost(Pro)"
---
The Ghost theme layer has been engineered to give developers and designers the flexibility to build custom publications that are powered by the Ghost platform.

## Ghost theme development

Ghost themes use the Handlebars templating language which creates a strong separation between templates (the HTML) and any JavaScript logic with the use of helpers. This allows themes to be super fast, with a dynamic client side app, and server side publication content that is sent to the browser as static HTML.

This documentation shows you how to create static HTML and CSS for a theme, using Handlebars expressions when you need to render dynamic data.

If you're building a new theme and need a help, visit the **themes** category on [the forum](https://forum.ghost.org/).

### Handlebars

Before you get started, it's useful to become familiar with the Handlebars syntax. Here's a few helpful resources:

* [Handlebars documentation](https://handlebarsjs.com/expressions.html)
* [Tutorials from Treehouse](https://blog.teamtreehouse.com/getting-started-with-handlebars-js)

Feel free to skip documentation about installation, that's already done for you in Ghost. Learning more about basic expressions gives you the necessary context to begin building a theme for your Ghost publication.

### Structure

The recommended file structure for a Ghost theme is:

```
.
├── /assets
|   └── /css
|       ├── screen.css
|   ├── /fonts
|   ├── /images
|   ├── /js
├── default.hbs
├── index.hbs [required]
└── post.hbs [required]
└── package.json [required]
```

An optional `/partials` directory allows you to use any part templates across your site. This allows you to share blocks of HTML between multiple templates and reduce code duplication.

```
.
├── /assets
    ├── /css
        ├── screen.css
    ├── /fonts
    ├── /images
    ├── /js
├── /partials
    ├── list-post.hbs
├── default.hbs
├── index.hbs [required]
└── post.hbs [required]
└── package.json [required]
```

### Helpers

Ghost templates are constructed from HTML and handlebars helpers. There are a few requirements:

In order for a Ghost theme to work, you must make use of the required helpers: `{{asset}}`, `{{body_class}}`, `{{post_class}}`, `{{ghost_head}}`, `{{ghost_foot}}`.

See the [full list of helpers](https://docs.ghost.org//api/handlebars-themes/helpers/)  for more detailed information about specific Handlebars helpers.

### Templates

Two template files are required: `index.hbs` and `post.hbs`. All other templates are optional.

We **highly** recommended using  a [`default.hbs`](#default-hbs) file as a base layout for your theme. If you have significantly different layouts for different pages, you can build a hierarchy or use partials to encapsulate common parts of your theme.

Theme templates are hierarchical, so one template can extend another template. This prevents base HTML from being repeated.

Here are some commonly used theme templates and their uses:

#### default.hbs
`default.hbs` is a base template that contains the boring bits of HTML that exist on every page such as `<html>`, `<head>` or `<body>` as well as the required `{{ghost_head}}` and `{{ghost_foot}}`and any HTML for the header and footer.

#### index.hbs
This is the standard required template for a list of posts. It is also used if your theme does not have a `tag.hbs`, `author.hbs` or `index.hbs` template. The `index.hbs` template usually extends `default.hbs` and is passed a list of posts using the `{{#foreach}}` helper.

#### home.hbs
An optional template to provide special content for the home page. This template will only be used to render `/`.

#### post.hbs
The required template for a single post which extends `default.hbs` and uses the `{{#post}}` helper to output the post details. Custom templates for individual posts can be created using `post-:slug.hbs`.

#### page.hbs
An optional template for static pages. If this is not specified then `post.hbs` will be used. Custom templates for individual pages can be created using `page-:slug.hbs`.

#### custom-:emplate-name.hbs
An optional custom templates that can be selected in the admin interface on a per-post basis. They can be used for both posts and pages.

#### tag.hbs
An optional template for tag archive pages. If not specifed the `index.hbs` template is used. Custom templates for individual tags can be created using `tag-:slug`.

#### author.hbs
An optional template for author archive pages. If not specified the `index.hbs` template is used. Custom templates for individual authors can be created using `author{{slug}}`.

#### private.hbs
An optional template for the password form page on password protected publications.

#### error.hbs
An optional theme template for any 404 or 500 errors. If one is not specified Ghost will use the default.

#### amp.hbs
An optional theme template for  AMP ([Accelerated Mobile Pages](https://www.ampproject.org/docs/get_started/about-amp.html)). If your theme doesn't provide an `amp.hbs` file, Ghost will use its default.

#### package.json
Info about package.json

#### robots.txt
Themes can include a robots.txt which overrides the default robots.txt provided by Ghost.

The development version of the default theme [Casper](https://github.com/TryGhost/Casper) can be used to explore how Ghost themes work, or you can customise Casper and make it your own!

### Contexts
Each page in a Ghost theme belongs to a context which is determined by the URL. The context will decide what template will be used, what data is available and what is output by the `{{body_class}}` helper. Read more about contexts.

### Styling

When building themes it is important to consider the scope of classes and IDs to avoid clashes between your main styling and your post styling. IDs are automatically generated for headings and used inside a post, so it's best practice to scope things to a particular part of the page.

For example: #themename-my-id is preferrable to #my-id.

### Development
In production mode, template files are loaded and cached by the server. For any changes in a `hbs` file to be reflected, use the `restart ghost` command.

It is recommended to use a local install to create a new theme using development mode.

Ghost themes only support serving standard CSS and JS. There is no support for CSS preprocessors.


