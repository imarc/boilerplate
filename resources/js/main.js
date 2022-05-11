import 'lazysizes'

import '../styles/main.scss'

import BpDirectional from '../styles/utilities/directional/BpDirectional.vue'
import BpDropdown from '../styles/atoms/dropdown/BpDropdown.vue'
import BpDropdownHoverable from '../styles/atoms/dropdown/BpDropdownHoverable.vue'
import BpDropdownLink from '../styles/atoms/dropdown/BpDropdownLink.vue'
import BpModal from '../styles/organisms/modal/BpModal.vue'

import { createApp } from 'vue'

const app = createApp({
    components: {
        BpDirectional,
        BpDropdown,
        BpDropdownHoverable,
        BpDropdownLink,
        BpModal,
    },
})

app.mount('#root')
