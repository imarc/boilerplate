---
label: Variables
order: 4
---

Here's descriptions and explanations for the sass variables included in Boilerplate.

## Layout

```
$container: 1200px !default;
$gutter: 30px !default;
$columns: 12 !default;
```

`$container` is primarily used with `.container` and the container mixin, sets a max width for the page including padding on the left and right of `$gutter`. `$columns` is used to set the default number of columns when using [candlepin](https://github.com/khamer/candlepin) mixins and classes.


## Fonts

```
$font-stack: Arial, sans-serif !default;
```

The default font stack. This is mainly helpful for elements that don't inherit fonts properly (like inputs.)


## Colors

Boilerplate provides a few different conventions for colors as well as a set of color scales.


### Brand Colors

A place to set up shorthands for brand colors, such as `$primary` and `$secondary`.


### Meaningful Colors

This is standard set of colors that each of specific meanings. Nearly every site will use all of these:

* `$confirm` – Indicates a confirmation action such as _confirm_, _save_ or _complete_. Generally not the same colors used for _next_ or _continue_ actions.
* `$danger` - Indicates a destructive action such as _remove_ or _unsubscribe_. Shouldn't be used for actions like _close_ or _cancel_, as those aren't destructive.
* `$disabled` – Used to show that a button or input is disabled.
* `$error` – Used for error messaging and failed validation. Semantically different than `$danger` but often very similar colors are used.
* `$info` – Used for normal messaging; meant to draw some attention but not as high priority as `$error`, `$success`, or `$warning`.
* `$success` – Used for success or confirmation messages.
* `$warning` – Used for warning messages, such as alerts or closures.


### Color Modifiers

```
$color-modifiers: (
    primary: $primary,
    secondary: $secondary,
    danger: $danger,
    confirm: $confirm,

    success: $success,
    warning: $warning,
    error: $error,

    info: $info,
    disabled: $disabled,
) !default;
```

`$color-modifiers` is a map of BEM modifier names to colors for use with the `color-modifiers` mixin.



### Applied Colors

```
$plain-text: $gray-900 !default;
$meta-text: $gray-500 !default;
$link: $primary !default;
$link-hover: $blue-400 !default;
$border: $gray-200 !default;
```

This is a set of common uses for colors – body text, meta text, links, link hovers, and borders.



## Breakpoints

```
$breakpoints: (
  md: 576px,
  lg: 1024px,
  xl: 1200px
) !default;
```

Boilerplate comes with 3 breakpoints for 4 ranges.


## Shadows

```
$low-shadow: 0 0px 0.5px rgba(0, 0, 0, 0.057), 0 0px 1.8px rgba(0, 0, 0, 0.083), 0 0px 8px rgba(0, 0, 0, 0.14);
$med-shadow: 0 0.5px 1.1px rgba(0, 0, 0, 0.057), 0 1.8px 3.6px rgba(0, 0, 0, 0.083), 0 8px 16px rgba(0, 0, 0, 0.14);
$high-shadow: 0 1.1px 2.1px rgba(0, 0, 0, 0.057), 0 3.6px 7.1px rgba(0, 0, 0, 0.083), 0 16px 32px rgba(0, 0, 0, 0.14);
```

Boilerplate provides three prebuilt box shadows. This helps ensure a consistent set of elevations are used throughout the UI:

* `$low-shadow` should be used for elements that are still 'in the page' such as tabs or beneath a sticky header.
* `$med-shadow` is for elements that are raised but still within the flow of the page, such as cards, raised buttons and raised images.
* `$high-shadow` is for elements that are 'on top of the page' such as pop ups, overlays, or floating action buttons.


## Easings and Durations

Boilerplate provides three prebuilt easings and three durations for transitions and animations.

```
$ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1);
$ease-in-quint: cubic-bezier(0.64, 0, 0.78, 0);
$ease-in-out-quint: cubic-bezier(0.83, 0, 0.17, 1);

$fade-easing: $ease-out-quint;
$entrance-easing: $ease-out-quint;
$exit-easing: $ease-in-quint;
```

Quintic easing was picked as a good looking default.

* All fades should use `$fade-easing` for a consistent feel.
* `$entrance-easing` ensures that the elements feel responsive by moving quickly as they enter and slow to a stop.
* Whereas `$exit-easing` let's users have a final glimpse of the element before it picks up speed and flies away.


Timings were based on existing guidelines from Google, Microsoft, and IBM:

* `$fast` should be used for micro-animations and fades.
* `$moderate` is for mid-sized animations that act as a cue to the user, such as for mega menus and notifications.
* `$slow` is for large animations such as full page transitions, overlays, and background fades.

When picking transition durations, remember that these are only transitions; something the user has to sit through while waiting for the action they wanted to complete. While transitions can make the page feel more responsive, overdone will make the page feel sluggish.
