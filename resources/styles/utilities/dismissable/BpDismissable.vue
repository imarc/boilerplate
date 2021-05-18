<script>
export default {
    props: {
        storageKey: {
            type: String,
            required: true,
        },
        hash: {
            type: String,
            default: '',
        },
        expiration: {
            type: Number,
            default: 604800000,
        },
    },
    data: () => ({
        isDismissed: true,
    }),

    mounted () {
        const now = (new Date()).getTime()
        if (this.storageKey in localStorage) {
            const { hash, expiration } = JSON.parse(localStorage[this.storageKey])

            if (hash === this.hash && (expiration === 0 || expiration > now)) {
                return
            }
        }

        this.isDismissed = false
    },

    methods: {
        dismiss () {
            const now = (new Date()).getTime()
            this.isDismissed = true

            localStorage[this.storageKey] = JSON.stringify({
                expiration: this.expiration === 0 ? 0 : now + this.expiration,
                hash: this.hash,
            })
        },
    },
    render () {
        return this.isDismissed
            ? ''
            : this.$scopedSlots.default({
                dismiss: this.dismiss,
                isDismissed: this.isDismissed,
            })
    },
}
</script>
