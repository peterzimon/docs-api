---
title: "Properties"
date: "2019-02-05"
meta_title: "Ghost Themes - Dynamic Routing Properties"
meta_description: "A full list of all the available yaml properties within Ghost's routes.yaml configuration settings file, and how to use them correctly."
keywords:
    - handlebars
    - themes
    - urls
    - architecture
    - structure
    - properties
    - settings
    - configuration
    - routing
    - routes
sidebar: "handlebars"
---

This is a full list of all the available properties that can be used within your `routes.yaml` config file to manipulate your URL structure

### Index of all available properties

|Property|Description|
|--------|-----------|
|`template`|Determines which Handlebars template file will be used for this route. Defaults to `index.hbs` if not specified.|
|`permalink`|The generated URL for any post within a collection. Can contain dynamic variables based on post data:<ul><li>`{id}` - unique set of characters, eg. `5982d807bcf38100194efd67`</li><li>`{slug}` - the post slug, eg. `my-post`</li><li>`{year}` - publication year, eg. `2019`</li><li>`{month}` - publication month, eg. `04`</li><li>`{day}` - publication day, eg. `29`</li><li>`{primary_tag}` - slug of first tag listed in the post, eg. `news`</li><li>`{primary_author}` - slug of first author, eg. `cameron`</li></ul>|
|`filter`|Extensively filter posts returned in collections and channels using the full power and syntax of the [Ghost Content API](/api/content/#filtering)<br><br>For example `author:cameron+tag:news` will return all posts published by Cameron, tagged with 'News'. Mix and match to suit.|
|`data`|Fetch & associate data from the Ghost API with a specified route. The source route of the data will be redirected to the new custom route. <br><br><ul><li>`post.slug` - get data with => `{{#post}}`</li><li>`page.slug` - get data with => `{{#page}}`</li><li>`tag.slug` - get data with => `{{#tag}}`</li><li>`author.slug` - get data with => `{{#author}}`</li></ul>|
|`rss`|Collections and channels come with automatically generated RSS feeds which can be disabled by setting the `rss` property to `false`|
|`content_type`|Specify the mime-type for the current route, default: `HTML`|
|`controller`|Add a custom controller to a route to perform additional functions. Currently the only supported value is `channel`|
