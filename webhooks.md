---
title: "Webhooks"
keywords:
    - webhooks
---

Webhooks are coming to Ghost! 

## Overview

Webhooks are events triggered whenever something interesting happens (like a new subscriber or some content changed) on your blog. In case of such events, a webhook allows Ghost to send POST requests to user provided URLs, to let them know and be able react to the change. The request body is a JSON object containing data about the triggered event.

Configuring webhooks can be done through the Ghost Admin user interface. Login into your Ghost Admin, click on Integrations in the sidebar and select Webhooks. The only required fields to setup a new webhook are the event you are interested in and target URL where you want to be notified. This target URL is your application URL, the endpoint where the POST request will be sent. Of course, this URL must be reachable from the Internet. Filling the secret field is optional; but if you set it, we'll send its content to your server, so that you can verify that the request is coming directly from Ghost. You can also give a name for your webhook to easily remember and manage it in future. 

Once your webhook is added, everytime the selected event happens it will send request to your server.  If your server replies with 2xx HTTP status code, the delivery is considered successful. Any other status code (or a no response / timeout) is considered a failure of some kind. Anything returned in the body of the response will be discarded.

Available Events: Currently Ghost has support for below 3 events on which webhook can be setup, but we are working on adding more:
- subscriber.added: Triggered whenever a new subscriber is added
- subscriber.deleted: Triggered whenever a subscriber is removed/deleted
- site.changed: Triggered whenever any change happens on your blog data/settings
