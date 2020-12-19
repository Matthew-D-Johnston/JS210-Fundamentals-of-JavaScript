function shift(arr) {
  let shiftedElement = arr.reverse().pop();
  arr.reverse();
  return shiftedElement;
}

function unshift(arr, ...args) {
  arr.reverse();
  args.reverse();
  
  for (let index = 0; index < args.length; index += 1) {
    arr.push(args[index]);
  }

  arr.reverse();

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
