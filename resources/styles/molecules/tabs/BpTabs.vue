<template>
    <section :class="`${block}`">
        <nav :class="`${block}__${navElement}`">
            <ul :class="`${block}__${navListElement}`">
                <li
                    v-for="(tabTitle, tab) in tabs"
                    :key="tab"
                    :class="[`${block}__${tabElement}`, isActive(tab)]"
                >
                    <button
                        :id="tab"
                        :tabindex="isActiveTab(tab) ? '0' : '-1'"
                        role="button"
                        :aria-selected="`${isActive(tab)}`"
                        :aria-controls="`${tab}-panel`"
                        @click="selectTab(tab)"
                        @keyup.enter="selectTab(tab)"
                        @keyup.right="nextTab(tab)"
                        @keyup.left="prevTab(tab)"
                        v-text="tabTitle"
                    />
                </li>
            </ul>
        </nav>
        <div
            v-for="(tabTitle, tab) in tabs"
            v-show="isActiveTab(tab)"
            :id="`${tab}-panel`"
            :key="tab"
            tabindex="0"
            :class="`${block}__${panelElement}`"
            :hidden="!isActiveTab(tab)"
            :aria-labelledby="tab"
        >
            <slot :name="`tab-panel-${tab}`" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        block: {
            type: String,
            default: 'tabs',
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
            default () {
                const [firstTab] = Object.keys(this.tabs)

                return firstTab
            },
        },
        setHash: {
            type: Boolean,
            default: true,
        },
    },
    data () {
        return {
            activeTab: '',
        }
    },
    computed: {
        tabKeys () {
            return Object.keys(this.tabs)
        },
        firstTabKey () {
            return this.tabKeys[0]
        },
        lastTabKey () {
            return this.tabKeys[this.tabKeys.length - 1]
        },
    },
    mounted () {
        this.setInitActiveTab()
        this.attachKeyboardListeners()
    },
    methods: {
        setInitActiveTab () {
            if (location.hash && this.tabs.includes(location.hash.substr(1))) {
                this.activeTab = location.hash.substr(1)
            } else if (this.initialTab) {
                this.activeTab = this.initialTab
            } else {
                [this.activeTab] = this.tabs
            }
        },
        selectTab (tab) {
            this.activeTab = tab
            if (this.setHash) {
                location.hash = this.activeTab
            }
        },
        isActive (tab) {
            return tab === this.activeTab ? this.activeClass : ''
        },
        isActiveTab (tab) {
            return this.activeTab === tab
        },
        nextTab (tab) {
            const currentTab = this.tabKeys.indexOf(tab)
            const nextTab = currentTab === this.lastTabKey
                ? this.firstTabKey
                : this.tabKeys[currentTab + 1]

            const nextTabButton = this.$el.querySelector(`[id="${nextTab}"]`)
            nextTabButton.focus()
        },
        prevTab (tab) {
            const currentTab = this.tabKeys.indexOf(tab)
            const prevTab = currentTab === 0
                ? this.tabKeys[this.lastTabKey]
                : this.tabKeys[currentTab - 1]

            const prevTabButton = this.$el.querySelector(`[id="${prevTab}"]`)
            prevTabButton.focus()
        },
        attachKeyboardListeners () {
            const firstTab = this.$el.querySelector(`[id="${this.firstTabKey}"]`)
            const lastTab = this.$el.querySelector(`[id="${this.lastTabKey}"]`)

            this.$el.addEventListener('keydown', event => {
                if (event.keyCode === 36) {
                    event.preventDefault()

                    firstTab.focus()
                    this.activeTab = this.firstTabKey
                }

                if (event.keyCode === 35) {
                    event.preventDefault()

                    lastTab.focus()
                    this.activeTab = this.lastTabKey
                }
            })
        },
    },
}
</script>
