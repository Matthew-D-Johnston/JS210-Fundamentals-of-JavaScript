function pop(arr) {
  let newLength = arr.length - 1;
  let value = arr[newLength];
  arr.length = newLength;
  return value;
}

let count = [1, 2, 3];
console.log(pop(count));
console.log(count);

// console.log(pop([]));
