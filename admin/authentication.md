---
title: "Authentication"
date: "2019-01-09"
meta_title: "Ghost Admin API Documentation"
meta_description: "Manage content via Ghost's Admin API, with secure role-based authentication. Read more on Ghost Docs 👉"
keywords:
    - "admin api"
    - "javascript"
    - "ghost api"
sidebar: "admin-api"
---

There are two methods for authenticating with the Admin API: Token Authentication and User Authentication.

Most applications integrating with the Ghost Admin API should use token authentication. User authentications is only useful if you're building a fully-fledged client where you expect different users to login and manage data as themselves.

The JavaScript Admin API Client currently only supports token authentication.

### Host

`https://{admin_domain}`

Your admin domain can be different to your main domain.
Using the correct domain and protocol are critical to getting consistent behaviour, particularly when dealing with CORS in the browser.
All Ghost(Pro) blogs have a `*.ghost.io domain` as their admin domain and require https.

### Path & Version

`/ghost/api/{version}/admin/`

Each API is prefixed with the same path, followed by a specific version. Version strings are required and always start with `v`. The [api versioning](/faq/api-versioning/) guide explains the current available versions and stability index.



## Token Authentication (Integrations)

- simple, secure
- JWT-based https://jwt.io/
- use admin api key to generate JWT
- allows integrations to access the API using Authorization HTTP header.


### Key

Admin API keys can be obtained by creating a new `Custom Integration` under the **Integrations** screen in Ghost Admin.

[IMAGE HERE]

Admin API keys are made up of an id and secret, separated by a colon.
These values are used to generate a JSON Web Token, which is used in the Authorization header of the request:

`curl -H "Authorization: 'Ghost $token'" https://{admin_domain}`

The Admin API JavaScript client handles all the technical details of generating a JWT from an API key, meaning you only have to provide your host, version and key to get started making Admin API requests.

### Token Generation

If you're using a language other than JavaScript, you'll need to generate the tokens yourself. It is not safe to swap keys for tokens in the browser, or in any other insecure environment.

There are a myriad of [libraries](https://jwt.io/#libraries) available for generating JWTs in different environments. Regardless of language, you first need to split the API key by the `:` into an id and a secret and then hex decode the secret, before passing these values to your JWT library of choice.

JSON Web Tokens are made up of a header, a payload and a secret. You already have your secret ready to go. The values needed for the header and payload are:

Header:

```
{
    "alg": "HS256",
    "typ": "JWT"
}
```

Payload:

```
{
    "kid": {id from API key},
    "exp": "5m",
    "aud": "/{version}/admin/"
}
```

## User Authentication

User Authentication is an advanced, session-based authentication method that provides access to all API endpoints and actions according to the role of the user.

Authenticating as a user requires an application to collect a user's email and password, and swap the credentials for a cookie. The cookie is then used to maintain a session.