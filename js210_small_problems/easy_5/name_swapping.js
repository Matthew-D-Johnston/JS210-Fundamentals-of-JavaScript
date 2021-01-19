"use strict"

// function swapName(name) {
//   return name.split(' ').reverse().join(', ');
// }

// console.log(swapName('Joe Roberts'));

// Further Exploration

function swapName(name) {
  let names = name.split(' ');
  let lastName = names[names.length - 1];
  let firstNames = names.slice(0, names.length - 1);

  return `${lastName}, ${firstNames.join(' ')}`;
}

console.log(swapName('Joe Roberts'));
console.log(swapName('Joe Jackson Roberts'));
