"use strict";

// function diamond(size) {
//   let numberOfStars = 1;
//   let numberOfSpaces = (size - 1) / 2;
//   let incrementStars = true;

//   for (let index = 1; index <= size; index += 1) {
//     let stars = '*'.repeat(numberOfStars);
//     let spaces = ' '.repeat(numberOfSpaces);

//     console.log(spaces + stars);

//     if (incrementStars) {
//       numberOfStars += 2;
//       numberOfSpaces -= 1;
//     } else {
//       numberOfStars -= 2;
//       numberOfSpaces += 1;
//     }

//     if (numberOfStars === size) {
//       incrementStars = !incrementStars;
//     }
//   }
// }

// diamond(1);
// diamond(3);
// diamond(5);
// diamond(7);
// diamond(9);
// diamond(11);


// Further Exploration

function diamond(size, hollow) {
  let numberOfStars = 1;
  let numberOfSpaces = (size - 1) / 2;
  let incrementStars = true;

  for (let index = 1; index <= size; index += 1) {
    let stars = createStarsString(numberOfStars, hollow);
    let spaces = ' '.repeat(numberOfSpaces);

    console.log(spaces + stars);

    if (incrementStars) {
      numberOfStars += 2;
      numberOfSpaces -= 1;
    } else {
      numberOfStars -= 2;
      numberOfSpaces += 1;
    }

    if (numberOfStars === size) {
      incrementStars = !incrementStars;
    }
  }
}

function createStarsString(numberOfStars, hollow) {
  if (hollow && numberOfStars !== 1) {
    return '*' + (' '.repeat(numberOfStars - 2)) + '*';
  } else {
    return '*'.repeat(numberOfStars);
  }
}

diamond(1, true);
diamond(3, true);
diamond(5, true);
diamond(7, true);
diamond(9, true);
diamond(11, true);
