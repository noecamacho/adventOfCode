const fs = require('fs')
const {performance} = require('perf_hooks')
const currentYear = require('./currentYear')

const splitChar = process.platform === 'win32' ? '\r\n' : '\n'
const {argv} = process

const day = argv[2] ? argv[2] : 1
const part = argv[3] ? argv[3] : 1
const year = argv[4] ? argv[2] : currentYear

const input = fs.readFileSync(`${year}/day${day}/input.txt`, 'utf8').split(splitChar)
const start = performance.now()

const func = require(`./${year}/day${day}/${day}.${part}.js`)
console.log(func(input.length === 1 ? input[0] : input))

const end = performance.now()

console.log(`run time: ${end - start} milliseconds`)
