---
title: "img_url"
path: /api/v2/handlebars-themes/helpers/data/img_url/
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: img_url"
meta_description: "Calculate image URLs efficiently with the img_url handlebars helper. Read more about Ghost themes!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Usage: `{{img_url value}}`

### Description

The img url helper outputs the correctly calculated URL for the provided image property.

You **must** tell the `{{img_url}}` helper which image you would like to output.

E.g. if you want to output a url for a post's feature image inside of post.hbs you might use `{{img_url feature_image}}`.

You can force the image helper to output an absolute url by using the absolute option, E.g. `{{img_url profile_image absolute="true"}}`. This is almost never needed.

## Example code

Below is a set of examples of how you might output various images that belong to posts, authors or keywords:

```html
{{#post}}

  <!-- Outputs post's feature image if there is one -->
  {{#if feature_image}}
	<img src="{{img_url feature_image}}">
  {{/if}}

  <!-- Output post author's profile image as an absolute URL -->
	<img src="{{img_url author.profile_image absolute="true"}}">

  <!-- Open author context instead of providing full path -->
  {{#author}}
 	   <img src="{{img_url profile_image}}">
  {{/author}}

  <!-- Loop over tags, and outputs each tag's feature image -->
  {{#foreach tags}}
     <img src="{{img_url feature_image}}" />
  {{/foreach}}

  <!-- Check for a primary tag, use a full path to output its feature image -->
  {{#if primary_tag}}
    <img src="{{image_url primary_tag.feature_image}}">
  {{/if}}

  <!-- Open primary_tag context, instead of using full path -->
  {{#primary_tag}}
    <img src="{{image_url feature_image}}">

		<!-- Go back one level in context, output the POST feature image as well -->
		<img src="{{img_url ../feature_image}}">
  {{/primary_tag}}

{{/post}}
```
