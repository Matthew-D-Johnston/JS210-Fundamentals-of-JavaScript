"use strict";

function twice(number) {
  let strNumber = String(number);
  let length = strNumber.length;

  if (length % 2 === 0) {
    let midpoint = length / 2;

    if (strNumber.slice(0, midpoint) === strNumber.slice(midpoint, length)) {
      return number;
    } else {
      return number * 2;
    }
  } else {
    return number * 2;
  }
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
