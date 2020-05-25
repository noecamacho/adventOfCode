"use strict";
module.exports = (input) => {
  const initialMemory = input.split(",").map(Number);

  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      let memory = [...initialMemory];
      memory[1] = noun;
      memory[2] = verb;

      let instructionPointer = 0;
      while (memory[instructionPointer] !== 99) {
        const opcode = memory[instructionPointer];
        const param1 = memory[memory[instructionPointer + 1]];
        const param2 = memory[memory[instructionPointer + 2]];
        const param3 = memory[instructionPointer + 3];

        memory[param3] = opcode === 1 ? param1 + param2 : param1 * param2;

        instructionPointer += 4;
      }
      if (memory[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
};
