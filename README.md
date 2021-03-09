# Imarc Boilerplate Components &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/630eeb6d-c075-4953-ba22-e70f98270eb1/deploy-status)](https://app.netlify.com/sites/imarc-boilerplate/deploys)

This is a front-end development framework that includes a curated set of conventions and libraries, including

* [Sass](https://sass-lang.com) and [Vue](https://vuejs.org/) **components**, built using
* [Atomic Design](https://atomicdesign.bradfrost.com/) and [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) **conventions**, integrated with
* [Laravel Mix](https://laravel-mix.com/)-based **build scripts**,
* **starter documentation** and a **pattern library** powered by [Fractal](https://fractal.build/) and [Twig](https://github.com/twigjs/twig.js).

### **[View Boilerplate](https://imarc-boilerplate.netlify.app/)**


Framework, not a Library
------------------------

Unlike traditional libraries, The code included within Boilerplate is *scaffolded* into your project so you can adapt it to do your needs. It adds a fractal.config.js, webpack.mix.js, as well as everything in the resources/ folder to your project. [Learn more about Boilerplate's structure.](https://imarc-boilerplate.netlify.app/pattern-library/docs/structure.html)

Goals
-----

See [GOALS.](.github/GOALS.md)

Contributing
------------

See [CONTRIBUTING.](.github/CONTRIBUTING.md)


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

`npx` automatically installs Boilerplate and copies fractal.config.js, webpack.mix.js, and the resources/ folder to your project. It also adds dependencies and scripts to your package.json.



Usage
-----

After running `npx` above, your project will be automatically setup so you can run

* `npm run dev` to run the development build (make sourcemaps, don't minify, etc.)
* `npm run prod` to run the production build.
* `npm run watch` to watches files for changes and automatically re-run the development build.

To locally serve the pattern library:

* `npm run fractal start` to run a local server and watch for changes

And lastly, to build the pattern library:

* `npm run fractal build`

You can customize this behavior further by editing either the `webpack.mix.js` or `fractal.config.js` files per the Laravel Mix or Fractal documentation respectively.
