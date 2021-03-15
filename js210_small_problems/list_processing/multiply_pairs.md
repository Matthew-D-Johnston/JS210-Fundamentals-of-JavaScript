##### JS210 - Small Problems > List Processing

---

## Multiply All Pairs

### Problems

Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.  

You may assume that neither argument will be an empty array.  

---

### Examples / Test Cases

Example:

```javascript
multiplyAllPairs([2, 4], [4, 3, 1, 2]);		// [2, 4, 4, 6, 8, 8, 12, 16]
```

---

### Data Structure

**Input**

* Two arguments, each of which are Arrays of Integers.

**Output**

* A single Array of Integers.

---

### Algorithm

**Abstractions:**

* Each elment from the first Array must be multiplied by each element of the second Array.
* Each multiplied value must be stored in a separate Array.
* The Array containing the multiplied values must be sorted in ascending order.

**Functions/Methods:**

* maybe use a `for` loop with respect to the first Array.
* Use `forEach()` with respect to the second Array and perform the multiplication while pushing to the results Array.

**Implementation Steps:**

* Declare a `results` variable and initialize it with an empty Array.
* Use `forEach()` to iterate over the first Array.
* Use `forEach()` to iterate over the second Array; multiply the element from the outer loop with the element from the inner loop and push the return value to the `results` Array.
* Use `sort()` to sort the `results` Array in ascending order and return that value.

---

### Code

```javascript
function multiplyAllPairs(array1, array2) {
  const Results = [];

  array1.forEach(outerInteger => {
    array2.forEach(innerInteger => Results.push(outerInteger * innerInteger));
  });

  return Results.sort(sortIntegers);
}

function sortIntegers(integer1, integer2) {
  return integer1 - integer2;
}
```

---

### LS Solution

```javascript
function multiplyAllPairs(array1, array2) {
  const result = [];
  
  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });
  
  return result.sort((a, b) => a - b);
}
```

###### Discussion

The solution uses the iteration list processing strategy because it is an efficient way of performing an action on each element in each array, and then updating the value of the `result` array with the result of each action. Together, the nested `Array.prototype.forEach` loops get all combinations of number pairs from the two arrays. The inner `forEach` loop multiplies the outer `number1` by the inner `number2`, then pushes the product of the pair to the `result` array.  

After the iteration finishes, the solution uses the `Array.prototype.sort` method to sort the values of the `result` array from lowest to highest, then returns the result.

