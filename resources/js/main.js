import 'lazysizes'

import '../styles/main.scss'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import BpCarousel from '../styles/organisms/carousel/BpCarousel.vue'
import BpClickable from '../styles/utilities/clickable/BpClickable.js'
import BpDirectional from '../styles/utilities/directional/BpDirectional.vue'
import BpDismissable from '../styles/utilities/dismissable/BpDismissable.vue'
import BpDropdown from '../styles/atoms/dropdown/BpDropdown.vue'
import BpDropdownHoverable from '../styles/atoms/dropdown/BpDropdownHoverable.vue'
import BpDropdownLink from '../styles/atoms/dropdown/BpDropdownLink.vue'
import BpModal from '../styles/organisms/modal/BpModal.vue'
import BpTabs from '../styles/molecules/tabs/BpTabs.vue'


import { createApp } from 'vue'

const app = createApp({
    components: {
        Swiper,
        SwiperSlide,

        BpCarousel,
        BpClickable,
        BpDirectional,
        BpDismissable,
        BpDropdown,
        BpDropdownHoverable,
        BpDropdownLink,
        BpModal,
        BpTabs,
    },
})

app.mount('#root')
