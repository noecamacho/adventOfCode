const _ = require('lodash')

module.exports = input => {
    let niceStrings = 0
    input.map(word => {
        if (isNice(word)) niceStrings++
    })
    return niceStrings
}

const isNice = word => {
    return noOverlapPairs(word) && repeatBetween(word)
}

const noOverlapPairs = word => {
    let pairs = []
    for (let i = 0; i < word.length - 1; i++) {
        pairs.push(`${word[i]}${word[i + 1]}`)
    }
    let uniqPairs = _.uniq(pairs)
    if (pairs.length === uniqPairs.length) return false
    for (let i = 0; i < pairs.length - 1; i++) {
        if (pairs[i] === pairs[i + 1]) {
            if (i + 2 < pairs.length && pairs[i] !== pairs[i + 2]) {
                return false
            }
        }
    }
    return true
}

const repeatBetween = word => {
    let tuples = []
    for (let i = 0; i < word.length - 2; i++) {
        tuples.push(`${word[i]}${word[i + 1]}${word[i + 2]}`)
    }
    for (let i = 0; i < tuples.length; i++) {
        if (tuples[i].charAt(0) === tuples[i].charAt(2)) return true
    }
    return false
}



