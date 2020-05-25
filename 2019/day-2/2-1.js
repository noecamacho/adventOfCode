"use strict";
module.exports = (input) => {
  let intcode = input.split(",").map(Number);
  // console.log(input)
  //replace position 1 with the value 12 and replace position 2 with the value 2.
  intcode[1] = 12;
  intcode[2] = 2;
  for (let opcodeIndex = 0; opcodeIndex < intcode.length; opcodeIndex++) {
    // console.log(opcodeIndex)
    if (intcode[opcodeIndex] === 1) {
      // console.log(`suma1: ${intcode[intcode[opcodeIndex+3]]}`)
      intcode[intcode[opcodeIndex + 3]] =
        intcode[intcode[opcodeIndex + 1]] + intcode[intcode[opcodeIndex + 2]];
      // console.log(`suma2: ${intcode[intcode[opcodeIndex+3]]}`)
      opcodeIndex = opcodeIndex + 3;
    } else if (intcode[opcodeIndex] === 2) {
      // console.log(`mult1: ${intcode[intcode[opcodeIndex+3]]}`)
      intcode[intcode[opcodeIndex + 3]] =
        intcode[intcode[opcodeIndex + 1]] * intcode[intcode[opcodeIndex + 2]];
      opcodeIndex = opcodeIndex + 3;
      // console.log(`mult2: ${intcode[intcode[opcodeIndex+3]]}`)
    } else {
      break;
    }
  }

  return intcode.toString();
};
