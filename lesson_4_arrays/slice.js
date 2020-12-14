function slice(array, startIndex, endIndex) {
  let newArray = [];
  let newArrIndex = 0;

  for (let index = startIndex; index < endIndex; index += 1) {
    newArray[newArrIndex] = array[index];
    newArrIndex += 1;
  }

  return newArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2));
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));
