---
title: "Admin API"
date: "2019-01-09"
meta_title: "Ghost Admin API Documentation"
meta_description: "Manage content via Ghost's Admin API, with secure role-based authentication. Read more on Ghost Docs 👉"
keywords:
    - "admin api"
    - "javascript"
    - "ghost api"
---

Ghost allows full creation and management of content with the Admin API. Secure authentication is available either as a User with role-based permissions, or as an integration with a single standard set of permissions designed to support common workflows.

The API is RESTful, with predictable resource URLs and standard HTTP verbs, response codes and authentication used throughout. Requests and responses are JSON-encoded with consistent patterns & inline relations. Responses are customisable using powerful query parameters.

The Admin API is used by Ghost Admin, meaning that everything that Ghost Admin can do is possible with the API, and a whole lot more.

## API Clients

### JavaScript Client Library

We've developed an [API client for JavaScript](/api/javascript/#admin-api), that simplifies authenticating with the Admin API, and makes reading and writing data a breeze. The client is design for use with integrations and currently only supports token authentication and the endpoints available to integrations.


## Structure

### Base URL

`https://{admin_domain}/ghost/api/{version}/admin/`

All Admin API requests start with this base URL.

#### Admin Domain

Your admin domain can be different to your main domain, and may include a subdirectory. Using the correct domain and protocol are critical to getting consistent behaviour, particularly when dealing with CORS in the browser. All Ghost(Pro) blogs have a `*.ghost.io domain` as their admin domain and require https.

#### Version

