# eileenmyles.com
Redesign of [eileenmyles.com](https://eileenmyles.com), launched September 2020. The code is archived at: [github.com/mjt-vo/emyles](https://github.com/mjt-vo/emyles).

## Styles

Production styles live in **styles/main.min.css**, a minified version of **styles/main.css**.

### Layout

Most layout design is achieved via flex-box. The *body* itself is set to flex; *containers* are set to flex. *Columns, image-columns,* and *drawers* are all designed to render with *containers.*

### Images

Images will grow to 100% the width of their parents, or can a size can be set via the `.large`, `.medium` and `.small` classes.

Images can be set to float via the `.float` class.

## Navigation

The navigation is powered by **scripts/nav.js**.

For the nav to work, these elements must be included on the page:

1. link to **nav.js**
2. a call to `initNav()`
3. the nav elements, as seen below

```
<!-- NAV -->
<nav>
  <button class="nav-toggle">menu</button>
  <a href="../gigs" class="nav-link gigs" tabindex="10">gigs (under zoom)</a>
  <a href="../bio" class="nav-link bio" tabindex="10">bio/cv, pics</a>
  <a href="../books" class="nav-link books" tabindex="10">books</a>
  <a href="../recordings" class="nav-link recordings" tabindex="10">recordings</a>
  <a href="../art-journalism" class="nav-link journalism" tabindex="10">art journalism</a>
  <a href="../a-poem" class="nav-link a-poem" tabindex="10">a poem</a>
  <a href="../collected-blurbs" class="nav-link blurbs" tabindex="10">collected blurbs</a>
  <a href="../animals" class="nav-link animals" tabindex="10">ANIMALS</a>
  <a href="../" class="nav-link back">home</a>
</nav>
<!-- nav-bg-toggle prevents other features from being activated when bg is used to close menu-->
<div class="nav-bg-toggle"></div>
```

The images that display the navigation options are data-uri's. Their sources live in **images/nav**.

## Slides

Slides are powered by **scripts/slides.js**.

For slides to work, these elements must be included on the page:

1. link to **slides.js**
2. a call to `initSlides()`
3. a slide-container (`<div class="slide-container"></div>`) placed outside of the main `section` tag
4. a slide-collection, as seen below:

```
<div class="container slide-collection items" data-collection="Honey">
  <a href="#" class="slide-toggle slide-toggle-Honey" data-src="../images/slides/slide-honey-Beautiful-sensitive-prancing.jpg" data-caption="beautiful sensitive prancing" tabindex="1">
    <img class="thumb" src="../images/thumbs/thumb-honey-Beautiful-sensitive-prancing.jpg"/>
  </a>
</div>
```

Slide-collections must a data-attr *collection*. This enables the collection of all of a slide-collection's slide-toggles, which must have a class `.slide-toggle-${collection}`. Slide-toggles also must have the data-attr's *src*, which points to the slide's source file, and *caption*. The *caption* can be left blank, but should be specified.

## Switches

Switches toggle between the display of multiple items. They are powered by **scripts/switches.js**.

For switches to work, these elements must be included on the page:

1. link to **switches.js**
2. a call to `initSwitches()`
3. switch elements, as seen below:

```
<h3 class="switches">
  <a href="#" class="switch switch-Target current" tabindex="1">1</a>
  <a href="#" class="switch switch-Target" tabindex="1">2</a>
</h3>
<div class="switch-container" data-target="Target">
  <div class="active">
    <p>1</p>
  </div>
  <div>
    <p>2</p>
  </div>
</div>
```

