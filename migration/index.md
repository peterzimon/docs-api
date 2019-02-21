---
title: "Migrating to Ghost"
date: "2018-10-01"
meta_title: "How to Migrate to Ghost from other platforms - Docs"
meta_description: "A detailed guide for migrating to the Ghost publishing platform from WordPress, Tumblr, Medium, Blogger, and other CMS."
keywords:
    - import
    - export
    - migration
    - wordpress
    - tumblr
    - medium
    - drupal
    - blogger
    - migrating
---

Migrations between platforms are difficult, so we've compiled a list of resources about migrating to Ghost

Ghost imports from existing blogs via a custom JSON data format, described below. The import and export tools can be found on the 'labs' page in Ghost settings. The importer will accept either a JSON file, or a zip file containing a JSON file and the related images.



## Existing Plugins

### Official

**WordPress** users can try the [Ghost WordPress Plugin](http://wordpress.org/plugins/ghost/) to export their data - however this is currently limited to Ghost 1.0. TLDR: You'll need to export content from WordPress, import it into a Ghost 1.0 site, then upgrade that Ghost 1.0 site to the latest version of Ghost. Not ideal! We're working on it.

### Non-official
* **WordPress** users can also try the [wp2ghost](https://github.com/jonhoo/wp2ghost) command-line tool to convert their WordPress export files to Ghost-compatible JSON.
* **Jekyll** users can try the [Jekyll to Ghost Plugin](https://github.com/redwallhp/Jekyll-to-Ghost)
* **Blogger** users can try [Blogger2Ghost.NET](https://github.com/jessehouwing/Blogger2Ghost)
* **Open-source geeks** may consider importing READMEs from all of their Github repositories as regular posts using [gh2ost](https://github.com/RReverser/gh2ost) tool.
* **Tumblr** users can try [Tumblr to Ghost](https://github.com/jpadilla/tumblr-to-ghost)
* **Brave people** can try [Medium to Ghost](https://github.com/ageitgey/medium_to_ghost)

### Importing the JSON

Once you've generated the JSON go to the Labs Menu (`/ghost/settings/labs/`) on your blog to access the import form.

### Importing Images

Ghost can import images within the provided zip. The images need to be located in a folder called `content/images`.


---


## Rolling your own

If no export tools exist for your current blogging system you'll need to create one that generates a JSON file as described here. There is a full example at the end of this file. Please note that your final JSON file should have no comments in the final format. Those are only included here for readability and explanatory purposes.

### JSON file structure

First and foremost, your JSON file must contain valid JSON. You can test your file is valid using the [JSONLint](http://jsonlint.com/) online tool.

The file structure can optionally be wrapped in:

```json
{
  "db": [...contents here...]
}
```

Both with and without are valid Ghost JSON files. But you must include a `meta` and a `data` object.

### The meta object

```json
"meta": {
    "exported_on":1408552443891,
    "version":"2.14.0"
}
```

The `meta` block expects two keys, `exported_on` and `version`. `exported_on` should be an epoch timestamp in milliseconds, version should be the Ghost version the import is valid for.

### The data block

```json
"data": {
  "posts": [{...}, ...],
  "tags": [],
  "users": [],
  "posts_tags": [],
  "posts_authors": [],
  "roles_users": []
}
```

The data block contains all of the individual post, tag, and user resources that you want to import into your site, as well as the relationships between all of these resources. Each item that you include should be an array of objects.

Relationships can be defined between posts and tags, posts and users (authors) and between users and their roles.

IDs inside the file are relative to the file only, so if you have a `post` with `id: 1` and a `posts_tags` object which references `post_id: 1`, then those two things will be linked, but they do not relate to the `post` with `id: 1` in your database.


### Users

Your import file must include both any users that you want to import and any users that you need to reference in the import file in relation to other resources.


Users with an email address that matches the email address of a existing user will not be duplicated or updated. Users with an unmatched email address will be imported, but their account will be locked so that they must reset their password to login.

#### Linking objects to users

To link your resources to a user, you would specify a user id relative to the user's id in the import file. So, if you have a user with `id: 2` in your file, and a post with `published_by: 2` that post will be set to be published by that user.

All users with unmatched email addresses are imported first. Once this is complete, the importer uses the relative ID from the import file to look up which user to link, and then uses the email address to find the correct user in the database. Therefore if you want to link objects to a user that is already in the database you can specify the bare minimum information for that user so that it can be mapped correctly:

```json
"users": [{
   id: 35,
   name: "A User",
   email: "user@example.com"
}]
```

If the importer is unable to find a reference for the user inside the import file, it will default to the Owner.

#### User Roles

All users are given the role of `author` by default. If you want to specify different roles, you can do so by providing a `roles_users` object, much like the `posts_tags` object. Please note that Ghost doesn't yet support importing roles, so in this case the `role_id` is always relative to the `id` in the database, rather than in the file.

## Example

```json
{
    "meta":{
        // epoch time in milliseconds
        "exported_on":  1388805572000,
        "version":      "2.1.0"
    },
    "data":{
        "posts": [
            {
                "id": ObjectId,
                "title":        "my blog post title",
                "slug":         "my-blog-post-title",
                "mobiledoc":     "mobiledoc-structure",
                "html":         "the <i>html</i> formatted post body",
                "feature_image":        null,
                "featured":     0, // boolean indicating featured status
                "page":         0, // boolean indicating if this is a page or post
                "status":       "published", // or draft
                "language":     "en_US",
                "meta_title":   null,
                "meta_description":null,
                "author_id":    1, // the first user created has an id of 1
                "created_at":   1283780649000, // epoch time in millis
                "created_by":   1, // the first user created has an id of 1
                "updated_at":   1286958624000, // epoch time in millis
                "updated_by":   1, // the first user created has an id of 1
                "published_at": 1283780649000, // epoch time in millis
                "published_by": 1 // the first user created has an id of 1
            }
        ],
        "tags": [
            {
                "id":           ObjectId,
                "name":         "Colorado Ho!",
                "slug":         "colorado-ho",
                "description":  ""
            }
        ],
        "posts_tags": [
            {"tag_id": ObjectId, "post_id": ObjectId},
        ],
        "users": [
            {
                "id":           ObjectId,
                "name":         "user's name",
                "slug":         "users-name",
                "email":        "user@example.com",
                "profile_image":        null,
                "cover_image":        null,
                "bio":          null,
                "website":      null,
                "location":     null,
                "accessibility": null,
                "status":       "active",
                "language":     "en_US",
                "meta_title":   null,
                "meta_description": null,
                "last_login":   null,
                "created_at":   1283780649000, // epoch time in millis
                "created_by":   ObjectId,
                "updated_at":   1286958624000, // epoch time in millis
                "updated_by":   ObjectId
            }
        ],
        "roles_users": [
            {
                "user_id": ObjectId,
                "role_id": ObjectId
            }
        ]
    }
}
```



## Troubleshooting

The Ghost importer takes a JSON file to import data. It has been improved to make it far more robust and provide greater information about the status of your import.

There are a number of ways in which an import file may trigger an **Error** or a **Warning** particularly if the the JSON file was not created by Ghost but by a third-party tool.

### Error

When Ghost detects an error, the import will be cancelled, no information is imported and there should be a suitable error message to help you debug the problem. This also means there may be multiple errors in your import file but you will only see a single error during the import process.

An Error or warning should contain a relevant message on why the import was not successful along with a the relevant JSON entry that caused the issue where applicable.

An example of an error would be a JSON file that contains a null email field:

![Import Failed](../../../images/api/import-failed.png)


### Warning

Your blog may contain multiple warnings. These are issues that may want to know about but are not significant enough to prevent the data being imported. Examples of this include a duplicate user (either duplicated in your JSON file or matching an existing user) or a post linked to an unknown user.

![Import Warnings](../../../images/api/import-warnings.png)
