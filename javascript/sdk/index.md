---
title: "JavaScript SDK"
date: "2019-01-09"
meta_title: "Vanilla Javascript SDK – Ghost Helpers"
meta_description: "When you're working with the data returned from Ghost's API, there are some common repetitive tasks that can be simplified. Read more about Ghost Helpers 👉"
keywords:
    - "vanilla"
    - "javascript"
    - "helpers"
    - "sdk"
---


Ghost is written in 100% JavaScript. Where there are shared or common tasks for working with Ghost's API, we aim to publish reusable packages that do as much of the work as possible. This means our SDK is an ever-growing library of tiny tools for working with Ghost.

## Helpers

- Package: `@tryghost/helpers`
- Builds: CJS, ES, UMD

The shared helpers are designed for performing data formatting tasks, usually when creating custom frontends. These are the underlying tools that power our [handlebars](/api/handlebars-themes/) and [gatsby](/api/gatsby/#custom-helpers) helpers.

### Tags

Filters and outputs tags. By default, the helper will output a comma separated list of tag names, excluding any internal tags.

```javascript
import {tags} from '@tryghost/helpers'

// Outputs e.g. Posted in: New Things, Releases, Features.
posts.forEach((post) => {
    tags(post, {prefix: 'Posted in: ', suffix: '.'});
});
```

The first argument must be a post object, or any object that has a `tags` array.

#### Options

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

### Reading Time

Calculates the estimated reading time based on the HTML for a post & available images.

```javascript
import {readingTime} from '@tryghost/helpers'

// Outputs e.g. A 5 minute read.
posts.forEach((post) => {
    readingTime(post, {minute: 'A 1 minute read.', minutes: 'A % minute read.'});
});
```

The first argument must be a post object, or any object that has an `html` string. If a `feature_image` is present, this is taken into account.

#### Options

The output of the reading time helper can be customised through format strings.

* `minute` {string, default:"1 min read"} - format for reading times <= 1 minute
* `minutes` {string, default:"% min read"} - format for reading times > 1 minute


### Installation

`yarn add @tryghost/helpers`

`npm install @tryghost/helpers`

You can also use the standalone UMD build:

`https://unpkg.com/@tryghost/helpers@{version}/umd/helpers.min.js`

#### Usage

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

## String

- Package: `@tryghost/string`
- Builds: CJS

Utilities for processing strings.

### Slugify

The function Ghost uses to turn a post title or tag name into a slug for use in URLs.

```javascript
const {slugify} = require('@tryghost/string');
const slug = slugify('你好 👋!'); // slug === "ni-hao"
```

The first argument is the string to transform. The second argument is an optional options object.

#### Options

The output can be customised by passing options

 * `requiredChangesOnly` {boolean, default:false} - don't perform optional cleanup, e.g. removing extra dashes

 ### Installation

`yarn add @tryghost/string`

`npm install @tryghost/string`

#### Usage

Node.js:

```javascript
const {slugify} = require('@tryghost/string');
```



## Contributing

Our individual SDK packages are maintained together in the [Ghost SDK](https://github.com/TryGhost/Ghost-SDK) repository, and this documentation is published from our [API docs](https://github.com/TryGhost/docs-api). We welcome contributions both to existing packages and of new packages, as well as updates to the documentation.