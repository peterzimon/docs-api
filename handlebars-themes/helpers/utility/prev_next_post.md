---
title: "prev_post & next_post"
keywords:
    - api
    - handlebars
    - themes
    - helpers
---

Usage: `{{#prev_post}}{{title}}{{/prev_post}}` -  `{{#next_post}}{{title}}{{/next_post}}`

### Description

When in the scope of a post, you can call the next or previous post helper, which performs a query against the API to fetch the next or previous post in accordance with the chronological order of the blog.

Inside of the opening and closing tags of the `{{#next_post}}{{/next_post}}` or `{{#prev_post}}{{/prev-post}}` helper, the normal helpers for [outputting posts](/docs/post) will work, but will output the details of the post that was fetched from the API, rather than the original post.

```html
{{#post}}
	{{#prev_post}}
		<a href="{{url}}">{{title}}</a>
	{{/prev_post}}

	{{#next_post}}
		<a href="{{url}}">{{title}}</a>
	{{/next_post}}
{{/post}}
```

You can also scope where to pull the previous and next posts from using the `in` parameter

```html
{{#post}}
	{{#prev_post in="primary_tag"}}
		<a href="{{url}}">{{title}}</a>
	{{/prev_post}}

	{{#next_post in="primary_tag"}}
		<a href="{{url}}">{{title}}</a>
	{{/next_post}}
{{/post}}
```
