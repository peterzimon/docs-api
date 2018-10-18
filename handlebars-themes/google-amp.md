---
title: "Google AMP"
date: "2018-10-01"
meta_title: "Theme Features: Google AMP"
meta_description: "Ghost supports Google Accelerated Mobile Pages by default ⚡️ Discover all of the tools you need to develop AMP pages with Ghost!"
keywords:
    - amp
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Ghost supports AMP [Accelerated Mobile Pages](https://www.ampproject.org/) for the posts in your publication.

## Overview
The AMP project is a Google led initiative that enables lightweight versions of any piece of content on a site which offers speed and performance your readers in the browser.

In Ghost, a single handlebars template is used to automatically render AMP versions of the posts on your site. The default `amp.hbs` template offers all of the basic functionality of AMP, but it's possible to build on top of this to include other AMP supported features if required!

The AMP feature is enabled by default, or you can disable it in the settings of Ghost admin if you'd prefer not to use it.


### Route

To access any post rendered using the `amp.hbs` template on your site, add `/amp/` to the end of any post URL on your publication. The parent post also has a canonical link to it's AMP equivalent. 


### Template

The amp context always uses the `amp.hbs` template. Ghost will look for this template within your theme files and use this by default. 

The template structure is as follows: 

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
└── amp.hbs [optional]
└── package.json [required]
```

Check out the [default template](https://github.com/TryGhost/Ghost/blob/master/core/server/apps/amp/lib/views/amp.hbs/) in full. 


### Data

The `amp` [context](/api/handlebars-themes/context/) provides access to the post object which matches the route. As with all contexts in Ghost, all of the `@blog` global data is also available.

When outputting the post, you can use a block expression (`{{#post}}{{/post}}`) to drop into the post scope and access all of the attributes. See a full list of [attributes](/api/handlebars-themes/context/post/#post-object-attributes/).

### AMP features

AMP consists of three different parts: 

* AMP HTML
* AMP JS
* Google AMP Cache

AMP has many restrictions for optimal performance. For example, JavaScript can only be used in certain circumstances, CSS must be in the correct tags inside of the `<head>` section, and AMP HTML must be used instead of common HTML. 

If you are making adjustments to your `amp.hbs` file, follow the documentation provided on the official [AMP docs](https://www.ampproject.org/) site.

Edited `amp.hbs` templates can be updated in your theme by uploading a .zip of your updated theme in Ghost admin.

### Debugging AMP

Since AMP has strict restrictions, it's important to ensure that your code passes AMP validation. The quickest way to do this is to add `#development=1` to the AMP URL, and check for validation errors in your browser console. 

### Helpers

Because the `amp` context is using the `post` data, you can use almost every [post helper](/api/handlebars-themes/context/post/#helpers) inside of the `{{#post}}{{/post}}` block expression. In addition to this, there are three helpers especially for `amp` which are decribed below. 

#### `{{amp_ghost_head}}` 

This helper belongs just before the `</head>` tag in `amp.hbs` and outputs structured data in JSON/LD, Facebook Open Graph and Twitter cards, as well as an RSS URL path. It is a simplified version of `{{ghost_head}}` for AMP.

#### `{{amp_components}}`

This helper can exist just before the `</head>` tag in `amp.hbs` and can output the necessary javascript if your content contains a `.gif`, an `<iframe>` or an `<audio>` tag. 

#### `{{amp_content}}`

This helper transforms post content into valid AMP HTML. 

* `<img>` transforms to `<amp-img>`
* `.gif` transforms to `<amp-anim>`
* `<iframe>` transforms to `<amp-iframe>`
* `<audio>` transforms to `<amp-audio>`

### `{{img_url}}` helper

There are special requirements for using the `{{img_url}}` helper. It must be wrapped in an `<amp-img>` tag and must provide a `width` and `height` property. This only works for post images. 


## Summary 

You've now got an understanding of how Ghost implements AMP pages on your publication, have an understanding of how the `amp.hbs` template works should you decide to develop it further for your site. Always refer to the official [AMP documentation](https://www.ampproject.org/docs/) when making adjustments to your AMP template!
