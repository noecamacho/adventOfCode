const _ = require('lodash')

module.exports = input => {
    let xPos = 0, yPos = 0, grid = {}
    grid['0.0'] = 1
    _.map(input, letter => {
        switch (letter) {
            case '>':
                xPos++
                break
            case '<':
                xPos--
                break
            case 'v':
                yPos--
                break
            case '^':
                yPos++
                break
        }
        grid[`${xPos}.${yPos}`] = grid[`${xPos}.${yPos}`] ? grid[`${xPos}.${yPos}`]++ : 1

    })

    return Object.keys(grid).length
}
