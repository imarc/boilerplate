module.exports = {
    name: 'Testimonal Section',
    variantsName: 'Call to Action Section Modifiers',
    collated: true,
    variants: ['-primary', '-secondary', '-lightGray']
        .map(name => ({ name, label: name, context: { class: name } })),
}
