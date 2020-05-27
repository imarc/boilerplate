import 'slick-carousel';
import './plugins/dropdown.plugin';
import './plugins/mobileNavigation.plugin';
import './plugins/stickyElement.plugin';
import './plugins/stickyHeader.plugin';
import './plugins/tabs.plugin';

import BpAccordion from '../styles/molecules/accordion/BpAccordion';

import Vue from 'vue';

new Vue({
    el: 'main',
    components: {
        BpAccordion,
    }
});
