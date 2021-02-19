"use strict";

function shortLongShort(first, second) {
  let length1 = first.length;
  let length2 = second.length;

  if (length1 > length2) {
    return second + first + second;
  } else {
    return first + second + first;
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
