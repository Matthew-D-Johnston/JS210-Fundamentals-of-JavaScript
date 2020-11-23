// function logMultiples(num) {
//   for (let index = 100; index >= 0; index -= 1) {
//     if (index % 2 === 1 && index % num === 0) {
//       console.log(String(index));
//     }
//   }
// }

console.log('Further Exploration')

function logMultiples(number) {
  let largestMultiple = Math.floor(100 / number) * number;
  for (let index = largestMultiple; index >= number; index -= number) {
    if (index % 2 === 1) {
      console.log(String(index));
    }
  }
}

logMultiples(17);
console.log('-----');
logMultiples(21);
console.log('-----');
logMultiples(20);
