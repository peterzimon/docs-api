---
title: "Javascript"
keywords:
    - javascript
    - api
---

Content API Client Library

Ghost provides a flexible promise-based JavaScript library for accessing the Content API. The library can be used in any JavaScript project, client or server side and abstracts away all the pain points of working with API data.


## Basic Example

```javascript
const api = new GhostContentAPI({
  host: 'https://demo.ghost.io',
  key: '993caa7db6dee20559e99d3f90',
  version: 'v2'
});

// fetch 5 posts, including related tags and authors
api.posts
    .browse({limit: 5, include: 'tags,authors'})
    .then((posts) => {
        posts.forEach((post) => {
            console.log(post.title);
        });
    })
    .catch((err) => {
        console.error(err);
    });
```

## Authentication

The client requires the host address of your Ghost API, a Content API key, and a version string in order to authenticate.

- `host` - API domain, must not end in a trailing slash.
- `key` - hex string copied from the "Integrations" screen in Ghost Admin
- `version` - should be set to 'v2'

See the documentation on [Content API authentication](http://localhost:8003/api/content/#authentication) for more information about each field.

## Endpoints

All endpoints & parameters provided by the [Content API](/api/content/) are supported.

```javascript
// Browsing posts returns Promise([Post...]);
// The resolved array will have a meta property
api.posts.browse({limit: 2, include: 'tags,authors'});
api.posts.browse();

// Reading posts returns Promise(Post);
api.posts.read({id: 'abcd1234'});
api.posts.read({slug: 'something'}, {formats: ['html', 'plaintext']});

// Browsing authors returns Promise([Author...])
// The resolved array will have a meta property
api.authors.browse({page: 2});
api.authors.browse();

// Reading authors returns Promise(Author);
api.authors.read({id: 'abcd1234'});
api.authors.read({slug: 'something'}, {include: 'count.posts'}); // include can be array for any of these

// Browsing tags returns Promise([Tag...])
// The resolved array will have a meta property
api.tags.browse({order: 'slug ASC'});
api.tags.browse();

// Reading tags returns Promise(Tag);
api.tags.read({id: 'abcd1234'});
api.tags.read({slug: 'something'}, {include: 'count.posts'});

// Browsing pages returns Promise([Page...])
// The resolved array will have a meta property
api.pages.browse({limit: 2});
api.pages.browse();

// Reading pages returns Promise(Page);
api.pages.read({id: 'abcd1234'});
api.pages.read({slug: 'something'}, {fields: ['title']});

// Browsing settings returns Promise(Settings...)
// The resolved object has each setting as a key value pair
api.settings.browse();
```

## Installation

`yarn add @tryghost/content-api`

or

`npm install @tryghost/content-api`

You can also use the standalone UMD build:

`https://unpkg.com/@tryghost/content-api@{version}/umd/content-api.min.js`

### Usage

ES modules:

```javascript
import GhostContentAPI from '@tryghost/content-api'
```

Node.js

```javascript
const GhostContentAPI = require('@tryghost/content-api');
```

In the browser:

```html
<script src="https://unpkg.com/@tryghost/content-api@{version}/umd/content-api.min.js"></script>
<script>
    const api = new GhostContentAPI({
        // authenticate here
    });
</script>
```

Visit https://unpkg.com/@tryghost/content-api to get the [latest version](https://unpkg.com/@tryghost/content-api).