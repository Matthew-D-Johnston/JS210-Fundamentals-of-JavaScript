##### JS210 - Small Problems > Advanced 1

---

## Transpose 3x3

### Problem

**Problem Description:**

A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

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

An array of arrays is sometimes called a "*nested array*" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array".  

To access an element in the matrix, you can use bracket notation twice (such as `array[][]`), and include both the row index and column index within the brackets. Given the above matrix, `matrix[0][2]` is `8`, and `matrix[2][1]` is `9`. An entire row in the matrix can be referenced using a single index: `matrix[1]` is the row (subarray) `[4, 7, 2]`. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.  

The *transpose* of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:  

```javascript
1  4  3
5  7  9
8  2  6
```

Write a function that takes an array of arrays that represents a 3x3 `matrix` and returns the transpose of the `matrix`. You should implement the function on your own, without using any external libraries.  

Take care not to modify the original `matrix` — your function must produce a new matrix and leave the input `matrix` array unchanged.  

**Definition and Rules:**

* Matrix: data structure representing data in ordred rows and columns; represented by a nested array.
* Transpose: the original matrix but where rows and columns are switched.
* No external libraries.
* Do not modify the original input matrix.

**Mental Model:**

Take a 3x3 matrix and create a copy that has the rows and columns switched. This is the transpose of the matrix. 

---

### Examples / Test Cases

```javascript
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
```

---

### Data Structure

**Input:**

* An array containing three subarrays with three elements each.

**Output:**

* An array containing three subarrays with three elements each.

* **Intermediate Data Structures:**

* ???

---

### Algorithm

* Since we are dealing with a 3x3 matrix, we can create a new empty 3x3 matrix: `let newMatrix = [[], [], []]`

* Now we need a way to take each element from the original matrix by identifyint its "row" and "column" and switching that "row" and "column" when adding it to the new matrix. For example `newMatrix[0][2] = matrix[2][0]`.

* We might implement two separate `for` loops that use `row` and `column` variables as increment variables.

  ```javascript
  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      newMatrix[row][column] = matrix[column][row];
    }
  }
  ```

* I think that is the main implementation. We should be able to just return the `newMatrix`.

---

### Code

```javascript
function transpose(matrix) {
  let newMatrix = [[], [], []];

  for (let row = 0; row < 3; row += 1) {
    for (let column = 0; column < 3; column += 1) {
      newMatrix[row][column] = matrix[column][row];
    }
  }

  return newMatrix;
}
```

---

### LS Solution

###### Solution

```javascript
function transpose(matrix) {
  const transposed = [];
  const newRowsCount = matrix[0].length;

  for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
    transposed.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
      transposed[colIdx].push(matrix[rowIdx][colIdx]);
    }
  }

  return transposed;
}
```

###### Discussion

This solution can be a little hard to wrap your head around. It's not complicated—just difficult to visualize.  

The solution transposes the `matrix` in two steps. The first step is to initialize the `transposed` matrix, using a loop to populate the initially empty `transposed` array with empty subarrays. The solution determines the number of subarrays based on the new number of rows, `newRowsCount`. The new number of rows comes from the `length` of any row of the input `matrix`, assuming that every row has the same `length`. Note that this `length` is equivalent to the number of columns of the input `matrix`.  

Given the example `matrix` for this problem, the first loop creates three empty rows and pushes them to the `transposed` array, giving it a value of `[[], [], []]`.  

The second step is to populate the empty rows with the correct elements. The solution does this using a pair of `for` loops: an outer loop and a nested inner loop. The trick to the nested loops is reversing the index positions to populate the nested arrays. Typically, nested arrays are populated row-by-row, but the solution does it column-by-column.  

To help visualize how these loops work, we'll walk through what happens during the first iteration of the outer loop:  

```javascript
- outer loop: `for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1)`
    matrix.length --> 3

  - inner loop: `for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1)`
      matrix[rowIdx].length --> 3

      transposed --> [[], [], []]
      rowIdx --> 0
      colIdx --> 0
      transposed[0].push(matrix[0][0]);

      transposed --> [[1], [], []]
      rowIdx --> 0
      colIdx --> 1
      transposed[1].push(matrix[0][1]);

      transposed --> [[1], [5], []]
      rowIdx --> 0
      colIdx --> 2
      transposed[2].push(matrix[0][2]);

    transposed --> [[1], [5], [8]]
```



