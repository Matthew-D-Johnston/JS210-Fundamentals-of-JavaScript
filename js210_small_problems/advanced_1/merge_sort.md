##### JS210 - Small Problems > Advanced 1

---

## Merge Sort

### Problem

*Merge sort* is a recursive sorting algorithm that works by breaking down an array's elements into nested subarrays, then combining those nested subarrays back together in sorted order. It is best explained with an example. Given the array `[9, 5, 7, 1]`, let's walk through the process of sorting it with merge sort. We'll start off by breaking the array down into nested subarrays:  

```javascript
[9, 5, 7, 1] -->
[[9, 5], [7, 1]] -->
[[[9], [5]], [[7], [1]]]
```

We then work our way back to a flat array by merging each pair of nested subarrays back together in the proper order:  

```javascript
[[[9], [5]], [[7], [1]]] -->
[[5, 9], [1, 7]] -->
[1, 5, 7, 9]
```

Write a function that takes an array argument and returns a new array that contains the values from the input array in sorted order. The function should sort the array using the merge sort algorithm as described above. You may assume that every element of the array will be of the same data type—either all numbers or all strings.  

Feel free to use the `merge` function you wrote in the previous exercise.  

**Definitions and Rules:**

* There are two steps to this problem: 1) break down elements from original array into nested subarrays; 2) rebuilding the array from the nested subarrays and making sure the end result is sorted.
* The process of breaking down the elements from the original array requires successively splitting the original array in half and grouping the elements into separate arrays.
* The number of times this process has to be done will be determined by the number of elements in the original array divided by two. If the number of elements is odd then round up to the nearest integer after division.



**Mental Model:**





---

### Examples / Test Cases

```javascript
mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]


// Further Examples

[6, 2, 7, 1, 4, 3] -->
[[6, 2], [7, 1], [4, 3]] or [[6, 2, 7], [1, 4, 3]] -->
[[[6], [2]], [[7], [1]], [[4], [3]]] or [[[6, 2], [7]], [[1, 4], [3]]] -->
  																			
```

---

### Data Structure:

**Input:**

* An array containing elements of the same datatype, either numbers or strings.

**Output:**

* An array that contains the same elements as the input array but in ascending order.

**Intermediate Data Structures:**

* ???

---

### Algorithm