##### JS210 - Small Problems > String and Text Processing

---

## Staggered Caps Part 1

### Problem

Write a function that takes a string as an argument, and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.  

---

### Examples / Test Cases

Examples:

```javascript
staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"
```

---

### Data Structure

**Input**

* A string.

**Output**

* A string with a staggered capitalization scheme.

---

### Algorithm

**Abstractions:**

* Iterate over each character, making every even-indexed character uppercase and every odd-indexed character lowercase.

---

### Code

```javascript
function staggeredCase(text) {
  let newText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (index % 2 === 0) {
      newText += text[index].toUpperCase();
    } else {
      newText += text[index].toLowerCase();
    }
  }

  return newText;
}
```

---

### LS Solution

###### Solution

```javascript
function staggeredCase(string) {
  return string
    .split("")
  	.map((char, index) => {
    	if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
  	})
  	.join("");
}
```

###### Discussion

The solution uses a **transformation** processing strategy to convert each character in the `string` argument to the appropriate case. The `String.prototype.toUpperCase` and `String.prototype.toLowerCase` methods handle both alphabetic and non-alphabetic characters. To determine the appropriate case, the solution uses the `index` value provided by the `Array.prototype.map` method. When the `index` is an even number, the solution changes the character to uppercase; lowercase otherwise. After the transformation, the solution joins the characters back together using the `Array.prototype.join` method, and returns the resulting string.