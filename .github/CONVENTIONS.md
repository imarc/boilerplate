# Conventions

Beyond Boilerplate's own [documented file structure conventions](https://imarc-boilerplate.netlify.app/pattern-library/docs/structure.html), here are some internal conventions that make sense to follow when contributing to Boilerplate itself. These are just meant to make sure that Boilerplate itself has consistent patterns and terminology.

## Files

In general, avoid huge files in favor of breaking up files into smaller pieces. If a single component gets too complicated, consider breaking it up or creating separate files for its modifiers.


## Code

### CSS/Sass

#### Prefer Sass Variables

Prefer Sass variables over custom properties. In general, only use custom properties if

1. If the value will change based on media queries.
2. You're going to change the value and use the value more than once.
3. You're going to change the value and the value is only part of a property. For example, a stop within a gradient.

Prefer to keep canonical values in Sass. Sass is more powerful than CSS still. You can use Sass variables in CSS expressions, but you can't use custom properties in Sass expressions.

##### Custom Property Naming

Use [BPM](https://imarc-boilerplate.netlify.app/pattern-library/docs/structure.html) for general naming. There are some project specific conventions as well:

* In general, `--color` and `--<componentName>-color` will be used to set a component's dominant color instead of text color.
* A suffix of `-contrast` (for example, `--color-contrast`) indicates that it's a near black or near white color meant to provide sufficient contrast for text when used on top of the related color.
* A suffix of `-faded` is used for repeating an existing color with a lower opacity.


##### Prefer Triple slashes for docblock comments


### Vue

#### Use The Composition API

All components should be built to use the Vue composition API. We should aim to clearly separate composable components for functionality that are used by simple, UI focused components.
