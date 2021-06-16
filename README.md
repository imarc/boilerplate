# Imarc Boilerplate &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/630eeb6d-c075-4953-ba22-e70f98270eb1/deploy-status)](https://app.netlify.com/sites/imarc-boilerplate/deploys)

This is a front-end development framework that includes a curated set of conventions and libraries, including

* [Sass](https://sass-lang.com) and [Vue](https://vuejs.org/) **components**, built using
* [Atomic Design](https://atomicdesign.bradfrost.com/) and [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) **conventions**, integrated with
* [Laravel Mix](https://laravel-mix.com/)-based **build scripts**,
* **starter documentation** and a **pattern library** powered by [Fractal](https://fractal.build/) and [Twig](https://github.com/twigjs/twig.js).

### **[View Boilerplate](https://imarc-boilerplate.netlify.app/)**


Framework, not a Library
------------------------

Unlike traditional libraries, the code included within Boilerplate is *scaffolded* into your project so you can adapt it to do your needs. It adds a `fractal.config.js`, `webpack.mix.js`, as well as everything in the `resources/` folder to your project. [Learn more about Boilerplate's structure.](https://imarc-boilerplate.netlify.app/pattern-library/docs/structure.html)

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
npm install imarc-boilerplate
npx imarc-boilerplate
```

The `npx` command automatically copies `fractal.config.js`, `webpack.mix.js`, and the `resources/` folder out of `node_modules/` into your project for your use. It also updates the npm `scripts` section within your `package.json`.



### Using the Build (Laravel Mix)

After Boilerplate is installed, you can build your front-end files by running the following:

* `npm run dev` will run the the development build (make sourcemaps, don't minify, etc.)
* `npm run watch` also runs the development build, but it watches for changes to the source files and automatically re-runs the build when they change.
* `npm run prod` will run the production build which is optimized for deployment in production.

### Using the Pattern Library (Fractal)

Boilerplate includes [Fractal](https://fractal.build/), a pattern library. Within Fractal you can see all the components available within your project. You can [see an example here.](https://imarc-boilerplate.netlify.app/)

* `npm run fractal start` runs Fractal's development server. It has hot reloading and will automatically detect when you add or remove components.
* `npm run fractal build` has Fractal build a static version of the pattern library, by default into /web/pattern-library/.

You can customize this behavior further by editing either the `webpack.mix.js` or `fractal.config.js` files per the [Laravel Mix](https://laravel-mix.com/) or [Fractal documentation](https://fractal.build/) respectively.

**While working on components within the pattern library,** you will likely want to run `npm run watch` in one terminal while running `npm run fractal start` in another. The first will watch for source file changes and the second will watch for changes to the twig and compiled files.
