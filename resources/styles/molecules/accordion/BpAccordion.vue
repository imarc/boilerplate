<template>
    <div :class="[block, isOpen ? '-open' : '-closed' ]">
        <header>
          <div 
              :class="`${block}__${headingElement}`" 
              :aria-expanded="`${isOpen}`"
              :aria-controls="uniqueId"
              :id="`${uniqueId}-control`"
              @click="open" 
              @keyup.enter="open" 
              tabindex="0"
              role="button"
              aria-level="3"
          >
              <slot name="heading" />
          </div>
        </header>
        <transition name="expand"
            @enter="startTransition"
            @after-enter="endTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
        >
            <div 
                :id="uniqueId"
                :class="`${block}__${contentElement}`" 
                ref="content"
                role="region" 
                v-if="isOpen"
                :aria-labelledby="`${uniqueId}-control`"
            >
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
        id: String,
    },
    computed: {
        uniqueId() {
          return this.id ? this.id : Math.random()
        },
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
        },
    },
};
</script>
