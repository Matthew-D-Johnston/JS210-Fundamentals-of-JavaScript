##### JS210 - Small Problems > Debugging

---

## Reserved Keywords

### Problem

**Problem Description:**

We have been asked to implement a function that determines whether or not a given word is a reserved [keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords). We wrote the `isReserved` function below along with some test cases, but we aren't seeing the expected result. Why not? Fix the code so that it behaves as intended.

```javascript
const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      return true;
    }
  });

  return false;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true
```

---

### My Solution

Every one of the `isReserved` function calls returns `false`, although the last call should return `true`. My initial suspicion is that since we are using the `forEach` method to loop over the `RESERVED_KEYWORDS` array, it will not break out of the loop until it has iterated over every element. Thus, early `return` calls will not bring about the intended result. The loop finishes and then the last line of the function is executed, returning `false` regardless of whether there was a match with one of the reserved keywords.  

To fix the problem, we'll try refactoring the function so that it uses a `for` loop.  

```javascript
function isReserved(name) {
  for (let index = 0; index < RESERVED_KEYWORDS.length; index += 1) {
    if (name === RESERVED_KEYWORDS[index]) {
      return true;
    }
  }

  return false;
}
```

That worked!

---

### LS Solution

##### Solution

```javascript
function isReserved(name) {
  for (let i = 0; i < RESERVED_KEYWORDS.length; i += 1) {
    if (RESERVED_KEYWORDS[i] === name) {
      return true;
    }
  }

  return false;
}
```

###### Discussion

Recall that `Array.prototype.forEach` executes the callback function once for each element of the array, and in the end always returns `undefined`. The return value of the callback is ignored, so our `return` statement does not have any impact. If you want to return early and with a different value than `undefined`, you need to iterate differently, for example using a `for` loop.  

You can check out the documentation for `forEach` [on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).  

###### Further Exploration

ES2016 provides an array method [`Array.prototype.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), which performs the check we're after and returns a Boolean. Then the function gets even simpler:  

```javascript
function isReserved(name) {
  return RESERVED_KEYWORDS.includes(name);
}
```

