"use strict";

function reverse(inputForReversal) {
  let reversedOutput;

  if (Array.isArray(inputForReversal)) {
    reversedOutput = [];
    inputForReversal.forEach(element => {
      reversedOutput.unshift(element);
    });
  } else {
    reversedOutput = '';
    for (let index = inputForReversal.length - 1; index >= 0; index -= 1) {
      reversedOutput += inputForReversal[index];
    }
  }

  return reversedOutput;
}

console.log(reverse('Hello'));
console.log(reverse('a'));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));

const array = [1, 2, 3];
console.log(reverse(array));
console.log(array);
