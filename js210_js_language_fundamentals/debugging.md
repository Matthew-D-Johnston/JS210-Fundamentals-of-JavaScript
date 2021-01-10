# JS210 - JavaScript Language Fundamentals

## Debugging

### 1. Hello Friends!

You have written basic functions to display a random greeting to any number of friends upon each invocation of `greet`. Upon invoking the `greet` function, however, the output is not as expected. Figure out why not and fix the code.  

```javascript
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
                'Greetings', 'Salutations', 'Good to see you'];
  
  const idx = Math.floor(Math.random() * words.length);
  
  words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting;
    
    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
```

###### My Solution

My initial suspicion is that we need to insert a `return` keyword before the `words[idx]` at the end of the `randomGreeting()` function, and that the call to the `randomGreeting` function within the `greet` function is missing the parentheses (i.e. it should be `randomGreeting()`).  

But let's start by running the program to check the output:

```
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}, Hannah!
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}, Jose!
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}, Beatrix!
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}, Julie!
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}, Ian!
```

I think this confirms my suspicions. Instead of assiging a random greeting from the list of greeting words to the `greeting` constant variable in the `for` loop of the `greet` function, the call to `randomGreeting` (without parentheses) actually assigns the whole function. That is why the function itself is being logged to the console.  

So, let's make those two adjustments: 1) add parentheses to the end of the call to `randomGreeting`; and 2) add the `return` key word to the end of the `randomGreeting()` function.  

Starting with the first adjustment...

```javascript
...
const greeting = randomGreeting();
...
```

The new output is...

```
undefined, Hannah!
undefined, Jose!
undefined, Beatrix!
undefined, Julie!
undefined, Ian!
```

And after the second adjustment...

```javascript
...
return words[idx];
...
```

The new output is...

```
Salutations, Hannah!
Hey there, Jose!
Hi, Beatrix!
Howdy, Julie!
Hey there, Ian!
```

Which is what we expected. Thus, the final refactored code looks like this...

```javascript
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
```

###### LS Solution

```javascript
function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
}

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
```

###### Discussion

We must use parentheses in order to execute a function. Otherwise `greeting` on line 16 is a function value and we log that function value to the console.  

After adding parentheses on line 16, `randomGreeting` is executed, but we see that our output still doesn't look quite right:  

```
undefined, Hannah!
undefined, Jose!
undefined, Beatrix!
undefined, Julie!
undefined, Ian!
```

It looks like our `randomGreeting` method is returning `undefined`. Why is that? [Recall](https://launchschool.com/lessons/7cd4abf4/assignments/067955f4) (use [this link](https://launchschool.com/lessons/511a561c/assignments/7b1265c4) if the other one doesn't work for you) that "If a function does not contain an explicit `return` statement, or the `return` statement does not include a value, the function implicitly returns the value `undefined`". `randomGreeting` lacks an explicit `return` statement. After adding one on line 7, we see the expected output.  

---

### 2. Includes False

Caroline has written a very simple function, `includesFalse`, that searches a list of [primitives](https://launchschool.com/lessons/18c27076/assignments/76a691d8) for the boolean `false`. If `false` is found, the function immediately returns `true`. If no occurrence of `false` has been found after iterating through the entire array, the function returns `false`.  

Caroline's last method invocation of `includesFalse` (line 15) doesn't return what she expects. Why is that? Fix the code so that it behaves as intended.  

```javascript
function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];
    
    if (element == false) {
      return true;
    }
  }
  
  return false;
}
																																		// returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);					// true
includesFalse(['programming', undefined, 37, 64, true, 'false']);		// false
includesFalse([9422, 'lambda', true, 0, '54', null]);								// true
```

###### My Solution

The reason that the last `includesFalse` call returns `true` when it should return `false` is that we are using the non-strict equality comparison operator, `==`, to compare the list values with the boolean `false`, and the comparison `0 == false` returns true. If we were to use the strict equality comparison operator, `===`, the return value of that comparison would be `false`.  

Thus, the fixed code looks like this...

```javascript
function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
}
                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);             // true
```

###### LS Solution

```javascript
function includesFalse(list) {
  for (let i = 0; i < list.length; i++) {
    let element = list[i];
    if (element === false) {
      return true;
    }
  }

  return false;
}
```

###### Discussion

The important distinction here is between what is known as the *abstract equality operator* (`==`) and the *strict equality operator* (`===`). While both operators compare for equality and return a boolean, there is an important difference in the way they behave: When comparing for strict equality using `===`, the values are compared as-is. Values of different types will be considered unequal.

```javascript
7 === '7' // false
```

When using abstract equality, however, JavaScript will try to convert our values into a like type before performing the comparison.  

```javascript
7 == '7' // true
```

See [this assignment](https://launchschool.com/lessons/18c27076/assignments/393c3d45) for review.  

The above example may not seem too problematic, but in our original code, the comparison of `0 == false` is true, which causes our third method invocation to return `true`. In order to see the expected behavior, we need to use `===` as seen in the solution code.  

We recommend using the strict equality operator (`===`) whenever possible to avoid confusing behavior and hard-to-find bugs.  

###### Further Exploration

For further reading, you can view the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) regarding equality comparisons.

---

### 3. Place A Bet

