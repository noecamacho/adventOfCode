"use strict";

module.exports = (input) => {
  const wire1 = input[0].split(",");
  const wire2 = input[1].split(",");
  let grid = {},
    gridSteps = {},
    nearestSteps = 999999; // value to store nearest intersection
  const tracePathOf = (wire, check = false) => {
    let x = 0,
      y = 0,
      steps = 0; // coordinates | steps
    for (let i = 0; i < wire.length; i++) {
      let op = wire[i][0]; // extract first char
      let coordinate = parseInt(wire[i].substring(1)); // removes letter and parses number
      let xx = 0,
        yy = 0; // grid coordinates orientation
      switch (
        op // registers the movement in grid
      ) {
        case "R":
          xx = 1;
          break;
        case "L":
          xx = -1;
          break;
        case "U":
          yy = 1;
          break;
        case "D":
          yy = -1;
          break;
      }
      // console.log(`op: ${op}`)
      for (let j = 0; j < coordinate; j++) {
        (x += xx), (y += yy), steps++;
        // console.log(steps)
        // console.log(`(${x},${y})`)
        if (!check) {
          // Enters when scanned first wire
          grid[x + "," + y] = 1;
          if (!gridSteps[x + "," + y]) {
            // gets value only first time it collides
            gridSteps[x + "," + y] = steps;
          } else {
            // console.log('repetido')
          }
        } else {
          // Detects collisions and gets distance
          if (grid[x + "," + y] == 1) {
            // let distance = Math.abs(x) + Math.abs(y)
            let stepsValue = gridSteps[x + "," + y];
            let distance = steps + stepsValue;
            // console.log(gridSteps[x + ',' + y])
            // console.log(distance)
            if (distance < nearestSteps) {
              nearestSteps = distance;
            }
          }
        }
      }
    }
  };
  tracePathOf(wire1);
  tracePathOf(wire2, true);
  return nearestSteps;
};
