<script>
import { ref } from 'vue'

const TAGS_WITH_DEFAULT_BEHAVIOR = ['A', 'BUTTON', 'IFRAME', 'INPUT', 'TEXTAREA', 'VIDEO', 'MAP', 'OBJECT']

export default function useOpenable (el, focusOnClose = null) {
    let timeout = null
    const isOpen = ref(false)

    const toggle = () => {
        if (isOpen.value) {
            close()
        } else {
            open()
        }
    }

    const open = () => {
        if (isOpen.value) {
            return
        }

        isOpen.value = true
        addEventListener('focusout', checkFocus)
        addEventListener('keydown', checkKeydown)
        el.value.addEventListener('mousedown', checkMousedown)
    }

    const close = () => {
        if (!isOpen.value) {
            return
        }

        clearTimeout(timeout)

        isOpen.value = false
        removeEventListener('focusout', checkFocus)
        removeEventListener('keydown', checkKeydown)
        el.value.removeEventListener('mousedown', checkMousedown)
    }

    const keepOpen = () => clearTimeout(timeout)

    const delayClose = delay => {
        clearTimeout(timeout)
        timeout = setTimeout(close, delay)
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

    return {
        close,
        delayClose,
        isOpen,
        keepOpen,
        open,
        toggle,
    }
}
</script>
