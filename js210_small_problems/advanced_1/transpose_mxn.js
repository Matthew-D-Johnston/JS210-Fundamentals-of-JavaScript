"use strict";

function transpose(matrix) {
  let rowCount = matrix.length;
  let columnCount = matrix[0].length;

  let transposed = [];

  for (let index = 1; index <= columnCount; index += 1) {
    transposed.push([]);
  }

  for (let row = 0; row < rowCount; row += 1) {
    for (let column = 0; column < columnCount; column += 1) {
      transposed[column][row] = matrix[row][column];
    }
  }

  return transposed;
}

console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
