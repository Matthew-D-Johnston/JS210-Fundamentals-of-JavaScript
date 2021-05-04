##### JS210 - Small Problems > Advanced 1

---

## Transpose MxN

### Problem

**Problem Description:**

In the previous exercise, you wrote a function that transposed a 3x3 matrix represented by an array of arrays.  

Matrix transposes are not limited to 3x3 matrices, or even square matrices. Any matrix can be transposed simply by switching columns with rows.  

Modify your `transpose` function from the previous exercise so that it works with any MxN matrix with at least one row and one column.  

Examples:

```javascript
transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
```

---

### Code

```javascript
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
```

---

### LS Solution

###### Solution

```javascript
transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
```

###### Discussion

The solution from the previous transpose 3x3 exercise already works for transposing a MxN matrix.  

Let's do one sample run to visualize how it works:

```javascript
const matrix = [[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]];

- outer loop: `for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1)`
    matrix.length --> 3

  - inner loop: `for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1)`
      matrix[rowIdx].length --> 5

      transposed --> [[], [], [], [], []]
      rowIdx --> 0
      colIdx --> 0
      transposed[0].push(matrix[0][0]);

      transposed --> [[1], [], [], [], []]
      rowIdx --> 0
      colIdx --> 1
      transposed[1].push(matrix[0][1]);

      transposed --> [[1], [2], [], [], []]
      rowIdx --> 0
      colIdx --> 2
      transposed[2].push(matrix[0][2]);

      transposed --> [[1], [2], [3], [], []]
      rowIdx --> 0
      colIdx --> 3
      transposed[3].push(matrix[0][3]);

      transposed --> [[1], [2], [3], [4], []]
      rowIdx --> 0
      colIdx --> 4
      transposed[4].push(matrix[0][4]);

    transposed --> [[1], [2], [3], [4], [5]]
```

