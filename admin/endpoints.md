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
  <td><a href="/api/admin/posts/">/posts/</a></td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
</tr>
<tr>
  <td><a href="/api/admin/pages/">/pages/</a></td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
</tr>
<tr>
  <td><a href="/api/admin/tags/">/tags/</a></td>
  <td>Browse, Read, Edit, Add, Delete</td>
  <td>Stable</td>
</tr>
<tr>
  <td><a href="/api/admin/users/">/users/</a></td>
  <td>Browse, Read</td>
  <td>Experimental</td>
</tr>
<tr>
  <td><a href="/api/admin/images/">/images/</a></td>
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
