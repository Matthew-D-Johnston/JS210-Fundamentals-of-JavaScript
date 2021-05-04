"use strict";

function transpose(matrix) {
  let newMatrix = [[], [], []];

  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      newMatrix[row][column] = matrix[column][row];
    }
  }

  return newMatrix;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);
console.log(newMatrix);
console.log(matrix);
