"use strict";

function calculateBonus(...args) {
  return args[1] ? args[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));
console.log(calculateBonus(1000, false));
console.log(calculateBonus(50000, true));
