function unshift(arr, elem) {
  let newArray = [elem];

  for (let index = 0; index < arr.length; index += 1) {
    newArray[index + 1] = arr[index];
    arr[index] = newArray[index];
  }

  arr[arr.length] = newArray[arr.length];
  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3]