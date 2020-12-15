function sortDescending(arr) {
  let newArray = arr.slice();
  return newArray.sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);
console.log(result);
console.log(array);

