const _ = require('lodash')
const fs = require('fs')

//process args
let day = process.argv[2] ? process.argv[2] : 1

dir = `./day${day}`
if (!fs.existsSync(dir)) {
    //directories
    console.log(`Creating directories for $${day}...`)
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