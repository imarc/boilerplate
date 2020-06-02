'use strict'

const Path = require('path')
const consolidate = require('@frctl/consolidate')
const fractal = module.exports = require('@frctl/fractal').create()
const twig = require('twig')
const mandelbrot = require('@frctl/mandelbrot')

const theme = mandelbrot({
    skin: 'black',
    nav: [
        'docs',
        'components',
    ],
    panels: [
        'notes',
        'html',
        'resources',
    ],
})

twig.extendFunction('prefix', path => Path.join(process.env.RESOURCE_ROOT || '/', path))

fractal.components.engine(consolidate('twig', twig.twig))
fractal.components.set('ext', '.twig')

fractal.components.set('statuses.deprecated', {
    label: 'Deprecated',
    description: 'May be removed in a future version.',
    color: '#886600',
})

fractal.set('project.title', 'Design System')
fractal.components.set('default.context', { scripts: [], })
fractal.components.set('default.collator', markup => `<div style="margin:0 0 1em">${markup}</div>`)
fractal.components.set('path', __dirname + '/resources/styles')
fractal.docs.set('path', __dirname + '/resources/styles/docs')
fractal.web.set('builder.dest', __dirname + '/web/pattern-library')
fractal.web.set('builder.static.ignored', __dirname + '/web/pattern-library')
fractal.web.set('static.path', __dirname + '/web')
fractal.web.set('server.watch', true)
fractal.web.theme(theme)
