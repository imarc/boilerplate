<template>
    <div ref="dropdown" class="dropdown"
        v-on="{ mouseleave, focusout, mouseover }"
    >
        <a
            :aria-controls="id"
            :aria-expanded="String(expanded)"
            class="dropdown__link"
            :class="labelClass"
            :href="href"
            ref="link"
            @click.prevent="click"
            @keydown.space.prevent="click"
        >
            <slot name="link">{{ label }}</slot>
        </a>
        <button
            :aria-controls="id"
            :aria-expanded="String(expanded)"
            class="dropdown__button"
            @click.prevent="click"
        >
            <slot name="button" />
        </button>
        <div
            :id="id"
            class="dropdown__content"
            :class="{'-open': expanded}"
            @keydown.esc.prevent="close"
            @keydown.up.prevent="close"
        >
            <slot />
        </div>
    </div>
</template>

<script>
const Timer = function() {
    return {
        timeout: null,
        start(callback, delay) {
            if (!this.timeout) {
                console.log('start intent')
                this.timeout = setTimeout(callback, delay)
            }
        },
        clear() {
            if (this.timeout) {
                console.log('clear intent')
                clearTimeout(this.timeout)
                this.timeout = null
            }
        }
    }
}

export default {
    data: () => ({
        timer: new Timer,
        expanded: false,
    }),
    props: {
        delay: {type: Number, default: 250 },
        href: { type: String, required: true },
        id: { type: String, required: true },
        label: { type: String, required: true },
        labelClass: { default: '' },
    },
    methods: {
        mouseleave(evt) {
            this.timer.start(() => this.close(false), this.delay)
        },
        focusout(evt) {
            if (this.expanded && !this.$el.contains(evt.relatedTarget)) {
                this.close(false)
            }
        },
        click(evt) {
            if (this.expanded) {
                this.close()
            } else {
                this.open()
            }
        },
        mouseover() {
            this.timer.clear()
            if (!this.expanded) {
                this.open()
            }
        },

        open() {
            this.$emit('open')
            this.timer.clear()
            this.expanded = true
        },
        close(refocus = true) {
            this.$emit('close')
            this.timer.clear()
            this.expanded = false
            if (refocus) {
                this.$refs.link.focus()
            }
        }
    }
}
</script>
