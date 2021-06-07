<template>
    <bp-directional>
        <div ref="dropdown" class="dropdown" :class="{'-open': expanded}"
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
                <button
                    :aria-controls="id"
                    :aria-expanded="String(expanded)"
                    class="dropdown__button"
                    @click.prevent.stop="click"
                >
                    <slot name="button">
                        <svg class="dropdown__icon" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none"><polyline points="6 9 12 15 18 9" /></svg>
                    </slot>
                </button>
            </a>
            <transition :name="transition">
                <div v-if="expanded"
                    :id="id"
                    class="dropdown__content"
                    @keydown.esc.prevent="close"
                >
                    <slot />
                </div>
            </transition>
        </div>
    </bp-directional>
</template>

<script>
import BpDirectional from '../../utilities/directional/BpDirectional'

const Timer = function() {
    return {
        timeout: null,
        start(callback, delay) {
            if (!this.timeout) {
                this.timeout = setTimeout(callback, delay)
            }
        },
        clear() {
            if (this.timeout) {
                clearTimeout(this.timeout)
                this.timeout = null
            }
        }
    }
}

export default {
    components: {
        BpDirectional,
    },
    props: {
        delay: { type: Number, default: 0 },
        hoverable: { type: Boolean, default: false },
        href: { type: String, required: true },
        id: { type: String, required: true },
        label: { type: String, required: true },
        labelClass: { type: String, default: '' },
        transition: { type: String, default: 'dropdown__transition' },
    },
    data: () => ({
        timer: new Timer,
        expanded: false,
    }),
    methods: {
        mouseleave(evt) {
            if (this.hoverable) {
                this.timer.start(() => this.close(false), this.delay)
            }
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
            if (this.hoverable) {
                this.timer.clear()
                if (!this.expanded) {
                    this.open()
                }
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
