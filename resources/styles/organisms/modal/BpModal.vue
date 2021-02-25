<template>
    <div :class="`${block}`">
        <slot
            name="open-button"
            :open-modal="openModal"
        >
            <button
                :class="`${block}__openButton`"
                @click="openModal"
            >
                Open Modal
            </button>
        </slot>
        <MountingPortal
            v-if="open"
            mount-to="#modal"
            append
        >
            <div :class="`${block}__overlay`">
                <div
                    :class="`${block}__wrapper`"
                >
                    <div
                        ref="modalContainer"
                        :class="`${block}__container`"
                    >
                        <div
                            ref="modalContent"
                            :class="`${block}__content`"
                        >
                            <slot />
                        </div>
                        <slot
                            v-if="loading"
                            name="loading-spinner"
                        >
                            <img
                                :class="`${block}__loadingSpinner`"
                                src="/media/spinner.gif"
                                alt=""
                            >
                        </slot>
                    </div>
                    <slot
                        name="close-button"
                        :close-modal="closeModal"
                    >
                        <button
                            :class="`${block}__openButton`"
                            @click="closeModal"
                        >
                            Close Modal
                        </button>
                    </slot>
                </div>
            </div>
        </MountingPortal>
    </div>
</template>

<script>
export default {

    props: {
        block: {
            type: String,
            default: 'modal',
        },
    },

    data: () => ({
        open: false,
        loading: true,
    }),

    methods: {
        async openModal () {
            this.open = true
            await this.handleContent()
            this.loading = false
        },

        closeModal () {
            this.open = false
        },

        handleContent () {
            return new Promise((resolve, reject) => {
                this.$nextTick(async () => {
                    const { innerHTML } = this.$refs.modalContent

                    const parsedDocument = this.htmlDecode(innerHTML)
                    const body = parsedDocument.querySelector('body')
                    const scripts = [...parsedDocument.querySelectorAll('script')]

                    scripts.forEach(script => script.remove())
                    this.$refs.modalContent.innerHTML = body.innerHTML

                    if (scripts.length) {
                        await this.loadScripts(scripts)
                        resolve()
                    } else {
                        resolve()
                    }
                })
            })
        },

        htmlDecode (string) {
            const doc = new DOMParser().parseFromString(string, 'text/html')
            const body = doc.querySelector('body')
            body.innerHTML = doc.documentElement.textContent
            return doc
        },

        async loadScripts (scripts) {
            const scriptsWithSrc = scripts.filter(script => script.src)
            const inlineScripts = scripts.filter(script => !script.src)

            // inline scripts most likely rely on an external api, run first
            if (scriptsWithSrc.length) {
                await this.fetchExternalScripts(scriptsWithSrc)
            }

            if (inlineScripts.length) {
                this.runInlineScripts(inlineScripts)
            }
        },

        runInlineScripts (scripts) {
            scripts.forEach(inlineScript => {
                // eslint-disable-next-line no-eval
                eval(inlineScript.innerHTML)
            })
        },

        fetchExternalScripts (scripts) {
            return new Promise((resolve, reject) => {
                const scriptPromises = scripts.map(scriptTag => new Promise((resolve, reject) => {
                    const scriptEl = document.createElement('script')
                    scriptEl.onload = () => { resolve() }
                    scriptEl.src = scriptTag.src
                    document.body.appendChild(scriptEl)
                }))

                Promise.all(scriptPromises).then(resolve)
            })
        },

    },

}
</script>
