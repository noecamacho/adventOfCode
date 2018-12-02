const _ = require('lodash')

module.exports = input => {
    let asciiInput = _.map(input, word => {
        return _.map(word, letter => letter.charCodeAt(0))
    })

    for (let i = 0; i < asciiInput.length; i++) {
        for (let j = i + 1; j < asciiInput.length; j++) {
            let subArrays = subtractArrays(asciiInput[i], asciiInput[j])
            if (_.compact(subArrays).length === 1) {
                asciiInput[i].splice(_.findIndex(subArrays), 1)
                return String.fromCharCode(...asciiInput[i])
            }
        }
    }
}

const subtractArrays = (ary, bry) => {
    let nry = []
    for (let i = 0; i < ary.length; i++) {
        nry.push(Math.abs(ary[i] - bry[i]))
    }
    return nry
}
