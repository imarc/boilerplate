<template>
    <nav>
        <ul>
            <li><a href="#" v-focus-group:example>Link 1</a></li>
            <li><a href="#" v-focus-group:example>Link 2</a></li>
            <li><a href="#" v-focus-group:example>Link 3</a></li>
            <li><a href="#" v-focus-group:example>Link 4</a></li>
        </ul>
    </nav>
</template>
<script>
import Vue from 'vue'

Vue.directive('focus-group', (() => {
    let groups = {}


    const focusable = [
        'button:not([tabindex="-1"]):not([disabled])',
        'a[href]:not([tabindex="-1"])',
        'input:not([tabindex="-1"]):not([disabled])',
        'select:not([tabindex="-1"]):not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
        'textarea:not([tabindex="-1"]):not([disabled])',
    ].join(',');

    const group = function(el) {
        const elements = [el];

        this.dump = () => elements

        this.push = el => elements.push(el)

        this.next = el => elements[Math.min(elements.indexOf(el) + 1, elements.length - 1)]
        this.previous = el => elements[Math.max(elements.indexOf(el) - 1, 0)]
        this.first = () => elements[0]
        this.last = () => elements[elements.length - 1]
    }

    const horizontalBindings = {
        Left: 'previous',
        ArrowLeft: 'previous',
        Right: 'next',
        ArrowRight: 'next',
    }

    const verticalBindings = {
        Up: 'previous',
        ArrowUp: 'previous',
        Down: 'next',
        ArrowDown: 'next',
    }

    const homeEndBindings = {
        Home: 'first',
        End: 'last',
    }


    const getBindings = ({ horizontal, vertical, noHomeEnd }) => {
        if (!horizontal && !vertical) {
            horizontal = true
        }

        return {
            ...(horizontal ? horizontalBindings : {}),
            ...(vertical ? verticalBindings : {}),
            ...(noHomeEnd ? {} : homeEndBindings)
        }
    }

    const handler = function(key, evt, modifiers, value) {
        const group = groups[key]
        const bindings = getBindings(modifiers)

        if (evt.key in bindings) {
            const action = bindings[evt.key]
            const el = group[action](evt.target)

            value.target(el).focus()

            evt.preventDefault();
            return false;
        }

        return true;
    }

    return {
        bind(el, { arg: key, modifiers, value = { target: e => e } }) {
            if (!(key in groups)) {
                groups[key] = new group(el)
            } else {
                groups[key].push(el)
            }

            el.addEventListener('keydown', evt => handler(key, evt, modifiers, value))
        }
    }
})())

export default {
}
</script>
