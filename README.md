# Imarc Boilerplate &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/630eeb6d-c075-4953-ba22-e70f98270eb1/deploy-status)](https://app.netlify.com/sites/imarc-boilerplate/deploys)

This is a front-end development framework that includes a curated set of conventions and libraries, including

* [Sass](https://sass-lang.com) and [Vue](https://vuejs.org/) **components**, built using
* [Atomic Design](https://atomicdesign.bradfrost.com/) and [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) **conventions**, powered by
* [Vite](https://vitejs.dev/) for fast builds and hot reloading, and
* **starter documentation** and a **pattern library** powered by [Fractal](https://fractal.build/) and [Twig](https://github.com/twigjs/twig.js).

This is an *work in progress* branch that replaces Webpack/Mix with Vite. Please give us feedback!


Framework, not a Library
------------------------

Unlike traditional libraries, the code included within Boilerplate is *scaffolded* into your project so you can adapt it to do your needs. It adds a `fractal.config.js`, `vite.config.js`, as well as everything in the `resources/` folder to your project. [Learn more about Boilerplate's structure.](https://imarc-boilerplate.netlify.app/pattern-library/docs/structure.html)

Goals
-----

See [GOALS.](.github/GOALS.md)

Contributing
------------

See [CONTRIBUTING.](.github/CONTRIBUTING.md)


Getting Started
---------------

### On a new or existing project

First, make sure you have a `package.json` file. If you don't have one, you an create one by running

```
npm init -y
```

Once you have a `package.json` file, you can install Boilerplate:

```
npm install imarc-boilerplate#next
npx imarc-boilerplate#next
```

The `npx` command automatically copies `fractal.config.js`, `vite.config.js`, and the `resources/` folder out of `node_modules/` into your project for your use. It also updates the npm `scripts` section within your `package.json`.


### Using the Build (Vite)

After Boilerplate is installed, you can build your front-end files by running the following:

* `npm run lint` uses eslint to lint your code.
* `npm run dev` runs Vite's development server and fractal.
* `npm run prod` will run the production build which is optimized for deployment in production.
* `npm run preview` runs a Vite development server but serves the files build by `npm run prod` so you can test the production build locally.

### Using the Pattern Library (Fractal)

Boilerplate includes [Fractal](https://fractal.build/), a pattern library. Within Fractal you can see all the components available within your project. You can [see an example here.](https://imarc-boilerplate.netlify.app/)

Fractal's development server is automatically started whenever you're running Vite's development server, and is served by default when you run `npm run dev`. Both Vite's hot reloading of compiled code as well as Fractal's automatic detection of new components work together.

You can still run `npm run fractal build` to build a static version of the pattern library, however it requires that you have already run `npm run prod` to compile your CSS/JS first.

You can customize this behavior further by editing either the `vite.config.js` or `fractal.config.js` files per the [Vite](https://vitejs.dev/) or [Fractal documentation](https://fractal.build/) respectively.

**It's no longer needed to run `npm run watch` and `npm run fractal start` in different terminals at the same time.** Enjoy!

### Using with Craft or Laravel

To use with Craft, try the [Vite plugin](https://plugins.craftcms.com/vite) by nystudio107.

To use with Laravel, try out [Laravel Vite](https://laravel-vite.dev/).


### What's New From Boilerplate 5

* Vite
* Explicit imports (no globbing)
* Directory structure changes
* Less mixins
* Modular Sass: `@use`, `@forwards`, `_index.scss`
* Grid
* CSS custom properties
* Vue 3
* Cypress (Vitest)
