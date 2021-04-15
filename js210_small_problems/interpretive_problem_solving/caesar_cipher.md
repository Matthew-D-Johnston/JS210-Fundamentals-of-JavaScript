##### JS210 - Small Problems > Interpretive Problem Solving

---

## Caesar Cipher

### Problem

**Problem Description:**

Write a function that implements the *Caesar Cipher*. The Caesar Cipher is one of the earliest and simplest ways to encrypt `plaintext` so that a message can be transmitted securely. It is a substitution cipher in which each letter in a `plaintext` is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter `'A'` is right-*shifted* by `3` positions, it will be substituted with the letter `'D'`. This *shift* value is often referred to as the `key`. The "encrypted `plaintext`" (`ciphertext`) can be decoded using this `key` value.  

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the `key` value for shifting exceeds the length of the alphabet, it wraps around from the beginning.  

**Definitions and Rules (explicit and implicit):**

* Cipher: substitutes one letter with another letter an n number of positions to the right of that letter in the alphabet.
* Letter: any of the characters in the 26-character alphabet.
* The Key: the _shift_ value; in other words, the number of characters to the right of the given letter that must be returned. If starting with `A`, then `A` is basically position `0`, and if we count say three to the right, then the third letter will be letter `D`.
* Only encrypt letters: any character that is not in the 26-letter alphabet should be left as is.
* Should be able to handle both upper and lower case letters. The substituted letters are in the same letter case as the original.
* If the `key` value exceeds length of alphabet, it should wrap around.
* Assume that the `key` value is always positive.

**Input/Output:**

* Input: some text representing any number of characters and a number for the key.
* Output: an encoded version of the original text.

**Mental Model:**

Take a bit of text and a key value. Encode the text with the cipher by substituting each letter with a letter that is the same number of positions to the right of the letter as the key value. The cipher should be able to find the current position of the original letter and then count key-value positions to the right to retrieve the next value and append that letter to a new string.

---

### Examples / Test Cases

```javascript
// simple shift
caesarEncrypt('A', 0);       // "A"
caesarEncrypt('A', 3);       // "D"

// wrap around
caesarEncrypt('y', 5);       // "d"
caesarEncrypt('a', 47);      // "v"

// all letters
caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
```

---

### Data Structure

**Input**

* A string with any number of characters.
* An integer representing the `key` value.

**Output**

* A string representation of the encoded version of the original string.

**Intermediate Data Structures:**

* I might want to represent the alphabet using either an array or a string; basically, something that allows me to retrieve each letter based on an index value. A string might be useful since it can easily be converted to upper/lower case.
* Represent the encoded version of the text as a string. Will have to append values to this string throughout the execution of the function.

---

### Algorithm

* Let's isolate a few smaller processes that we will want to do:
  * Construct indexed alphabet list.
  * Encode a single letter.
  * Obtain the position of the substitute letter (i.e. position of the original letter plus the `key` value).
  * Translate key values that need to be wrapped to the beginning of the alphabet list.
  * Handle non-alphabetic characters.

**Construct Indexed Alphabet List:**

* Declare an `alphabet` variable and assign to `'abcdefghijklmnopqrstuvwxyz'`.

**Obtain Position of Substitute Letter:**

* Find the index of the original letter in our `alphabet` list. This will be the starting `position` of the original letter.
* Add the `key` value to the `position` to get the `substitutePosition`.
* If the `substitutePosition > 25`, we will need to subtract the value of `26` until it is below `25`.

**Encode a Single Letter:**

* Using the `substitutePosition`, we can now use that as the index and retrieve the `substituteLetter` from the `alphabet` list.

**Main Cipher:**

* Declare an `encoded` variable and initialize it with an empty string value.
* Iterate over each character using a `for` loop.
* If we are dealing with an alphabetic character we will need to perform substitutions; otherwise, just append the current character to the `encoded` string.
* For alphabetic characters we need to determine whether to handle a upper or lower case letter.
* Assign the `substitutePosition`.
* Obtain the `substituteLetter` with the `substitutePosition` as an index to the `alphabet` list.
* Return the `encoded` variable.

---

### Code

```javascript
const Alphabet = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(text, key) {
  let encrypted = '';

  for (let index = 0; index < text.length; index += 1) {
    let char = text[index];

    if (/[a-z]/.test(char)) {
      let position = Alphabet.indexOf(char);
      let substitutePosition = findSubstitutePosition(position, key);
      encrypted += Alphabet[substitutePosition];
    } else if (/[A-Z]/.test(char)) {
      let position = Alphabet.toUpperCase().indexOf(char);
      let substitutePosition = findSubstitutePosition(position, key);
      encrypted += Alphabet.toUpperCase()[substitutePosition];
    } else {
      encrypted += char;
    }
  }

  return encrypted;
}

function findSubstitutePosition(position, key) {
  let newPosition = position + key;

  while (newPosition >= 26) {
    newPosition -= 26;
  }

  return newPosition;
}
```

---

### LS Solution

##### Understanding the Problem

Let's break down the problem using the description and the given test cases, then analyze the requirements.

- Input

  - `plaintext`: any sequence of characters.
  - `key`: an integer greater than or equal to `0`. Its value can be greater than the number of letters in the alphabet.

- Output

  - `ciphertext`: a sequence of characters. It has the same number of characters as the `plaintext`. It is the "encrypted" version of the `plaintext`.

