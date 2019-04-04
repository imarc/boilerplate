module.exports = {
    context: {
        message: 'Testing This',
    },
    variants: [
        {
            modifier: '',
            name: 'default',
            context: {
                message: "default",
            },
        },
        {
            modifier: 'danger',
            name: 'danger',
            context: {
                message: "DANGER DETECTED",
            },
        },
    ],
};
