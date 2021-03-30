##### JS210 - Small Problems > String and Text Processing

---

## Search Word Part 1

### Problem

Write a function that takes a `word` and a string of `text` as arguments, and returns an integer representing the number of times the `word` appears in the `text`.  

You may assume that the `word` and `text` inputs will always be provided.  

---

### Examples / Test Cases

```javascript
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3
```

---

### Data Structure

**Input**

* A string representation of text.
* A string representation of a single word.

**Output**

* An integer representing the number of times the word appears in the text.

---

### Algorithm

* Check to see how many times the given word appears in the text.
* Use a regex that is case insensitive; that is, it will count lowercase and uppercase instances of the word: `/\bsed\b/gi`.
* Use the `match` method to return an array of all the matches.

---

### Code

```javascript
function searchWord(word, text) {
  let pattern = `\\b${word}\\b`;
  let regex = new RegExp(pattern, 'gi');

  return text.match(regex).length;
}
```

---

### LS Solution

###### Solution

```javascript
function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  const matches = text.match(regex);
  
  return matches ? matches.length : 0;
}
```

###### Discussion

The solution uses the `RegExp` constructor to create a new `RegExp` object that contains a regex pattern for globally matching a case-insensitive version of the `word` argument. The solution then passes this `regex` to the `String.prototype.match` method to search for the `word` in the `text` and return an array of matches. Finally, the solution returns the number of times the `word` appears in the `text` by returning either the `length` of the `matches` array, or `0` if no matches have been found.  

###### Further Exploration

The current solution matches the `word` even when it is just a part of a bigger word, instead of a whole word by itself. For example, when searching for `'qui'` in the `text`, this solution would also return `'quia'` as a match:  

```javascript
searchWord('qui', text);      // should return 4, NOT 13
```

Can you refactor the current solution so that it only matches whole words? In addition to this, can you also include input validation to handle cases in which one or both arguments are missing?  

##### My Solution

```javascript
function searchWord(word, text) {
  if (arguments.length === 0 || arguments.length === 1) {
    return 'Please include both a word and some text as arguments to the function.';
  }

  let pattern = `\\b${word}\\b`;
  let regex = new RegExp(pattern, 'gi');
  let matches = text.match(regex);

  return matches ? matches.length : 0;
}
```

