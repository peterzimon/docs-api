---
title: "Javascript"
date: "2019-01-09"
meta_title: "Javascript Content API Client Libarary – Ghost"
meta_description: "Ghost provides a flexible promise-based JavaScript library for accessing the Content API which can be used in any JavaScript project. Read more on Ghost Docs 👉"
keywords:
    - "headless cms"
    - "javascript"
    - "ghost api"
---


Admin API Client Library

Admin API keys should remain secret, and therefore this promise-based JavaScript library is designed for server-side usage only. This library handles all the details of generating correctly formed urls and tokens, authenticating and making requests.

## Working Example

```javascript
const api = new GhostAdminPI({
  host: 'https://demo.ghost.io',
  key: 'secret_id:with_secret_key',
  version: 'v2'
});

...
```

## Authentication

The client requires the host address of your Ghost API, an Admin API key, and a version string in order to authenticate.

- `host` - API domain, must not end in a trailing slash.
- `key` - string copied from the "Integrations" screen in Ghost Admin
- `version` - should be set to 'v2'

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

api.images...

// [Stability: experimental]

api.users...
api.subscribers...
api.themes...
api.configuration...
api.webhooks...
...

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
