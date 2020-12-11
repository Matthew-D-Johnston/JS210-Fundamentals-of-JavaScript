function shift(arr) {
  let value = arr[0];

  for (let index = 1; index < arr.length; index += 1) {
    arr[index - 1] = arr[index]; 
  }

  arr.length = arr.length - 1;
  return value;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]
