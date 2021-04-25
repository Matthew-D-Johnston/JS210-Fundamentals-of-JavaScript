##### JS210 - Small Problems > Medium Problems 2

---

## Bubble Sort

### Problem

**Problem Description:**

'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm, it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an array using the bubble sort algorithm.  

A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.  

| **6** | **2** | 7     | 1     | 4     | Start: compare 6 > 2? Yes  |
| ----- | ----- | ----- | ----- | ----- | -------------------------- |
| **2** | **6** | 7     | 1     | 4     | Swap                       |
| 2     | **6** | **7** | 1     | 4     | 6 > 7? No (no swap)        |
| 2     | 6     | **7** | **1** | 4     | 7 > 1? Yes                 |
| 2     | 6     | **1** | **7** | 4     | Swap                       |
| 2     | 6     | 1     | **7** | **4** | 7 > 4? Yes                 |
| 2     | 6     | 1     | **4** | **7** | Swap                       |
|       |       |       |       |       |                            |
| **2** | **6** | 1     | 4     | 7     | 2 > 6? No                  |
| 2     | **6** | **1** | 4     | 7     | 6 > 1? Yes                 |
| 2     | **1** | **6** | 4     | 7     | Swap                       |
| 2     | 1     | **6** | **4** | 7     | 6 > 4? Yes                 |
| 2     | 1     | **4** | **6** | 7     | Swap                       |
| 2     | 1     | 4     | **6** | **7** | 6 > 7? No                  |
|       |       |       |       |       |                            |
| **2** | **1** | 4     | 6     | 7     | 2 > 1? Yes                 |
| **1** | **2** | 4     | 6     | 7     | Swap                       |
| 1     | **2** | **4** | 6     | 7     | 2 > 4? No                  |
| 1     | 2     | **4** | **6** | 7     | 4 > 6? No                  |
| 1     | 2     | 4     | **6** | **7** | 6 > 7? No                  |
|       |       |       |       |       |                            |
| **1** | **2** | 4     | 6     | 7     | 1 > 2? No                  |
| 1     | **2** | **4** | 6     | 7     | 2 > 4? No                  |
| 1     | 2     | **4** | **6** | 7     | 4 > 6? No                  |
| 1     | 2     | 4     | **6** | **7** | 6 > 7? No                  |
| 1     | 2     | 4     | 6     | 7     | No swaps; all done; sorted |

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.  

For further information — including pseudo-code that demonstrates the algorithm, as well as a minor optimization technique — see the [Bubble Sort Wikipedia page](https://en.wikipedia.org/wiki/Bubble_sort).  

Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.  

**Definition and Rules:**

* Take an array.
* We are mutating the original array, not making a copy.
* Assume that the array always has at least two elements.
* Sort the array by comparing consecutive elements and switching them based on their relative size.
  * example:  `[ 3, 5, 2, 7, 1]` 
  * first pass: swap `5` and `2` and `7` and `1` => `[ 3, 2, 5, 1, 7 ]`
  * second pass: swap `2` and `3` and `5` and `1` => `[ 2, 3, 1, 5, 7 ]`
  * third pass: swap `3` and `1` => `[ 2, 1, 3, 5, 7 ]`
  * fourth pass: swap `2` and `1` =>` [ 1, 2, 3, 5, 7 ]`
* If no swapping occurs on a single pass, then the sorting is done and the array can be returned.

**Mental Model:**

Take an an array that will do successive passes in order to sort the entire array. On each pass, each adjacent elements are compared and swapped if the element that occurs first in the array is greater than the element that comes after it. The condition to follow for looping is when no swapping occurs, thus we must implement some kind of switch variable that gets toggled whenever a swap occurs. The toggle must be switched back to the original position at the start of every new pass.

---

### Examples / Test Cases

```javascript
const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
```

---

### Data Structure

**Inputs:**

* An array

**Outputs:**

* The original array sorted from smallest to biggest.

**Intermediate Data Structures:**

* 

---

### Algorithm

* We will implement the function with two loops: a `while` loop and a `forEach` loop.
* We must declare a `swapped` variable and initialize it with the boolean `true`; this will be our toggle variable that gives us our condition for exiting from the `while` loop.
* Our while loop condition will be `while (swapped)`
  * But immediate within our `while` loop we will want to toggle the `swapped` variable to `false`.
  * Then we want to call the `forEach` method on our input `array`. We will want to make sure we provide both the `elem` and `index` parameters.
  * if `elem > array[index + 1] && (index + 1) < array.length` then:
    * we can declare `first` and `second` variables, initializing them with `elem` and `array[index + 1]` respectively.
    * Then we assign `array[index] = second` and `array[index + 1] = first`.
    * then we assign `swapped = true`.
* After exiting from the `while` loop, `return array;`



---

### Code

```javascript
function bubbleSort(array) {
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let index = 0; index < array.length - 1; index += 1) {
      let first = array[index];
      let second = array[index + 1];
      if (first > second) {
        array[index] = second;
        array[index + 1] = first;
        swapped = true;
      }
    }
  }

  return array;
}
```

---

### LS Solution

##### Solution

```javascript
function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] <= array[i]) {
        continue;
      }

      swap(array, i - 1, i);
      swapped = true;
    }

    if (!swapped) {
      break;
    }
  }
}

function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}
```

###### Discussion

The solution uses a pair of loops, with one nested inside the other. The outer `while` loop handles the task of repeating the iterations until the `array` is completely sorted. The loop terminates the first time it iterates through all the comparisons without making any swaps, which it keeps track of by using the `swapped` variable.  

The inner `for` loop handles the task of comparing the values of each pair of consecutive elements and swapping them if the first element of the pair is greater than the second. The loop uses the `swap` helper function to swap the two values.  

The `swap` function takes an `array` and two indices as arguments, and mutates the `array` to swap the values at the corresponding indices. For example, given the arguments `([1, 5, 4, 2], 2, 3)`, the function mutates the array into `[1, 5, 2, 4]`. The function swaps the values at indices 2 and 3, `4` and `2`, respectively. To swap the values, the function uses a `temp` variable to hold the value of the array element at `idx1`. The function then sets the array element at `idx1` to the value of the array element at `idx2`. Finally, the function sets the array element at `idx2` to the value stored in `temp`.

