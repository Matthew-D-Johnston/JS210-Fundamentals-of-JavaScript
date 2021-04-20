##### JS210 - Small Problems > Medium Problems 1

---

## Word to Digit

### Problem

**Problem Description:**

Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — `'zero'`, `'one'`, `'two'`, `'three'`, `'four'`, `'five'`, `'six'`, `'seven'`, `'eight'`, `'nine'` — converted to its corresponding digit character.  

**Input/Output:**

* A sentence, which may contain "number words".
* The same sentence with "number words" converted to their corresponding digit character.

**Definitions and Rules (implicit and explicit):**

* Number word: the English-language version of a number (e.g. `'zero'`, `'one'`, `'two'`, etc.).
* Digit character: any digit from `0 - 9`.
* Just dealing with the numbers from 0 - 9.
* String may or may not contain number words. If not, then just return the string.

**Mental Model:**

Take some input text and replace any occurrence of a number word with its digit equivalent.

---

### Examples / Test Cases

```javascript
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('My address is one eight six three Yolo Boulevard.');
// 'My address is 1 8 6 3 Yolo Boulevard.'

wordToDigit("Hey! What's up maaaan?")
// "Hey! What's up maaaan?"

wordToDigit('');
// ''

wordToDigit("There are only ten left.");
// 'There are only ten left.'
```

---

### Data Structure

**Input**

* A string

**Output**

* A string

**Intermediate Data Structures**

* Use an object with key-value pairs as a way to create a conversion key from number words to their corresponding digit characters (i.e. `{ 'zero': 0, 'one': 1 }`)

---

### Algorithm

* Declare a constant `NUMBERS_KEY` with number words as keys and digits as corresponding values.
* Declare a `Digits` constant assigned to an array whose elements are all the number words from the `NUMBERS_KEY`.
* Declare a `transformedText` and asign it to the value associated with the input text.
* Iterate over the elements of the `Digits` array using `forEach`.
* Then assign the following value to the `transformedText` variable: `transformedText.replace(new RegExp('digit', 'g'), NUMBERS_KEY['digit'])`.
* return the `transformedText` variable.

---

### Code

```javascript
const NUMBERS_KEY = { 'zero'  : 0,
                      'one'   : 1,
                      'two'   : 2,
                      'three' : 3,
                      'four'  : 4,
                      'five'  : 5,
                      'six'   : 6,
                      'seven' : 7,
                      'eight' : 8,
                      'nine'  : 9,
                    };

function wordToDigit(text) {
  const Digits = Object.keys(NUMBERS_KEY);
  let transformedText = text;

  Digits.forEach(numberWord => {
    let regex = new RegExp(numberWord, 'gi');
    transformedText = transformedText.replace(regex, NUMBERS_KEY[numberWord]);
  });

  return transformedText;
}
```

---

### LS Solution

##### Hint: Algorithm

This exercise is a string processing problem. You can either convert the string into an array and use a list processing strategy—transformation perhaps?—or use regex to find and replace sequences of characters that match a particular pattern.  

##### Solution

```javascript
const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}
```

###### Discussion

The solution uses a `NUM_WORDS` object as a lookup table for converting each numeric word to its digit counterpart. The solution iterates over the keys of the `NUM_WORDS` object and iteratively replaces all instances of each numeric word in the `sentence` argument. During each iteration, the solution creates a `RegExp` object and assigns it to the `regex` variable. The solution passes this `regex` as an argument to the `String.prototype.replace` method, reassigning the value of the `sentence` via the statement:  

```javascript
sentence = sentence.replace(regex, NUM_WORDS[word]);
```

After looping through all the keys, the solution returns the new `sentence`.  

If you created any additional test cases, you may have noticed that the provided solution does not handle the case where a "number word" is a part of another word, such as:  

```javascript
wordToDigit('The weight is done.');      // "The w8 is d1."
```

We can handle this case by wrapping the regex pattern with the [word boundary anchor](https://launchschool.com/books/regex/read/anchors#wordbounds), `\b`:  

```javascript
regex = new RegExp('\\b' + word + '\\b', 'g');
```

This results in:

```javascript
wordToDigit('The weight is done.');      // "The weight is done."
```

Note that we have to escape the string `'\\b'` with an extra backslash—otherwise JavaScript will interpret `'\b'` as a backspace character.

###### Further Exploration

Can you refactor the function so that it does not use a loop?

##### My Solution

```javascript
function wordToDigit(text) {
  let transformedText = text;

  transformedText = replaceNumberWords(transformedText, 'zero', 0);
  transformedText = replaceNumberWords(transformedText, 'one', 1);
  transformedText = replaceNumberWords(transformedText, 'two', 2);
  transformedText = replaceNumberWords(transformedText, 'three', 3);
  transformedText = replaceNumberWords(transformedText, 'four', 4);
  transformedText = replaceNumberWords(transformedText, 'five', 5);
  transformedText = replaceNumberWords(transformedText, 'six', 6);
  transformedText = replaceNumberWords(transformedText, 'seven', 7);
  transformedText = replaceNumberWords(transformedText, 'eight', 8);
  transformedText = replaceNumberWords(transformedText, 'nine', 9);

  return transformedText;
}

function replaceNumberWords(text, numberWord, digit) {
  let regex = new RegExp('\\b' + numberWord + '\\b', 'gi');
  return text.replace(regex, digit);
}
```

