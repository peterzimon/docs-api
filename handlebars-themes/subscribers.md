---
title: "Subscribers"
date: "2018-10-01"
meta_title: "Theme Features: Subscribers - Documentation"
meta_description: "Discover how to collect subscriber emails from your Ghost publication with this neat feature and some additional helpers in your theme!"
keywords:
    - subscribers
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---


Collect emails from your readers directly from your site using the Subscribers feature in Ghost admin


## Overview

When the subscribers feature is enabled in the settings within Ghost admin, the following new features are activated:

* The route `/subscribe/` renders `subscribe.hbs`, provided there is not already a page on this route
* A new `{{subscribe_form}}` helper is registered to use within your theme
* The API gets a new `/subscribers/` endpoint

The subscribers view in Ghost admin allows you to see your subscriber list, add subscribers manually and import or export CSV files. Ghost does not automatically send emails to your subscribers by default, but you can integrate with your favourite email tools to get the job done (such as Mailchimp or Active Campaign).

## Subscribe page template

The new page rendered at `/subscribe/` uses the default template, which can be updated to suit your needs or overriden using a correctly named template in your theme. The subscribe form helper can be used across your site content with some adjustments to your theme.

## Subscribe form helper

The helper `{{subscribe_form}}` helper wraps all of the internals of the form used for submitting emails to the subscriber list. It is a template driven helper just like [navigation](/api/handlebars-themes/helpers/navigation/). This template can be overridden by including a correctly named template in the `partials` folder of your theme.

#### Attributes

The `{{subscribe_form}}` helper accepts a number of attributes:

* `form_class`
* `input_class`
* `button_class`
* `form_id`
* `input_id`
* `button_id`
* `placeholder`
* `autofocus`

Here's some example code of how the `subscribe.hbs` page users the helper with all of the options:

```handlebars:title=Helper usage
{{subscribe_form
  form_class="gh-signin"
  input_class="gh-input"
  button_class="btn btn-blue btn-block"
  placeholder="Your email address"
  autofocus="true"
}}
```

The form is used in the default [Casper](https://github.com/TryGhost/Casper/) theme at the bottom of the [post.hbs](https://github.com/TryGhost/Casper/blob/1.3.0/post.hbs/) template like so:

```handlebars:title=post.hbs
 {{!-- Email subscribe form at the bottom of the page --}}
 {{#if @labs.subscribers}}
   <section class="gh-subscribe">
     <h3 class="gh-subscribe-title">Subscribe to {{@blog.title}}</h3>
     <p>Get the latest posts delivered right to your inbox.</p>
     {{subscribe_form placeholder="Your email address"}}
     <span class="gh-subscribe-rss">or subscribe <a href="http://cloud.feedly.com/#subscription/feed/{{@blog.url}}/rss/">via RSS</a> with Feedly!</span>
   </section>
 {{/if}}
 ```

#### Using the default template

The default template for the `{{subscribe_form}}` helper is shown below:

```handlebars:title=Rendered output
<form method="post" action="{{action}}" class="{{form_class}}">
    {{! This is required for the form to work correctly }}
    {{hidden}}

    <div class="form-group{{#if error}} error{{/if}}">
        {{input_email class=input_class placeholder=placeholder value=email autofocus=autofocus}}
    </div>
    <button class="{{button_class}}" type="submit">Subscribe</button>
    {{! This is used to get extra info about where this subscriber came from }}
    {{script}}
</form>

{{#if error}}
    <p class="main-error">{{ error.message }}</p>
{{/if}}
```

This form is passed a set of **required** attributes: `action`, `hidden` and `script`. Once the form is submitted, the template is provided with the `{{error}}`, `{{success}}` and `{{email}}` fields.

## Overriding the default templates

It’s possible to override the default [`subscribe.hbs`](https://github.com/TryGhost/Ghost/blob/master/core/server/apps/subscribers/lib/views/subscribe.hbs) and [`subscribe_form.hbs`](https://github.com/TryGhost/Ghost/blob/master/core/server/helpers/tpl/subscribe_form.hbs) templates by creating files in your theme with the same name. It’s useful to copy/paste the file contents to provide a starting point.
Be mindful of updates to functionality when using custom templates. 

## Summary

You've walked through the functionality of the subscribers feature within Ghost, and discovered how the subscribe form works in your theme. Now you can enable the feature, add forms to your site, and even integrate your subscription list to external email services like Mailchimp.
