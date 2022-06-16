<template>
    <button :class='[block, isOpen ? "-open" : "-closed"]'>
        <div
            :id='`${id}-control`'
            :class='`${block}__${headerElement}`'
            :aria-expanded='`${isOpen}`'
            :aria-controls='id'
            tabindex='0'
            role='button'
            @click='open'
            @keyup.enter='open'
        >
            <slot name='heading' />
            <slot name='icon'>
                <svg
                    :class='`${block}__icon`'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    fill='none'
                >
                    <polyline points='6 9 12 15 18 9' />
                </svg>
            </slot>
        </div>
        <Transition
            name='accordion__transition'
            @enter="startTransition"
            @before-leave="startTransition"
            @after-leave="endTransition"
            duration="1000"
        >
            <div
                v-if='isOpen'
                :id='id'
                ref='content'
                :class='`${block}__${contentElement}`'
                :aria-labelledby='`${id}-control`'
            >
                <slot />
            </div>
        </Transition>
    </button>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    block: { type: String, default: 'accordion' },
    headerElement: { type: String, default: 'header' },
    contentElement: { type: String, default: 'content' },
    id: { type: String, default: () => Math.random().toString(36).substr(2) },
})

const isOpen = ref(false)

const open = () => {
    isOpen.value = !isOpen.value
}

const startTransition = (el) => {
    el.style.height = el.scrollHeight + 'px'
    el.style.padding = '.5rem 0'
}

const endTransition = (el) => {
    el.style.padding = '0'
    el.style.height = ''
}

</script>