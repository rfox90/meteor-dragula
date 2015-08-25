# Meteor-Dragula

I wanted to provide drag and drop interfaces to a meteor project without introducing complexity or breaking reactivity. Dragula worked out of the box with Meteor's templating. Living up to its tagline:

> Drag and drop so simple it hurts

Full documentation at the source: https://github.com/bevacqua/dragula


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

This package uses git submodules after cloning run the following commands to pull in dragula:
```
git submodule init
git submodule update
```

#Changelog

## 1.0.3
  * Update Dragula to version 3.0.7

## 1.0.2
	* Update git url to not 404

## 1.0.1
	* Initial release to Atmosphere




