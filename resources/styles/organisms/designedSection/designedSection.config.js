module.exports = {
    name: 'Designed Section',
    collated: true,
    variantsName: 'designed section modifiers',
    variants: [
        ...['-primary', '-secondary', '-lightGray']
            .map(name => ({ name, label: name, context: { class: name } })),
        {
            name: 'Image with Text',
            view: 'designedSection--imageText.twig',
        },
        {
            name: 'Video with Text',
            view: 'designedSection--textVideo.twig',
        },
        {
            name: 'Custom Widths',
            label: 'Custom Widths',
            view: 'designedSection--imageText-customWidths.twig',
        },
    ],
}
