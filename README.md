Imarc Boilerplate Components
============================

This is a framework for frontend development. It includes

* Support for [Sass](https://sass-lang.com/),
* A Pattern Library (powered by [Fractal](https://fractal.build/)), and
* A Front End Build (powered by [Laravel Mix](https://laravel-mix.com/).)

This pairs with [imarc/boilerplate](https://github.com/imarc/boilerplate) as a version that contains with many of the components that were originally just part of that project.

**imarc/boilerplate** provides a basic pattern library, folder structure, and build files. This repository, **imarc/boilerplate-components**, provides that along with a set of basic components.

[You can view these components here on GitHub](https://imarc.github.io/boilerplate-components/pattern-library/).

While we encourage you to read [the builtin documentation](https://imarc.github.io/boilerplate-components/pattern-library/), some highlights are

* Uses [Atomic Design](http://atomicdesign.bradfrost.com/)
* Uses [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/)
* Uses [Twig](https://github.com/twigjs/twig.js)


Notes
-----

Some components were carried over from version 3, but were not updated to the latest practices and syntax. These are flagged as DEPRECATED within the pattern library, and may be removed entirely in a future release.


Getting Started
---------------

Within a new project, make sure you first have an existing `package.json`. If you don't have one, you can create one by running

```
npm init -y
```

After that, run

```
npx imarc/boilerplate-components
```

NPX should automatically copy the resource folder to your project, add dependencies to your package.json, and even add scripts to your package.json file.



Usage
-----

After running `npx` above, your project will be automatically setup so you can run

* `npm run dev` to run the development build (make sourcemaps, don't minify, etc.)
* `npm run prod` to run the production build.
* `npm run watch` to watches files for changes and automatically re-run the development build.

To locally serve the pattern library:

* `npm run fractal start -w` to run a local server and watch for changes

And lastly, to build the pattern library:

* `npm run fractal build`

You can customize this behavior further by editing either the `webpack.mix.js` or `fractal.js` files per the Laravel Mix or Fractal documentation respectively.
