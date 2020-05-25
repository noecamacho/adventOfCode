"use strict";

module.exports = (input) => {
  let range1 = parseInt(input.split("-")[0]);
  let range2 = parseInt(input.split("-")[1]);
  let validNums = 0;

  for (let num = range1; num <= range2; num++) {
    let adjacentDigits = false;
    let decreases = false;
    if (num.toString().length === 6) {
      let numString = num.toString();
      for (let index = 1; index < num.toString().length; index++) {
        if (numString[index] < numString[index - 1]) {
          decreases = true;
          break;
        }
        if (numString[index] === numString[index - 1]) adjacentDigits = true;
      }
      if (adjacentDigits && !decreases) validNums++;
    }
  }
  return validNums;
};
