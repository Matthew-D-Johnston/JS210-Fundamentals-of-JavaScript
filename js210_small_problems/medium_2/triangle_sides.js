"use strict";

function triangle(side1, side2, side3) {
  if (!validTriangle(side1, side2, side3)) {
    return "invalid";
  } else if (side1 === side2 && side2 === side3 && side1 === side3) {
    return "equilateral";
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    return "scalene";
  } else {
    return "isosceles";
  }
}

function validTriangle(side1, side2, side3) {
  let ordered = [side1, side2, side3].sort();
  let allSidesGreaterThanZero = ordered.every(side => side > 0);
  let shortSidesGreaterThanLongSide = (ordered[0] + ordered[1]) > ordered[2];
  return allSidesGreaterThanZero && shortSidesGreaterThanLongSide;
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));