const assert = require("assert");
const part1 = require("./4-1");
const part2 = require("./4-2");

describe("Day #4: Secure Container ", () => {
  it("should check if 111111 is a valid password ", () => {
    let nums = "111111-111111";

    assert.strictEqual(part1(nums), 1);
  });
  it("should check if 223450 is a valid password ", () => {
    let nums = "223450-223450";

    assert.strictEqual(part1(nums), 0);
  });
  it("should check if 123789 is a valid password ", () => {
    let nums = "123789-123789";

    assert.strictEqual(part1(nums), 0);
  });
  it("should check if 123445 is a valid password ", () => {
    let nums = "123445-123445";

    assert.strictEqual(part1(nums), 1);
  });
  it("should checkif 1234456 is a valid password ", () => {
    let nums = "1234456-1234456";

    assert.strictEqual(part1(nums), 0);
  });
  it("should check if 111344 is a valid password ", () => {
    let nums = "111344-111344";

    assert.strictEqual(part1(nums), 1);
  });
  it("should check if 124444 is a valid password ", () => {
    let nums = "124444-124444";

    assert.strictEqual(part1(nums), 1);
  });
  it("should check if 122444 is a valid password ", () => {
    let nums = "122444-122444";

    assert.strictEqual(part1(nums), 1);
  });
});

describe("Part Two", () => {
  it("should check if 112233 is a valid password ", () => {
    let nums = "112233-112233";

    assert.strictEqual(part2(nums), 1);
  });
  it("should check if 123444 is a valid password ", () => {
    let nums = "123444-123444";

    assert.strictEqual(part2(nums), 0);
  });
  it("should check if 111122 is a valid password ", () => {
    let nums = "111122-111122";

    assert.strictEqual(part2(nums), 1);
  });
});
