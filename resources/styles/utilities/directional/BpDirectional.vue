<template>
    <nav ref="nav">
        <slot />
    </nav>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import useDirectional from '/resources/js/components/UseDirectional.js'

const nav = ref(null)
onMounted(() => {
    useDirectional(nav.value)
})
</script>
