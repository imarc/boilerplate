<template>
    <section :class="`${block}`" ref="itemSection">
        <nav :class="`${block}__${navElement}`">
            <ul :class="`${block}__${navListElement}`">
                <li
                    v-for="(tabTitle, tab) in tabs"
                    :key="tab"
                    :class="[`${block}__${tabElement}`, isActive(tab)]"
                >
                    <button
                        :id="tab"
                        :tabindex="isFocusedItem(tab) ? '0' : '-1'"
                        :class="`${block}__${buttonElement}`"
                        role="button"
                        :aria-selected="`${isActive(tab)}`"
                        :aria-controls="`${tab}-panel`"
                        @click="selectItem(tab)"
                        @keyup.enter="selectItem(tab)"
                        @keyup.space="selectItem(tab)"
                        @keyup.right="vertical ? null : navigateNextItem($event)"
                        @keyup.left="vertical ? null : navigatePrevItem($event)"
                        @keydown.down="vertical ? navigateNextItem($event) : null"
                        @keydown.up="vertical ? navigatePrevItem($event) : null"
                        @focus="setFocusItem(tab)"
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
            <div v-if="isActiveItem(tab)">
                <slot :name="`tab-panel-${tab}`" />
            </div>
        </div>
    </section>
</template>

<script setup>

    import useExpandable from '/resources/js/components/UseExpandable.vue'

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

    const { 
        itemSection, 
        setFocusItem, 
        navigateNextItem, 
        navigatePrevItem, 
        selectItem,
        isActive,
        isActiveItem,
        isFocusedItem
    } = useExpandable(props.tabs, props.initialTab, props.wrap, props.setHash, props.activeClass)


</script>


