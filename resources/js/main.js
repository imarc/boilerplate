import '../styles/main.scss'

import 'slick-carousel'
import 'lazysizes'
import PortalVue from 'portal-vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import BpAccordion from '../styles/molecules/accordion/BpAccordion.vue'
import BpCarousel from '../styles/organisms/carousel/BpCarousel.vue'
import BpClickable from '../styles/utilities/clickable/BpClickable.vue'
import BpDirectional from '../styles/utilities/directional/BpDirectional.vue'
import BpDismissable from '../styles/utilities/dismissable/BpDismissable.vue'
import BpDropdown from '../styles/atoms/dropdown/BpDropdown.vue'
import BpMobileNavigation from '../styles/organisms/mobile-navigation/BpMobileNavigation.vue'
import BpModal from '../styles/organisms/modal/BpModal.vue'
import BpTabs from '../styles/molecules/tabs/BpTabs.vue'


import Vue from 'vue'

Vue.use(PortalVue)

// eslint-disable-next-line
new Vue({
    el: '#root',
    components: {
        BpAccordion,
        BpCarousel,
        BpClickable,
        BpDirectional,
        BpDismissable,
        BpDropdown,
        BpMobileNavigation,
        BpModal,
        BpTabs,
        Swiper,
        SwiperSlide,
    },
})
