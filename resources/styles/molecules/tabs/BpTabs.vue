<template>
    <section :class="`${block}`">
        <nav :class="`${block}__${navElement}`">
            <ul :class="`${block}__${navListElement}`">
                <li
                    v-for="(tabTitle, tab) in tabs"
                    :key="tab"
                    :class="[`${block}__${tabElement}`, isActive(tab)]"
                    @click="selectTab(tab)"
                    v-text="tabTitle"
                />
            </ul>
        </nav>
        <div
            v-for="(tabTitle, tab) in tabs"
            v-show="activeTab === tab"
            :key="tab"
            :class="`${block}__${panelElement}`"
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
            default: 'tab1',
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
    mounted () {
        if (location.hash && this.tabs.includes(location.hash.substr(1))) {
            this.activeTab = location.hash.substr(1)
        } else if (this.initialTab) {
            this.activeTab = this.initialTab
        } else {
            [this.activeTab] = this.tabs
        }
    },
    methods: {
        selectTab (tab) {
            this.activeTab = tab
            if (this.setHash) {
                location.hash = this.activeTab
            }
        },
        isActive (tab) {
            return tab === this.activeTab ? this.activeClass : ''
        },
    },
}
</script>
