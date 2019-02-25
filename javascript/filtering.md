---
title: "Filtering"
date: "2019-01-09"
keywords:
    - "headless cms"
    - "javascript"
    - "ghost api"
sidebar: "javascript"
---

Ghost provides the `filter` parameter to fetch your content with endless possibilities! Especially useful for retrieving posts according to their tags, authors or other properties.

Ghost uses the NQL query language to create filters in a simple yet powerful string format. See the [NQL Syntax Reference](/api/content#filtering) for full details.

Filters are provided to client libraries via the `filter` property of any `browse` method.

```javascript
api.posts.browse({filter: 'featured:true'});
```

Incorrectly formatted filters will result in a 400 Bad Request Error. Filters that don't match any data will return an empty array.

## Working Example

```javascript
const api = new GhostContentAPI({
  host: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: 'v2'
});

// fetch 5 posts, including related tags and authors
api.posts.browse({
    filter: 'tag:fiction+tag:-fables'
})
.then((posts) => {
    posts.forEach((post) => {
        console.log(post.title);
    });
})
.catch((err) => {
    console.error(err);
});
```


### Common Filters

- `featured:true` - all resources with a field `featured` that is set to `true`.
- `featured:true+feature_image:null` - looks for featured posts which don't have a feature image set by using `+` (and).
- `tag:hash-noimg` - `tag` is an alias for `tags.slug` and `hash-noimg` would be the slug for an internal tag called `#NoImg`. This filter would allow us to find any post that has this internal tag.
- `tags:[photo, video, audio]` - filters posts which have any one of the listed tags, `[]` (grouping) is more efficient than using or when querying the same field.
- `primary_author:my-author` - `primary_author` is an alias for the first author, allowing for filtering based on the first author.
- `published_at:>'2017-06-03 23:43:12'` - looks for posts published after a date, using a date string wrapped in single quotes and the `>` operator