Version strings are required and usually start with `v`. The [api versioning](/faq/api-versioning/) guide explains the current available versions and stability index. The Admin API also has a stability index for specific [endpoints](/api/admin/#endpoints). 


### JSON Format

The API uses a consistent JSON structure for all requests and responses:

```json
{
    "resource_type": [{
        ...
    }],
    "meta": {}
}
```

The resource_type will always match the resource name in the URL. All resources are returned wrapped in an array, with the exception of specific singular resources returned from e.g. `/site/` or `/settings/`. 

The meta object contains [pagination](/api/content/#pagination) information for browse requests.

When composing JSON payloads to send to the API, you must always use this same format.

### Parameters

Query parameters provide fine-grained control over responses. All endpoints accept `include` and `fields`. Browse endpoints additionally accept `filter`, `limit`, `page` and `order`. Some endpoints have their own specific parameters.

The values provided as query parameters MUST be url encoded when used directly. The [client libraries](/api/javascript/) will handle this for you.

### Pagination

All browse endpoints are paginated, returning 15 records by default. You can use the [page](#page) and [limit](#limit) parameters to move through the pages of records. The response object contains a `meta.pagination` key with information on the current location within the records:

```json
"meta":{
    "pagination":{
      "page":1,
      "limit":2,
      "pages":1,
      "total":1,
      "next":null,
      "prev":null
    }
  }
```

### Filtering

See the [Content API](/api/content/#pagination).

## Authentication

There are two methods for authenticating with the Admin API: token authentication and user authentication.

Most applications integrating with the Ghost Admin API should use token authentication. User authentication is intended for fully-fledged clients where different users login and manage various resources as themselves. Token authentication is intended for integrations that handle common workflows, such as publishing new content, or sharing content to other platforms.

The JavaScript Admin API Client currently only supports token authentication.

### Token Authentication (Integrations)

Token authentication is a simple, secure authentication mechanism using JSON Web Tokens (JWTs). Each integration is issued with an admin API key, which is used to generate a JWT token and then provided to the API via the standard HTTP Authorization header.

The admin API key must be kept private and therefore token authentication is not suitable for browsers or other insecure environments, unlike the Content API key.

#### Key

Admin API keys can be obtained by creating a new `Custom Integration` under the Integrations screen in Ghost Admin.

![Get a Ghost Admin API key](/images/apikey.png)

Admin API keys are made up of an id and secret, separated by a colon. These values are used separately to get a signed JWT token, which is used in the Authorization header of the request:


```bash
curl -H "Authorization: 'Ghost $token'" https://{admin_domain}/ghost/api/{version}/admin/{resource}/
```

The Admin API JavaScript client handles all the technical details of generating a JWT from an Admin API key, meaning you only have to provide your url, version and key to start making requests.

#### Token Generation

If you're using a language other than JavaScript, you'll need to generate the tokens yourself. It is not safe to swap keys for tokens in the browser, or in any other insecure environment.

There are a myriad of [libraries](https://jwt.io/#libraries) available for generating JWTs in different environments. Regardless of language, you first need to split the API key by the `:` into an id and a secret and then decode the hexadecimal secret into a byte array, before passing these values to your JWT library of choice. Most libraries will allow you to specify the algorithm for the signature, this _must_ match the `alg` key in the header.

JSON Web Tokens are made up of a header, a payload and the decoded secret. The values needed for the header and payload are:

Header:
```json
{
    "alg": "HS256",
    "kid": {id}, // ID from your API key
    "typ": "JWT"
}
```

Payload:
```json
{
    // Timestamps are seconds sine the unix epoch, not milliseconds
    "exp": {timestamp}, // No more than 5 minutes from now
    "iat": {timestamp}, // Now (must not be more than 5 minutes before `exp`)
    "aud": "/{version}/admin/"
}
```
Different JWT libraries take slightly different arguments, but all of them should allow you to specify the above required values. Where possible, the API will provide specific error messages when required values are missing or incorrect.

### User Authentication

User Authentication is an advanced, session-based authentication method that provides access to all API endpoints and actions according to the role of the user being authenticated.

Authenticating as a user requires an application to collect a user's email and password, and swap the credentials for a cookie. The cookie is then used to maintain a session.

#### Creating a Session

The session and authentication endpoints have custom payloads, different to the standard JSON resource format.

```javascript
POST /sessions/
```

To create a new session, send a username and password to the sessions endpoint, in this format:

```json
{
    "username": "{email address}",
    "password": "{password}"
}
```

**Response:**

`201 Created`: A successful session creation will return HTTP  `201` response with an empty body and a  `set-cookie` header, in the following format:

```
set-cookie: ghost-admin-api-session={session token}; Path=/ghost; Expires=Mon, 26 Aug 2019 19:14:07 GMT; HttpOnly; SameSite=Lax
```

This cookie should then be provided with every API request:

- When making the request from a browser using the `fetch` api,  pass `credentials: 'include'` to ensure cookies are sent. 
- When using XHR you should set the `withCredentials` property of the xhr to `true`
- When using cURL you can use the `--cookie` and `--cookie-jar` options to store and send cookies from a text file.

Authenticating as a user with the Owner or Admin role will give access to the full set of API endpoints. Many endpoints can be discovered by inspecting the requests made by Ghost Admin, but all undocumented endpoints should be considered unstable. 


## Endpoints

<table class="table">
<tbody>
<tr>
  <th>Resource</th>
  <th>Methods</th>
  <th>Stability</th>
</tr>
<tr>
<td><a href="/api/admin/#site">/site/</a></td>
  <td>Read</td>
  <td>Stable</td>
</tr>
<tr>
  <td><a href="/api/admin/#posts">/posts/</a></td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
</tr>
<tr>
  <td><a href="/api/admin/#pages">/pages/</a></td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
</tr>
<tr>
  <td>/tags/</td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Experimental</td>
</tr>
<tr>
  <td>/users/</td>
  <td>Browse, Read</td>
  <td>Experimental</td>
</tr>
<tr>
  <td><a href="/api/admin/#images">/images/</a></td>
  <td>Upload</td>
  <td>Stable</td>
</tr>
<tr>
  <td>/themes/</td>
  <td>Upload</td>
  <td>Experimental</td>
</tr>
<tr>
  <td>/webhooks/</td>
  <td>Add, Delete</td>
  <td>Experimental</td>
</tr>
<tr>
  <td>/subscribers/</td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Experimental</td>
</tr>
</tbody>
</table>

## Site

```JavaScript
GET /admin/site/
```


## Posts

```JavaScript
GET /admin/posts/
GET /admin/posts/{id}/
GET /admin/posts/slug/{slug}/
POST /admin/posts/
PUT /admin/posts/{id}/
DELETE /admin/posts/{id}/
```

## Pages

```JavaScript
GET /admin/pages/
GET /admin/pages/{id}/
GET /admin/pages/slug/{slug}/
POST /admin/pages/
PUT /admin/pages/{id}/
DELETE /admin/pages/{id}/
```

## Images

```JavaScript
POST /admin/images/upload/
```

## Versioning

The v2 Admin API introduced several **stable** endpoints as of **Ghost 2.16.0**. 
See the [endpoints table](#endpoints) for details of which endpoints are considered stable.
See the [stability index](/faq/api-versioning/) for full details of the API versions.
