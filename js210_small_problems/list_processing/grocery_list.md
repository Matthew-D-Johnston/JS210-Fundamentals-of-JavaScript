##### JS210 - Small Problems > List Processing

---

## Grocery List

### Problem

Write a function that takes a grocery list (a two-dimensional array) with each element containing a fruit and a quantity, and returns a one-dimensional array of fruits, in which each fruit appears a number of times equal to its quantity.  

---

### Examples / Test Cases

Example:

```javascript
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
```

---

### Data Structure

**Input**

* An array whose elements are also arrays.
* The nested arrays contain a string as a first element and an integer as a second element.

**Output**

* An array of strings, which are copies of the strings in the nested arrays and are repeated as many times as indicated by the integer.

---

### Algorithm

**Abstractions:**

* Each subarray that contains a string and an integer must be reduced to a grouping of strings that are identical to the original string and occur as many times as the integer.
* So we need to extract each element and then create an Array of identical strings whose length is equal to the given integer.
* If we can do this for each subarray, then we can concatenate them into a larger single array.
* We iterate over the individual subarrays, concatenating the result of the reduction to the array of strings.

**Functions/Methods:**

* create a function that takes the subarrays, extracts the string and integer, and returns an array with the original string repeated the same number of times as the integer: `stringMultiplier(string, number)`.
* use the `forEach` method to iterate over the subarrays.

**Implementation Steps:**

* Declare a `results` variable and initialize it to an empty array, `[]`.
* Use the `forEach` method on the input array to iterate over the subarrays. On each iteration:
  * concatenate the array returned from calling the `stringMultiplier(string, number)` function to the `results` array.
* Return the `results` array.

---

### Code

```javascript
function buyFruit(groceries) {
  let result = [];

  groceries.forEach(item => {
    result = result.concat(stringMultiplier(item[0], item[1]));
  });

  return result;
}

function stringMultiplier(string, number) {
  let strings = [];

  for (let index = 1; index <= number; index += 1) {
    strings.push(string);
  }

  return strings;
}
```

---

### LS Solution

```javascript
function buyFruit(fruitsList) {
  return fruitsList.map(fruit => repeat(fruit))
  								 .reduce((groceryList, fruit) => groceryList.concat(fruit));
}

function repeat(fruit) {
  const result = [];
  
  for (let i = 0; i < fruit[1]; i += 1) {
    result.push(fruit[0]);
  }
  
  return result;
}
```

###### Discussion

To get the expected result, the solution makes use of two list processing strategies. The first is to transform the array elements into the expanded grocery list with each item repeated based on the quantity value (second element of each subarray). The second strategy is to flatten the array of arrays using a folding strategy, which flattens the array by consecutively concatenating each subarray together. The solution also makes use of a `repeat` helper function to facilitate the transformation of the original array's elements.