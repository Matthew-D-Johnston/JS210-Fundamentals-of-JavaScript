// const rlSync = require('readline-sync');

// let loopCondition = true;
// let integer;
// let computationType;

// do {
//   integer = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
//   computationType = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

//   if (integer > 0 && (computationType === 's' || computationType === 'p')) {
//     loopCondition = false;
//   }
// } while (loopCondition);

// let accumulator = 1;

// for (let index = 2; index <= integer; index += 1) {
//   if (computationType === 's') {
//     accumulator += index;
//   } else {
//     accumulator *= index;
//   }
// }

// if (computationType === 's') {
//   console.log(`The sum of the integers between 1 and ${integer} is ${accumulator}.`)
// } else {
//   console.log(`The product of the integers between 1 and ${integer} is ${accumulator}.`)
// }

// Further Exploration

function range(start, end) {
  let array = [];
  for (index = start; index <= end; index += 1) {
    array.push(index);
  }

  return array;
}

function computeSum(range) {
  return range.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function computeProduct(range) {
  return range.reduce((accumulator, currentValue) => accumulator * currentValue);
}

const rlSync = require('readline-sync');

let loopCondition = true;
let integer;
let computationType;

do {
  integer = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
  computationType = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  if (integer > 0 && (computationType === 's' || computationType === 'p')) {
    loopCondition = false;
  } else {
    console.log('Oops. Bad input. Try again.')
  }
} while (loopCondition);

if (computationType === 's') {
  let sum = computeSum(range(1, integer));
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else {
  let product = computeProduct(range(1, integer));
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}




