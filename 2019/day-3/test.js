const assert = require('assert')
const part1 = require('./3-1')
const part2 = require('./3-2')

describe('Day 3: Crossed Wires', () => {
	it(`should get Manhattan distance of R75,D30,R83,U83,L12,D49,R71,U7,L72
	U62,R66,U55,R34,D71,R55,D58,R83`, () => {
			let instructions = ['R75,D30,R83,U83,L12,D49,R71,U7,L72',
			'U62,R66,U55,R34,D71,R55,D58,R83']

			assert.strictEqual(part1(instructions), 159)
	})
	it(`should get Manhattan distance of 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51'
	'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'`, () => {
			let instructions = ['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
			'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7']

			assert.strictEqual(part1(instructions), 135)
	})
})

describe('Part Two', () => {
	it(`should get fewest combined steps of 'R75,D30,R83,U83,L12,D49,R71,U7,L72',
	'U62,R66,U55,R34,D71,R55,D58,R83'`, () => {
			let instructions = ['R75,D30,R83,U83,L12,D49,R71,U7,L72',
			'U62,R66,U55,R34,D71,R55,D58,R83']

			assert.strictEqual(part2(instructions), 610)
	})
	it(`should get fewest combined steps of 'R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
	'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'`, () => {
			let instructions = ['R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51',
			'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7']

			assert.strictEqual(part2(instructions), 410)
	})

})
