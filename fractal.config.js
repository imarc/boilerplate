'use strict'

const Path = require('path')
const fractal = module.exports = require('@frctl/fractal').create()
const mandelbrot = require('@frctl/mandelbrot')
const theme = require('fractal-theme-hydrogen')(mandelbrot)
const twigAdapter = require('@frctl/twig')()

fractal.components.engine(twigAdapter)
fractal.components.set('ext', '.twig')
fractal.web.theme(theme)

fractal.components.set('statuses.deprecated', {
    label: 'Deprecated',
    description: 'May be removed in a future version.',
    color: '#886600',
})

fractal.set('project.title', 'Pattern Library')
//fractal.components.set('default.collator', markup => `<div style="margin:0 0 1em">${markup}</div>`)
fractal.components.set('path', __dirname + '/resources/styles')
fractal.docs.set('path', __dirname + '/resources/styles/docs')
fractal.web.set('builder.dest', __dirname + '/web/pattern-library')
fractal.web.set('static.path', __dirname + '/web')
fractal.web.set('builder.static.ignored', [
    Path.join(__dirname, '/web/pattern-library'),
    Path.join(__dirname, '/web/index.php')
])
fractal.web.set('server.sync', true)
fractal.web.set('server.syncOptions', { watchOptions: { ignored: /\.scss$/i } });
