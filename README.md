# Imarc Boilerplate Components &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/630eeb6d-c075-4953-ba22-e70f98270eb1/deploy-status)](https://app.netlify.com/sites/imarc-boilerplate/deploys)

This is a frontend development framework that includes a curated set of conventions and libraries, including

* [Sass](https://sass-lang.com) and [Vue](https://vuejs.org/) **components**, built to using
* [Atomic Design](https://atomicdesign.bradfrost.com/) and [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) **conventions**, integrated with
* [Laravel Mix](https://laravel-mix.com/)-based **build scripts**,
* **starter documentation** and a **pattern library** powered by [Fractal](https://fractal.build/) and [Twig](https://github.com/twigjs/twig.js).

### **[View it on Netlify](https://imarc-boilerplate.netlify.app/)**

This pairs with [imarc/boilerplate](https://github.com/imarc/boilerplate) as a version that contains with many of the components that were originally just part of that project.

**imarc/boilerplate** provides a basic pattern library, folder structure, and build files. This repository, **imarc/boilerplate-components**, provides that along with a set of basic components.



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

You can customize this behavior further by editing either the `webpack.mix.js` or `fractal.config.js` files per the Laravel Mix or Fractal documentation respectively.
