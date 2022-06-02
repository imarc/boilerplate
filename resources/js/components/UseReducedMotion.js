
import { ref, onMounted, onUnmounted } from 'vue'

const prefersReducedMotion = ref(null)

if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion)')

    const setReducedMotionPreferences = () =>
        (prefersReducedMotion.value = motionMediaQuery.matches)

    onMounted(() => motionMediaQuery.addEventListener('change', setReducedMotionPreferences))
    onUnmounted(() => motionMediaQuery.removeEventListener('change', setReducedMotionPreferences))

    setReducedMotionPreferences()
} else {
    prefersReducedMotion.value = false
}

/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```
 * <script setup>
 * import { useReducedMotion } from './UseReducedMotion.js'
 *   const shouldReduceMotion = useReducedMotion()
 *   const isOpen = useRef(false)
 *   const closedX = shouldReduceMotion ? 'translateX(0)' : 'translateX(-100%)'
 * </script>
 *
 * <template>
 *  <div
 *    class="menu"
 *    :style="{
 *      opacity: isOpen ? 1 : 0,
 *      transform: isOpen ? 'translateX(0)' : closedX
 *    }"
 *  ></div>
 * </template>
 * ```
 *
 * @return boolean
 *
 * @public
 */
export function useReducedMotion () {
    const shouldReduceMotion = ref(prefersReducedMotion.value)
    return shouldReduceMotion
}
