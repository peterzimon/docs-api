---
title: "Endpoints"
date: "2019-01-09"
meta_title: "Ghost Admin API Documentation"
meta_description: "Manage content via Ghost's Admin API, with secure role-based authentication. Read more on Ghost Docs 👉"
keywords:
    - "admin api"
    - "javascript"
    - "ghost api"
sidebar: "admin-api"
---

The Admin API is extensive. Ghost Admin is the primary client, therefore everything that Ghost Admin is able to do is available somewhere in the API when using User Authentication. Integrations only have access to a limited subset of endpoints - those with the most common integration uses cases, that have been stabilised.

We document only the endpoints & methods currently available to integrations. Each listed endpoint is declared either stable or experimental: stable endpoints are safe to depend on in production, experimental endpoints are useful for developer tooling where breakages won't impact live sites.

<table class="table">
<tbody>
<tr>
  <th>Resource</th>
  <th>Methods</th>
  <th>Stability</th>
</tr>
<tr>
  <td><a href="/api/admin/#posts">/posts/</a></td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
</tr>
<tr>
  <td>/pages/</td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
</tr>
<tr>
  <td>/tags/</td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
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

## Posts

Posts are the primary resource in a Ghost site, providing means for publishing, managing and displaying content.
Ghost's Admin API gives you full control over creating, updating and deleting posts, as well as a set of fetch endpoints similar to the [Content API](/api/content/#endpoints).

At the heart of every post is a `mobiledoc` field, containing a standardised JSON-based representation of your content, which can be rendered in multiple formats.

See the [posts guide](/concepts/posts/) for more details of how posts work.

```js
GET /admin/posts/
GET /admin/posts/{id}/
GET /admin/posts/slug/{slug}/
POST /admin/posts/
PUT /admin/posts/{id}/
DELETE /admin/posts/{id}/
```

### The Post Object

```JSON
{
  "id": "5c72747880443dbac53c8556",
  "slug": "welcome",
  "uuid": "22af052d-2bc1-4306-96d1-667584c797c7",
  "title": "Welcome to Ghost",
  "html": "<p>👋 Welcome, it's great to have you here.</p><p>We know that first impressions are important, so we've populated your new site with some initial <strong>getting started</strong> posts that will help you get familiar with everything in no time. This is the first one!</p><p><strong>A few things you should know upfront</strong>:</p><ol><li>Ghost is designed for ambitious, professional publishers who want to actively build a business around their content. That's who it works best for. </li><li>The entire platform can be modified and customised to suit your needs. It's very powerful, but does require some knowledge of code. Ghost is not necessarily a good platform for beginners or people who just want a simple personal blog. </li><li>For the best experience we recommend downloading the <a href=\"https://ghost.org/downloads/\">Ghost Desktop App</a> for your computer, which is the best way to access your Ghost site on a desktop device. </li></ol><p>Ghost is made by an independent non-profit organisation called the Ghost Foundation. We are 100% self funded by revenue from our <a href=\"https://ghost.org/pricing\">Ghost(Pro)</a> service, and every penny we make is re-invested into funding further development of free, open source technology for modern publishing.</p><p>The version of Ghost you are looking at right now would not have been made possible without generous contributions from the open source <a href=\"https://github.com/TryGhost\">community</a>.</p><h2 id=\"next-up-the-editor\">Next up, the editor</h2><p>The main thing you'll want to read about next is probably: <a href=\"/the-editor/\">the Ghost editor</a>. This is where the good stuff happens.</p><blockquote><em>By the way, once you're done reading, you can simply delete the default <strong>Ghost</strong> user from your team to remove all of these introductory posts! </em></blockquote>",
  "comment_id": "5b7ada404f87d200b5b1f9c8",
  "feature_image": "https://casper.ghost.org/v2.0.0/images/welcome-to-ghost.jpg",
  "featured": false,
  "status": "published",
  "meta_title": null,
  "meta_description": null,
  "created_at": "2018-08-20T15:12:00.000Z",
  "updated_at": "2018-08-20T15:12:00.000Z",
  "published_at": "2018-08-20T15:12:06.000Z",
  "custom_excerpt": "Welcome, it's great to have you here.\nWe know that first impressions are important, so we've populated your new site with some initial getting started posts that will help you get familiar with everything in no time.",
  "codeinjection_head": null,
  "codeinjection_foot": null,
  "og_image": null,
  "og_title": null,
  "og_description": null,
  "twitter_image": null,
  "twitter_title": null,
  "twitter_description": null,
  "custom_template": null,
  "primary_author": null,
  "primary_tag": null,
  "url": "https://demo.ghost.io/welcome/"
}
```

## Pages

Pages are static resources that are not included in channels or collections on the Ghost frontend.
Pages are identical to posts in terms of request and response structure when working with the APIs.
See the [pages guide](/concepts/pages/) for more details of how pages work.


```js
GET /admin/pages/
GET /admin/pages/{id}/
GET /admin/pages/slug/{slug}/
POST /admin/pages/
PUT /admin/pages/{id}/
DELETE /admin/pages/{id}/
```


## Images

Sending images to Ghost via the API allows you to upload images one at a time,and store them with a [storage adapter](/concepts/storage-adapters/).
The default adapter stores files locally in /content/images/ without making any modifications, but de-duplicating the filename.

The supported formats are JPEG, GIF, PNG and SVG.

```js
POST /admin/images/
```

### Uploading Images



The image endpoint will return the absolute URL where the post was stored.

### Image Response

```
```

Ghost does not provide endpoints for listing or modifying images after the fact.