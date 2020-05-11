<template>
    <div :class="[block, isOpen ? '-open' : '-closed' ]">
        <div :class="`${block}__${headingElement}`" @click="open">
            <slot name="heading" />
        </div>
        <transition name="expand"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
        >
            <div :class="`${block}__${contentElement}`" ref="content" v-if="isOpen">
                <slot />
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data: () => ({ isOpen: false }),
    props: {
        block: { default: 'accordion' },
        headingElement: { default: 'heading' },
        contentElement: { default: 'content' },
    },
    methods: {
        open() {
            this.isOpen = !this.isOpen;
        },

        /**
         * The following methods and transition hooks are necessary to work
         * around the fact that CSS transitions can't navigate to auto values.
         */
        startTransition(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        endTransition(el) {
            el.style.height = '';
        }
    },
};
</script>
