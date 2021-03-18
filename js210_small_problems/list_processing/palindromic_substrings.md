##### JS210 - Small Problems > List Processing

---

## Palindromic Substrings

### Problem

Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.  

You may (and should) use the `substrings` function you wrote in the previous exercise.  

For the purpose of this exercise, you should consider all characters and pay attention to case; that is, `'AbcbA'` is a palindrome, but `'Abcba'` and `'Abc-bA'` are not. In addition, assume that single characters are not palindromes.  

---

### Examples / Test Cases

Examples: 

```javascript
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
```

---

### Data Structure

**Input**

* A string of characters.

**Output**

* An array of substrings, all of which are palindromes.

---

### Algorithm

**Abstractions:**

* Extract all of the substrings from the original string.
* Filter through the array of substrings searching for the strings that are palindromes.
* A palindrome can be determined by comparing the original substring with its reversed version.
* Also, single character strings must be filtered out.

**Functions/Methods:**

* Use the `substrings` method created in the previous exercise.
* Use the `filter` method to extract the palindromic strings from the substrings array and also to exclude single-character strings.

**Implementation Steps:**

* return a `filter` call on `substrings(string)`, which uses the following conditions for filtering:
  * substring length must be greater than 1: `substring.length > 1`.
  * The reversed version of the substring must equal the original version: `substring === substring.split('').reverse().join('')`.
  * Thus, we have: `substring.length > 1 && substring === substring.split('').reverse().join('')`.

---

### Code

```javascript
function palindromes(string) {
  return substrings(string).filter(substring => isPalindrome(substring));
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

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

---

### LS Solution

```javascript
function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}
```

###### Discussion

Again, this problem becomes much easier to solve with the help of the `substrings` function from the previous exercise. The solution uses the `substrings` function to get a list of all the substrings, and then just uses the `isPalindrome` function to filter out any substrings that aren't palindromes.  

---

