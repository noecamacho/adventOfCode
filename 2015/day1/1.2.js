const _ = require('lodash')

module.exports = input => {
    let counter = 0, position = 0

    _.some(input, letter => {
        position++
        letter === '(' ? counter++ : counter--
        if (counter === -1) {
            return true
        }
    })

    return position
}
