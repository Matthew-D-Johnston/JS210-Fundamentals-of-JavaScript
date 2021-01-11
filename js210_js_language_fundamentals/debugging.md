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

The function `placeABet` below accepts a guess from the user between 1 and 25. The function should determine a winning number and return a message to the user indicating whether he/she entered a winning guess. When you try to invoke `placeABet`, an error is raised. Fix the bug and explain what caused it.  

```javascript
function placeABet(guess) {
  (function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  });
  
  const winningNumber = generateRandomInt();
  
  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }
  
  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));
```

###### My Solution

When I run this program, the following error is thrown:

```
Uncaught ReferenceError: generateRandomInt is not defined
    at placeABet (<anonymous>:6:25)
    at <anonymous>:20:7
```

I believe this has to do with the fact that the code has the `generateRandomInt()` function definition wrapped in parentheses. This looked odd to me at first, and thus I think if we remove the parentheses the code should run fine.  

Refactored code:

```javascript
function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };
  
  const winningNumber = generateRandomInt();
  
  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }
  
  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
```

###### LS Solution

```javascript
function placeABet(guess) {
  function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt('Input a guess between 1-25'), 10);
alert(placeABet(userGuess));
```

###### Discussion

The original code mixes up function declarations and function expressions. Because `generateRandomInt` is wrapped in parentheses in our original code, it is a function *expression* rather than a function *declaration*. Function expressions are often unnamed. They can be given a name, like `generateRandomInt`, but the name is only available from inside the function. This is why line 6 raised an error, telling you that `generateRandomInt` is undefined.  

