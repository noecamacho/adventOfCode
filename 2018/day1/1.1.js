const _ = require('lodash')

module.exports = input => {
    return _.reduce(input, (acc, val) => acc += parseInt(val), 0)
}