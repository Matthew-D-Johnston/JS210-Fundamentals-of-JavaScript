##### JS210 - Small Problems > List Processing

---

## Leading Substrings

### Problem

Write a function that takes a string argument, and returns a list of all substrings that start from the beginning of the string, ordered from shortest to longest.  

---

### Examples / Test Cases

Examples: 

```javascript
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
```

---

### Data Structure

**Input**

* A String.

**Output**

* An Array whose elements are String representations of the subsets of the original String.

---

### Algorithm

**Abstractions:**

* Create a loop that loops the full length of the String.
* Extract the subsets of the String on each loop.
* Push the subsets to a results Array.

**Implementation Steps:**

* Declare a `subsets` variable and initialize it with an empty Array.
* Use a `for` loop to loop over the length of the input String.
* Use the `slice` method on the input String to extract subsets of the String, `push`ing them to the `subsets` Array.

---

### Code

```javascript
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
function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }
  
  return substrings;
}
```

###### Discussion

This problem can be solved using the list processing functions. However, doing so is needlessly complex. This is one of those situations where a `for` loop may be the most elegant solution. Given that approach, all we have to do is iterate through the input string and extract a list of the substrings of length 1, 2, 3, and so on starting at the beginning of the string.  

###### Further Exploration

Rewrite `leadingSubstrings` using list processing functions. That is, convert the string into an array of some sort and use functions like `map`, `filter`, or `reduce` to get the desired substrings. (You will also need to use `join`.) Try not to use `forEach` as that is too similar to the `for` loop approach.

##### My Solution

```javascript
function leadingSubstrings(string) {
  let chars = string.split('');

  return chars.map((char, index) => chars.slice(0, index + 1)
                                         .reduce((str, char) => str + char));
}
```



