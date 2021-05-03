##### JS210 - Small Problems > Advanced 1

---

## Madlibs Revisited

### Problem

**Problem Description:**

Let's build another program using madlibs. We made a similar program in the Easy exercises, but this time the requirements are a bit different.  

Build a madlibs program that takes a text `template` as input, plugs in a selection of randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it. You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program. Your program should read this text and, for each line, place random words of the appropriate types into the text and return the result.  

The challenge of this program isn't just about writing your solution—it's about choosing the structure of the text `template`. Choose the right way to structure your `template` and this problem becomes much easier. Consequently, this exercise is a bit more open-ended since the input is also something that you'll be defining.  

**Definitions and Rules:**

* Input: a template
* Output: lines of text that representing the original template.
* Template: it will be a predetermined string of text, but with certain words missing. The template will also indicate the number of different types of words to be used, such as how many nouns there are to be filled in.
* Take predetermined lists of nouns, verbs, adjectives, and adverbs and use them to fill in the missing words in the template.

**Mental Model:**

Given a particular template, the program will randomly select the appropriate number of nouns, verbs, adjectives, and adverbs from predetermined lists of these types of words. It will then place these words into the template text.

---

### Examples / Test Cases

*Note: The quotes in the example strings returned by the `madlibs` function are only shown for emphasis. These quotes are not present in the actual output strings. The words in quotes come from the list of texts and it is the `madlibs` function that puts them in.*

```javascript
function madlibs(template) {
  // ...
}

// These examples use the following list of replacement texts:
adjectives: quick lazy sleepy noisy hungry
nouns: fox dog head leg tail cat
verbs: jumps lifts bites licks pats
adverbs: easily lazily noisily excitedly
------

madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".
```

---

### Data Structure

**Input:**

* A string template, which will include our word types in single quotation marks to indicate that the word needs replacement.

**Output:**

* A string representation of the original template `text` with the appropriate words used to fill in the missing words.

---

### Algorithm

* It would help to begin by defining  few templates to start with. We'll base these templates off of the examples given above:

  ```javascript
  let template1 = "The 'adjective1' brown 'noun1' 'adverb1'\n'verb1' the 'adjective2' yellow\n'noun2', who 'adverb2' 'verb2' his\n'noun3' and looks around."
  ```

* The first thing I want to do is determine how many of each type of word will need to be replaced. For example, using regex:

  ```javascript
  let nounsCount = template1.match(/'noun[0-9]?'/g).length;
  ```

* Given the number of each type of word, we then need to select that many random words from the appropriate word list.

* So we need some sort of random number generator that will pick a number from 0 up to the number of that type of word minus 1. This random number will be used as an index to select a random word from our list of words:

  ```javascript
  const WORD_LISTS = { nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
                     	 adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
                     	 verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
                     	 adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
                     }
  ```

* Let's construct a helper function called `randomWordGenerator(type)`

  * We will need to determine the length of the list of words associated with the given `type`: 
  * First, `let words = WORD_LISTS[type];`
  * then, `let maxIndex = words.length;`
  * then, `let randomIndex = Math.floor(Math.random() * (maxIndex));`
  * then, `return words[randomIndex];`

* Now we want to construct a list of random words for each type based on the number of words of that type that we will need.

  * Thus, for each type we want to create an array. For example, `nouns = []`.
  * We then want to implement some kind of loop that will count up to the `nounsCount` variable and each iteration we push a random word from of the particular type to the list.
  * We can create another function to perform this, call it `makeRandomWordList(type, count)`
    * First, set an `index = 1`
    * Then, set a `words = []` 
    * Then start a `while` loop: `while (index <= count)`
    * Inside the loop, `words.push(randomWordGenerator(type))`
  * 

* So, for each type of word we want a separate list:

  * `let nouns = makeRandomWordList('nouns', nounCount);`
  * `let adjectives = makeRandomWordList('adjectives', adjectiveCount);`
  * `let adverbs = makeRandomWordList('adverbs', adverbCount);`
  * `let verbs = makeRandomWordList('verbs', verbCount);`

---

### Code

```javascript
const WORD_LISTS = { nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
                     adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
                     verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
                     adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
                   };


function madlibs(template) {
  let nounList = template.match(/'noun[0-9]?'/g) || [];
  let verbList = template.match(/'verb[0-9]?'/g) || [];
  let adjectiveList = template.match(/'adjective[0-9]?'/g) || [];
  let adverbList = template.match(/'adverb[0-9]?'/g) || [];

  let nounCount = nounList.length;
  let verbCount = verbList.length;
  let adjectiveCount = adjectiveList.length;
  let adverbCount = adverbList.length;

  let nouns = makeRandomWordList('nouns', nounCount);
  let verbs = makeRandomWordList('verbs', verbCount);
  let adjectives = makeRandomWordList('adjectives', adjectiveCount);
  let adverbs = makeRandomWordList('adverbs', adverbCount);

  nouns.forEach(noun => template = template.replace(/'noun[0-9]?'/g, noun));
  verbs.forEach(verb => template = template.replace(/'verb[0-9]?'/, verb));
  adjectives.forEach(adjective => template = template.replace(/'adjective[0-9]?'/, adjective));
  adverbs.forEach(adverb => template = template.replace(/'adverb[0-9]?'/, adverb));

  return template;
}

function randomWordGenerator(type) {
  let words = WORD_LISTS[type];
  let randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function makeRandomWordList(type, count) {
  let words = [];
  let index = 1;

  while (index <= count) {
    words.push(randomWordGenerator(type));
    index += 1;
  }

  return words;
}
```

---

### LS Solution

###### Solution

```javascript
const template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
                '${verb} the ${adjective} yellow ' +
                '${noun}, who ${adverb} ${verb} his ' +
                '${noun} and looks around.';

const template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

function madlibs(template) {
  const REPLACEMENT_TEXTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  function replaceText(match) {
    const key = match.replace(/[^a-z]/g, '');
    const index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/\${[a-z]+}/g, replaceText);
}
```

###### Discussion

For this problem, there are two things to consider: (1) the format for the `template` and (2) how to process the `template`.  

For the format, the idea is to come up with an easy way for the function to find "words" or "*tokens*" in the `template`, and replace them with the corresponding type of content. The tokens need to have *identifiers* denoting their start and end, so that the function is able to tell them apart from the rest of the text. These identifiers also must be unique enough to prevent the function from mistaking normal text as a token to replace.  

For instance, if the `template` uses double quotes (`""`) to denote tokens to replace, then the following code leads to a bug:  

```javascript
const template1 = 'The "noun" shouted "hello".';
```

The function will interpret both `"noun"` and `"hello"` as words to replace.  

Given the potential issue shown above, the solution's approach is to use the token, `${noun}`, to denote the text to replace. The word between the curly braces `{}` is the type of content the token should be replaced with—in this case, a `noun`. The `$` before the curly braces is to make the identifier more unique, since there's a chance that the text may contain curly braces used on their own in a typical way—instead of being used for denoting a token.  

The solution processes the `template` by calling the `String.prototype.replace` method and passing in a regex and a callback function as arguments. The regex pattern, `/\${[a-z]+}/g`, matches each token in the `template`. The text matched by the regex pattern is then passed as an argument to the `replaceText` callback function. The `replaceText` function processes the matched text to remove any characters used as identifiers (in this case, `${}`), leaving only the content type. The content type is then used as the `key` to retrieve the appropriate list of words from the `REPLACEMENT_TEXTS` object. The `replaceText` function generates a random index and uses it to select a word from the list at random.  



