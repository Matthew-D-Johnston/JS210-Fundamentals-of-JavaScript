function push(arr, elem) {
  arr[arr.length] = elem;
  return arr.length;
}

function splice(array, startIndex, numberOfValues) {
  let endIndex = startIndex + numberOfValues;
  let splicedArray = [];
  let excludedElements = [];

  for (let index = 0; index < array.length; index += 1) {
    if (index >= startIndex && index < startIndex + numberOfValues) {
      push(splicedArray, array[index]);
    } else {
      push(excludedElements, array[index]);
    }
  }

  array.length = array.length - numberOfValues;

  for (let index = 0; index < excludedElements.length; index += 1) {
    array[index] = excludedElements[index];
  }

  return splicedArray;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));
console.log(count);