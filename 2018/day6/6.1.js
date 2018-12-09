const {forEach} = require('lodash')

module.exports = input => {
    let points = []
    input.map(point => {
        let xy = point.split(', ')
        points.push({x: parseInt(xy[0]), y: parseInt(xy[1])})
    })
    
    let corners = findCorners(points), array = new Array(corners.maxY - corners.minY), count = {}, max = 0

    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(corners.maxX - corners.minX)
        for (let j = 0; j < array[i].length; j++) {
            array[i][j] = {closest: null, dist: Infinity}
            let x1 = corners.minX + j, y1 = corners.minY + i
            for (let k = 0; k < points.length; k++) {
                let {x, y} = points[k]
                let dist = Math.abs(x - x1) + Math.abs(y - y1)
                if (dist < array[i][j].dist) {
                    array[i][j].closest = k
                    array[i][j].dist = dist
                } else if (dist === array[i][j].dist) {
                    array[i][j].closest = null
                }
            }
            array[i][j].closest && (count[array[i][j].closest] ? count[array[i][j].closest]++ : count[array[i][j].closest] = 1)
        }
    }
    forEach(count, val => {if (val > max) max = val})
    return max
}

const findCorners = input => {
    let minX = Infinity, maxX = 0, minY = Infinity, maxY = 0
    input.map(point => {
        if (point.x < minX) minX = point.x
        if (point.x > maxX) maxX = point.x
        if (point.y < minY) minY = point.y
        if (point.y > maxY) maxY = point.y
    })
    return {minX, maxX, minY, maxY}
}
