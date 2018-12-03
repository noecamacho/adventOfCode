const _ = require('lodash')

module.exports = input => {
    const myRegex = /^#\d+\s@\s(\d+),(\d+):\s(\d+)x(\d+)$/
    let array = Array(1000).fill().map(() => Array(1000).fill(0))

    _.map(input, line => {
        let [, x, y, w, h] = line.match(myRegex)
        array = populateArray(array, parseInt(x), parseInt(y), parseInt(w), parseInt(h))
    })

    return countArray(array)
}

const populateArray = (ary, x, y, w, h) => {
    for (let i = x; i < x + w; i++) {
        for (let j = y; j < y + h; j++) {
            ary[i][j]++
        }
    }
    return ary
}

const countArray = ary => {
    let count = 0
    _.map(ary, line => {
        _.map(line, val => {
            if (val > 1) count++
        })
    })
    return count
}
