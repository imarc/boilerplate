import 'lazysizes'

import '../styles/main.scss'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import BpCarousel from '../styles/organisms/carousel/BpCarousel.vue'
import BpDropdown from '../styles/atoms/dropdown/BpDropdown.vue'
import BpDropdownHoverable from '../styles/atoms/dropdown/BpDropdownHoverable.vue'
import BpDropdownLink from '../styles/atoms/dropdown/BpDropdownLink.vue'
import BpModal from '../styles/organisms/modal/BpModal.vue'


import { createApp } from 'vue'

const app = createApp({
    components: {
        Swiper,
        SwiperSlide,

        BpCarousel,
        BpDropdown,
        BpDropdownHoverable,
        BpDropdownLink,
        BpModal,
    },
})

app.mount('#root')
