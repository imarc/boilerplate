<script>
import Vue from 'vue'

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

const KEY_FILTERS = {
    ArrowRight: ({x, y}) => x > 0 && Math.abs(x) > Math.abs(y),
    ArrowLeft: ({x, y}) => x < 0 && Math.abs(x) > Math.abs(y),
    ArrowDown: ({x, y}) => y > 0 && Math.abs(x) < Math.abs(y),
    ArrowUp: ({x, y}) => y < 0 && Math.abs(x) < Math.abs(y),
}

export default {
    methods: {
        focusable() {
            return this.$el.querySelectorAll(FOCUSABLE_SELECTOR)
        },

        getCoordinates(el) {
            return {
                x: el.offsetLeft + el.offsetWidth / 2,
                y: el.offsetTop + el.offsetHeight / 2
            }
        },

        withCoordinates(nodeList, origin) {
            const elements = [];
            const {x: originX, y: originY} = this.getCoordinates(origin);

            nodeList.forEach(el => {
                let {x, y} = this.getCoordinates(el);
                x -= originX
                y -= originY

                el.setAttribute('data-xy', `${x} ${y}`)

                elements.push({ el, x, y, d: x*x + y*y })
            })

            return elements
        },

        findTarget(el, key) {
            const elements = this.withCoordinates(this.focusable(), el)
            return elements
                .filter(key in KEY_FILTERS ? KEY_FILTERS[key] : x => x)
                .reduce((closest, n) => n.d < closest.d ?  n : closest, { d: Infinity })
                .el
        },

        keydown(evt) {
            const newTarget = this.findTarget(evt.target, evt.key)
            if (newTarget) {
                evt.stopPropagation()
                newTarget.focus()
                return false
            }

            return true
        }
    },
    mounted() {
        this.$el.addEventListener('keydown', this.keydown)
    },

    render() {
        return this.$slots.default
    }
}
</script>
