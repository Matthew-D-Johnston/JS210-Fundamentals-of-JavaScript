"use strict";

function centerOf(text) {
  let length = text.length;
  let midpoint = Math.floor(length / 2);

  if (length % 2 === 1) {
    return text[midpoint];
  } else {
    return text.split('').slice(midpoint - 1, midpoint + 1).join('');
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));
