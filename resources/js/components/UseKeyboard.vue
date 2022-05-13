<script>
import { ref } from 'vue'

export default function useKeyboard (el) {

    let isActive = true

    return {
        isActive,
    }
}

</script>
