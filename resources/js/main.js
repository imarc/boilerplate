import 'lazysizes'

import '../styles/main.scss'

import BpDropdown from '../styles/atoms/dropdown/BpDropdown.vue'
import BpDropdownHoverable from '../styles/atoms/dropdown/BpDropdownHoverable.vue'
import BpDropdownLink from '../styles/atoms/dropdown/BpDropdownLink.vue'

import { createApp } from 'vue'

const app = createApp({
    components: {
        BpDropdown,
        BpDropdownHoverable,
        BpDropdownLink,
    },
})

app.mount('#root')
