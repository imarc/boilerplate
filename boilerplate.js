#!/usr/bin/env node
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const json = require('jsonfile')

const src = path.resolve(__dirname)
const dest = path.resolve('./')
const packageJsonPath = path.resolve('./package.json')

const scripts = {
    fractal: 'fractal',
    dev: "mix",
    prod: "mix --production",
    watch: "mix watch",
    "watch-poll": "mix watch -- -- watch-options-poll=1000",
    hot: "mix watch --hot",
    build: "npm run prod && npm run fractal build"
}

// Add the files
console.log(`Copying files to ${dest}...`)

const files = [
    'resources',
    'webpack.mix.js',
    'fractal.config.js',
]

files.forEach(file => {
    fs.copySync(path.join(src, file), path.join(dest, file))
})

// Add the scripts to package.json
console.log('Updating scripts within package.json...')
const packageJson = json.readFileSync(packageJsonPath)

const overlap = Object.keys(packageJson.scripts).filter(key => Object.keys(scripts).includes(key))
packageJson.scripts = Object.assign(scripts, packageJson.scripts)

if (overlap.length) {
    console.log(`The following scripts were already defined: ${overlap}`)
}

json.writeFileSync(packageJsonPath, packageJson)

// All done.
console.log('Done.')
console.log('Remember to run ' +
    chalk.underline('npm run dev') + ' first, then either ' +
    chalk.underline('npm run fractal start') + ' or ' +
    chalk.underline('npm run fractal build') +
    ' to create your pattern library.\n')
