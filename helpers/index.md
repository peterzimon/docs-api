---
title: "Helpers"
date: "2019-01-07"
meta_title: ""
meta_description: ""
keywords:
    - "javascript"
    - helpers
    - "ghost api"
---

Vanilla JavaScript SDK

When you're working with the data returned from Ghost's API, there are some common repetitive tasks that we want to make easier.

To achieve this, we're in the process of abstracting out Ghost's [handlebars helpers](/api/handlebars-themes/) and other useful tools for working with our API into an SDK full of useful vanilla JS helpers.

## Tags

Pass a post, or an object with a tags array to the tags helper, and it will handle filtering and outputting tags for you.

By default, the helper will output a comma separated list of tag names, excluding any internal tags.

```javascript
// Outputs e.g. Posted in: New Things, Releases, Features.
posts.forEach((post) => {
    tags(post, {prefix: 'Posted in: ', suffix: '.'});
});
```

### Options

The tag helper supports multiple options so that you can control exactly what is output, without having to write any logic.

 * `limit` {integer} - limits the number of tags to be returned
 * `from` {integer, default:1} - index of the tag to start iterating from
 * `to` {integer} - index of the last tag to iterate over
 * `separator` {string, default:","} - string used between each tag
 * `prefix` {string} - string to output before each tag
 * `suffix` {string} - string to output after each tag
 * `visibility` {string, default:"public"} - change to "all" to include internal tags
 * `fallback` {object} - a fallback tag to output if there are none
 * `fn` {function} - function to call on each tag, default returns tag.name

## Installation

`yarn add @tryghost/helpers`

or

`npm install @tryghost/helpers`

You can also use the standalone UMD build:

`https://unpkg.com/@tryghost/helpers@{version}/umd/helpers.min.js`

### Usage

ES modules:

```javascript
import {tags} from '@tryghost/helpers'
```

Node.js

```javascript
const tags = require('@tryghost/helpers').tags;
```

In the browser:

```html
<script src="https://unpkg.com/@tryghost/helpers@{version}/umd/helpers.min.js"></script>
<script>
    const tags = GhostHelpers.tags;
</script>
```

Visit https://unpkg.com/@tryghost/helpers to get the [latest version](https://unpkg.com/@tryghost/helpers).