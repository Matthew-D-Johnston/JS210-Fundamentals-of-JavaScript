##### JS210 - Small Problems > Interpretive Problem Solving

---

## Vigenere Cipher

### Problem

**Problem Description:**

The *Vigenere Cipher* encrypts alphabetic text using [polyalphabetic substitution](https://en.wikipedia.org/wiki/Polyalphabetic_cipher). It uses a series of *Caesar Ciphers* based on the letters of a `keyword`. Each letter of the `keyword` is treated as a shift value. For instance, the letter `'B'` corresponds to a shift value of `1`, and the letter `'d'` corresponds to a shift value of `3`. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters `'a'-'z'` are equivalent to the numbers `0-25`. The uppercase letters `'A'-'Z'` are also equivalent to `0-25`.  

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:  

```
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
```

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.  

Write a function that implements the Vigenere Cipher. The case of the `keyword` doesn't matter—in other words, the resulting encryption won't change depending on the case of the `keyword`'s letters (e.g., `'MEat' === 'mEaT'`).

**Definitions and Rules (explicit and implicit):**

* Keyword: given as an input, and each letter of the keyword represents a shift value the corresponding to its index value in the alphabet (e.g., `meat`, where `m` = 12, `e` = 4, `a` = 0, and `t` = 19).
* Only the letters of the plain text must be encrypted.
* Encryption: given the keyword shift values, take the original letter from the original text and shift to the right the number of positions given by the keyword shift value.
* Then move onto the next letter of the original text and the next letter of the keyword. Thus, there will be different shift values for each letter of the plain text. 
* When all of the letters of the keyword have been iterated over, go back to the start of the keyword and iterate through each character again until all letters of the original text have been encrypted.

**Input/Output:**

* Inputs: some plain text; and a keyword.
* Output: the encrypted version of the text, where only the letters of the original text have been substituted for.

**Mental Model**

* Take some text and a keyword. 
* Translate the keyword into some shift values based on the indexes of the 26-letter alphabet. 
* Iterate over each character of the original text.
* If the character belongs to the alphabet:
  * Use the current shift value from the keyword to determine how many positions to the right to shift from the current letter of the original text to get the encrypted letter.
  * Append the encrypted letter to some new result string.
* If it is not an alphabetic character:
  * Just append the character to the result string.
* After looping through the entire original string, return the new enctrypted result string.

---

### Examples / Test Cases

```
Example 1:

plaintext: How are you today?
keyword: five

Applying the Vigenere Cipher for each alphabetic character:
plaintext  : Howa reyo utod ay
shift      : five five five fi  (f = 5; i = 8; v = 21; e = 4)
ciphertext : Mwre wmts zbjh fg

result: Mwr ewm tsz bjhfg?

Example 2:

plaintext: ''
keyword: you

result: ''

Example 3: "You are the coolest!!"
keyword: ''

result: "You are the coolest!!"
```

---

### Data Structure

**Input**

* A string representing the original `text`.
* A string representing the `keyword`.

**Output**

* A string representing the `encrypted` text.

**Intermediate Data Structures**

* Represent the `shiftValues` of the `keyword` as an array.
* Represent the `Alphabet` as a string of lowercase alphabetic characters.
* Represent a `keyIndex` with an integer value starting at `0`; it's limit (`keyIndexLimit`) will be the length of the `keyword` minus `1`.
* Represent the `encrypted` result as a string of characters.

---

### Algorithm

* Declare an `Alphabet` constant initialized with `'abcdefghijklmnopqrstuvwxyz'`.
* Declare a function `vigenereCipher(text, keyword)`
* Transform the keyword into a `shiftValues` array by mapping over an array version of the keyword a grabbing the index from the `Alphabet` string.
* Declare an `encrypted` variable and initialize with empty string value, `''`.
* Declare a `keyIndex` and initialize with the value `0`.
* Declare a `keyIndexLimit` variable and initialize it with `keyword.length - 1`.
* Split the `text` into an array of individual characters and iterate over it using `forEach((char, index) => {})`
  * Declare a `shiftValue` variable and initialize it with `shiftValues[keyIndex]`
  * `if` we are dealing with a lower case letter `/[a-z]/`
    * Find the `substitutePosition` by retrieving the index of `char` in the `Alphabet` and incrementing it by the current `shiftValue`.
    * The `substitutePosition` will need to be modified if it is greater than `25`.
    * Use the `substitutePosition` as an index with `Alphabet` to obtain the `substituteLetter`.
    * Append the `substituteLetter` to the `encrypted` string.
  * `else if` we are dealing with a upper case letter `/[A-Z]/`
    * This will basically be the same as the case for lower case letters, just modified for the uppercase letters.
    * We should implement a separate function to do this work of finding the substitute position.
  * `else` (all non-alphabetic characters)
    * append the `char` to `encrypted`.
  * increment `keyIndex += 1`
  * if `(keyIndex > keyIndexLimit)` then `keyIndex = 0`.
* Return `encrypted`

`findSubstitutePosition(letter, shiftValue)`



* `let substitutePosition = 0`
* `if (/[a-z]/.test(letter))`
  * `substitutePosition += (Alphabet.indexOf(letter) + shiftValue)`
* `else`
  * `substitutePosition += (Alphabet.toUpperCase().indexOf(letter) + shiftValue)`
* `return substitutePosition % 26`

---

### Code

```javascript
const Alphabet = 'abcdefghijklmnopqrstuvwxyz';
const UpperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function vigenereCipher(text, keyword) {
  keyword = keyword.length === 0 ? 'a' : keyword;

  let keyLetters = keyword.toLowerCase().split('');
  const ShiftValues = keyLetters.map(char => Alphabet.indexOf(char));

  let encrypted = '';
  let keyIndex = 0;
  let keyIndexLimit = keyword.length - 1;

  text.split('').forEach(char => {
    let originalPosition = Alphabet.indexOf(char.toLowerCase());
    let shiftedPosition = (originalPosition + ShiftValues[keyIndex]) % 26;
    encrypted += encryptLetter(char, shiftedPosition);
    if (/[a-z]/i.test(char)) {
      keyIndex += 1;
      if (keyIndex > keyIndexLimit) {
        keyIndex = 0;
      }
    }
  });

  return encrypted;
}

function encryptLetter(char, position) {
  let encryptedChar;

  if (/[a-z]/.test(char)) {
    encryptedChar = Alphabet[position];
  } else if (/[A-Z]/.test(char)) {
    encryptedChar = UpperAlphabet[position];
  } else {
    encryptedChar = char;
  }

  return encryptedChar;
}
```

---

### LS Solution

##### Understanding the Problem

- Input

  - `plaintext`: any sequence of characters.
  - `keyword`: any sequence of characters. Case does not matter.

- Output

  - `ciphertext`: a sequence of characters. It has the same number of characters as the `plaintext`. It is the "encrypted" version of the `plaintext`.

- Requirements

  : let's go through the problem and analyze the requirements for processing the input to get the output.

  - An important piece of information from the problem description is that the Vigenere Cipher is a series of Caesar Ciphers. This means we can use our previous knowledge of the Caesar Cipher as a baseline, and then identify and process any differences to make adjustments as needed.

    - Each character of the

       

      ```
      keyword
      ```

       

      is a "shift" value

      - Referencing the Caesar Cipher problem, we can think of the shift value as the `key` the cipher uses to encrypt a `plaintext` letter.
      - In contrast to having only one `key` value, the Vigenere Cipher uses multiple `key` values.
      - Given the problem description and the example, it's not apparent what happens when non-alphabetic characters are included in the `keyword`. For now, we'll assume that it will contain only letters. The statement that "case does not matter" supports this assumption, because the word, "case", is associated with letters.

    - Sequentially apply the shift values to each alphabetic character, using a Caesar Cipher.

      - Looking at the example above, we can see that each shift value is used one at a time, repetitively, for all the alphabetic characters in the `ciphertext`.
      - Similar to how the alphabetic characters wrap around when there is a need to exceed the letter `'z'`/`'Z'`, the shift value also wraps around for as long as there are `plaintext` characters to encrypt.

##### Examples / Test Cases  

To make the requirements more concrete, let's go over some more test cases. You can use the tabula recta to assist you in working through these test cases by hand.

```
plaintext: Pineapples don't go on pizzas!
keyword: A

Applying the Vigenere Cipher for each alphabetic character:
plaintext: P i n e a p p l e s d o n t g o o n p i z z a s
shift:     A A A A A A A A A A A A A A A A A A A A A A A A
ciphertext: P i n e a p p l e s d o n t g o o n p i z z a s

result: Pineapples don't go on pizzas!
```

```
plaintext: Pineapples don't go on pizzas!
keyword: Aa

Applying the Vigenere Cipher for each alphabetic character:
plaintext: Pi ne ap pl es do nt go on pi zz as
shift:     Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa
ciphertext: Pi ne ap pl es do nt go on pi zz as

result: Pineapples don't go on pizzas!
```

```
plaintext: Pineapples don't go on pizzas!
keyword: cab

Applying the Vigenere Cipher for each alphabetic character:
plaintext: Pin eap ple sdo ntg oon piz zas
shift:     cab cab cab cab cab cab cab cab
ciphertext: Rio gaq rlf udp pth qoo ria bat

result: Riogaqrlfu dpp't hq oo riabat!
```

```
plaintext: Dog
keyword: Rabbit

Applying the Vigenere Cipher for each alphabetic character:
plaintext: Dog
shift:     Rab
ciphertext: Uoh

result: Uoh
```

##### Data Structure and Algorithm

Our data structure and algorithm are very similar to what we used for the Caesar Cipher problem. The main difference in this algorithm is the addition of steps #2, #3, and the first and last bullets of step #4.1.

1. Initialize a `ciphertext` variable to an empty string.

2. Initialize a `keyPos` variable to `0`.

3. Capitalize all the letters of the `keyword` input.

4. Iterate over each character of the

    

   ```
   plaintext
   ```

    

   input.

   - If the character is a letter in the alphabet, check if it's upper or lower case, "encrypt" it accordingly, and then append it to

      

     ```
     ciphertext
     ```

     .

     - Locate the current `keyword` letter in the alphabet and store its position value in `key`.
     - Locate the current `plaintext` letter in the alphabet to get its position.
     - Step `key` times from this position to the right.
     - If a step goes beyond the last letter in the alphabet, add another "alphabet link".
     - After the last step, append the new letter to `ciphertext`.
     - Add `1` to `keyPos` and divide the result by the length of the `keyword` to get the remainder. Set the value of `keyPos` to this remainder.

   - If the character is not in the alphabet, append it as-is to `ciphertext`.

5. After the Vigenere encryption is complete, return the `ciphertext`.

##### Solution

```javascript
function vigenereEnrcypt(plaintext, keyword) {
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let ciphertext = '';
  let keyPos = 0;
  keyword = keyword.toUpperCase();
  let key;
  
  plaintext.split('').forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      key = upperAlphabet.indexOf(keyword[keyPos]);
      ciphertext = += encrypt(char, key, upperAlphabet);
      keyPos = (keyPos + 1) % keyword.length;
    } else if (char >= 'a' && char <= 'z') {
      key = upperAlphabet.indexOf(keyword[keyPos]);
      ciphertext += encrypt(char, key, lowerAlphabet);
      keyPos = (keyPos + 1) % keyword.length;
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

###### Discussion

For this exercise, the most critical step of the PEDAC process is "Understanding the Problem". We took advantage of our previous analysis of the Caesar Cipher problem by applying what we learned to this problem. This made it much easier to break the problem down and process the requirements. With more practice—even if it weren't explicitly mentioned that the Vigenere Cipher is a series of Caesar Ciphers—you'll be able to detect how problems overlap, giving you the ability to reuse and build on similar mental models and algorithms you have created in the past.

