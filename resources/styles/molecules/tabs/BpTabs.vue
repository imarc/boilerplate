<template>
    <section :class="`${block}`" ref="tabSection">
        <nav :class="`${block}__${navElement}`">
            <ul :class="`${block}__${navListElement}`">
                <li
                    v-for="(tabTitle, tab) in tabs"
                    :key="tab"
                    :class="[`${block}__${tabElement}`, isActive(tab)]"
                >
                    <button
                        :id="tab"
                        :tabindex="isFocusedTab(tab) ? '0' : '-1'"
                        :class="`${block}__${buttonElement}`"
                        role="button"
                        :aria-selected="`${isActive(tab)}`"
                        :aria-controls="`${tab}-panel`"
                        @click="selectTab(tab)"
                        @keyup.enter="selectTab(tab)"
                        @keyup.space="selectTab(tab)"
                        @keyup.right="vertical ? null : navigateNextTab($event)"
                        @keyup.left="vertical ? null : navigatePrevTab($event)"
                        @keydown.down="vertical ? navigateNextTab($event) : null"
                        @keydown.up="vertical ? navigatePrevTab($event) : null"
                        @focus="setFocusTab(tab)"
                        v-text="tabTitle"
                    />
                </li>
            </ul>
        </nav>
        <div
            v-for="(tabTitle, tab) in tabs"
            :id="`${tab}-panel`"
            :key="tab"
            tabindex="0"
            :class="`${block}__${panelElement}`"
            :hidden="!isActive(tab)"
            :aria-labelledby="tab"
        >
            <div v-if="isActiveTab(tab)">
                <slot :name="`tab-panel-${tab}`" />
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref, computed, onMounted } from 'vue'

    //import useKeyboard from '/resources/js/components/useKeyboard.vue'

    const tabSection = ref(null)
    const activeTab = ref('')
    const currentFocusTab = ref('')

    

    const props = defineProps({
        block: {
            type: String, 
            default: 'tabs'
        },
        navElement: {
            type: String,
            default: 'header',
        },
        navListElement: {
            type: String,
            default: 'list',
        },
        tabElement: {
            type: String,
            default: 'tab',
        },
        buttonElement: {
            type: String,
            default: 'button',
        },
        panelElement: {
            type: String,
            default: 'panel',
        },
        activeClass: {
            type: String,
            default: '-active',
        },
        tabs: {
            type: Object,
            required: true,
        },
        initialTab: {
            type: String,
            default(props) {
                var [firstTab] = Object.keys(props.tabs)
                return firstTab
            }
        },
        setHash: {
            type: Boolean,
            default: true,
        },
        vertical: {
            type: Boolean,
            default: false,
        },
        wrap: {
            type: Boolean,
            default(props) {
                return !props.vertical
            }
        }
    })

    const tabKeys = computed(() => Object.keys(props.tabs))

    const firstTabKey = computed(() => tabKeys.value[0])

    const lastTabKey = computed(() => tabKeys.value[tabKeys.value.length - 1])

    const currentFocusTabIndex = computed(() => tabKeys.value.indexOf(currentFocusTab.value))

    const nextTabKey = computed(() => 
        {
            return currentFocusTab.value === lastTabKey.value
                ? (props.wrap ? firstTabKey.value : null)
                : tabKeys.value[currentFocusTabIndex.value + 1]
        })

    const prevTabKey = computed(() => 
        {
            return currentFocusTabIndex.value === 0
                ? (props.wrap ? lastTabKey.value : null)
                : tabKeys.value[currentFocusTabIndex.value - 1]
        })

    onMounted(() => {
        setInitFocusTab()
        setInitActiveTab()
        attachKeyboardListeners()
    })

    function setInitActiveTab () {
        if (location.hash && tabKeys.indexOf(location.hash.substr(1)) !== -1) {
            activeTab.value = location.hash.substr(1)
        } else if (props.initialTab) {
            activeTab.value = props.initialTab
        } else {
            [activeTab.value] = props.tabs
        }
    }
        
    function setFocusTab (tab) {
        currentFocusTab.value = tab
    }

    function setInitFocusTab () {
        currentFocusTab.value = props.initialTab
    }

    function selectTab (tab) {
        activeTab.value = tab
        if (props.setHash) {
            history.replaceState(undefined, undefined, `#${activeTab.value}`)
        }
    }

    function isActive (tab) {
        return tab === activeTab.value ? props.activeClass : ''
    } 

    function isActiveTab (tab) {
        return activeTab.value === tab
    }

    function isFocusedTab (tab) {
        return currentFocusTab.value === tab
    }

    function navigateNextTab (evt) {
        if (nextTabKey.value) {
            evt.preventDefault();
            const nextTabButton = tabSection.value.querySelector(`[id="${nextTabKey.value}"]`)
            nextTabButton.focus()
        }
    }
    
    function navigatePrevTab (evt) {
        if (prevTabKey.value) {
            evt.preventDefault();
            const prevTabButton = tabSection.value.querySelector(`[id="${prevTabKey.value}"]`)
            prevTabButton.focus()
        }
    }

    function attachKeyboardListeners () {
        const firstTabEl = tabSection.value.querySelector(`[id="${firstTabKey.value}"]`)
        const lastTabEl = tabSection.value.querySelector(`[id="${lastTabKey.value}"]`)

        tabSection.value.addEventListener('keydown', event => {
            if (event.keyCode === 36) {
                event.preventDefault()
                firstTabEl.focus()
                activeTab.value = firstTabKey,value
            }

            if (event.keyCode === 35) {
                event.preventDefault()
                lastTabEl.focus()
                activeTab.value = lastTabKey.value
            }
        })
    }

</script>


