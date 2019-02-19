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

Managing content is done via Ghost's Admin API, which has both read and write access used to create and update content.

The Admin API provides secure role-based authentication so that you can publish from anywhere with confidence, either as a staff user via session authentication or via an integration with a third-party service.

When authenticated with the admin or owner role, the Admin API provides full control for creating, editing and deleting all data in your publication, giving you even more power and flexibility than the standard Ghost admin client.

## API Clients

### JavaScript Client Library

We've developed an [API client for JavaScript](https://docs.ghost.org/api/javascript-admin/), that simplifies authenticating with the Admin API, and makes reading and writing data a breeze.
It's good, you should use it :D Unless you're not using JavaScript...


## Authentication

Most applications integrating with the Ghost Admin API should use token authentication. User authentications is only useful if you're building a fully-fledge client where you expect different users to login and interact with your app.

### Integrations

Uses the `Authorization` HTTP header.

### User Authentication

Uses cookies. Nom nom.

Authenticating as a user provides access to all API endpoints and actions according to the role of the user.

## Endpoints

The following endpoints are the ones available to integrations, there are far more endpoints available when authenticating as a user, but most endpoints are still considered unstable.

Each listed endpoint is declared either stable or experimental: stable endpoints are safe to depend on in production, experimental endpoints are useful for developer tooling where breakages won't impact live sites.

<table class="table">
<tbody>
<tr>
  <th>Verb</th>
  <th>Path</th>
  <th>Method</th>
</tr>
<tr>
  <td>GET</td>
  <td width="300">/posts/</td>
  <td>Browse posts</td>
</tr>
</tbody>
</table>

[BIG TABLE?!]

// @NOTE: integrations have limited access for now
const whitelisted = {
    // @NOTE: stable
    posts: ['GET', 'PUT', 'DELETE', 'POST'],
    tags: ['GET', 'PUT', 'DELETE', 'POST'],
    images: ['POST'],
    // @NOTE: experimental
    users: ['GET'],
    themes: ['POST'],
    subscribers: ['GET', 'PUT', 'DELETE', 'POST'],
    configuration: ['GET'],
    actions: ['GET'],
    webhooks: ['POST', 'DELETE']
};

<table class="table">
<tbody>
<tr>
  <th>Verb</th>
  <th>Path</th>
  <th>Method</th>
</tr>
<tr>
  <td>GET</td>
  <td width="300">/posts/</td>
  <td>Browse posts</td>
</tr>

## Request & Response Format

Details of how to send and receive data, in general

## Publishing

Cover the main use case, how to publish content.

## Parameters

## Filtering

Sam

## Pagination

Same as the content API

## Versioning