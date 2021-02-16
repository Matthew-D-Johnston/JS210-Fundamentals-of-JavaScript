"use strict"

function slice(arr, begin, end) {
  let arrCopy = [];
  end > arr.length ? end = arr.length : end = end;

  for (let index = begin; index < end; index += 1) {
    arrCopy.push(arr[index]);
  }

  return arrCopy;
}

// console.log(slice([1, 2, 3], 1, 2));
// console.log(slice([1, 2, 3], 2, 0));
// console.log(slice([1, 2, 3], 5, 1));
// console.log(slice([1, 2, 3], 0, 5));

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));
// console.log(arr1);

function splice(array, start, deleteCount, ...elements) {
  let length = array.length;
  start > length ? start = length : start;
  deleteCount > (length - start) ? deleteCount = (length - start) : deleteCount;

  let deleted = slice(array, start, start + deleteCount);
  let firstSlice = slice(array, 0, start);
  let secondSlice = slice(array, start + deleteCount, length);
  let resultArr = [];

  if (elements.length > 0) {
    resultArr = firstSlice.concat(elements, secondSlice);
  } else {
    resultArr = firstSlice.concat(secondSlice);
  }

  array.length = resultArr.length;

  for (let index = 0; index < array.length; index += 1) {
    array[index] = resultArr[index];
  }

  return deleted;
}

console.log(splice([1, 2, 3], 1, 2));
console.log(splice([1, 2, 3], 1, 3));
console.log(splice([1, 2, 3], 1, 0));
console.log(splice([1, 2, 3], 0, 1));
console.log(splice([1, 2, 3], 1, 0, 'a'));

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));
console.log(arr2);

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));
console.log(arr3);

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));
console.log(splice(arr4, 1, 0, 'a'));
console.log(arr4);

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));
console.log(arr5);
