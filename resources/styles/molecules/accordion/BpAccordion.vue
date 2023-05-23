<template>
    <div :class="block">
        <button
            :id="`${id}-control`"
            :class="`${block}__${headerElement}`"
            :aria-expanded="`${isOpen}`"
            :aria-controls="id"
            @click="open"
        >
            <slot name="heading" />
            <slot name="icon">
                <div :class="`${block}__${iconWrapperElement}`">
                    <svg
                        :class="[`${block}__${iconElement}`, { '-open': isOpen }]"
                        width="24"
                        height="15"
                        viewBox="0 0 26 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.00201L13 13.002L25 1.00201"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </slot>
        </button>
        <Transition
            name="accordion__transition"
            @enter="startTransition"
            @leave="endTransition"
        >
            <div
                v-if="isOpen"
                :id="id"
                ref="contentWrapper"
                :class="`${block}__${contentWrapperElement}`"
            >
                <div
                    ref="content"
                    :class="`${block}__${contentElement}`"
                    :aria-labelledby="`${id}-control`"
                >
                    <slot />
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

defineProps({
    block: { type: String, default: 'accordion' },
    headerElement: { type: String, default: 'header' },
    iconElement: { type: String, default: 'icon' },
    iconWrapperElement: { type: String, default: 'iconWrapper' },
    contentElement: { type: String, default: 'content' },
    contentWrapperElement: { type: String, default: 'contentWrapper' },
    id: { type: String, default: () => Math.random().toString(36).substr(2) },
})

const isOpen = ref(false)
const content = ref(null)
const contentWrapper = ref(null)

const open = () => {
    isOpen.value = !isOpen.value
}

const startTransition = async (el) => {
    await nextTick()
    el.style.height = `${content.value.scrollHeight}px`
}

const endTransition = (el) => {
    el.removeAttribute('style')
}

addEventListener('resize', () => {
    if (!content.value) {
        return
    }

    const newHeight = `${content.value.scrollHeight}px`

    requestAnimationFrame(() => {
        contentWrapper.value.style.height = newHeight
    })
})
</script>
