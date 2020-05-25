const fs = require("fs");
const { performance } = require("perf_hooks");

const splitChar = process.platform === "win32" ? "\r\n" : "\n";
const { argv } = process;

const day = argv[2] ? argv[2] : "1";
const part = argv[3] ? argv[3] : "1";
const year = argv[4] ? argv[4] : new Date().getFullYear() - 1;

const input = fs
  .readFileSync(`${year}/day-${day}/input.txt`, "utf8")
  .trim()
  .split(splitChar);
const start = performance.now();

const func = require(`./${year}/day-${day}/${day}-${part}.js`);
console.log(func(input.length === 1 ? input[0] : input));

const end = performance.now();
let time = Math.round(end - start);
let units = "milliseconds";
if (time > 1000) {
  time = (time / 1000).toFixed(2);
  units = "seconds";
}
console.log(`run time: ${time} ${units}`);

// write run time to README
const content = fs.readFileSync(`${year}/day-${day}/README.md`, "utf8");
let [line1, line2] = content.split("\n\n");
part === "1"
  ? (line1 = line1.replace(/[\d\.]+\s(milli)*seconds/, `${time} ${units}`))
  : (line2 = line2.replace(/[\d\.]+\s(milli)*seconds/, `${time} ${units}`));
fs.writeFileSync(`${year}/day-${day}/README.md`, `${line1}\n\n${line2}`);
