const _ = require('lodash')

module.exports = input => {
    let counter = 0
    _.map(input, letter => {
        letter === '(' ? counter++ : counter--
    })
    return counter
}
