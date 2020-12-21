function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let length = array1.length;

  let newArray1 = array1.slice().sort();
  let newArray2 = array2.slice().sort();

  for (let index = 0; index < length; index += 1) {
    if (newArray1[index] !== newArray2[index]) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);
console.log(areArraysEqual([1, 1], [1, 1]) === true);
