"use strict";

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (!validTriangle(angles)) {
    return "invalid";
  } else if (angles.every(angle => angle < 90)) {
    return "acute";
  } else if (angles.some(angle => angle === 90)) {
    return "right";
  } else {
    return "obtuse";
  }
}

function validTriangle(angles) {
  let sumOfAngles = angles[0] + angles[1] + angles[2];
  return angles.every(angle => angle > 0) && sumOfAngles === 180;
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));