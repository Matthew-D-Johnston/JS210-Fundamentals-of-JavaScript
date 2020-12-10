function reverseArray(array) {
  let reversed = [];

  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversed.push(array[index]);
  }

  return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));