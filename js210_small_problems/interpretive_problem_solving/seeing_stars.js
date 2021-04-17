"use strict";

// function stars(n) {
//   let numberOfSpaces = (n - 3) / 2;
//   let spaces = ' '.repeat(numberOfSpaces);
//   let marginSize = 0;
//   let margin = '';
//   let starRow;

//   while (numberOfSpaces > 0) {
//     console.log(margin + '*' + spaces + '*' + spaces + '*');

//     numberOfSpaces -= 1;
//     marginSize += 1;
//     spaces = ' '.repeat(numberOfSpaces);
//     margin = ' '.repeat(marginSize);
//   }

//   console.log(margin + '*' + spaces + '*' + spaces + '*');
//   console.log('*'.repeat(n));

//   while (marginSize > 0) {
//     console.log(margin + '*' + spaces + '*' + spaces + '*');

//     numberOfSpaces += 1;
//     marginSize -= 1;
//     spaces = ' '.repeat(numberOfSpaces);
//     margin = ' '.repeat(marginSize);
//   }

//   console.log(margin + '*' + spaces + '*' + spaces + '*');
// }

// function buildStarRow(totalSpaces, marginSize) {
//   let spaces = ' '.repeat(totalSpaces);
//   let margin = ' '.repeat(marginSize);
//   return margin + '*' + spaces + '*' + spaces + '*';
// }

// stars(7);
// stars(9);
// stars(11);
// stars(23);
// stars(43);

// Further Exploration

function stars(n) {
  let numberOfSpaces = (n - 3) / 2;
  let marginSize = 0;
  let decrementSpaces = true;

  for (let index = 1; index < n - 1; index += 1) {
    console.log(buildStarRow(numberOfSpaces, marginSize));

    if (numberOfSpaces === 0) {
      console.log('*'.repeat(n));
      console.log(buildStarRow(numberOfSpaces, marginSize));
      decrementSpaces = !decrementSpaces;
    }

    if (decrementSpaces) {
      numberOfSpaces -= 1;
      marginSize += 1;
    } else {
      numberOfSpaces += 1;
      marginSize -= 1;
    }
  }
}

function buildStarRow(totalSpaces, marginSize) {
  let spaces = ' '.repeat(totalSpaces);
  let margin = ' '.repeat(marginSize);
  return margin + '*' + spaces + '*' + spaces + '*';
}

stars(13);
