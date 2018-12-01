const fs = require('fs')
const currentYear = require('./currentYear')

//process args
let day = process.argv[2] ? process.argv[2] : 1
let year = process.argv[3] ? process.argv[3] : currentYear

let yearDir = `./${year}`
let dir = `./${year}/day${day}`
if (!fs.existsSync(yearDir)) {
    console.log(`Creating directory for year ${year}...`)
    fs.mkdirSync(yearDir)
}
if (!fs.existsSync(dir)) {
    //directories
    console.log(`Creating files for day ${day}...`)
    fs.mkdirSync(dir)
    fs.writeFileSync(`${dir}/input.txt`, 12345)

    //code
    console.log(`Creating code for parts 1 and 2...`)
    let func = `module.exports = input => {\n    return input\n}`
    fs.writeFileSync(`${dir}/${day}.1.js`, func)
    fs.writeFileSync(`${dir}/${day}.2.js`, func)

    console.log('Done.')
} else {
    console.log(`directory ${dir} already exists`)
}