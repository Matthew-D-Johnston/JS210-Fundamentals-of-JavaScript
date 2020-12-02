// for (let oddNumber = 1; oddNumber <= 99; oddNumber += 2) {
//   console.log(oddNumber);
// }

// Further Exploration

let rlSync = require('readline-sync');


let start = Number(rlSync.question('Specify a starting number: '));
let end = Number(rlSync.question('Specify an ending number: '));

for (let number = start; number <= end; number += 1) {
  if (number % 2 === 0) {
    continue;
  }

  console.log(number);
}
