<template>
    <swiper ref="mySwiper" :options="swiperOptions" class="foobar">
        <slot v-for="(_, name) in $slots" :name="name" :slot="name" />
    </swiper>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    props: {
        swiperOptions: {
            type: Object,
            default: () => ({
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                },

                slidesPerView: 2.5,
                spaceBetween: 40,
            }),
        },
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
}
</script>
