"use strict";

function triangle(numberOfStars) {
  let spaces = ' '.repeat(numberOfStars - 1);
  let stars = '*';

  for (let index = 1; index <= numberOfStars; index += 1) {
    console.log(spaces + stars);
    stars += '*';
    spaces = spaces.slice(0, numberOfStars - stars.length);
  }
}

triangle(5);
triangle(9);
