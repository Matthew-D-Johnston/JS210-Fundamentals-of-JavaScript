"use strict";

function concat(array1, secondArgument) {
  let concatenatedArray = array1.slice();

  if (Array.isArray(secondArgument)) {
    secondArgument.forEach(element => concatenatedArray.push(element));
  } else {
    concatenatedArray.push(secondArgument);
  }

  return concatenatedArray;
}

console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([1, 2], 3));
console.log(concat([2, 3], ['two', 'three']));
console.log(concat([2, 3], 'four'));

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);
obj.a = 'two';
console.log(newArray);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);
obj.b = 'three';
console.log(arr3);

arr3[5].b = 3;
console.log(obj);
