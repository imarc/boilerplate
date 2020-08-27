<template>
    <div ref="dropdown" class="dropdown">
        <a :class="labelClass" ref="link" :href="href" :aria-controls="id" :aria-expanded="String(expanded)" class="dropdown__link" @click="click" @keydown.space="toggle">
            <slot name="link">{{ label }}</slot>
        </a>
        <button :aria-controls="id" :aria-expanded="String(expanded)" class="dropdown__button" @click="toggle">
            <slot name="button" />
        </button>
        <div :id="id" class="dropdown__content" :class="{'-open': expanded}" @keydown="close">
            <slot />
        </div>
    </div>
</template>

<script>
const FOCUSABLE_SELECTOR = [
    'a[href]',
    'audio[controls]',
    'button',
    'details summary',
    'input',
    'map area[href]',
    'select',
    'svg a[xlink\\:href]',
    '[tabindex]',
    'textarea',
    'video[controls]',
].map(t => t + ':not([tabindex^="-"]):not([disabled])').join();

export default {
    data: () => ({
        expanded: false
    }),
    props: {
        href: { type: String, required: true },
        id: { type: String, required: true },
        label: { type: String, required: true },
        labelClass: { default: '' },
    },
    mounted() {
        this.$el.addEventListener('focusout', evt => {
            if (!this.$el.contains(evt.relatedTarget)) {
                this.expanded = false
            }
        })
    },
    methods: {
        click(evt) {
            if (!this.expanded) {
                this.toggle(evt)
            }
        },
        toggle(evt) {
            evt.preventDefault()
            this.expanded = !this.expanded
        },
        close(evt) {
            if (evt.key == 'Escape' || evt.key == 'ArrowUp') {
                evt.stopPropagation()
                evt.preventDefault()
                this.expanded = false
                this.$refs.link.focus()
            } else if (evt.key in ['ArrowLeft', 'ArrowRight', 'ArrowDown']) {
                evt.stopPropagation()
                evt.preventDefault()
            }
        }
    }
}
</script>
