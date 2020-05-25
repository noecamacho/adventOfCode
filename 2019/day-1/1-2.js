"use strict";

module.exports = (input) => {
  let massSet = input.map((num) => parseInt(num, 10));
  let fuelSum = 0;

  massSet.forEach((mass) => {
    let num = mass;
    while (num > 0) {
      let tempSum = Math.floor(num / 3) - 2;
      if (tempSum > 0) fuelSum += tempSum;
      num = tempSum;
    }
  });

  return fuelSum;
  /* var superMap =  (arr) => {
        arr = arr.map((val) => {
             newval = Math.floor(val/3) - 2;
            return newval <= 0 ? 0 : newval;
        });
        arr = arr.filter((val) => val > 0);
        if (arr.length == 0)
            return 0;
         total = arr.reduce((acc, cur) => acc + cur);
        return total + superMap(arr);
    }
    return superMap(input) */
};
