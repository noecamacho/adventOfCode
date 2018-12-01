const _ = require('lodash')

module.exports = input => {
    let niceStrings = 0
    input.map(word => {
        if (isNice(word)) niceStrings++
    })
    return niceStrings
}

const isNice = word => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const forbidden = ['ab', 'cd', 'pq', 'xy']

    let doesNot = true, numVowels = 0, doubleFound, prevLetter

    for (let i = 0; i < word.length; i++) {
        if (_.includes(vowels, word[i])) numVowels++
        if (i < word.length - 1 && _.includes(forbidden, `${word[i]}${word[i + 1]}`)) {
            doesNot = false
            break
        }
        if (i > 0 && prevLetter === word.charAt(i)) {
            doubleFound = true
        }
        prevLetter = word.charAt(i)
    }
    return numVowels >= 3 && doubleFound && doesNot
}
