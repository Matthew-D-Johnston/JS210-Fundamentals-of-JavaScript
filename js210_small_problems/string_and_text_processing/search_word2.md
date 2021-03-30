##### JS210 - Small Problems > String and Text Processing

---

## Search Word Part 2

### Problem

The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.  

For this exercise, write a function that takes a `word` and a string of `text` as arguments, and returns the `text` with every instance of the `word` highlighted. To highlight a word, enclose the word with two asterisks (`'**'`) on each side and change every letter of the word to uppercase (e.g., `'**HIGHLIGHTEDWORD**'`).  

---

### Examples / Test Cases

Example:  

```javascript
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
```

---

### Data String

**Input**

* Two arguments: a string representing a single word; and a string representing a bit of text comprised of many words.

**Output**

* A string representing the input string but which contains highlights of the instances of the input word argument.

---

### Algorithm

* Replace the word matches in the text with higlighted versions of those words.
* Use the `replace` method with the same regex from the part 1 version of this exercise.

---

### Code

```javascript
function searchWord(word, text) {
  if (arguments.length === 0 || arguments.length === 1) {
    return "Error: please include both a word and some text as arguments to the function.";
  }

  let pattern = `\\b${word}\\b`;
  let regex = new RegExp(pattern, 'gi');

  return text.replace(regex, `**${word.toUpperCase()}**`);
}
```

---

### LS Solution

###### Solution

```javascript
function searchWord(word, text) {
  const regex = new RegExp(word, 'gi');
  return text.replace(regex, `**${word.toUpperCase()}**`);
}
```

###### Discussion

This solution is almost identical to the one from the previous exercise. The main differences are that this solution uses the `String.prototype.replace` method instead of `String.prototype.match`, and returns a modified version of the `text` instead of a number.

###### Further Exploration

Like in the previous exercise, try implementing a solution that only matches whole words instead of parts of words.

##### My Solution

See above solution.