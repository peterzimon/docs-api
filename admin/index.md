---
title: "Admin API"
date: "2019-01-09"
meta_title: "Ghost Admin API Documentation"
meta_description: "Manage content via Ghost's Admin API, with secure role-based authentication. Read more on Ghost Docs 👉"
keywords:
    - "admin api"
    - "javascript"
    - "ghost api"
sidebar: "admin-api"
---

Managing content is done via Ghost's Admin API, which has both read and write access used to create and update content.

The Admin API provides secure role-based authentication so that you can publish from anywhere with confidence, either as a staff user via session authentication or via an integration with a third-party service.

When authenticated with the admin or owner role, the Admin API provides full control for creating, editing and deleting all data in your publication, giving you even more power and flexibility than the standard Ghost admin client.

## API Clients

### JavaScript Client Library

We've developed an [API client for JavaScript](https://docs.ghost.org/api/javascript-admin/), that simplifies authenticating with the Admin API, and makes reading and writing data a breeze.
The client is design for use with integrations and currently only supports token authentication and the endpoints available to integrations.
