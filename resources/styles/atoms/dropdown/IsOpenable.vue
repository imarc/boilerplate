<script>
import { ref } from 'vue'

const TAGS_WITH_DEFAULT_BEHAVIOR = ['A', 'BUTTON', 'IFRAME', 'INPUT', 'TEXTAREA', 'VIDEO', 'MAP', 'OBJECT']

export default function useOpenable (el, focusOnClose = null) {
    const isOpen = ref(false)

    const toggle = () => {
        if (isOpen.value) {
            close()
        } else {
            open()
        }
    }

    const open = () => {
        isOpen.value = true

        addEventListener('focusout', checkFocus)
        addEventListener('keydown', checkKeydown)
        el.value.addEventListener('mousedown', checkMousedown)
    }

    const close = () => {
        isOpen.value = false
        removeEventListener('focusout', checkFocus)
        removeEventListener('keydown', checkKeydown)
        el.value.removeEventListener('mousedown', checkMousedown)
    }

    const checkFocus = (event) => {
        if (isOpen.value && !el.value.contains(event.relatedTarget)) {
            close()
        }
    }

    const checkMousedown = (event) => {
        if (!TAGS_WITH_DEFAULT_BEHAVIOR.includes(event.target.tagName)) {
            event.preventDefault()
            event.target.focus()
        }
    }

    const checkKeydown = (event) => {
        if (event.key === 'Escape') {
            close()
            if (focusOnClose) {
                focusOnClose.value.focus()
            }
        }
    }

    return { open, toggle, isOpen }
}
</script>
