function slice(array, begin, end) {
  let length = array.length;
  let slicedArray = [];

  if (begin > length) {
    begin = length;
  }

  if (end > length) {
    end = length;
  }

  for (let index = begin; index < end; index += 1) {
    slicedArray.push(array[index]);
  }

  return slicedArray;
}

console.log(slice([1, 2, 3], 1, 2));
console.log(slice([1, 2, 3], 2, 0));
console.log(slice([1, 2, 3], 5, 1));
console.log(slice([1, 2, 3], 0, 5));

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));
console.log(arr1);
