/**
 * @function useIntersectionObserver
 * @param  {HTMLElement} elementToWatch elementToWatch
 * @param  {function} callback          callback once element is intersecting
 * @param  {function} outCallback       callback once element is not intersecting (optional)
 * @param  {Boolen} once                if callback only run one time
 * @param  {Object} options             Intersection Observer API options
 * @return {Object}
 */
import {
    ref,
    onMounted,
    onUnmounted
} from 'vue'

export function useIntersectionObserver (
    elementToWatch,
    callback,
    config = {
        outCallback: () => {},
        once: true,
        options: {
            threshold: 0.1,
        },
    }
) {
    const isIntersecting = ref(false)

    const { outCallback, once, options } = config

    // Initiate the observer
    const observer = new IntersectionObserver(([entry]) => {
        // If the element to watch is intersecting within the threshold
        if (entry && entry.isIntersecting) {
            // Update the reactive isIntersection
            isIntersecting.value = true

            // Run the callback
            callback(entry.target)

            // If the callback should only run once, unobserve the element
            if (once) {
                observer.unobserve(entry.target)
            }
        } else {
            // Update the reactive isIntersection
            isIntersecting.value = false

            // Run the callback
            outCallback(entry.target)
        }
    }, options)

    // Observe/unobserve within lifecycle hooks
    onMounted(() => observer.observe(elementToWatch))
    onUnmounted(() => observer.disconnect())

    // Returns reactive version of isIntersecting, and the observer itself
    return {
        isIntersecting,
        observer,
    }
};
