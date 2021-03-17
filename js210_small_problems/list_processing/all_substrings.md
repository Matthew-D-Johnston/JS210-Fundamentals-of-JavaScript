##### JS210 - Small Problems > List Processing

---

## All Substrings

### Problem

Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.  

You may (and should) use the `leadingSubstrings` function you wrote in the previous exercise.

---

### Examples / Test Cases

Example:

```javascript
substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
	"b", "bc", "bcd", "bcde",
	"c", "cd", "cde",
	"d", "de",
	"e" ]
```

---

### Data Structure

**Input**

* A String.

**Output**

* An Array whose elements are substrings of the input String.

---

### Algorithm

**Abstractions:**

* We need to iterate over each character of the input string.
* At each character, we need to extract the entire string from that character to the end of the string.
* We then need to take the extracted portion of the string and find each of the substrings.
* With this array of substrings, we then need to concatenate it with a results Array.

**Functions/Methods:**

* We can use a `for` loop to iterate over each character.
* Use the `slice` method to extract each string beginning with the current character.
* Use the `leadingSubstrings` function from the previous exercise to obtain the substrings for each of the extracted string from the original.
* Use the `flat` method on the final results Array in order to transform it from an Array of nested Arrays to an Array of just the substrings.

**Implementation Steps:**

* Declare a `Results` constant variable and initialize it with an empty array.
* Begin a `for` loop to loop over the characters of the input string.
* Declare a `substring` variable and initialize it with an extracted string from the original string input, using the `slice` method and the current `index`.
* Declare a `substringsArray` variable and intiailize it with the return value of the `leadingSubstrings(substring)` function from the previous exercise.
* Use the `push` method to push this array of substrings to the `Results` constant.
* Increment the `index` and repeat the process to obtain the substrings from consecutive characters in the original string.
* Outside the loop, use the `flat` method on the `Results` constant to obtain an Array of the substrings.

---

### Code

```javascript
function substrings(string) {
  const Results = [];

  for (let index = 0; index < string.length; index += 1) {
    let substring = string.slice(index);
    let substringsArray = leadingSubstrings(substring);
    Results.push(substringsArray);
  }

  return Results.flat();
}

function leadingSubstrings(string) {
  const Subsets = [];

  for (let index = 0; index < string.length; index += 1) {
    Subsets.push(string.slice(0, index + 1));
  }

  return Subsets;
}
```

---

### LS Solution

```javascript
function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings =substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}
```

###### Discussion

Even with the help of the `leadingSubstrings` function written earlier, this problem still seems to be easiest when we use an ordinary `for` loop. The twist here is that `substrings` handles the process of finding the substrings on the trailing end of the original string, while `leadingSubstrings` handles the leading substrings.  

If that's a little hard to hold in your head, think about what must happen here. We'll assume that the original string is `abc`:

- `substrings` is called with `abc` as an argument

- The loop in `substrings` extracts all the trailing substrings from `abc`: `bc`, and `c`.

- For each of the trailing substrings, we call `leadingSubstrings` with that substring.

  - When we call it with `abc`, `leadingSubstrings` returns `['a', 'ab', 'abc']`
  - When we call it with `bc`, `leadingSubstrings` returns `['b', 'bc']`
  - When we call it with `c`, `leadingSubstrings` returns `['c']`

- All of the arrays returned by `leadingSubstrings` get concatenated together, yielding the final result:

  ```javascript
  ['a', 'ab', 'abc', 'b', 'bc', 'c']
  ```

If it weren't for the `leadingSubstrings` function, this problem could've easily become much more complicated to wrap our heads around.

###### Further Exploration

Rewrite `substrings` using list processing functions. That is, convert the string into an array of some sort and use functions like `map`, `filter`, or `reduce` to get the desired substrings. (You will also need to use `join`.) Try not to use `forEach` as that is too similar to the `for` loop approach.

##### My Solution

```javascript
function substrings(string) {
  let chars = string.split('');

  let substringsArray = chars.map((char, index) => {
    return leadingSubstrings(chars.slice(index).join(''));
  });

  return substringsArray.flat();
}

function leadingSubstrings(string) {
  const Subsets = [];

  for (let index = 0; index < string.length; index += 1) {
    Subsets.push(string.slice(0, index + 1));
  }

  return Subsets;
}
```

