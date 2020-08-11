import 'slick-carousel'
import './plugins/dropdown.plugin'
import './plugins/mobileNavigation.plugin'
import './plugins/stickyElement.plugin'
import './plugins/stickyHeader.plugin'
import './plugins/tabs.plugin'

import BpAccordion from '../styles/molecules/accordion/BpAccordion'
import BpNavigation from '../styles/molecules/navigation/BpNavigation'
import BpTabs from '../styles/molecules/tabs/BpTabs'
import BpDirectional from '../styles/utilities/directional/BpDirectional'
import BpDropdown from '../styles/atoms/dropdown/BpDropdown'

import Vue from 'vue'

// eslint-disable-next-line
new Vue({
    el: 'main',
    components: {
        BpAccordion,
        BpDirectional,
        BpNavigation,
        BpTabs,
        BpDropdown,
    },
})
