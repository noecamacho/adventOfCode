const _ = require('lodash')

module.exports = input => {
    let double = 0, triple = 0
    _.map(input, word => {
        let result = _.reduce(word, (acc, val) => {
            acc[val] ? acc[val]++ : acc[val] = 1
            return acc
        }, {})
        let doubleFound = false, tripleFound = false
        _.map(result, val => {
            if (val === 2) doubleFound = true
            if (val >= 3) tripleFound = true
        })
        if (doubleFound) double++
        if (tripleFound) triple++
    })
    return double * triple
}