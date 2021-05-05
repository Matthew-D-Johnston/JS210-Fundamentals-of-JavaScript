"use strict";

function rotate90(matrix) {
  let originalNumberOfRows = matrix.length;
  let originalNumberOfColumns = matrix[0].length;

  let rotated = [];

  for (let index = 1; index <= originalNumberOfColumns; index += 1) {
    rotated.push([]);
  }

  for (let row = 0; row < originalNumberOfRows; row += 1) {
    for (let column = 0; column < originalNumberOfColumns; column += 1) {
      rotated[column][(originalNumberOfRows - 1) - row] = matrix[row][column];
    }
  }

  return rotated;
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);
console.log(newMatrix2);
console.log(newMatrix3);
