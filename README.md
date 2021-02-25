# Imarc Boilerplate Components &middot; [![Netlify Status](https://api.netlify.com/api/v1/badges/630eeb6d-c075-4953-ba22-e70f98270eb1/deploy-status)](https://app.netlify.com/sites/imarc-boilerplate/deploys)

A starting-point frontend framework used by Imarc.com employees. Boilerplate Components provides:

* common user interface components such as cards, buttons, pagination, etc.
* a pattern library [(Fractal)](https://fractal.build/) to house your project's components and documentation
* module bundling and asset compilation via Laravel Mix (a.k.a the build system to compile your JavaScript and Sass)

The goals of Boilerplate Components are:
* help foster code conformity across all teams
* help get you started faster

### **[Demo: View Boilerplate](https://imarc-boilerplate.netlify.app/)**

## Getting Started

### Using Boilerplate within a project

#### Setup

Within a new project, make sure you first have an existing `package.json` file the project's root. If you don't have one, you can create one by running:
```
npm init -y
```

After that, run
```
npx imarc/boilerplate-components
```

`npx` should automatically copy the resource folder to your project, add dependencies to your package.json, and even add build scripts to your package.json file.

#### Usage

After running `npx` above, your project will be automatically setup so you can run:

* `npm run dev` to run the development build (make sourcemaps, don't minify, etc.)
* `npm run prod` to run the production build
* `npm run watch` to watches files for changes and automatically re-run the development build

To locally serve the pattern library:

* `npm run fractal start -w` to run a local server and watch for changes

And lastly, to build the pattern library:

* `npm run fractal build`

You can customize this behavior by editing either the `webpack.mix.js` or `fractal.config.js` files per the Laravel Mix or Fractal documentation, respectively.

### Contibuting back to Boilerplate Components

Create your own branch from the `next` branch with your suggested edits. Then, submit a pull request so it can be reviewed by the team.