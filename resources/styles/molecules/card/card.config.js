module.exports = {
    collated: true,
    collator: (markup, item) =>
        `<div style="margin-bottom: 3rem">
            <div style="margin-bottom: 1.5rem">${item.label}</div>
            ${markup}
         </div>`,
}
