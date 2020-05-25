"use strict";

module.exports = (input) => {
  let range1 = parseInt(input.split("-")[0]);
  let range2 = parseInt(input.split("-")[1]);
  let validNums = 0;
  for (let num = range1; num <= range2; num++) {
    let adjacentDigits = false; // catches if digit repeats
    let adjacentCount = {}; // saves the times each digit repeats
    let decreases = false;
    if (num.toString().length === 6) {
      let numString = num.toString(); // converts to a string to catch each char
      for (let index = 1; index < num.toString().length; index++) {
        if (numString[index] < numString[index - 1]) {
          decreases = true;
          break;
        } // number decreases
        if (numString[index] === numString[index - 1]) {
          // repeated number found
          adjacentDigits = true;
          if (!adjacentCount[numString[index]])
            adjacentCount[numString[index]] = 1;
          // creates key in dictionary
          else adjacentCount[numString[index]] += 1; // sums times it repeats by one
        }
      }
      if (adjacentDigits && !decreases) {
        let hasOnlyDoubles = false;
        // console.log(JSON.stringify(adjacentCount))
        for (const num in adjacentCount) {
          if (adjacentCount.hasOwnProperty(num)) {
            if (adjacentCount[num] == 1) hasOnlyDoubles = true;
          }
        }
        if (hasOnlyDoubles) validNums++;
      }
    }
  }
  return validNums;
};
