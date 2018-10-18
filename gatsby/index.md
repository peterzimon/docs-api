---
title: "Gatsby"
keywords:
    - gatsby
---

Using Gatsby.js as a front end with Ghost

Ghost is fully compatible with static site generators like Gatsby, but we're just getting started i this department so our documentation is a little light.

That said, this entire docs site is built with Gatsby using the Ghost API as a headless CMS, so you're looking at proof that it really works!

## Gatsby Source Ghost

Installing the official [Gatsby Source Ghost](https://www.gatsbyjs.org/packages/gatsby-source-ghost/) plugin will give you full access to the Ghost API within any Gatsby.js front end site and allow you to build data queries using GraphQL syntax. It's pretty magical.

#### Limitations

**Note:** Ghost must always contain at least one object with all fields filled out for every data type. So you should create at least one post, tag and author with every single field populated with some data. This is Gatsby limitation in how it builds queries.

## Deploying to production

Like all Gatsby sites, you can easily deploy a static front end using [Netlify](https://netlify.com). Additionally, Ghost can trigger a `site.changed` event and corresponding [webhook](/api/webhooks/) every time content is added or updated in order to trigger a rebuild of the front-end.

## Custom helpers

We're currently in the process of abstracting out our helpers from Ghost Core into a more generic JavaScript SDK. These helpers are used for doing helpful things like returning a list of linked tags or authors, and automatically generating all the correct post data for `<Helmet>`. 

If you're interested in [contributing](/concepts/contributing/) we could always use a hand!
