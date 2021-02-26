"use strict";

function showMultiplicativeAverage(arr) {
  let product = 1;
  arr.forEach(function (value) {
    product *= value;
  });
  return (product / arr.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));
