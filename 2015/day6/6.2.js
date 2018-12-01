module.exports = input => {
    let grid = []
    for (let i = 0; i < 1000; i++) {
        grid.push([])
        for (let j = 0; j < 1000; j++) {
            grid[i].push(0)
        }
    }

    input.map(line => {
        if (line.startsWith('turn on')) {
            grid = turnOn(grid, parseValues(line))
        } else if (line.startsWith('turn off')) {
            grid = turnOff(grid, parseValues(line))
        } else {
            grid = toggle(grid, parseValues(line))
        }
    })

    return calculateBrightness(grid)
}

const turnOn = (grid, values) => {
    for (let i = values.x1; i <= values.x2; i++) {
        for (let j = values.y1; j <= values.y2; j++) {
            grid[i][j]++
        }
    }
    return grid
}

const turnOff = (grid, values) => {
    for (let i = values.x1; i <= values.x2; i++) {
        for (let j = values.y1; j <= values.y2; j++) {
            grid[i][j] > 0 ? grid[i][j]-- : grid[i][j] = 0
        }
    }
    return grid
}

const toggle = (grid, values) => {
    for (let i = values.x1; i <= values.x2; i++) {
        for (let j = values.y1; j <= values.y2; j++) {
            grid[i][j] += 2
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

const calculateBrightness = grid => {
    let brightness = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            brightness += grid[i][j]
        }
    }
    return brightness
}
