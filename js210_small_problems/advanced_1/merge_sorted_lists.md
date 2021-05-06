##### JS210 - Small Problems > Advanced 1

---

## Merge Sorted Lists

### Problem

**Problem Description:**

Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.  

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.  

Your solution should not mutate the input arrays.  

**Defintion and Rules:**

* Sorted: ascending order (i.e. from lowest to highest).
* The result array must be built one element at a time; we cannot simply combine all the elements and then use some built-in method to sort the result.
* Do not mutate the input arrays.

**Mental Model:**

Take each input array. Create a separate index for each array that will correspond to each array's elements.  Then we must iterate over both arrays at the same time, comparing them elementwise. Whichever element is smaller will get added to the result array. We then increment the index of the array whose element was added. We then make the comparison again. If we get to the last element of an array then we must simply add all the rest of the remaining elements of the other array.

---

### Examples / Test Cases

```javascript
merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
merge([1, 4, 6, 8], [9]);					// [1, 4, 6, 8, 9]
```

---

### Data Structure

**Input:**

* Two arrays that already sorted.
* Assume all the elements of the array are integers.

**Output:**

* A single sorted array that combines all of the elements from the two input arrays.

**Intermediate Data Structures:**

* ???

---

### Algorithm

* Create a results array: `results`.
* Create two indexes: `index1` and `index2`; both are assigned to `0`.
* Create index limits: `limit1 = (array1.length - 1)` and `limit2 = (array2.length - 1)`
* Create one main `limit = limit1 + limit2`
* One for loop that iterates from `0` to the `limit`: `for (let index = 0; index <= limit; index += 1)`
  * Do elementwise comparison.
  * First check if either of our indexes has gone past either limit.
    * If yes, then add the remaining elements of the other array.
      * concatenate a slice of the other array based on its current index up until its end.
    * We can also then, `break` out of the `for` loop.
  * if element from first array is less than or equal to element from second array:
    * push the element from the first array to the results array
    * increment the first index by one
  * else if element from second array is less than element from first array:
    * push the element from the second array to the results array
    * increment the second index by one.

---

### Code

```javascript
function merge(array1, array2) {
  let results = [];
  let index1 = 0;
  let index2 = 0;
  let limit1 = (array1.length - 1);
  let limit2 = (array2.length - 1);
  let limit = limit1 + limit2 + 1;

  for (let index = 0; index <= limit; index += 1) {
    if (index1 > limit1) {
      results = results.concat(array2.slice(index2));
      break;
    } else if (index2 > limit2) {
      results = results.concat(array1.slice(index1));
      break;
    } else if (array1[index1] <= array2[index2]) {
      results.push(array1[index1]);
      index1 += 1;
    } else {
      results.push(array2[index2]);
      index2 += 1;
    }
  }

  return results;
}
```

---

### LS Solution

###### Solution

```javascript
function merge(array1, array2) {
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}
```

###### Discussion

The problem's requirements—especially the rule that mutation is not allowed—make the solution more complicated to a degree that depends on how they are handled.  

The provided solution handles the non-mutation rule by first creating a copy of each input array. Next, the solution uses a `while` loop to incrementally build the `result` array. During each iteration, the solution compares the first element from the first array copy with the first element from the second array copy, and removes the element with the lower value from its array copy. Since the two array copies are already sorted, comparing the first elements like this guarantees that the lowest value between both array copies is selected, removed, and pushed to the `result` array—ensuring that it is built in the properly sorted order. The loop repeats this process until one of the array copies is empty.  

After the loop finishes, the solution concatenates the remaining elements from the non-empty array copy to the `result` array, and returns the result of this concatenation: a new array containing all the elements from both input arrays in sorted order.  

