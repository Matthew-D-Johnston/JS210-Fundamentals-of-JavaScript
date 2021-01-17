function interleave(array1, array2) {
  let length = array1.length;
  let combinedList = [];

  for (let index = 0; index < length; index += 1) {
    combinedList.push(array1[index]);
    combinedList.push(array2[index]);
  }

  return combinedList;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));
