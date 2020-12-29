function radianToDegrees(angle) {
  return (angle * 180) / Math.PI;
}

let angle1 = 2 * Math.PI;
let angle2 = Math.PI;

console.log(radianToDegrees(angle1));
console.log(radianToDegrees(angle2));
console.log(radianToDegrees(3.14));


