<template>
    <nav class="primaryNavigation">
        <ul class="primaryNavigation__list">
            <bp-directional v-for="slot in Object.keys(this.$slots)" :key="slot">
                <li class="primaryNavigation__item">
                    <slot :name="slot" />
                </li>
            </bp-directional>
        </ul>
    </nav>
</template>
<script>
import BpDirectional from '../../utilities/directional/BpDirectional'
import Vue from 'vue'

export default {
    components: {
        BpDirectional
    }
}
</script>
