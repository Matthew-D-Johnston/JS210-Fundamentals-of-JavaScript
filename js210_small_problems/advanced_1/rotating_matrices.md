##### JS210 - Small Problems > Advanced 1

---

## Rotating Matrices

### Problem

**Problem Description:**

As we saw in the previous exercises, a matrix can be represented by an array of arrays. For example, the 3x3 matrix shown below:  

```javascript
1  5  8
4  7  2
3  9  6
```

is represented by the following array of arrays:

```javascript
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
```

A 90-degree rotation of a matrix produces a new matrix in which each side of the matrix is rotated clockwise by 90 degrees. For example, the 90-degree rotation of the matrix shown above is:  

```javascript
3  4  1
9  7  5
6  2  8
```

A 90-degree rotation of a non-square matrix is similar. For example, given the following matrix:  

```javascript
3  4  1
9  7  5
```

its 90-degree rotation is:

```javascript
9  3
7  4
5  1
```

Write a function that takes an arbitrary MxN `matrix`, rotates it clockwise by 90-degrees as described above, and returns the result as a new matrix. The function should not mutate the original `matrix`.  

**Definitions and Rules:**

* Matrix: an array of arrays.
* 90-degree rotation: essentially the first row will be come the last column and the last row becomes the first column.
* Suppose position 0, 0 is rotated 90 degrees in a 3x3 matrix, then it will have position 0, 2
* Let's go through a whole 3x3 matrix:
  * 0,0 => 0,2
  * 0,1 => 1,2
  * 0,2 => 2,2
  * 1,0 => 0,1
  * 1,1 => 1,1
  * 1,2 => 2,1
  * 2,0 => 0,0
  * 2,1 => 1,0
  * 2,2 => 2,0
* 2x3 matrix:
  * 0,0 => 0,1
  * 0,1 => 1,1
  * 0,2 => 2,1
  * 1,0 => 0,0
  * 1,1 => 1,0
  * 1,2 => 2,0
* From these patterns, it appears that the column coordinate of the original position becomes the row coordinate of the rotated position. And the row coordinate in the original position becomes its extreme opposite as a column position. That is, if there are 3 rows then row 0 will become column 2. Likewise, if there are 4 rows, then row 0 will become column 3, and row 1 will become column 2.
* Hence:
  * row position (new) = column position (old)
  * column position (new) = (number of rows (old) - 1) - row position (old).

**Mental Model:**

Given an `m`x`n` matrix we need to rotate that matrix so that each element's new position is defined in the following way: the row position of the new matrix equals the column position of the old matrix; and the column position of the new matrix equals the number of rows minus 1 minus the old row position.



---

### Examples / Test Cases

```javascript
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

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
```

---

### Data Structure

**Input:**

* An array of m number of arrays with n elements.

**Output:**

* An array of n number of arrays with m elements. This is a 90-degree rotation of the input array.

**Intermediate Data Structures:**

* ???

---

### Algorithm

* We should start by finding the number of rows in the input `matrix`: `matrix.length`. We can assign that to the variable `originalNumberOfRows = matrix.length;`.
* Next find the `originalNumberOfColumns = matrix[0].length;`
* Next, create the new matrix: `rotated = [];`
* Then fill it with the number of subarrays. We will need the same number of subarrays (rows) as the number of columns in the original: `for (let index = 1; index <= originalNumberOfColumns; index += 1)`; then `rotated.push([])`;
* Then we are going to need to do our nested loops: `for (let row = 0; row < originalNumberOfRows; row += 1)`
* The nested loop: `for (let column = 0; column < originalNumberOfColumns; column += 1)`
  * `rotated[column][(originalNumberOfRows - 1) - row] = matrix[row][column]`
* Then, `return rotated`.

---

### Code

```javascript
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
```

---

### LS Solution

###### Solution

```javascript
function rotate90(matrix) {
  const rotated = [];
  const newRowsCount = matrix[0].length;

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      rotated[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    rotated[rowIdx].reverse();
  }

  return rotated;
}
```

###### Discussion

Rotating a matrix is similar to transposing a matrix. The main difference is that the elements of each row are arranged in a different order. For example:

```javascript
Given the matrix: [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

Transposing:
  - first row of transposed matrix --> [1, 4, 3]

Rotating:
  - first row has same elements, but in reverse order --> [3, 4, 1]
```

This solution is almost identical to the one from the previous exercise, with just a minor modification to accommodate the reversing of the rows of the transposed `matrix`. The solution adds a fourth loop to iterate over each row and reverse it in-place using the `Array.prototype.reverse` method.