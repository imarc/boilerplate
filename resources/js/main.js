import "/node_modules/normalize.css/normalize.css"
import "/node_modules/mmenu-light/dist/mmenu-light.css"
import 'lazysizes'

import '../styles/main.scss'

import BpAccordion from '../styles/molecules/accordion/BpAccordion.vue'
import BpClickable from '../styles/utilities/clickable/BpClickable.js'
import BpDirectional from '../styles/utilities/directional/BpDirectional.vue'
import BpDismissable from '../styles/utilities/dismissable/BpDismissable.vue'
import BpDropdown from '../styles/atoms/dropdown/BpDropdown.vue'
import BpDropdownHoverable from '../styles/atoms/dropdown/BpDropdownHoverable.vue'
import BpDropdownLink from '../styles/atoms/dropdown/BpDropdownLink.vue'
import BpMobileNavigation from '../styles/organisms/mobile-navigation/BpMobileNavigation.vue'
import BpModal from '../styles/organisms/modal/BpModal.vue'
import BpTabs from '../styles/molecules/tabs/BpTabs.vue'

import { createApp } from 'vue'

const app = createApp({
    components: {
        Swiper,
        SwiperSlide,

        BpAccordion,
        BpCarousel,
        BpClickable,
        BpDirectional,
        BpDismissable,
        BpDropdown,
        BpDropdownHoverable,
        BpDropdownLink,
        BpMobileNavigation,
        BpModal,
        BpTabs,
    },
})

app.mount('#root')
