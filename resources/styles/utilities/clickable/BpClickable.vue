<script>
import { onMounted, onUnmounted, } from 'vue'

export default {
    props: {
        selector: {
            type: String,
            default: () => '[data-clickable]',
        },
    },

    setup(props, { slots }) {
        const click = () => querySelector(props.selector)?.click()
        const vnodes = slots.default({ click })

        const querySelector = selector => {
            for (let vnode of vnodes) {
                const el = vnode.el?.querySelector?.(selector)
                if (el) {
                    return el
                }
            }
        }

        onMounted(() => {
            vnodes.forEach(({ el }) => {
                el?.addEventListener('click', click)
            })
        })

        onUnmounted(() => {
            vnodes.forEach(({ el }) => {
                el?.removeEventListener('click', click)
            })
        })

        return () => vnodes
    },
}
</script>
