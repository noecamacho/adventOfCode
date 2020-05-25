const fs = require("fs");

// process args
let day = process.argv[2] ? process.argv[2] : 1;
let year = process.argv[3] ? process.argv[3] : new Date().getFullYear();

let yearDir = `./${year}`;
let dir = `./${year}/day-${day}`;
if (!fs.existsSync(yearDir)) {
  console.log(`Creating directory for year ${year}...`);
  fs.mkdirSync(yearDir);
}
if (!fs.existsSync(dir)) {
  // directories
  console.log(`Creating files for day ${day}...`);
  fs.mkdirSync(dir);
  fs.writeFileSync(`${dir}/input.txt`, 12345);

  // code
  console.log(`Creating code for parts 1 and 2...`);
  let func = `'use strict'\n\nmodule.exports = input => {\n    return input\n}`;
  fs.writeFileSync(`${dir}/${day}-1.js`, func);
  fs.writeFileSync(`${dir}/${day}-2.js`, func);

  console.log(`Creating code for testing...`);
  let testFileBody = `const assert = require('assert')
const day1 = require('./${day}-1')
const day2 = require('./${day}-2')

describe('Day #: Title ', () => {
	it('should do something', () => {
			let nums = ['123']

			assert.strictEqual(day1(nums), 321)
	})

	/*describe('Part Two', () => {
			it('should do something', () => {
					let nums = ['123']

					assert.strictEqual(day2(nums), 321)
			})

	})*/
})`;
  fs.writeFileSync(`${dir}/test.js`, testFileBody);

  // readme
  fs.writeFileSync(
    `${dir}/README.md`,
    "Part 1 runtime: 0 milliseconds\n\nPart 2 runtime: 0 milliseconds"
  );

  console.log("Done.");
} else {
  console.log(`directory ${dir} already exists`);
}
