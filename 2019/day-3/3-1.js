"use strict";

module.exports = (input) => {
  const wire1 = input[0].split(",");
  const wire2 = input[1].split(",");
  let grid = {},
    nearestManhattan = 999999; // value to store nearest intersection
  const tracePathOf = (wire, check = false) => {
    let x = 0,
      y = 0; // coordinates
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
        (x += xx), (y += yy);
        // console.log(`(${x},${y})`)
        if (!check) {
          // Enters when scanned first wire
          grid[x + "," + y] = 1;
        } else {
          // Detects collisions and gets distance
          if (grid[x + "," + y] == 1) {
            let distance = Math.abs(x) + Math.abs(y);
            if (distance < nearestManhattan) nearestManhattan = distance;
          }
        }
      }
    }
  };
  tracePathOf(wire1);
  tracePathOf(wire2, true);
  return nearestManhattan;
};
