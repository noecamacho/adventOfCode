const fs = require('fs')
const _ = require('lodash')

fs.readFile('3.input.txt', 'utf8', function (err, data) {
    let xSanta1 = 0, ySanta1 = 0, xSanta2 = 0, ySanta2 = 0, moveNum = 1, grid = {}, even
    grid['0.0'] = 2
    _.map(data, letter => {
        even = moveNum % 2 === 0
        switch (letter) {
            case '>':
                even ? xSanta2++ : xSanta1++
                break
            case '<':
               even ? xSanta2-- : xSanta1--
                break
            case 'v':
                even ? ySanta2-- : ySanta1--
                break
            case '^':
                even ? ySanta2++ : ySanta1++
                break
        }
        if (even) {
            grid[`${xSanta2}.${ySanta2}`] = grid[`${xSanta2}.${ySanta2}`] ? grid[`${xSanta2}.${ySanta2}`]++ : 1
        } else {
            grid[`${xSanta1}.${ySanta1}`] = grid[`${xSanta1}.${ySanta1}`] ? grid[`${xSanta1}.${ySanta1}`]++ : 1
        }
        moveNum++
    })
    console.log(Object.keys(grid).length)
})

