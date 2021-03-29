##### JS210 - Small Problems > String and Text Processing

---

## Staggered Caps Part 2

### Problem

Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.  

---

### Examples / Test Cases

Examples:

```javascript
staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"
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

* This will be similar to the last exercise but we must first check to see whether the character is an alphabetic character and we must then keep a separate index just for alphabetic characters.

---

### Code

```javascript
function staggeredCase(text) {
  let alphaIndex = 0;

  return text.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      if (alphaIndex % 2 === 0) {
        alphaIndex += 1;
        return char.toUpperCase();
      } else {
        alphaIndex += 1;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
}
```

---

### LS Solution

###### Solution

```javascript
function staggeredCase(string) {
  let needUpper = true;
  let newChar;
  
  return string.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase();
      }
      
      needUpper = !needUpper;
      return newChar;
    } else {
      return char;
    }
  }).join('');
}
```

###### Discussion

The main difference between this solution and the previous one is the approach for determining whether to change a character's case. Instead of using the index position of the character, this solution uses a boolean switch, `needUpper`. When the case of a letter character changes, the solution flips the value of the switch; otherwise, the switch's value remains the same. This behavior allows the function to ignore the effect of passing over non-letter characters. Because of this, the solution toggles the `needUpper` switch before returning the `newChar`.

