<script>

import { ref, onMounted } from 'vue'

export default function useExpandable(items, initialItem, wrap = true, setHash = true, activeClass = '') {

    const activeItem = ref('')
    const currentFocusItem = ref('')
    const itemSection = ref(null)

    const itemKeys = Object.keys(items)
    const firstItemKey = itemKeys[0]
    const lastItemKey = itemKeys[itemKeys.length - 1]
    const currentFocusItemIndex = itemKeys.indexOf(currentFocusItem.value)

    const nextItemKey = () => {
        return currentFocusItem.value === lastItemKey
            ? (wrap ? firstItemKey : null)
            : itemKeys[currentFocusItemIndex + 1]
    }

    const prevItemKey = () => {
        return currentFocusItemIndex === 0
            ? (wrap ? lastItemKey : null)
            : itemKeys[currentFocusItemIndex - 1]
    }

    const navigateNextItem = (evt) => {
        if (nextItemKey) {
            evt.preventDefault();
            const nextItemButton = itemSection.value.querySelector(`[id="${nextItemKey}"]`)
            nextItemButton.focus()
        }
    }

    const navigatePrevItem = (evt) => {
        if (prevItemKey) {
            evt.preventDefault();
            const prevItemButton = itemSection.value.querySelector(`[id="${prevItemKey}"]`)
            prevItemButton.focus()
        }
    }

    const setInitActiveItem = () => {
        if (location.hash && itemKeys.indexOf(location.hash.substr(1)) !== -1) {
            activeItem.value = location.hash.substr(1)
        } else if (initialItem) {
            activeItem.value = initialItem
        } else {
            [activeItem.value] = items
        }
    }

    const attachKeyboardListeners = () => {
        const firstItemEl = itemSection.value.querySelector(`[id="${firstItemKey}"]`)
        const lastItemEl = itemSection.value.querySelector(`[id="${lastItemKey}"]`)

        itemSection.value.addEventListener('keydown', event => {
            if (event.keyCode === 36) {
                event.preventDefault()
                firstItemEl.focus()
                activeItem.value = firstItemKey
            }

            if (event.keyCode === 35) {
                event.preventDefault()
                lastItemEl.focus()
                activeItem.value = lastItemKey
            }
        })
    }

    const setFocusItem = (item) => {
        currentFocusItem.value = item
    }

    const setInitFocusItem = () => {
        currentFocusItem.value = initialItem
    }

    const selectItem = (item) => {
        activeItem.value = item
        if (setHash) {
            history.replaceState(undefined, undefined, `#${activeItem.value}`)
        }
    }

    const isActive = (item) => {
        return item === activeItem.value ? activeClass : ''
    } 

    const isActiveItem = (item) => {
        return activeItem.value === item
    }

    const isFocusedItem = (item) => {
        return currentFocusItem.value === item
    }

    onMounted(() => {
        setInitFocusItem()
        setInitActiveItem()
        attachKeyboardListeners()
    })
    
    return {
        activeItem,
        itemSection,
        setFocusItem,
        navigateNextItem,
        navigatePrevItem,
        selectItem,
        isActive,
        isActiveItem,
        isFocusedItem
    }
}

</script>