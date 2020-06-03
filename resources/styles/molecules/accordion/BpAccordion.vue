<template>
    <div :class="[block, isOpen ? '-open' : '-closed' ]">
        <header>
            <div
                :id="`${id}-control`"
                :class="`${block}__${headingElement}`"
                :aria-expanded="`${isOpen}`"
                :aria-controls="id"
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
                :id="id"
                ref="content"
                :class="`${block}__${contentElement}`"
                :aria-labelledby="`${id}-control`"
            >
                <slot />
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    props: {
        block: {
            type: String,
            default: 'accordion',
        },
        headingElement: {
            type: String,
            default: 'heading',
        },
        contentElement: {
            type: String,
            default: 'content',
        },
        id: {
            type: String,
            default: () => Math.random().toString(36).substr(2),
        },
    },
    data: () => ({ isOpen: false }),
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
