---
title: "Helpers"
date: "2018-10-01"
meta_title: "Handlebars Helpers"
meta_description: "Ghost has a number of built in helpers which give you the tools required to build a custom theme 🛠 Start developing your theme here!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

Ghost has a number of built in helpers which give you the tools you need to build your theme. Helpers are classified into two types: block and output helpers.

**[Block Helpers](http://handlebarsjs.com/block_helpers.html)** have a start and end tag E.g. <code>\{\{#foreach\}\}\{\{/foreach\}\}</code>. The context between the tags changes and these helpers may also provide you with additional properties which you can access with the `@` symbol.

**Output Helpers** look much the same as the expressions used for outputting data e.g. `{{content}}`. They perform useful operations on the data before outputting it, and often provide you with options for how to format the data. Some output helpers use templates to format the data with HTML a bit like partials. Some output helpers are also block helpers, providing a variation of their functionality.

## Helper Listings

There are a number of different types of helper in Ghost. The types give some background information on how the helpers work or what they do, each helper has a list of types in its documentation which will link back here. For more information on the different expressions you may see wrapped in curly braces within Ghost themes, see the [handlebars expressions guide](/docs/handlebars#section-handlebars-expressions).

### All

[{{foreach}}](doc:foreach), [{{has}}](doc:has), [{{is}}](doc:is), [{{get}}](doc:get), [{{content}}](doc:content), [{{excerpt}}](doc:excerpt), [{{tags}}](doc:tags), [{{author}}](doc:author),
[{{img_url}}](doc:img_url), [{{navigation}}](doc:navigation), [{{pagination}}](doc:pagination),
[{{url}}](doc:url), [{{date}}](doc:date), [{{plural}}](doc:plural),
[{{encode}}](doc:encode), [{{asset}}](doc:asset),
[{{body_class}}](doc:body_class), [{{post_class}}](doc:post_class),
[{{ghost_head}}](doc:ghost_head), [{{ghost_foot}}](doc:ghost_foot),
[{{meta_title}}](doc:meta_title), [{{meta_description}}](doc:meta_description), [{{next_post}} & {{prev_post}}](doc:prev_next_post),  [{{log}}](doc:log), [{{if}}](doc:if), [{{unless}}](doc:unless)

### Required

Required helpers must be included in a theme. Any theme which does not use all of the required helpers are considered invalid themes.

[{{asset}}](doc:asset), [{{body_class}}](doc:body_class),
[{{post_class}}](doc:post_class), [{{ghost_head}}](doc:ghost_head),
[{{ghost_foot}}](doc:ghost_foot)

### Block

Block helpers require both an opening and closing tag like `{{#has}}{{/has}}`. A full explanation of block helpers can be found in the [Handlebars](/docs/handlebars#block-expressions-scopes-) section.

[{{foreach}}](doc:foreach), [{{has}}](doc:has), [{{is}}](doc:is), [{{author}}](doc:author)

### Async

These helpers make use of Promises (asynchronous operations) as part of their work behind the scenes. This can cause limitations, and there is a known issue with Async helpers not working when they are nested.

[{{get}}](doc:get), [{{next_post}}](doc:prev_next_post), [{{prev_post}}](doc:prev_next_post),
[{{ghost_head}}](doc:ghost_head), [{{ghost_foot}}](doc:ghost_foot),
[{{amp_ghost_head}}](doc:amp_ghost_head), [{{amp_content}}](doc:amp_content)

### Query

Query helpers perform a request to the API to get extra data for your theme. When using a Query helper, you will get access to additional data to that listed in the [context table](/docs/context-overview#context-table).

[{{get}}](doc:get), [{{next_post}}](doc:prev_next_post), [{{prev_post}}](doc:prev_next_post)

### Debugging

[{{log}}](doc:log)

### Ghost

This means the helper was added by Ghost, rather than being part of Handlebars

### AMP

AMP helpers are specifically made for `amp` posts. You'll find the documentation on the [AMP feature](doc:amp) page.

### Handlebars

These helpers are core to the Handlebars templating language, meaning you may find more documentation about them elsewhere.

### Template-driven

Template helpers have a special partial template in Ghost core which they use to render their output. This template can be overridden by including a correctly named template in the partials folder of your theme. Details of the template are always documented with the helper.

[{{navigation}}](doc:navigation), [{{pagination}}](doc:pagination)

### Output

Output helpers are simple helpers which aid with common tasks when outputting data for themes, like listing tags. They often have options for configuring the output.

### Formatting

Format helpers provide tools for nicely formatting bits of data, like dates. They often have options for configuring how the data is formatted.
