# Meteor-Dragula

I wanted to provide drag and drop interfaces to a meteor project without introducing complexity or breaking reactivity. Dragula worked out of the box with Meteor's templating. Living up to its tagline:

> Drag and drop so simple it hurts

Full documentation at the source: https://github.com/bevacqua/dragula

# A note for the Future.

Meteor 1.3 looks to be providing NPM module support in a much better way. Once it hits there's a chance this package won't be require anymore and 
you'll be able to natively include the npm version of dragula in your application as an NPM dependancy. I'm all for this.

Once 1.3 is released I'll put together an example app and deprecate this package if everything works swimingly. 


# Getting Started

1. Add the package
```
meteor add ahref:dragula
```
2. Create a template with some containers
```
<template name="dragList">
<div class='wrapper'>
  <div id='left1' class='container'>
    {{#each items}}
      <div>{{name}}</div>
    {{/each}}
  </div>
  <div id='right1' class='container'>
  </div>
</div>
</template>
```

3. Initialize dragula in onRendered on the template
```
Template.dragList.onRendered(function(){
  dragula([document.querySelector('#left1'), document.querySelector('#right1')]);
});
```
# Example App
There's an example meteor app in example/ that includes Meteor Toys, run it and use Mongol to manipulate the items collection to check the reactivity.

# Package Development

This package uses cosmos:browserify to package up the NPM version of dragula.
The dragula file needs to be evaluated after the document body exists and as such
we do some odd stuff to only initialize the dragula global once the body exists.

Check the comments in `package.browserify.js` for more info


#Changelog
## 3.5.4
  * Started Mirroring Dragula version numbers from NPM for clarity. 
  * Swapped out from a submodule loading to cosmos:browserify

## 1.0.6
  * ~~Upgrade dragular 3.5.4~~

## 1.0.5
  * Upgrade dragular 3.5.1

## 1.0.4
  * Update Dragula to version 3.0.7

## 1.0.2
  * Update git url to not 404

## 1.0.1
  * Initial release to Atmosphere




