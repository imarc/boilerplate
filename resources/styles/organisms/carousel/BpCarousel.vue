<template>
    <swiper v-bind="currentVariant">
        <slot />
    </swiper>
</template>
<script setup>
import { computed } from 'vue'
import { Swiper } from 'swiper/vue'
import 'swiper/css'

const variants = {
    default: {
        spaceBetween: 40,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
        },
    },
    bleedRight: {
        slidesPerView: 1,
        spaceBetween: 0,

        breakpoints: {
            616: {
                slidesPerView: 1.5,
                spaceBetween: 40,
            },
            1000: {
                slidesPerView: 1.75,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 2.25,
                spaceBetween: 40,
            },
        },
    },
}


const currentVariant = computed(() => ({
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    ...variants[props.variant]
}))

const props = defineProps({
    variant: {
        type: String,
        default: 'default',
    },
})
</script>
