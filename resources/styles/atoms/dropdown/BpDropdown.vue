<template>
    <div ref="dropdown" class="dropdown">
        <a ref="link" :href="href" :aria-controls="id" :aria-expanded="String(expanded)" class="dropdown__link" @click="click" @keydown.space="toggle">
            <slot name="link">{{ label }}</slot>
        </a>
        <button :aria-controls="id" :aria-expanded="String(expanded)" class="dropdown__button" @click="toggle">
            <slot name="button" />
        </button>
        <div :id="id" class="dropdown__content" :class="{'-open': expanded}" @keydown.escape="close">
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
        href: { required: true },
        id: { required: true },
        label: {}
    },
    mounted() {
        document.addEventListener('focusin', evt => {
            if (!this.$refs.dropdown.contains(evt.target)) {
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
            console.log('made it', evt)
            evt.preventDefault()
            this.expanded = false
            this.$refs.link.focus()
        }
    }
}
</script>
