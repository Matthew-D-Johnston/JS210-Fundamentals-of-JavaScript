// Problem 1

// function average(a, b, c) {
//   return (a + b + c) / 3;
// }

// let result = average(4, 9, 15);
// console.log(result);


// Problem 2

// function sum(a, b, c) {
//   return a + b + c;
// }

// function average(a, b, c) {
//   return sum(a, b, c) / 3;
// }

// console.log(average(3, 5, 8));

// Problem 3 + 4

function average(array) {

  return sum(array) / array.length;
}

function sum(array) {
  let total = 0;

  for (let index = 0; index < array.length; index += 1) {
    total += array[index];
  }

  return total;
}

// console.log(average([3, 3, 8, 3, 3]));

// Problem 5

let temperatures = [21, 25, 19, 32, 27];

console.log(average(temperatures));

