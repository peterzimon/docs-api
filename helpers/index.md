---
title: "Helpers"
date: "2019-01-09"
meta_title: "Vanilla Javascript SDK – Ghost Helpers"
meta_description: "When you're working with the data returned from Ghost's API, there are some common repetitive tasks that can be simplified. Read more about Ghost Helpers 👉"
keywords:
    - "vanilla"
    - "javascript"
    - "helpers"
    - "sdk"
---

JavaScript SDK

When you're working with the data returned from Ghost's API, there are some common repetitive tasks that can be simplified.

To achieve this, we maintain a library of shared JavaScript helpers designed to work in any environment. Each one performs a Ghost-specific data formatting or processing task. These are the underlying tools that power our [handlebars](/api/handlebars-themes/) and [gatsby](/api/gatsby/#custom-helpers) helpers.

## Tags

Filters and outputs tags. By default, the helper will output a comma separated list of tag names, excluding any internal tags.

```javascript
import {tags} from '@tryghost/helpers'

// Outputs e.g. Posted in: New Things, Releases, Features.
posts.forEach((post) => {
    tags(post, {prefix: 'Posted in: ', suffix: '.'});
});
```

The first argument must be a post object, or any object that has a `tags` array.

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

## Reading Time

Calculates the estimated reading time based on the HTML for a post & available images.

```javascript
import {readingTime} from '@tryghost/helpers'

// Outputs e.g. A 5 minute read.
posts.forEach((post) => {
    readingTime(post, {minute: 'A 1 minute read.', minutes: 'A % minute read.'});
});
```

The first argument must be a post object, or any object that has an `html` string. If a `feature_image` is present, this is taken into account.

### Options

The output of the reading time helper can be customised through format strings.

* `minute` {string, default:"1 min read"} - format for reading times <= 1 minute
* `minutes` {string, default:"% min read"} - format for reading times > 1 minute


## Installation

`yarn add @tryghost/helpers`

`npm install @tryghost/helpers`

You can also use the standalone UMD build:

`https://unpkg.com/@tryghost/helpers@{version}/umd/helpers.min.js`

### Usage

ES modules:

```javascript
import {tags, readingTime} from '@tryghost/helpers'
```

Node.js:

```javascript
const {tags, readingTime} = require('@tryghost/helpers');
```

In the browser:

```html
<script src="https://unpkg.com/@tryghost/helpers@{version}/umd/helpers.min.js"></script>
<script>
    const {tags, readingTime} = GhostHelpers;
</script>
```

Get the [latest version](https://unpkg.com/@tryghost/helpers) from https://unpkg.com.
