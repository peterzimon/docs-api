---
title: "Content"
date: "2018-10-01"
meta_title: "Content"
meta_description: "The page context is used in Ghost themes to render pages in a publication. Learn more about contexts and building custom theme!"
keywords:
    - api
    - handlebars
    - themes
    - helpers
sidebar: "handlebars"
---

The open-source Ghost editor is robust and extensible. 

## Overview

More than just a formatting toolbar, the rich editing experience within Ghost allows authors to pull in dynamic blocks of content like photos, videos, tweets, embeds, code and markdown. 

For these author-specified options to work, themes need to support the HTML markup and CSS classes that are output by the `{{content}}` helper. The following guide explains how these options interact with the theme layer and how you can ensure your theme is compatible with the latest version of the Ghost editor.


### `<figure>` and `<figcaption>`

Images and embeds will be output using the semantic `<figure>` and `<figcaption>` elements. For example:
```html
<figure class="kg-image-card">
    <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-1.jpg">
    <figcaption>An example image</figcaption>
</figure>
```
The following CSS classes are used: 

* `.kg-image-card` is used on the `<figure>` element for all image cards
* `.kg-image` is used on the `<img>` element for all image cards
* `.kg-embed-card` is used on the `<figure>` element on all embed cards

This is only relevant when authors use the built-in image and embed cards, and themes must also support images and embeds that are not wrapped in `<figure>` elements to maintain compatibility with the Markdown and HTML cards. 

### Image size options 

The editor allows three size options for images: normal, wide and full width. These size options are achieved by adding `kg-width-wide` and `kg-width-full` classes to the `<figure>` elements in the HTML output. Here's an example for wide images: 
```html
<figure class="kg-image-card kg-width-wide">
    <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-1.jpg">
</figure>
```

Normal width image cards do not have any extra CSS classes. 

#### Image size implementations

The specific implementation required for making images wider than their container width will depend on your theme's existing styles. The default Ghost theme Casper uses flexbox to implement layout using the following HTML and CSS: 

```html
<header>Ghost 2.0 - Flexbox</header>

<div class="content">
  <article>
    <h1>Image size implementation</h1>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at interdum ipsum.</p>

    
    <figure class="kg-image-card kg-width-full">
      <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-2.jpg">
      <figcaption>A full-width image</figcaption>
    </figure>

    <p>Fusce interdum velit tristique, scelerisque libero et, venenatis nisi. Maecenas euismod luctus neque nec finibus.</p>

    <figure class="kg-image-card kg-width-wide">
      <img class="kg-image" src="https://casper.ghost.org/v1.25.0/images/koenig-demo-1.jpg">
      <figcaption>A wide image</figcaption>
    </figure>

    <p>Suspendisse sed lacus efficitur, euismod nisi a, sollicitudin orci.</p>
  </article>
</div>

<footer>An example post</footer>
```
And the CSS: 
```css
.content {
  width: 70%;
  margin: 0 auto;
 }

article {
  display: flex;
  flex-direction: column;
  align-items: center;
}

article img {
  display: block;
  max-width: 100%;
}

.kg-width-wide img {
  max-width: 85vw;
}

.kg-width-full img {
  max-width: 100vw;
}

article figure {
  margin: 0;
}

article figcaption {
  text-align: center;
}

body {
  margin: 0;
}

header, footer {
  padding: 15px 25px;
  background-color: #000;
  color: #fff;
}

h1 {
  width: 100%;
}
```

#### Negative margin and transforms example

Traditional CSS layout doesn't support many elegant methods for breaking elements out of their container. The following example uses negative margins and transforms to acheive breakout. Themes that are based on Casper use similar techniques. 

```css
.content {
  width: 70%;
  margin: 0 auto;
 }

article img {
  display: block;
  max-width: 100%;
}

.kg-width-wide {
  position: relative;
  width: 85vw;
  min-width: 100%;
  margin: auto calc(50% - 50vw);
  transform: translateX(calc(50vw - 50%));
}

.kg-width-full {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

article figure {
  margin: 0;
}

article figcaption {
  text-align: center;
}

body {
  margin: 0;
}

header, footer {
  padding: 15px 25px;
  background-color: #000;
  color: #fff;
}
```

## Gallery card

The image gallery card requires some CSS and JS in your theme to function correctly. Themes will be validated to ensure they have styles for the gallery markup: 

* `.kg-gallery-container`
* `.kg-gallery-row`
* `.kg-gallery-image`

Example gallery HTML:
```html
<figure class="kg-card kg-gallery-card kg-width-wide">
    <div class="kg-gallery-container">
        <div class="kg-gallery-row">
            <div class="kg-gallery-image">
                <img src="/content/images/1.jpg" width="6720" height="4480">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/2.jpg" width="4946" height="3220">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/3.jpg" width="5560" height="3492">
            </div>
        </div>
        <div class="kg-gallery-row">
            <div class="kg-gallery-image">
                <img src="/content/images/4.jpg" width="3654" height="5473">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/5.jpg" width="4160" height="6240">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/6.jpg" width="2645" height="3967">
            </div>
        </div>
        <div class="kg-gallery-row">
            <div class="kg-gallery-image">
                <img src="/content/images/7.jpg" width="3840" height="5760">
            </div>
            <div class="kg-gallery-image">
                <img src="/content/images/8.jpg" width="3456" height="5184">
            </div>
        </div>
    </div>
</figure>
```

For a better view of how to support the gallery card in your theme, use the [Casper implementation](https://github.com/TryGhost/Casper/pull/475/files#diff-ce5e030f2e2e2a50f18199464f07ea70/), which is a generic solution that works for most themes. 


## Summary

You have discovered how to ensure your theme is compatible with the full range of extensible features in the Ghost editor. For further support with themes, head to the [forum](https://forum.ghost.org/c/themes/). 

