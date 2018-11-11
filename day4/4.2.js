const md5 = require('md5')

module.exports = input => {
    let num = 0
    while (true) {
        let hash = md5(`${input}${num}`)
        if (hash.startsWith('000000')) break
        num++
    }
    return num
}
