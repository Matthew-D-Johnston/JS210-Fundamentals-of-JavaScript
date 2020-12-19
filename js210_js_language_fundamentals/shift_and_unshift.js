function shift(arr) {
  return arr.splice(0, 1)[0];
}

function unshift(arr, ...args) {
  for (let index = args.length - 1; index >= 0; index -= 1) {
    arr.splice(0, 0, args[index]);
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));
console.log(shift([]));
console.log(shift([[1, 2, 3], 4, 5]));

console.log(unshift([1, 2, 3], 5, 6));
console.log(unshift([1, 2, 3]));
console.log(unshift([4, 5], [1, 2, 3]));

const testArray = [1, 2, 3];
console.log(shift(testArray));
console.log(testArray);
console.log(unshift(testArray, 5));
console.log(testArray);
