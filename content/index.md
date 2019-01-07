---
title: "Content API"
keywords:
    - content
    - api

---

Ghost's RESTful Content API delivers published content to the world and can be accessed in a read-only manner by any client to render in a website, app or other embedded media.

Access control is managed via an API key, and even the most complex filters are made simple with our SDK. The Content API is designed to be fully cachable, meaning you can fetch data as often as you like without limitation.


## API Clients

### JavaScript Client Library

We've developed an API client for JavaScript, that will allow you to quickly and easily interact with the Content API.
The client is an advanced wrapper on top of our REST API - everything that can be done with the Content API can be done using the client, with no need to deal with the details of authentication or the request & response format.

### Handlebars

You can upgrade your Ghost theme to use the v2 Content API by specifying the `ghost-api` version in the `engines` field of your package.json. See the [handlebars reference](http://localhost:8000/api/handlebars-themes/packagejson/) for an example.

## Authentication

### Host

`https://{admin_domain}/ghost/api/v2/content/`.

Your admin domain can be different to your main domain.
Using the correct domain and protocol are critical to getting consistent behaviour, particularly when dealing with CORS in the browser.
All Ghost(Pro) blogs have a `*.ghost.io domain` as their admin domain and require https.

### Key

`?key=0123456789abcdef0123456789`.

The Content API only ever returns public data. Content API keys can be obtained from the Integrations screen in Ghost Admin. The key is provided to the API as a query parameter.

## Basic Example

```bash
curl GET "https://demo.ghost.io/ghost/api/v2/content/posts/?key=993caa7db6dee20559e99d3f90"
```


## Endpoints

The Content API provides access to Posts, Pages, Tags, Authors and Settings. All endpoints return JSON.

<table class="table">
<tbody>
<tr>
  <th>Verb</th>
  <th>Path</th>
  <th>Method</th>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/posts/</p></td>
  <td><p><a href="z3">Browse posts</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/posts/<code>{id}</code>/</p></td>
  <td><p><a href="#">Read a post by ID</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/posts/slug/<code>{slug}</code>/</p></td>
  <td><p><a href="#">Read a post by slug</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/authors/</p></td>
  <td><p><a href="z3">Browse authors</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/authors/<code>{id}</code>/</p></td>
  <td><p><a href="#">Read an author by ID</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/authors/slug/<code>{slug}</code>/</p></td>
  <td><p><a href="#">Read a author by slug</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/tags/</p></td>
  <td><p><a href="z3">Browse tags</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/tags/<code>{id}</code>/</p></td>
  <td><p><a href="#">Read a tag by ID</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/tags/slug/<code>{slug}</code>/</p></td>
  <td><p><a href="#">Read a tag by slug</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/pages/</p></td>
  <td><p><a href="z3">Browse pages</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/pages/<code>{id}</code>/</p></td>
  <td><p><a href="#">Read a page by ID</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/pages/slug/<code>{slug}</code>/</p></td>
  <td><p><a href="#">Read a page by slug</a></p></td>
</tr>
<tr>
  <td width="74"><p>GET</p></td>
  <td width="400"><p>/settings/</p></td>
  <td><p><a href="z3">Browse settings</a></p></td>
</tr>
</tbody>
</table>

The Content API supports two types of request: Browse and Read.
Browse endpoints allow you to fetch lists of resources, whereas Read endpoints allow you to fetch a single resource.

## Resources

### Posts

The most common gotcha when fetching posts from the Content API is not using the [include](#include) parameter to request related data such as tags and authors.

### Pages

Pages are structured identically to posts. The response object will look the same, only the key will be `pages`.

### Tags

### Authors

### Settings

## Parameters

The Content API can accept one of includes or fields for any

### Include

### Fields

### Formats

(Posts and Pages only)

### Filter

(Browse requests only)

### Limit

(Browse requests only)


### Page

(Browse requests only)


### Order

(Browse requests only)


## Filtering


## Changelog

<!--
This is the only section where I break the rule of not talking about past/present.
This felt like the most natural way to present some timeline type information
-->

#### Ghost v2.10.0

_(8th Jan 2019)_

The v2 Content API is production-ready as of **Ghost 2.10.0**. It is still under **active** development, but will only receive forward compatible changes.
The v0.1 Public API is officially **deprecated** and scheduled for removal in Ghost 3.0.
You can disable the v0.1 Public API in the labs section of your Admin Panel.