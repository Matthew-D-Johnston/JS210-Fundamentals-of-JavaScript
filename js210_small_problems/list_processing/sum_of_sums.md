##### JS210 - Small Problems > List Processing

---

## Sum of Sums

### Problem

Write a function that takes an array of numbers, and returns the sum of the sums of each leading subsequence for that array. You may assume that the array always contains at least one number.  

---

### Examples / Test Cases

Examples: 

```javascript
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35
```

---

### Data Structure

**Input**

* An Array of Integers.

**Output**

* A single Integer.

---

### Algorithm

**Abstractions:**

* Take the subsets of the Array, reduce them to a single Integer by adding up the individual elements.
* Then add up the inidivual subset sums.

**Implementation Steps:**

* Create a `totalSums` variable. Initialize it with the value `0`.
* Iterate over the Array: use `forEach` and use both an `element` and `index` parameter.
* Initialize a `subsetSums` variable.
* Use the `slice` method to extract subsets of the Array.
* Use the `reduce` method on the subset to derive the sum of the subset.
* Increment the `totalSums` variable with the `subsetSums` variable.
* Return the `totalSums` variable.

---

### Code

```javascript
function sumOfSums(array) {
  let totalSums = 0;

  for (let index = 0; index < array.length; index += 1) {
    let subset = array.slice(0, index + 1);
    let subsetSums = subset.reduce((sum, num) => sum + num, 0);
    totalSums += subsetSums;
  }

  return totalSums;
}
```

---

### LS Solution

```javascript
function sumOfSums(numbers) {
  return numbers.map((number, idx) => numbers.slice(0, idx + 1)
                    												 .reduce((sum, value) => sum + value))
  																					 .reduce((sum, value) => sum + value);
}
```

###### Discussion

This solution can be bit tricky to look at. Let's break it down using a list processing approach so that it's easier to make sense of. Let's take a look at what happens when the array, `[3, 5, 2]`, is passed as an argument:

* The solution first transforms the input array of numbers into its expanded form. Each element is mapped to a subarray containing a leading subsequence of elements from the input array. The `length` of each subarray is equal to the value of that subarray's index plus `1`.

```javascript
[[3], [3, 5], [3, 5, 2]]		// result from `slice`
```

* Next, the solution reduces the values of each subarray, adding them together to get their sum.

```javascript
[3, 8, 10]						// result from `map` and first `reduce`
```

* Finally, the solution reduces one more time. This time it adds all the sums together to get the sum of sums, and returns it.

```javascript
21
```

