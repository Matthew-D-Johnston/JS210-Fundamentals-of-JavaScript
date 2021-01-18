"use strict"

function centerOf(text) {
  let length = text.length;
  let midpoint = Math.floor(length / 2);

  if (length % 2 === 0) {
    return text.slice(midpoint - 1, midpoint + 1);
  } else{
    return text.slice(midpoint, midpoint + 1);
  }
}

console.log(centerOf('I Love JavaScript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));
