##### JS210 - Small Problems > Medium Problems 1

---

## Rotation Part 1

**Problem Description:**

Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.  

- If the input is not an array, return `undefined`.
- If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.  

```javascript
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
```

**Definitions and Rules (explicit and implicit):**

* Rotation: take the first element of the an array and append it to the end of the array.
* If input is not an array, return `undefined`. 
* If the input is an empty array, return an empty array.
* Do not mutate the original array.

**Mental Model:**

Make a copy of the original array and take the first element of the copy and append it to the end of the array.

---

### Examples / Test Cases

```javascript
rotateArray([1, 2, 3, 4, 5]);				// [2, 3, 4, 5, 2]
rotateArray(['m', 'a', 't', 't']);  // ['a', 't', 't', 'm']
rotateArray([4]); 									// [4]
rotateArray([4, 'hfe', { a: 2, b:8 }, [1, 2, 3]]) // ['hfe', { a: 2, b: 8 }, [1, 2, 3], 4]
rotateArray('r'); 									// undefined

let array = [4, 5, 6, 7];
rotateArray(array);									// [5, 6, 7, 4]
array																// [4, 5, 6, 7]
```

---

### Data Structure

**Input**

* Normal input: an array with one or more elements of any data type.
* Other possible inputs: an empty array or some other value.

**Output**

* Normal output: if a normal input is given then we should return another, separate array.
* Other possible outputs: an empty array if empty array is given as input and `undefined` if any other non-array value is given as an in input.

**Intermediate Data Structures:**

* Will need to create a copy of the original array to perform mutations on.

---

### Algorithm

* Make a copy of the original array.
* Perform a `shift` operation on the copy and `push` the value returned from the `shift` operation to the very same copy.
* May need to use some conditional statements in order to implement some guard clauses for non-normal inputs.

---

### Code

```javascript
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  } else {
    let arrayCopy = array.slice();
    arrayCopy.push(arrayCopy.shift());
    return arrayCopy;
  }
}
```

---

### LS Solution

##### Understanding the Problem

To understand the problem better, let's take a closer look at the expected **input** and **output**.

- Input
  - an array
- Output
  - a new array, since we can't mutate the original array
- Rules
  - if the input is not an array, return `undefined`
  - if the input is an empty array, return `[]`
  - for a non-empty array, slice off the first element and append it to the end of the array

##### Solution

```javascript
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}
```

