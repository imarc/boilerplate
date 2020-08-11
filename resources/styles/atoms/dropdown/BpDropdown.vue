<template>
    <div class="dropdown">
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
export default {
    data: () => ({
        expanded: false
    }),
    props: {
        href: { required: true },
        id: { required: true },
        label: {}
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
            if (this.expanded) {
                // focus
            }
        },
        close(evt) {
            evt.preventDefault()
            this.expanded = false
            this.$refs.link.focus()
        }
    }
}
</script>
