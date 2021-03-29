##### JS210 - Small Problems > String and Text Processing

---

## Capitalize Words

### Problem

Write a function that takes a string as an argument, and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.  

You may assume that a word is any sequence of non-whitespace characters.

---

### Examples  / Test Cases

Examples:

```javascript
wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'
```

---

### Data Structure

**Input**

* A string.

**Output**

* A string with the first letter of each word capitalized and all other letters in lowercase.

---

### Algorithm

**Abstractions:**

* Split the string into separate words using all white space characters as the delimiter.
* Iterate over each word, replacing the first letter of each word with a capitalized version and then making sure that all other letters in the word are lowercase.

**Functions/Methods/regex:**

* use `split(/\s/g)`
* use `map` to iterate over each word.

**Implementation Steps:**

* Declare a `words` variable and initialize it with the return value of `text.split(/\s/g)`
* Call the `map` method on the `words` variable, using the argument `word`:
  * Declare a `firstLetter` variable and initialize it with a capitalized version of the first letter of the word.
  * Declare a `restOfWord` variable and intialize it to an all-lowercase version of the rest of the word using the `slice(1)` method.
  * `return firstLetter + restOfWord`.
* Return the string value associated with the array returned by `map` after calling `join(' ')`.

---

### Code

```javascript
function wordCap(text) {
  let words = text.split(/\s/g);

  return words.map(word => {
    let firstLetter = word[0].toUpperCase();
    let restOfWord = word.slice(1).toLowerCase();

    return firstLetter + restOfWord;
  }).join(' ');
}
```

---

### LS Solution

###### Solution

```javascript
function wordCap(words) {
  return words.split(' ')
  					  .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
  						.join(' ');
}
```

###### Discussion

The solution uses the **transformation** list processing strategy to capitalize the first character of each word.  

The solution breaks down the `words` argument string by splitting it, using a space (`' '`) as a separator. The solution then uses the `String.prototype.slice` method to split each word into two parts: (1) the first character and (2) all subsequent characters. The solution then calls `String.prototype.toUpperCase` and `String.prototype.toLowerCase` on each part, respectively. Next, the callback function concatenates the two parts and returns the resulting string. Finally, the solution joins the array of words together into a string and returns it.  

Notice that `toUpperCase` handles the scenario in which the first character is not alphabetic, and `toLowerCase` does the same for the remaining characters.  



