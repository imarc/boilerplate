<script>
export default function useLazyEmbed (el) {
    const loadEmbed = async () => {
        const embed = parseEmbed(el.value.innerHTML)
        const scripts = [...embed.querySelectorAll('script')]
        scripts.forEach(script => script.remove())

        const markup = embed.querySelector('body')
        el.value.innerHTML = markup.innerHTML

        if (scripts.length) {
            await loadScripts(scripts)
        }

        el.value.focus()
    }

    const parseEmbed = string => {
        const doc = new DOMParser().parseFromString(string, 'text/html')
        doc.body.innerHTML = doc.body.textContent
        return doc
    }

    const loadScripts = async scripts => {
        const scriptsWithSrc = scripts.filter(script => script.src)
        const inlineScripts = scripts.filter(script => !script.src)

        // inline scripts most likely rely on an external api, run first
        if (scriptsWithSrc.length) {
            await fetchExternalScripts(scriptsWithSrc)
        }

        if (inlineScripts.length) {
            runInlineScripts(inlineScripts)
        }
    }

    const runInlineScripts = scripts => {
        scripts.forEach(inlineScript => {
            // eslint-disable-next-line no-eval
            eval(inlineScript.innerHTML)
        })
    }

    const fetchExternalScripts = scripts => {
        return Promise.all(
            scripts.map(tag => new Promise(resolve => {
                const el = document.createElement('script')
                el.onload = resolve
                el.src = tag.src
                document.body.appendChild(el)
            }))
        )
    }

    return { loadEmbed }
}
</script>
