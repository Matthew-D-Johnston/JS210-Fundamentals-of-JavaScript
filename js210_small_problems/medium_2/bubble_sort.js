"use strict";

function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let index = 0; index < array.length - 1; index += 1) {
      let first = array[index];
      let second = array[index + 1];
      if (first > second) {
        array[index] = second;
        array[index + 1] = first;
        swapped = true;
      }
    }
  }

  return array;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);