- **Requirement/Rules:** let's go through the problem and analyze the requirements for processing the input to get the output.

  - "Encrypt

     

    ```
    plaintext
    ```

    "

    - We encrypt the `plaintext` by shifting the position of each letter by the value of the `key`.
    - To shift the position of a letter, first we step `key` number of times to the right from the letter's position in the alphabet to find the new letter, and then we substitute the current letter with the new letter.
    - If the character isn't a letter, we leave it as is.

  For example, given a `key` of `3`, we'll shift the characters `'t'`, `'T'`, and `'#'` as shown below:

  

  ![img](https://dbdwvr6p7sskw.cloudfront.net/js-exercises/images/ciphers1.png)

  

  - Wrap around when the

     

    ```
    key
    ```

     

    value exceeds the length of the alphabet

    - We can visualize wrapping around by thinking of the alphabet as a chain of alphabets linked together. Each link is joined by the last and first letters, such as `'...xyzabc...'`. So when the value of the `key` makes us step past the alphabet's length (beyond letter `'z'`), we just need to continue along the chain to the next alphabet link.
    - Mathematically, we can think of "wrapping around" as restarting the count from the beginning of the alphabet. We can do this by adding the value of the `key` to the position of the character to be encrypted. Then we'll subtract `26` from the sum until we get a value less than or equal to `26` (`'z'`/`'Z'`).

  For example, given a `key` of `8`, we'll shift the letter `'t'` as shown below:

  

  ![img](https://dbdwvr6p7sskw.cloudfront.net/js-exercises/images/ciphers2.png)

  

  Notice that "wrapping around" is dependent on two things: (1) the position of the current letter in the alphabet and (2) the value of the `key`. If the position is at the last letter in the alphabet (`'z'`), we would have to "wrap around" even with a `key` value as low as `1`. Likewise, if the `key` value is greater than or equal to `27`, we would have to wrap around even if the position is at the first letter in the alphabet (`'a'`).

- **Mental Model**

  - Going over our requirements from above, we can approach "encrypting" the `plaintext` in at least 2 ways: (1) we can *map* each character to its "encrypted" counterpart, or (2) we can use the `plaintext` to incrementally build the `ciphertext` one character at a time, starting from an empty string. Both options are easy to work with, but for demonstration purposes, we'll go with the second one: incrementally building the `ciphertext`.
  - We'll also need to decide how to "wrap around". We'll take a literal approach and use "alphabet strings" as "chain links" to construct a "chain" of alphabets. We'll keep track of the current letter's position in the alphabet, and add a chain link every time the value of the `key` will make us step past the end of the chain link we're currently in.

##### Data Structure and Algorithm

For our data structure, we'll use strings to represent the alphabet chain and alphabet links, and we'll use an array of characters for working with the `plaintext`.

Now that we've broken down the problem and chosen a data structure, let's work on our algorithm:

1. Initialize a `ciphertext` variable to an empty string.

2. Iterate over each character of the

    

   ```
   plaintext
   ```

    

   input.

   - If the character is a letter in the alphabet, check if it's upper or lower case, "encrypt" it accordingly, and then append it to

      

     ```
     ciphertext
     ```

     .

     - Locate the current letter in the alphabet to get its position.
     - Step `key` times from this position to the right.
     - If a step goes beyond the last letter in the alphabet, add another "alphabet link".
     - After the last step, append the new letter to `ciphertext`.

   - If the character is not in the alphabet, append it as-is to `ciphertext`.

3. After the Caesar encryption is complete, return the `ciphertext`.

##### Solution

```javascript
function caesarEncrypt(plaintext, key) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let ciphertext = '';

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      ciphertext += encrypt(char, key, upperAlphabet);
    } else if (char >= 'a' && char <= 'z') {
      ciphertext += encrypt(char, key, lowerAlphabet);
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, alphabet) {
  const letterPos = alphabet.indexOf(letter);

  for (let step = 1; step <= key; step += 1) {
    if (!alphabet[letterPos + step]) {
      alphabet += alphabet;
    }

    letter = alphabet[letterPos + step];
  }

  return letter;
}
```

##### Alternative Mental Model and Algorithm

If you're mathematically inclined, an alternative mental model is to use the ASCII value of the character and the length of the alphabet to encrypt the `plaintext` via mathematical computation.  

In this version of the encryption, we'll use the fixed number of characters in the alphabet to normalize upper and lower case letters by subtracting a `base` value. Once the letters are normalized, we'll use the remainder operator (`%`) to "wrap around" the alphabet value with the `key`. The value returned is the string representation of the ASCII value of `alphabet value + base value`.  

Notice that the `%` operator has the same effect as subtracting `26` every time the sum of the letter's position in alphabet and the value of the `key` exceeds the position of the letters `'z'` or `'Z'`. Using the `%` operator is beneficial because it handles the situation where the value of the `key` makes us exceed `'z'/'Z'` multiple times.  

The only difference in this version of the algorithm is step #2. The other steps remain the same.

##### Alternative Solution

```javascript
function caesarEncrypt(plaintext, key) {
  let ciphertext = '';

  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      ciphertext += encrypt(char, key, 'upper');
    } else if (char >= 'a' && char <= 'z') {
      ciphertext += encrypt(char, key, 'lower');
    } else {
      ciphertext += char;
    }
  });

  return ciphertext;
}

function encrypt(letter, key, letterCase) {
  const base = letterCase === 'upper' ? 65 : 97;
  const charCode = letter.charCodeAt(0) - base;
  const shifted = (charCode + key) % 26;

  return String.fromCharCode(shifted + base);
}
```



