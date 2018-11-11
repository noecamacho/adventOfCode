const _ = require('lodash')

const calculate = (l, w, h) => {
    let vals = [l, w, h]
    vals.splice(_.indexOf(vals, _.max(vals)), 1)
    return (2 * l * w) + (2 * w * h) + (2 * h * l) + (vals[0] * vals[1])
}

module.exports = input => {
    let totalPaper = 0
    input.map(line => {
        let dimensions = line.split('x')
        totalPaper += calculate(parseInt(dimensions[0]), parseInt(dimensions[1]), parseInt(dimensions[2]))
    })

    return totalPaper
}