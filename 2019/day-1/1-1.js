"use strict";

module.exports = (input) => {
  let massSet = input.map((num) => parseInt(num, 10));
  let fuel = 0;

  massSet.forEach((mass) => {
    fuel += Math.floor(mass / 3) - 2;
    let num = mass;
    while (num > 0) {
      let tempSum = Math.floor(num / 3) - 2;
      num = tempSum;
    }
  });

  return fuel;
  /* superMap = function (arr) {
        arr = arr.map((val) => Math.floor(val/3) - 2);
        console.log(arr)
        return arr.reduce((acc, cur) => acc + cur);
    }
    return superMap(input) */
};
