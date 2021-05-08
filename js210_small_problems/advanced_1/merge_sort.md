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

* There are two main steps to this problem: 1) break down elements from original array into nested subarrays; 2) rebuilding the array from the nested subarrays and making sure the end result is sorted.
* The process of breaking down the elements from the original array requires successively splitting the original array in half and grouping the elements into separate arrays. This is done until no more divisions can be made; that is, the most nested subarrays will have lengths of 1.
* Then we need to recursively go through and sort the most nested subarrays and then flatten the array so that it groups the two separate arrays into one array. We can use the `merge` function defined in the previous exercise for this.

**Mental Model:**

Given an array of unsorted elements (but which are all of the same type) we must recursively divide the array in half and nest those divisions within another array. It is like we are creating a pyramid of nested arrays. The largest length of any array should be 2 and the smallest length should be 1. If an array has a length of 1 then it can no longer be divided. Once this is complete we must now recursively work through these subarrays, calling the `merge` function on them until there are no more subarrays and all we are left with is a copy of the original array but in sorted order.

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

* Arrays will be used throughout for all of the nested subarrays.

---

### Algorithm

**Part 1: Creating the Array Pyramid by Recursive Division:**

* Let's create a `divideArray` function that will perform the array division that we want.

* It will take an array with any number of subarrays, seek out the most nested subarray, check if its length is equal to 1, and if not, then it will divide the array in half and nest the divisions into an array.

* First, we have our function: `function divideArray(array)`

* To perform the division, we will need to create a midpoint variable: `let midpoint = Math.round(array.length / 2)`

* Then we need some conditional statments:

  * check if the array length is equal to 1:
  * check if the array is the one we need to perform division on; this will be an array that contains non-array elements. Thus, if the first element is an array, we know we need to go deeper into the nested subarrays to find the one that is ready for division. This is where we will want to recursively call our `divideArray` function. Since we want to perform the `divideArray` on all of the current nested subarray's subarrays we need to `map` over all of those subarrays, perform the `divideArray` function on them, and have the return values of those returned in an array, which is what `map` does.
  * Finally, we will want the final condition to be the one where we actually perform the array division. It will take slices of the current subarray we are operating on using the midpoint as the endpoint of the first slice and the starting point of the second slice. These two slices will then be returned, nested in an array.

* ```javascript
  function divideArray(array) {
    let midpoint = Math.round(array.length / 2);
    
    if (array.length === 1) {
      return array;
    } else if (Array.isArray(array[0])) {
      return array.map(subarray => divideArray(subarray));
    } else {
      return [array.slice(0, midpoint), array.slice(midpoint)];
    }
  }
  ```

* Now, this function solves the problem of dividing the most nested subarrays given an array with a number of subarrays. However, it stops after making a single division. We may need to continue to create further division until the most nested subarrays have a length equal to 1. That means we need to keep calling the `divideArray` function until we get to that point.

* The condition at which that point is reached can be determined by the fact that we know how many times we have to perform a division given the length of the initial array. For example if the initial array has 8 elements, dividing it in half means we now have two nested subarrays that have a length of four. Another division by 2, leads to subarrays of length 2. One more division gives us the ending criteria of nested subarrays of length 1. Thus, there were four total divisions that occurred. We can derive this number by the fact that 8 divided by 2 equals 4. Now suppose we have an odd number of elements in the array, we can just round up (for example, 9 / 2 = 4.5 = 5 rounded up).

* We'll call this function the `makeNestedArray(array)` function:

* First, we determine the number of iterations we need to perform the `divideArray` function.

* Then we will create a copy of the input array so as not to mutate it.

* Then we create a `for` loop starting with an iteration of 1 and increment it up until our limit given by the number we calculated for the total iterations.

* Within the loop we store the result of calling `divideArray(nestedArrays)` to the copy we created outside the loop, which we call `nestedArrays`. Thus on each loop we are modifying that array and reassigning it to the modified result.

* Then we return the resulting array

  ```javascript
  function makeNestedArray(array) {
    let iterations = Math.round(array.length / 2);
    let nestedArrays = array.slice();
    
    for (let iteration = 1; iteration <= iterations; iteration += 1) {
      nestedArrays = divideArray(nestedArrays);
    }
    
    return nestedArrays;
  }
  ```

