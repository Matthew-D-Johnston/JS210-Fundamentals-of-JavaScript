##### JS210 - Small Problems > Advanced 1

---

## Binary Search

**Problem Description:**

It is quite common to find yourself in a situation where you need to perform a search on some data to find something you're looking for. Imagine that you need to search through the [yellow pages](https://en.wikipedia.org/wiki/Yellow_pages) to find the phone number of a particular business. A straightforward way to do this would be to go through the yellow pages one business at a time, checking if the current business name is the one you're trying to find.  

This may be a simple and easy way to search, but it's not very efficient. In the worst case scenario, it could mean having to search through every single business name before finding out that the business isn't listed—or, slightly better, having to go through every letter from `'A'` to `'Z'` before finding the business. A *linear search* such as this can take quite a long time.  

A *binary search* algorithm is a much more efficient alternative. This algorithm allows you to cut the search area in half on each iteration by discarding the half that you know your search term doesn't exist in. The binary search algorithm is able to do this by relying on the data being *sorted*. Going back to the yellow pages example, let's say that we're searching the following `yellowPages` data for the search item `'Pizzeria'`:  

```javascript
// Yellow pages list of business names data:
const yellowPages = ['Apple Store', 'Bags Galore',
                     'Bike Store',  'Donuts R Us',
                     'Eat a Lot',   'Good Food',
                     'Pasta Place', 'Pizzeria',
                     'Tiki Lounge', 'Zooper'];
```

With a linear search, we would have to sequentially go through each of the items until we found the search item `'Pizzeria'`. In a binary search, however, the following sequence happens:  

- Retrieve the middle value from the data (assume truncation to integer) --> `'Eat a Lot'`.
- If the middle value is equal to `'Pizzeria'`, stop the search.
- If the middle value is less than `'Pizzeria'`:
  - Discard the lower half, including the middle value --> `['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot']`.
  - Repeat the process from the top, using the upper half as the starting data --> `['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper']`.
- If the middle value is greater than `'Pizzeria'`, do the same as the previous step, but with opposite halves.

Using the process described above, the search successfully ends on the second iteration when the middle value is `'Pizzeria'`.  

Implement a `binarySearch` function that takes an array and a search item as arguments, and returns the index of the search item if found, or `-1` otherwise. You may assume that the array argument will always be sorted.

**Definitions and Rules:**

* Middle value: given an array, find the midpoint, which will be the length of the array divided by two. Use `Math.floor(length / 2)`
* Lower half: section of array that precedes the midpoint.
* Upper half: section of array that follows the midpoint.
* Assume the given array is sorted.



**Mental Model:**

We need to extract the midpoint element from an array and compare it with the value we are searching for. If the midpoint element is equal to the value then we have completed the search and we must simply return the midpoint index. However, if the element at the midpoint is greater than our search element then we discard the upper half of the array and repeat the search process. Similarly, if we the midpoint is less than our search element then we discard the lower half of the array and repeat the search process; but in this case, we must keep track of the number of elements in the lower half so that we can add that number to the midpoint index of our next search in order to retrieve the actual index of the search element from the original array.

---

### Examples / Test Cases

```javascript
const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6
```

---

### Data Structure

**Input:**

* Two arguments: an array containing a list of sorted elements of the same type; and an argument matching the datatype of the elements in the array.

**Output:**

* The index (i.e. a number) of the element in the array that matches the second argument; if there is no match then return `-1`.

**Intermediate Data Structures:**

* 



---

### Algorithm

* Make a copy of the original array since we are going to be splitting the array and we don't want to mutate the original.
* Find the midpoint of the array: `let midpoint = Math.floor(array.length / 2);`
* We are going to want to create a loop with a certain number of iterations and some break conditions that allow us to exit the loop before it is complete.
* The number of iterations will be equal to the number of times we can divide the original array in half before we arrive at a place where we can no longer keep dividing by 2. Thus, `let iterations = Math.round(array.length / 2)`.
* Create an `indexTracker` variable that is initialized with the value of `0`
* We can start the following loop: `for (let iteration = 1; iteration <= iterations; iteration += 1)`
  * First check if the midpoint element matches our search value:
    * `return midpoint + indexTracker`
  * If not, discard the upper half of array and search through the lower half:
    * `array = array.slice(0, midpoint)`
    * `midpoint = Math.floor(array.length / 2)`
  * Else, discard the lower half of array and search through the upper half:
    * `array = array.slice(midpoint)`
    * `indexTracker += midpoint;`
    * `midpoint = Math.floor(array.length/2)`.
* If we get through the whole loop without returning an index, then we know there was no match and we can`return -1` 

---

### Code

```javascript
function binarySearch(array, searchValue) {
  let arrayCopy = array.slice();
  const iterations = Math.round(arrayCopy.length / 2);
  let indexTracker = 0;

  for (let iteration = 1; iteration <= iterations; iteration += 1) {
    let midpoint = Math.floor(arrayCopy.length / 2);

    if (arrayCopy[midpoint] === searchValue) {
      return midpoint + indexTracker;
    } else if (arrayCopy[midpoint] > searchValue) {
      arrayCopy = arrayCopy.slice(0, midpoint);
    } else {
      arrayCopy = arrayCopy.slice(midpoint);
      indexTracker += midpoint;
    }
  }

  return -1;
}
```

---

### LS Solution

###### Solution

```javascript
function binarySearch(array, searchItem) {
  let high = array.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
```

###### Discussion

The solution starts off by initializing the `high` and `low` variables. The difference between the two represents the current search area. The midpoint between the two (`mid`) is the index the solution uses to get the middle value from the `array` to compare with the `searchItem` argument.  

The solution uses a loop to iteratively search through the `array`. On each iteration, the solution computes the `mid` index value by adding the value of `low` to the integer result of dividing the current search area (`high - low`) in half. The solution then retrieves the value at the `mid` index position of the `array` and compares it to the `searchItem`. If they are equal, the solution returns the `mid` index. If the middle value is less than `searchItem`, the solution reassigns `low` to `mid + 1` to remove the indices from `low` up to `mid` from the search area. If the middle value is greater than `searchItem`, the solution reassigns `high` to `mid - 1` to remove the indices from `mid` up to `high` from the search area.  

If the value of `low` becomes greater than `high`, the search ends and the function returns `-1`—indicating that the `searchItem` could not be found.  

