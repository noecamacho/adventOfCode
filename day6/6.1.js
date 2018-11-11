const _ = require('lodash')

module.exports = input => {
    let grid = []
    for (let i = 0; i < 1000; i++) {
        grid.push([])
        for (let j = 0; j < 1000; j++) {
            grid[i].push(false)
        }
    }

    input.map(line => {
        if (line.startsWith('turn on')) {
            grid = changeLights(grid, parseValues(line), 'on')
        } else if (line.startsWith('turn off')) {
            grid = changeLights(grid, parseValues(line), 'off')
        } else {
            grid = changeLights(grid, parseValues(line), 'toggle')
        }
    })

    return countLightsOn(grid)
}

const changeLights = (grid, values, op) => {
    for (let i = values.x1; i <= values.x2; i++) {
        for (let j = values.y1; j <= values.y2; j++) {
            switch (op) {
                case 'on':
                    grid[i][j] = true
                    break
                case 'off':
                    grid[i][j] = false
                    break
                case 'toggle':
                    grid[i][j] = !grid[i][j]
            }
        }
    }
    return grid
}

const parseValues = line => {
    const re = new RegExp(/^\D+(\d+),(\d+)\D+(\d+),(\d+)$/)
    let match = re.exec(line)
    return {
        x1: parseInt(match[1]), y1: parseInt(match[2]),
        x2: parseInt(match[3]), y2: parseInt(match[4])
    }
}

const countLightsOn = grid => {
    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                count++
            }
        }
    }
    return count
}
