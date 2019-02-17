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

### Token Authentication

Uses the `Authorization` HTTP header.

### User Authentication

Uses cookies. Nom nom.


## Endpoints

Each endpoint is declared either stable or experimental: stable endpoints are safe to depend on in production, experimental endpoints are useful for developer tooling where breakages won't impact live sites.

[BIG TABLE?!]

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