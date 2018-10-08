---
title: "@labs"
path: /api/v2/handlebars-themes/helpers/utility/labs/
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: @labs"
meta_description: "The @labs variable provides access to global data properties, which are available anywhere in your theme. Read more about Ghost themes! 👻"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

The `@labs` variable provides access to [global data](/docs/handlebars#section-global-data) properties, which are available anywhere in your theme.

For each feature listed with a checkbox in the `settings/labs/` section of a site, the `@labs` global will provide a boolean flag which tells the theme developer whether or not the feature is enabled.

As of Ghost 1.0.0, there are two features which can be detected:

- `{{@labs.publicAPI}}` – true if the Public API feature is enabled (enabled by default)
- `{{@labs.subscribers}}` – true if the Subscribers feature is enabled (disabled by default)

#### Examples

Test if subscribers is enabled before outputting HTML elements to surround a subscribe form, or before adding a subscribe button.

```html
{{#if @labs.subscribers}}
<div class="subscribe-form">
{{subscribe_form}}
</div>
{{/if}}
```

It is also possible to test if the publicAPI is enabled before using the get helper:

```html
{{#if @labs.publicAPI}}
<div class="latest-posts">
{{#get "posts" limit="3"}}...{{/get}}
</div>
{{/if}}
```

Note: when these features are moved out of beta in future, there will be a point at which these properties are deprecated. Therefore it is very important to keep your theme up-to-date.
