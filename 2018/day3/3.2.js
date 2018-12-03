const _ = require('lodash')

module.exports = input => {
    const myRegex = /^#(\d+)\s@\s(\d+),(\d+):\s(\d+)x(\d+)$/
    let array = Array(1000).fill().map(() => Array(1000).fill(0))
    let found = 0

    _.forEach(input, line => {
        let [, , x, y, w, h] = line.match(myRegex)
        array = populateArray(array, ...parse(x, y, w, h))
    })

    _.forEach(input, line => {
        let [, num, x, y, w, h] = line.match(myRegex)
        if (noOverlap(array, ...parse(x, y, w, h))) {
            found = num
            return false
        }
    })

    return found
}

const populateArray = (ary, x, y, w, h) => {
    for (let i = x; i < x + w; i++) {
        for (let j = y; j < y + h; j++) {
            ary[i][j]++
        }
    }
    return ary
}

const noOverlap = (ary, x, y, w, h) => {
    for (let i = x; i < x + w; i++) {
        for (let j = y; j < y + h; j++) {
            if (ary[i][j] > 1) return false
        }
    }
    return true
}

const parse = (x, y, w, h) => {
    return [parseInt(x), parseInt(y), parseInt(w), parseInt(h)]
}
