"use strict";

function concat(array1, ...args) {
  let concatenated = array1.slice();

  args.forEach(element => {
    if (Array.isArray(element)) {
      element.forEach(value => concatenated.push(value));
    } else {
      concatenated.push(element);
    }
  });

  return concatenated;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));
