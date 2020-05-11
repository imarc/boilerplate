import 'slick-carousel';
import './plugins/dropdown.plugin';
import './plugins/mobileNavigation.plugin';
import './plugins/stickyElement.plugin';
import './plugins/stickyHeader.plugin';
import './plugins/tabs.plugin';

import BAccordion from '../styles/molecules/accordion/BAccordion';

import Vue from 'vue';

new Vue({
    el: 'main',
    components: {
        BAccordion,
    }
});
