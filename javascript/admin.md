---
title: "Admin API Client Library"
date: "2019-01-09"
meta_title: "Javascript Admin API Client Libarary – Ghost"
meta_description: "Server-side client library for working with the Ghost Admin API. Publish your content from anywhere. Read more on Ghost Docs 👉"
keywords:
    - "headless cms"
    - "javascript"
    - "ghost api"
sidebar: "javascript"
---

Admin API keys should remain secret, and therefore this promise-based JavaScript library is designed for server-side usage only. This library handles all the details of generating correctly formed urls and tokens, authenticating and making requests.

## Working Example

```javascript
const api = new GhostAdminPI({
  url: 'https://demo.ghost.io',
  key: 'secret_id:with_secret_key',
  version: 'v2'
});

...
```

## Authentication

The client requires the host address of your Ghost API, an Admin API key, and a version string in order to authenticate.

- `url` - API domain, must not end in a trailing slash.
- `key` - string copied from the "Integrations" screen in Ghost Admin
- `version` - should be set to 'v2'

The `url` and `key` values can be obtained by creating a new `Custom Integration` under the Integrations screen in Ghost Admin.

![Get Ghost Admin API credentials](/images/apikey.png)

See the documentation on [Admin API authentication](/api/admin/#authentication) for more explanation.

## Endpoints

All endpoints & parameters provided by the [Admin API](/api/admin/) are supported.

```javascript

// [Stability: stable]

// Browsing posts returns Promise([Post...]);
// The resolved array will have a meta property
api.posts.browse();
api.posts.read({id: 'abcd1234'});
api.posts.add...
api.posts.edit...
api.posts.delete...

// Browsing pages returns Promise([Page...])
// The resolved array will have a meta property
api.pages.browse({limit: 2});
api.pages.read({id: 'abcd1234'});
api.pages.add...
api.pages.edit...
api.pages.delete...

api.images.upload({file: '/path/to/local/file'});

```


## Installation

`yarn add @tryghost/admin-api`

`npm install @tryghost/admin-api`


### Usage

ES modules:

```javascript
import GhostAdminAPI from '@tryghost/admin-api'
```

Node.js:

```javascript
const GhostAdminAPI = require('@tryghost/admin-api');
```
