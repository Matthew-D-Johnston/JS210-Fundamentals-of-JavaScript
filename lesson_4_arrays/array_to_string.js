function arrayToString(arr) {
  let transformed = '';

  for (let index = 0; index < arr.length; index += 1) {
    transformed += String(arr[index]);
  }

  return transformed;
}

console.log(arrayToString([1, 'a', 4]) === '1a4');