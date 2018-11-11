const fs = require('fs')
const _ = require('lodash')

fs.readFile('3.input.txt', 'utf8', function (err, data) {
    let xPos = 0, yPos = 0, grid = {}
    grid['0.0'] = 1
    _.map(data, letter => {
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
    console.log(Object.keys(grid).length)
})

