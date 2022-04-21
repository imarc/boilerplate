import 'lazysizes'

import '../styles/main.scss'

import BpDropdown from '../styles/atoms/dropdown/BpDropdown.vue'
import BpDropdownLink from '../styles/atoms/dropdown/BpDropdownLink.vue'

import { createApp } from 'vue'

const app = createApp({
    components: {
        BpDropdown,
        BpDropdownLink,
    },
})

app.mount('#root')
