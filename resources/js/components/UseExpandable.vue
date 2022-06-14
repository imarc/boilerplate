<script>

import { ref, computed, onMounted } from 'vue'

export default function useExpandable(itemSection, items, initialItem, setHash = true, wrap = true, vertical = false) {

    const activeItem = ref('')
    const currentFocusItem = ref('')

    const itemKeys = computed(() => { return Object.keys(items)})
    const firstItemKey = computed(() => { return itemKeys.value[0] })
    const lastItemKey = computed(() => { return itemKeys.value[itemKeys.value.length - 1] })
    const currentFocusItemIndex = computed(() => { return itemKeys.value.indexOf(currentFocusItem.value) })

    const nextItemKey = computed(() => {
        return currentFocusItem.value === lastItemKey.value
            ? (wrap ? firstItemKey.value : null)
            : itemKeys.value[currentFocusItemIndex.value + 1]
    })

    const prevItemKey = computed(() => {
        return currentFocusItemIndex.value === 0
            ? (wrap ? lastItemKey.value : null)
            : itemKeys.value[currentFocusItemIndex.value - 1]
    })

    const navigateNextItem = (evt) => {
        if (nextItemKey.value) {
            evt.preventDefault();
            const nextItemButton = itemSection.value.querySelector(`[id="${nextItemKey.value}"]`)
            nextItemButton.click()
        }
    }

    const navigatePrevItem = (evt) => {
        if (prevItemKey.value) {
            evt.preventDefault();
            const prevItemButton = itemSection.value.querySelector(`[id="${prevItemKey.value}"]`)
            prevItemButton.click()
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

    const attachEventListeners = () => {
        const firstItemEl = itemSection.value.querySelector(`[id="${firstItemKey.value}"]`)
        const lastItemEl = itemSection.value.querySelector(`[id="${lastItemKey.value}"]`)

        itemSection.value.addEventListener('click', event => {
            event.preventDefault()
            console.log(event.target)
            if (event.target.id) {
                event.target.focus()
                selectItem(event.target.id)
            }
        })

        itemSection.value.addEventListener('keydown', event => {
            console.log(event.keyCode)
            //Home
            if (event.keyCode === 36) {
                event.preventDefault()
                firstItemEl.focus()
                activeItem.value = firstItemKey.value
            }
            //End
            if (event.keyCode === 35) {
                event.preventDefault()
                lastItemEl.focus()
                activeItem.value = lastItemKey.value
            }
            //Left - 37
            if (event.keyCode === 37) {
                event.preventDefault()
                if (!vertical) {
                    navigatePrevItem(event)
                }
            }
            //Right - 39
            if (event.keyCode === 39) {
                event.preventDefault()
                if (!vertical) {
                    navigateNextItem(event)
                }
            }
            //Up - 38
            if (event.keyCode === 38) {
                event.preventDefault()
                if (vertical) {
                    navigatePrevItem(event)
                }
            }
            //Down - 40
            if (event.keyCode === 40) {
                event.preventDefault()
                if (vertical) {
                    navigateNextItem(event)
                }
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
        setFocusItem(item)
        if (setHash) {
            history.replaceState(undefined, undefined, `#${activeItem.value}`)
        }
    }

    onMounted(() => {
        setInitFocusItem()
        setInitActiveItem()
        attachEventListeners()
    })
    
    return {
        activeItem,
    }
}

</script>