function missing(arr) {
  let missingNumbers = [];
  let currentNumber = arr[0];
  let length = arr[arr.length - 1] - arr[0] + 1;

  for (let index = 0; index < length; index += 1) {
    if (arr.indexOf(currentNumber) === -1) {
      missingNumbers.push(currentNumber);
    }

    currentNumber += 1;
  }

  return missingNumbers;
}

console.log(missing([-3, -2, 1, 5]));
console.log(missing([1, 2, 3, 4]));
console.log(missing([1, 5]));
console.log(missing([6]));