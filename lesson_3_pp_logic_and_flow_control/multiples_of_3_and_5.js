// function multiplesOfThreeAndFive() {
//   for (let index = 1; index <= 100; index += 1) {
//     if (index % 3 === 0 || index % 5 === 0) {
//       if (index % 3 === 0 && index % 5 === 0) {
//         console.log(index + '!');
//       } else {
//         console.log(index);
//       }  
//     }
//   }
// }

// multiplesOfThreeAndFive();

// console.log('---------------');
// console.log('LS Solution');

// const multiplesOfThreeAndFive = function() {
//   for (let number = 1; number <= 100; number += 1) {
//     if (number % 3 === 0 && number % 5 === 0) {
//       console.log(String(number) + '!');
//     } else if (number % 3 === 0 || number % 5 === 0) {
//       console.log(String(number));
//     }
//   }
// }

// multiplesOfThreeAndFive();

// console.log('---------------');
console.log('Further Exploration');

function multiplesOfThreeAndFive(begin, end) {
  for (let index = begin; index <= end; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      if (index % 3 === 0 && index % 5 === 0) {
        console.log(String(index) + '!');
      } else {
        console.log(String(index));
      }  
    }
  }
}

multiplesOfThreeAndFive(5, 50);
multiplesOfThreeAndFive(123, 147);