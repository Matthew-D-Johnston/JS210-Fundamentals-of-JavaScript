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

Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.  

```javascript
const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let i = 0; i < species.length; i++) {
  const thisSpecies = species[i];
  var newSpecies;
  
  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }
  
  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}
```

I believe the reason that the warnings are output twice is because we have declared the variable `newSpecies` inside the `for` loop. Thus, when we reach a non-transformable species, which occurs on every second iteration, the `newSpecies` variable is not reassigned and still references the previous value. Thus the `if` conditional statement returns `true` and the block of code with which it is associated gets executed with the value referenced by `newSpecies` from the previous iteration.  

I think that one fix is by changing `var` to `let`.  

##### change `var` to `let`

```javascript
const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let i = 0; i < species.length; i++) {
  const thisSpecies = species[i];
  let newSpecies;
  
  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }
  
  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}
```

That works!

###### LS Solution

```javascript
const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let i = 0; i < species.length; i++) {
  const thisSpecies = species[i];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}
```

###### Discussion

In our original code we wrongly assume that `newSpecies` would be re-declared and initially reference `undefined` upon each iteration of our `for` loop. But recall that in JavaScript, functions create a new variable scope, while blocks do not. Since in our original code we declare the variables `thisSpecies` and `newSpecies` inside of a block, not within any function, these variable declarations are [hoisted](https://launchschool.com/lessons/511a561c/assignments/529cf31a) to the top of their scope, which is the *global* scope.  

What happened in our original `for` loop therefore was the following:

- On the first iteration, `newSpecies` is initially `undefined`, as it has not been assigned a value yet. All of the conditions provided to the `if` statement on line 18 are truthy, and therefore `newSpecies` is assigned to the string `'werewolf'`. Because `'werewolf'` is truthy, the `console.log` on line 23 is executed.
- On the next iteration of our loop, `newSpecies` will *continue* to reference `'werewolf'` unless re-assigned, because the variable declaration has been hoisted to the top of the global scope. Because a condition provided to the `if` statement on line 18 evaluates as `false` on this iteration, `newSpecies` is not re-assigned to `'werehuman'`. However, `newSpecies` still references a truthy value, `'werewolf'`, and thus the code within our `if` statement on line 23 is executed and we again log `'Beware of the werewolf!'`.
- The process continues analogously for the other values in `species`.

You may wish to review the assignment on [functional scopes](https://launchschool.com/lessons/7cd4abf4/assignments/0b1349b7).

---

### 7. Space Design

We're putting together some information about our new company *Space Design*. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows `undefined`. Why is that?  

```javascript
// Roles (salary still to be determined)

const ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

const developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

const scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

const team = {};

team[ceo] = 'Kim';
team[scrumMaster] = 'Alice';
team[developer] = undefined;

const company = {
  name: 'Space Design',
  team,
  projectedRevenue: 500000,
};

console.log(`----{ ${company.name} }----`);
console.log(`CEO: ${company.team[ceo]}`);
console.log(`Scrum master: ${company.team[scrumMaster]}`);
console.log(`Projected revenue: $${company.projectedRevenue}`);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000
```

###### My Solution

My initial suspicion, before running any code, is that there is a problem with the code that tries to assign the names to the different positions within the `team` object. We are actually referencing the values associated with the variables `ceo` and `scrumMaster`, rather than string versions of these variable names, when we try to assign names to them as properties of the `team` object (e.g. `team[ceo] = 'Kim'` rather than `team['ceo'] = 'Kim'`).  

After running the code, that does appear to be the issue.

###### LS Solution

```javascript
const team = {};

team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team['ceo']);
console.log('Scrum master: ' + company.team['scrumMaster']);
console.log('Projected revenue: $' + company.projectedRevenue);
```

Or:

```javascript
const team = {};

team.ceo = 'Kim';
team.scrumMaster = 'Alice';
team.developer = undefined;

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team.ceo);
console.log('Scrum master: ' + company.team.scrumMaster);
console.log('Projected revenue: $' + company.projectedRevenue);
```

###### Discussion

Recall from the assignment on [object properties](https://launchschool.com/lessons/0539330a/assignments/4ef54bb4) that property names are always strings. To assign and access the property value, we can use either dot notation or strings with bracket notation, as shown in the two solutions above. (JavaScript style guides typically recommend using dot notation when possible.)  

Most relevant here is that when we use bracket notation to assign or access an object property, the expression inside the brackets must be a string value; if it is not, JavaScript will convert it into one. Our original code unintentionally references the *variables* `ceo`, `scrumMaster`, and `developer` rather than passing in strings. JavaScript looks up the values assigned to those variables, and since the values are objects, converts them to strings. The string representation of all three values is `[object Object]`, so on lines 22-24 we were actually repeatedly re-assigning the value of `team['[object Object]']`. The last assignment, on line 24, assigned it to `undefined`. As a result, the value of `team` ended up as follows:

```javascript
{ '[object Object]': undefined }
```

###### Further Exploration

You may wish to take a look at the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) for accessing object properties via bracket or dot notation.

---

### 8. Expensive Study Preparation

We make a few purchases to prepare for our study session, but the amount charged upon checkout seems too high. Run the following code and find out why we are charged incorrectly.  

```javascript
// The shopping cart is a list of items, where each item
// is an object { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  'notebook': 9.99,
  'pencil': 1.70,
  'coffee': 3.00,
  'smoothie': 2.10,
};

function price({name}) {
  return prices[name];
}

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
function updateCart(name, amount) {
  amount = amount || 1;
  
  let alreadyInCart = false;
  
  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];
    
    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }
  
  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// Calculating the price for the whole shopping cart.
function total() {
  let total = 0;
  
  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];
    
    total += (item.amount * price(item));
  }
  
  return total.toFixed(2);
}

function pay() {
  // omitted

  console.log(`You have been charged $${total()}.`);
}

function checkout() {
  pay();
  shoppingCart = {};
}

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0);

checkout();
// You have been charged $14.69.
```

###### My Solution

I believe the reason we are incorrectly charged is that when we update the cart to reflect the fact that we no longer need pencils, the `updateCart` function accidentally changes the `0` value that we pass as an argument to the value of `1`. The first line of that function reassigns the `amount` variable to the value of `1` if the value passed in as an argument is falsy. In JavaScript, `0` is a falsy value.  

Thus, we must fix the `updateCart()` function so that it does not reassign `amount` if we pass an argument value of `0`.

```javascript
function updateCart(name, amount) {
  if (amount !== 0) {
    amount = amount || 1;
  }

// ... rest of code omitted for brevity
```

###### LS Solution

```javascript
// prior code omitted

function updateCart(name, amount) {
  if (amount === undefined) {
    amount = 1;
  }

  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}

// code omitted

checkout();
// You have been charged $12.99.
```

###### Discussion

The problem was that one pencil remained in the shopping cart, although we intended to update the quantity of pencils to 0 on line 70. The reason is the following: When we call `updateCart` on line 70, the `amount` passed in is `0`. Since `0` is treated as falsy in JavaScript, `amount || 1` (line 21) returns `1`. So every time we want to set the amount of some item to `0`, it is set to `1` instead.  

Our solution instead checks whether the parameter `amount` is `undefined`. If so, `amount` is given a default value of 1.  

###### Further Exploration

Can you come up with an alternative solution to the one above by using a [default parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)?

###### My FE Solution

```javascript
function updateCart(name, amount = 1) {
  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    let item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name, amount });
  }
}
```

In the above code we completely eliminate the lines of code that check to see if an argument was passed for the `amount` parameter, and simply use a default parameter that will assign a value of `1` to `amount` if no argument is passed.

---

### 9. Stuck on Page 18

The following code is a simplified (and not so serious) model of how we read a software development book. But running this code results in a stack overflow. What is wrong?

```javascript
const totalPages = 364;
let energy = 100;

function read() {
  let currentPage = 1;
  
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }
  
  console.log(`Made it to page ${String(currentPage)}.`)
  
  // Drink a cup of coffee.
  energy = 100;
  
  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();
```

###### My Solution

The problem is that we have defined a recursive function and at the start of that function the `currentPage` variable is always set to `1`, so we will never get to the end of the book--we just end up reading the same first 18 pages over and over again. We need to move the `currentPage` declaration and assignment to outside of the `read()` function.

```javascript
const totalPages = 364;
let energy = 100;
let currentPage = 1;

function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();
```

That works! And man, that's a lot of coffee!

###### LS Solution

```javascript
const totalPages = 364;
let currentPage = 1;
let energy = 100;

function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();
```

###### Discussion

Notice that on line 5 of the original code, within our function body, we declare the variable `currentPage` and assign it to 1. We increment `currentPage` on line 8 within our `while` loop and then invoke `read` recursively on line 19 if `currentPage` is still less than `totalPages`. The problem arises because each time `read` is executed, `currentPage` is assigned to 1. Therefore, the comparison provided as a condition to our `if` statement on line 18 of the original code will always return `true` and `read` will continue to be invoked repeatedly until the stack overflows.  

To solve this problem, we move the declaration and initial assignment of `currentPage` outside of our function body, to line 2.  