Now may be a good time to review the assignment on [Function Declarations and Function Expressions](https://launchschool.com/lessons/7cd4abf4/assignments/5cb67110) (use [this link](https://launchschool.com/lessons/511a561c/assignments/a31cf63d) if the other one doesn't work for you).

---

### 4. Picky Museum Filter

We love to visit museums if they are about science or computers. We're undecided when it comes to modern art, and would rather not go in most cases. However, we're willing to go to any modern art museum that is about Andy Warhol (we like him!) or that is located in nearby Amsterdam. We'd rather skip any other museums.  

We tried to implement these preferences in a function, so we can automatically sort through long lists of museums and find the ones that sound interesting. However, our Boolean check is flawed, as it fails some of our test cases. Can you fix it?

```javascript
function wantToVisit(museum, city) {
  return museum.includes('Computer')
  		|| museum.includes('Science')
  		&& !(
  			museum.includes('Modern')
  			&& museum.includes('Art')
  			&& museum.includes('Andy Warhol')
  			|| city === 'Amsterdam'
  		);
}

// Tests (should all print 'true')

console.log(wantToVisit('Computer Games Museum', 'Berlin') === true);
console.log(wantToVisit('National Museum of Nature and Science', 'Tokyo') === true);
console.log(wantToVisit('Museum of Modern Art', 'New York') === false);
console.log(wantToVisit('El Paso Museum of Archaeology', 'El Paso') === false);
console.log(wantToVisit('NEMO Science Museum', 'Amsterdam') === true);
console.log(wantToVisit('National Museum of Modern Art', 'Paris') === false);
console.log(wantToVisit('Andy Warhol Museum of Modern Art', 'Medzilaborce') === true);
console.log(wantToVisit('Moco: Modern Contemporary Art', 'Amsterdam') === true);
console.log(wantToVisit('Van Gogh Museum', 'Amsterdam') === false);
console.log(wantToVisit('Andy Warhol Museum', 'Melbourne') === false);
```

###### My Solution

```javascript
function wantToVisit(museum, city) {
  return museum.includes('Computer')
      || museum.includes('Science')
      || (
        (museum.includes('Modern')
        && museum.includes('Art'))
        && (museum.includes('Andy Warhol')
        || city === 'Amsterdam')
      );
}
```

###### LS Solution

```javascript
function wantToVisit(museum, city) {
  return  museum.includes('Computer')
       || museum.includes('Science')
       || (museum.includes('Modern')
          && museum.includes('Art')
          && (museum.includes('Andy Warhol')
             || city === 'Amsterdam'));
}
```

###### Discussion

Our initial logic isn't quite right. We intend to look for computer or science museums *or* modern art museums with particular qualities, but our Boolean expression instead checks for museums that are about computers or science *and* are not modern art museums.  

After removing the logical not operator (`!`) and replacing the relevant `&&` with the logical or operator (`||`), one test case still fails. The reason is that we need to use [parentheses](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Grouping) to be explicit about the order in which we want our logical expressions to be evaluated. One issue to pay special attention to when working with logical expressions is [operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence). In particular, note that `&&` has a higher precedence than `||`.  

###### Further Exploration

If you found this code difficult to parse, don't worry: complex Boolean expressions require a significant cognitive load, and it's worth the effort to make them easier to digest. Here is one example that refactors our code in an attempt to make it clearer without changing the logic. It's not perfect, but we hope it gives you an idea of how the original expression could be broken down.  

```javascript
function wantToVisit(museum, city) {
  function contains(string, substring) {
    return string.toLowerCase().match(substring.toLowerCase()) != null;
  }

  const aboutComputers = contains(museum, 'Computer');
  const aboutScience = contains(museum, 'Science');
  const aboutModernArt = contains(museum, 'Modern') && contains(museum, 'Art');
  const aboutAndyWarhol = contains(museum, 'Andy Warhol');
  const inAmsterdam = (city === 'Amsterdam');

  const mustGo =  aboutComputers || aboutScience;
  const worthAnException = aboutModernArt && (aboutAndyWarhol || inAmsterdam);
  return mustGo || worthAnException;
}
```

---

### 5. Shop Transactions

Todd wrote some simple code in an attempt to log his shop's financial transactions. Each time he makes a sale or spends money on inventory, he logs that deposit or withdrawal via the `logTransaction` function. His code also intends to ensure that each transaction logged is a valid numerical amount. At the end of each day, he displays his total gain or loss for the day with `transactionTotal`.  

Test out the code yourself. Can you spot the problem and fix it?

```javascript
const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);
  
  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }
  
  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');
  
  try {
    data = processInput(data);
    transactionLog.push(data);
    
    alert('Thank you. Data accepted.');
  } catch {
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;
  
  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }
  
  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
```

###### My Solution

When the user inputs a value that is not a proper numerical value, we get a `ReferenceError` that says `error is not defined`. This is because we did not include `error` as an argument to our `catch` statement. We must fix this in order for the code to run smoothly.

```javascript
const transactionLog = [];

function processInput(input) {
  const numericalData = parseFloat(input);
  
  if (Number.isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }
  
  return numericalData;
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');
  
  try {
    data = processInput(data);
    transactionLog.push(data);
    
    alert('Thank you. Data accepted.');
  } catch (error) {
    alert(error.message);
  }
}

function transactionTotal() {
  let total = 0;
  
  for (let i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }
  
  return total;
}
```

That does the trick.

###### LS Solution

```javascript
function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');
  
  try {
    data = processInput(data);
    transactionLog.push(data);
    
    alert('Thank you. Data accepted.');
  } catch(error) {
    alert(error.message);
  }
}
```

###### Discussion

The `catch` block needs to receive an `Error` object in order to output the `Error` object's message.  

If `try/catch` looks unfamiliar, revisit [this assignment](https://launchschool.com/lessons/d299fc36/assignments/748ab030) (use [this link](https://launchschool.com/lessons/cdd5c215/assignments/23aa2d9e) if the other one doesn't work for you).  

###### Further Exploration

[This assignment](https://launchschool.com/lessons/d299fc36/assignments/748ab030) (use [this link](https://launchschool.com/lessons/cdd5c215/assignments/23aa2d9e) if the other one doesn't work for you) mentions that in practice you should use `try/catch` blocks only when the following conditions are both true:

- A built-in JavaScript Function or method can throw an Error and you need to handle or prevent that Error.
- A simple guard clause is impossible or impractical.

In Todd's case, he could actually take advantage of the fact that `NaN` is falsy, to produce this much simpler code without `try/catch`:  

```javascript
const transactionLog = [];

function processInput(input) {
  return parseFloat(input);
}

function logTransaction() {
  let data = prompt('Please enter the transaction amount: ');
  
  data = processInput(data);
  
  if (data) {
    transactionLog.push(data);
    alert('Thank you. Data accepted.');
  } else {
    alert('Data could not be converted to numerical amount.');
  }
}

// code omitted
```

---

### 6. Full Moon

