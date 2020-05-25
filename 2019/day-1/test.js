"use strict";
const assert = require("assert");
const day1 = require("./1-1");
const day2 = require("./1-2");

describe("Day 1: The Tyranny of the Rocket Equation", () => {
  it("should calculate fuel from 12 mass", () => {
    const mass = ["12"];

    assert.strictEqual(day1(mass), 2);
  });

  it("should calculate fuel from 14 mass", () => {
    const mass = ["14"];

    assert.strictEqual(day1(mass), 2);
  });

  it("should calculate fuel from 1969 mass", () => {
    const mass = ["1969"];

    assert.strictEqual(day1(mass), 654);
  });

  it("should calculate fuel from 100756 mass", () => {
    const mass = ["100756"];

    assert.strictEqual(day1(mass), 33583);
  });
});
describe("Part Two", () => {
  it("should calculate fuel from 12 mass", () => {
    const mass = ["12"];

    assert.strictEqual(day2(mass), 2);
  });

  it("should calculate fuel from 1969 mass", () => {
    const mass = ["1969"];

    assert.strictEqual(day2(mass), 966);
  });

  it("should calculate fuel from 100756 mass", () => {
    const mass = ["100756"];

    assert.strictEqual(day2(mass), 50346);
  });
});
