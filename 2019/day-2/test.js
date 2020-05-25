"use strict";
const assert = require("assert");
const day2Part1 = require("./2-1");
const day2Part2 = require("./2-2");

describe("Day 2: Title ", () => {
  it("should do something", () => {
    let nums = "1,0,0,0,99";

    assert.strictEqual(day2Part1(nums), "2,0,0,0,99");
  });
  it("should do something 2,3,0,3,99", () => {
    let nums = "2,3,0,3,99";

    assert.strictEqual(day2Part1(nums), "2,3,0,6,99");
  });
  it("should do something 2,4,4,5,99,0", () => {
    let nums = "2,4,4,5,99,0";

    assert.strictEqual(day2Part1(nums), "2,4,4,5,99,9801");
  });
  it("should do something 1,1,1,4,99,5,6,0,99", () => {
    let nums = "1,1,1,4,99,5,6,0,99";

    assert.strictEqual(day2Part1(nums), "30,1,1,4,2,5,6,0,99");
  });
});
describe("Part Two", () => {
  it("should retrieve 1202", () => {
    let input = "100",
      noun = 12,
      verb = 2;

    assert.strictEqual(day2Part2(input), "1202");
  });
});
