// function generatePattern(nStars) {
//   let numbers = '1';

//   for (let index = 1; index <= nStars; index += 1) {
//     let stars = '*'.repeat(nStars - index);
//     console.log(numbers + stars);
//     numbers += (index + 1);
//   }
// }

// generatePattern(7);
// console.log('--------')
// generatePattern(2);
// console.log('--------')
// generatePattern(9);
// console.log('--------')
// generatePattern(12);


// Further Exploration

function lineLength(number) {
  let string = '';
  for (let index = 1; index <= number; index += 1) {
    string += index;
  }

  return string.length;
}

function generatePattern(nStars) {
  let stars = '*'.repeat(lineLength(nStars));
  let starsArray = stars.split('');

  for (let index = 1; index <= nStars; index += 1) {
    starsArray[index - 1] = String(index);
    while (starsArray.join('').length > stars.length) {
      starsArray.pop();
    }
    console.log(starsArray.join(''));
  }
}

generatePattern(7);
console.log('--------')
generatePattern(2);
console.log('--------')
generatePattern(9);
console.log('--------')
generatePattern(20);
