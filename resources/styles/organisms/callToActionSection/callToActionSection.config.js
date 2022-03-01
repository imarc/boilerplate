module.exports = {
    label: 'Call to Action Section',
    variantsName: 'Call to Action Section Modifiers',
    collated: true,
    variants: ['-secondary', '-lightGray']
        .map(name => ({ name, label: name, context: { class: name } })),
}
