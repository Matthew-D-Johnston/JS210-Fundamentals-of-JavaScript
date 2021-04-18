"use strict";

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  } else {
    let arrayCopy = array.slice();
    arrayCopy.push(arrayCopy.shift());
    return arrayCopy;
  }
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));
console.log(rotateArray(['a', 'b', 'c']));
console.log(rotateArray(['a']));
console.log(rotateArray([1, 'a', 3, 'c']));
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));
console.log(rotateArray([]));

console.log(rotateArray());
console.log(rotateArray(1));

const array = [1, 2, 3, 4];
console.log(rotateArray(array));
console.log(array);
