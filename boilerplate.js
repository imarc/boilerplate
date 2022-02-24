#!/usr/bin/env node
const chalk = require('chalk')
const fs = require('fs-extra')
const path = require('path')
const json = require('jsonfile')

const src = path.resolve(__dirname)
const dest = path.resolve('./')
const packageJsonPath = path.resolve('./package.json')

const scripts = {
    lint: 'eslint resources',
    fractal: 'fractal',
    dev: 'vite',
    preview: 'vite preview',
    prod: 'vite build',
}

// Add the files
console.log(`Copying files to ${dest}...`)

const files = [
    'resources',
    'vite.config.js',
    'fractal.config.js',
]

files.forEach(file => {
    fs.copySync(path.join(src, file), path.join(dest, file), { overwrite: false })
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
console.log('Run ' + chalk.underline('npm run dev') + ' to get started.\n')
