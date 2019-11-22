import emojis from '../../../data/all.json'
import ccodes from './data.json'
import _ from 'lodash'

export default function give() {
    console.log('flags ...')
    var countries = [...ccodes]

    var flags = emojis.categories.find(c => c.id === 'flags').emojis
    flags = flags.map(f => {
        const id = f
        if (f.startsWith('flag-'))
            f = f.split('-')[1]
        return { id, cc: f.toUpperCase() }
    })
    
    flags = flags.map(f => {
        const country = countries.find(c => c["Two_Letter_Country_Code"] === f.cc)
        return { id: f.id, ...country }
    })
    var grouped = _.groupBy(flags, 'Continent_Name')
    var categories = []
    for (let g in grouped) {
        var group = grouped[g]
        categories.push({
            "id": `flags-${g.toLowerCase()}`,
            "name": g,
            "parent": "flags",
            "emojis": group.map(c=>c.id)
        })
    }
    return categories
}