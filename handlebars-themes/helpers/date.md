---
title: "date"
date: "2018-10-01"
meta_title: "Ghost Handlebars Theme Helpers: date"
meta_description: "Output various date formats in your Ghost publication with the date helper. More about Ghost themes inside ✨"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Usage: `{{date value format="formatString"}}`

### Description

`{{date}}` is a formatting helper for outputting dates in various format. You can either pass it a date and a format string to be used to output the date like so:

```html
// outputs something like 'July 11, 2016'
{{date published_at format="MMMM DD, YYYY"}}
```

Or you can pass it a date and the timeago flag:

```html
// outputs something like '5 mins ago'
{{date published_at timeago="true"}}
```

If you call `{{date}}` without a format, it will default to “MMM Do, YYYY”.

If you call `{{date}}` without telling it which date to display, it will default to one of two things:

1. If there is a `published_at` property available (i.e. you're inside a post object) it will use that
2. Otherwise, it will default to the current date


`date` uses [moment.js](http://momentjs.com/) for formatting dates. See their [documentation](http://momentjs.com/docs/#/parsing/string-format/) for a full explanation of all the different format strings that can be used.

### Example Code

```html
<main role="main">
  {{#foreach posts}}
    <h2><a href="{{url}}">{{title}}</a></h2>

   <p>{{excerpt words="26"}}</p>

    {{!-- Here `published_at` is set, so this will show the article date --}}
    <time datetime="{{date format="YYYY-MM-DD"}}">{{date format="DD MMMM YYYY"}}</time>
  {{/foreach}}
</main>
<footer>
  {{!-- Here there is no `published_at` so this will show the current year --}}
  <p class="small">&copy; {{date format="YYYY"}}</p>
</footer>


```

