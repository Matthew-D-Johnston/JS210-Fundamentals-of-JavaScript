##### JS210 - Small Problems > String and Text Processing

---

## How Long Are You

### Problem

Write a function that takes a string as an argument, and returns an array that contains every word from the string, with each word followed by a space and the word's `length`. If the argument is an empty string or if no argument is passed, the function should return an empty array.  

You may assume that every pair of words in the string will be separated by a single space.  

---

### Examples / Test Cases

```javascript
wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []
```

---

### Data Structure

**Input**

* A string.

**Output**

* An array whose elements are string representations of the words from the original string followed by a space and the length of the word.

---

### Algorithm

* Split the input string into component words using a space, `' '`, as the delimiter.
* Transform the resulting array using `map` and then on each iteration returning the word + `' '` + the word's length.

---

### Code

```javascript
function wordLengths(text) {
  if (!text) {
    return [];
  }
  
  return text.split(' ')
             .map(word => word + ' ' + String(word.length));
}
```

---

### LS Solution

###### Solution

```javascript
function wordLengths(words) {
  if (arguments.length === 0 || words.length === 0) {
    return [];
  }
  
  return words.split(' ').map(word => `${word} ${String(word.length)}`);
}
```

###### Discussion

The solution uses the **transformation** list processing strategy. It converts the input string into an array of words using a space (`' '`) as a separator. The solution then uses the `Array.prototype.map` method to transform each `word` in the array into a string containing the `word` followed by a space and the `word`'s `length`.  

The solution uses a guard clause to handle the cases in which the argument is an empty string or no argument is passed. For these cases, the solution immediately returns an empty array.