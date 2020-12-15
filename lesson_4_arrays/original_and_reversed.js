function originalAndReversed(arr) {
  let newArray = arr.slice();
  let length = arr.length;

  for (let index = length - 1; index >= 0; index -= 1) {
    newArray.push(arr[index]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(originalAndReversed(digits));