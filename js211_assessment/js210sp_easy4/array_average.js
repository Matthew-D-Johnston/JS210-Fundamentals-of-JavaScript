"use strict";

function average(integers) {
  let sum = 0;

  integers.forEach(function (value) {
    sum += value;
  });

  return Math.floor(sum / integers.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));
