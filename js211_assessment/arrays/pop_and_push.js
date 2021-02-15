"use strict";

function pop(arr) {
  let length = arr.length;
  let lastElement = arr[length - 1];

  if (arr.length !== 0) {
    arr.length = length - 1;
  }

  return lastElement;
}

const array1 = [1, 2, 3];
console.log(pop(array1));
console.log(array1);

console.log(pop([]));

const array3 = [];
array3.length = 3;
console.log(pop(array3));
console.log(array3);

function push(arr, ...elems) {
  if (Array.isArray(elems)) {
    elems.forEach(element => {
      arr[arr.length] = element;
    });
  } else {
    arr[arr.length] = elems;
  }

  return arr.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));
console.log(array2);
const array4 = [1, 2];
console.log(push(array4, ['a', 'b']));
console.log(array4);
console.log(push([], 1));
console.log(push([]));
