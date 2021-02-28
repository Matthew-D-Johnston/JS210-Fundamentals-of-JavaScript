"use strict";

function swapName(name) {
  let names = name.split(' ');
  let firstName = names[0];
  let lastName = names[1];

  return `${lastName}, ${firstName}`;
}

console.log(swapName('Joe Roberts'));
console.log(swapName('Matthew Johnston'));
