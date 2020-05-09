---
title: File Structure
order: 2
---

All files are within `resources/`:

* Sass code, documentation and example markup is within `/resources/styles/`
* JavaScript code is within `/resources/js/`

Within `/resource/styles/`, there are the folowing directories from Atomic Design:

* **atoms/**
* **molecules/**
* **organisms/**
* **templates/**
* **pages/**

We also have two other directories:

* **docs/** - project specific, front end documentation (such as this.)
* **utilities/** - utilities that aren't components.

There's also a handful of Sass files within this folder itself:

* **main.scss** - This is the root file that Boilerplate compiles to **main.css**. It just contains `@import` statements.
* **variables.scss** - contains Sass variables.
* **utilities.scss** - contains Sass utilities that are too simple to define standalone.
* **base.scss** - Base styles, such as typography.
* **mixins.scss** - contains Sass mixins and functions that don't make sense to get their own folder.


## Component File Structure and Naming

### Quick Reference

* **styles/&lt;category&gt;/&lt;component-name&gt;/&lt;component-name&gt;.scss**
* **styles/&lt;category&gt;/&lt;component-name&gt;/&lt;component-name&gt;.twig**
* **styles/&lt;category&gt;/&lt;component-name&gt;/README.md**
* **styles/&lt;category&gt;/&lt;component-name&gt;/&lt;component-name&gt;[--&lt;variant-name&gt;].twig**
* **styles/&lt;category&gt;/&lt;component-name&gt;/&lt;component-name&gt;.js**
* **styles/&lt;category&gt;/&lt;component-name&gt;/&lt;component-name&gt;.config.json**

### Explanation

Components are first categorized and put in one of the following folders, based on Atomic Design principles: **utilities/**, **atoms/**, **molecules/**, **organisms/**, **templates/**, or **pages/**. [Atomic Design](http://atomicdesign.bradfrost.com/) is a methodology for breaking down and front end development into manageable, modular pieces that are easier to maintain. Boilerplate uses Atomic Design because it is useful, thought out, well documented, and has a strong community.

The notable addition to the typical Atomic Design categories is **utilities/** (although Atomic Design doesn't oppose this kind of category at all.) The **utilities/** folder is meant for utilities - code that isn't specific to a single component.

*It's okay for components to change categories during development.* Whenever you're trying to choose a category for a component, make your best guess, erring on making it smaller. For example, if you're torn between something being an atom or a molecule, start with atom.

Each component should have its own folder. These folder names should use `kebab-case`. Within that folder, a component may contain the following:

* A Sass file, with the same name as the folder, defining the styles for this component.
* A Twig file, with the same name as the folder, containing example markup for this component.
* Additional Twig files, showing additional examples markup (what [Fractal calls Variants](#)) for this component.
* A README.md, with additional, component specific documentation.
* A JavaScript file, with the same name as the folder, meant to work with the example markup to render the component. Note that this isn't meant to be the source code of a JavaScript plugin or library, but rather the code required to *use* on the example markup.
* A [Fractal configuration file](#), defining how to display this component within the pattern library.

For example, for buttons, we have the following:

* **atoms/button/**
* **atoms/button/button.scss**
* **atoms/button/button.twig**
* **atoms/button/button--disabled.twig**
* **atoms/button/button.config.json**
