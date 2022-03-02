module.exports = {
    label: 'Layers',
    collated: true,
    variants: [
        ...['-primary', '-secondary', '-lightGray']
            .map(name => ({ name, label: name, context: { class: name } })),
        {
            name: 'Call to Action',
            view: 'layer--callToAction.twig',
        },
        {
            name: 'Two Column',
            view: 'layer--twoColumn.twig',
        },
        {
            label: 'Two Column (Image)',
            name: 'two-column-image',
            view: 'layer--twoColumn-image.twig',
        },
        {
            label: 'Two Column (Video)',
            name: 'two-column-video',
            view: 'layer--twoColumn-video.twig',
        },
        {
            label: 'Custom Columns',
            name: 'customColumns',
            view: 'layer--customColumns.twig',
        },
    ],
}
