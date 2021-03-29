##### JS210 - Small Problems > String and Text Processing

---

## Swap Case

### Problem

Write a function that takes a string as an argument, and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.  

---

### Examples / Test Cases

Examples:

```javascript
swapCase('CamelCase');							// "cAMELcASE"
swapCase('Tonight on XYZ-TV');			// "tONIGHT ON xyz-tv"
```

---

### Data Structure

**Input**

* A string.

**Output**

* A string where the uppercase letters of the original input string have been changed to lowercase letters and the original lowercase letters have been changed to uppercase letters.

---

### Algorithm

**Abstractions:**

* Iterate over each character of the input string.
* If the character is uppercase then create a lowercase version and store it to the new string, and vice versa.
* If it is not an alphabetic character then just keep it the same.

---

### Code

```javascript
function swapCase(text) {
  let swappedCasesText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (/[A-Z]/.test(text[index])) {
      swappedCasesText += text[index].toLowerCase();
    } else if (/[a-z]/.test(text[index])) {
      swappedCasesText += text[index].toUpperCase();
    } else {
      swappedCasesText += text[index];
    }
  }

  return swappedCasesText;
}
```

---

### LS Solution

###### Solution

```javascript
function swapCase(string) {
  return string.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}
```

###### Discussion

The solution uses a **transformation** strategy for swapping the case of the `string` argument. If the character is a lowercase letter (`/[a-z]/`), it is changed to uppercase; if the character is an uppercase letter (`/[A-Z]/`), it is changed to lowercase. All other characters are left unchanged. Finally, the solution joins the characters together into a new string and returns it.

