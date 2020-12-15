function oddElementsOf(arr) {
  let newArray = [];

  for (let index = 1; index < arr.length; index += 2) {
    newArray.push(arr[index]);
  }

  return newArray;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits));