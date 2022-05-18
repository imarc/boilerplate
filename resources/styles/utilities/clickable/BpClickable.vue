<script setup>
import { onMounted, onUnmounted, useSlots } from 'vue'

const props = defineProps({
    selector: {
        type: String,
        default: () => '[data-clickable]',
    },
})

let vnodes = []
const slots = useSlots()

const render = () => {
    vnodes = slots.default({ click })
    return vnodes
}

const querySelector = selector => {
    for (let vnode of vnodes) {
        const el = vnode.el?.querySelector?.(selector)
        if (el) {
            return el
        }
    }
}

const click = () => querySelector(props.selector)?.click()

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
</script>
