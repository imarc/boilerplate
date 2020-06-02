<template>
    <div :class="[block, isOpen ? '-open' : '-closed' ]">
        <header>
            <div
                :id="`${uniqueId}-control`"
                :class="`${block}__${headingElement}`"
                :aria-expanded="`${isOpen}`"
                :aria-controls="uniqueId"
                tabindex="0"
                role="button"
                @click="open"
                @keyup.enter="open"
            >
                <slot name="heading" />
            </div>
        </header>
        <transition
            name="expand"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
        >
            <div
                v-if="isOpen"
                :id="uniqueId"
                ref="content"
                :class="`${block}__${contentElement}`"
                :aria-labelledby="`${uniqueId}-control`"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: {
        block: { default: 'accordion', },
        headingElement: { default: 'heading', },
        contentElement: { default: 'content', },
        id: String,
    },
    data: () => ({ isOpen: false, }),
    computed: {
        uniqueId () {
            return this.id ? this.id : Math.random()
        },
    },
    methods: {
        open () {
            this.isOpen = !this.isOpen
        },

        /**
         * The following methods and transition hooks are necessary to work
         * around the fact that CSS transitions can't navigate to auto values.
         */
        startTransition (el) {
            el.style.height = el.scrollHeight + 'px'
        },
        endTransition (el) {
            el.style.height = ''
        },
    },
}
</script>
