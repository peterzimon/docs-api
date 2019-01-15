---
title: "Webhooks"
date: "2019-01-09"
meta_title: "Ghost Webhooks"
meta_description: "Trigger events when something happens in Ghost using webhooks configured through the Ghost Admin user interface. Find out more on Ghost Docs 👉"
keywords:
    - "webhooks"
    - "api"
    - "ghost"
    - "events"
---

Webhooks are specific events triggered when something happens in Ghost, like publishing a new post or receiving a new subscriber


## Overview

Webhooks allows Ghost to send POST requests to user-configured URLs in order to send them a notification about it. The request body is a JSON object containing data about the triggered event, and the end result could be something as simple as a Slack notification or as complex as a total redeployment of a site.


## Setting up a webhook

Configuring webhooks can be done through the Ghost Admin user interface. The only required fields to setup a new webhook are a trigger event and target URL to notify. This target URL is your application URL, the endpoint where the POST request will be sent. Of course, this URL must be reachable from the Internet.

If the server responds with 2xx HTTP response, the delivery is considered successful. Anything else is considered a failure of some kind, and anything returned in the body of the response will be discarded.


## Available events

Currently Ghost has support for below 3 events on which webhook can be setup, but we are working on adding more:

|Event|Description|
|-----|-----------|
|`site.changed`|Triggered whenever any content changes in your site data or settings|
|`subscriber.added`|Triggered whenever a new subscriber signs up for a newsletter|
|`subscriber.deleted`|Triggered when someone unsubscribes or is deleted|
