import original from '../../data/all.json'
import custom from '../../data/customCats.json'

function testSetEquality() {
    const orig_emojis = [].concat(...original.categories.map(c => c.emojis))
    // const orig_emojis = [1, 2, 3, 4]
    const custom_emojis = [].concat(...custom.categories.map(c => c.emojis))
    // const custom_emojis = [1, 2, 3, 5]

    const onlyInOrig = orig_emojis.filter(e => !custom_emojis.includes(e))
    const onlyInCustom = custom_emojis.filter(e => !orig_emojis.includes(e))

    if (onlyInOrig.length) console.warn("Emojis missing in custom categories", onlyInOrig)
    if (onlyInCustom.length) console.warn("Emojis of custom categories not found", onlyInCustom)
}

const selectedEmojis = []
const rememberClicks = (e => {
    selectedEmojis.push(e.id);
    console.log(selectedEmojis)
})
const rememberArg = f => (...args) => { rememberClicks(args[0]); f(...args) }

export { testSetEquality, rememberClicks, rememberArg }