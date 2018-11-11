const _ = require('lodash')
const readline = require('readline')
const fs = require('fs')

const rl = readline.createInterface({
    input: fs.createReadStream('2.1.input.txt'),
    crlfDelay: Infinity
})

let totalPaper = 0

rl.on('line', line => {
    let dimensions = line.split('x')
    totalPaper += calculate(parseInt(dimensions[0]), parseInt(dimensions[1]), parseInt(dimensions[2]))
}).on('close', () => {
    console.log(totalPaper)
})

let calculate = (l, w, h) => {
    let vals = [l, w, h]
    vals.splice(_.indexOf(vals, _.max(vals)), 1)
    return (2 * l * w) + (2 * w * h) + (2 * h * l) + (vals[0] * vals[1])
}