* This completes the first part of our original problem.

**Part 2: Recursively Sorting the Most Nested Subarrays and Flattening Them**

* We will rely on the `merge` function we created in the previous exercise:

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

* We will create a function called: `function sortAndFlatten(nestedArrays)`

* We will start by declaring a `sorted` variable-- `let sorted;` -- with no initialization. This will be the variable that we ultimately return.

* If what is passed into this function is not an array, then we don't want to perform anything on it; we will simply return it since it is one of the elements. We don't want to throw an error here since we are likely to come across certain elements in this recursive function that simply need to be left alone, and by simply returning what was passed in, we can treat it as if we simply passed over it without doing anything to it.

  * Thus, `if (!Array.isArray(nestedArrays))` then `return nestedArrays;`

* What we are ultimately wanting to identify in order to call our `merge` function is an array that contains two nested subarrays whose elements are not arrays. For example: `[[8], [2]]` or `[[5, 6], [2, 3]]`.  This condition can be defined as `else if (nestedArrays.length === 2 && !Array.isArray(nestedArrays[0][0]))`  then `sorted = merge(nestedArrays[0], nestedArrays[1])`

* If we don't have either of the two above conditions, then we need to continue digging deeper into our nested subarrays and iterating over the subarrays of the current array. We can use the `map` method to perform those operations since we ultimately want the return values of those operations to be nested back into an array. We're just performing a transformation on the current array, and so we need to maintain the original array structure.

  * For each of the subarrays that we iterate over, we can then recursively call our `sortAndFlatten` function.

* There is one more conditional statement we need to implement in the case where our initial division into subarrays led to groups of arrays with an odd number of elements. In this case we can perform one final check, and that is checking if there still exists a nested subarray in our `sorted` variable. We can verify this using the  `if (Array.isArray(resultArray[0]))` then `sorted = sortAndFlatten(sorted)`.

* We can then return our `sorted` array.

  ```javascript
  function sortAndFlatten(nestedArrays) {
    let sorted;
    
    if (!Array.isArray(nestedArrays)) {
      return nestedArrays;
    } else if (nestedArrays.length === 2 && !Array.isArray(nestedArrays[0][0])) {
      sorted = merge(nestedArrays[0], nestedArrays[1]);
    } else {
      sorted = nestedArrays.map(array => sortAndFlatten(array));
    }
    
    if (Array.isArray(sorted[0])) {
      sorted = sortAndFlatten(sorted);
    }
    
    return sorted;
  }
  ```

**Part 3: Bring the Other Two Parts Together:**

```javascript
function mergeSort(array) {
  let nestedArrays = makeNestedArray(array);
  return sortAndFlatten(nestedArrays);
}
```

---

### Code

```javascript
function mergeSort(array) {
  let nestedArrays = makeNestedArray(array);
  return sortAndFlatten(nestedArrays);
}

function divideArray(array) {
  let midpoint = Math.round(array.length / 2);
  
  if (array.length === 1) {
    return array;
  } else if (Array.isArray(array[0])) {
    return array.map(subarray => divideArray(subarray));
  } else {
    return [array.slice(0, midpoint), array.slice(midpoint)];
  }
}

function makeNestedArray(array) {
  let iterations = Math.round(array.length / 2);
  let nestedArrays = array.slice();
  
  for (let iteration = 1; iteration <= iterations; iteration += 1) {
    nestedArrays = divideArray(nestedArrays);
  }
  
  return nestedArrays;
}

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

function sortAndFlatten(nestedArrays) {
  let sorted;
  
  if (!Array.isArray(nestedArrays)) {
    return nestedArrays;
  } else if (nestedArrays.length === 2 && !Array.isArray(nestedArrays[0][0])) {
    sorted = merge(nestedArrays[0], nestedArrays[1]);
  } else {
    sorted = nestedArrays.map(array => sortAndFlatten(array));
  }
  
  if (Array.isArray(sorted[0])) {
    sorted = sortAndFlatten(sorted);
  }
  
  return sorted;
}
```

---

### LS Solution

