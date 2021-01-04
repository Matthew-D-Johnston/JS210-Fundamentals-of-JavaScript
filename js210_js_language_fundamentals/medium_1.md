# JS210 - JavaScript Language Fundamentals

## Medium 1

### 1. Logical Operation

What will each line of the following code return? Don't run the code until after you have tried to answer.  

```javascript
(false && undefined);
(false || undefined);
((false && undefined) || (false || undefined));
((false || undefined) || (false && undefined));
((false && undefined) && (false || undefined));
((false || undefined) && (false && undefined));
('a' || (false && undefined) || '');
((false && undefined) || 'a' || '');
('a' && (false || undefined) && '');
((false || undefined) && 'a' && '');
```

###### My Solution

```javascript
(false && undefined);																// false (correct)
(false || undefined);																// false (incorrect: undefined)
((false && undefined) || (false || undefined));			// false (incorrect: undefined)
((false || undefined) || (false && undefined));			// false (correct)
((false && undefined) && (false || undefined));			// false (correct)
((false || undefined) && (false && undefined));			// false (incorrect: undefined)
('a' || (false && undefined) || '');								// 'a' (correct)
((false && undefined) || 'a' || '');								// 'a' (correct)
('a' && (false || undefined) && '');								// undefined (correct)
((false || undefined) && 'a' && '');								// undefined (correct)
```

After running the code and making the corrections, that gives...

```javascript
false
undefined
undefined
false
false
undefined
'a'
'a'
undefined
undefined
```

###### LS Solution

```javascript
false
undefined
undefined
false
false
undefined
"a"
"a"
undefined
undefined
```

###### Discussion

The logical AND (`&&`) and logical OR (`||`) operators do not always return a boolean value. They return the value of one of their operands (i.e., the expressions being compared), which may be a non-boolean value such as shown above. You can learn more about the [logical operator rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators) on MDN.  

The return value of a logical expression can be determined by iteratively evaluating the expression from left to right until it results in a single value. For example:  

```javascript
((false && undefined) || 'a' || '');
(false || 'a' || '');
('a' || '');
('a');

------

('a' && (false || undefined) && '');
('a' && undefined && '');
(undefined && '');
(undefined);

------

((false || undefined) || (false && undefined));
(undefined || false);
(false);
```

---

### 2. Conditional Loop

The following program is expected to log each number between `0` and `9` (inclusive) that is a multiple of `3`. Read through the code shown below. Will it produce the expected result? Why or why not?  

```javascript
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}
```

###### My Solution

No, the program will not log the expected result.  Instead, the program will engage in an infinite loop where it only logs `0`  until we cause the program to stop running by brute force.  

The problem is that we only increment `i` if the first `if` conditional statement is not true. But since we initialized `i` with the value of `0` and the `if` conditional statement `i % 3 === 0` evaluates to true when `i = 0`, the program will log the return value of `i` and then return to the `while` conditional statement without incrementing `i`.  

###### LS Solution

No, the result is not as expected. This code results in an infinite loop that logs `0` to the console on each iteration.  

###### Discussion

This code results in an infinite loop because the variable `i` is never incremented. The conditional expression `(i % 3 === 0)` always evaluates to `true`, so the `else` clause containing the incrementer expression is never executed. When using a `while` loop, it is important to carefully manage the variable(s) involved with the iteration and the stopping condition. For this exercise, the code can be fixed by incrementing `i` on each iteration.  

```javascript
// solution 1
let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  }
  
  i += 1;
}


// solution 2
for (let i = 0; i < 10; i += 1) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
```

---

### 3. Multiplication Table

The following program is expected to log a multiplication table for the numbers from `1` to `10` to the console. Read through the code shown below. Will it produce the expected result? Why or why not?  

```javascript
function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1: return `  ${stringNumber}`;
    case 2: return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }
  
  console.log(row);
}
```

###### My Solution

First row...

```
  1   2   3   4   5   6   7   8   9  10 
```

Second row...

```
  2   4   6   8  10  12  14  16  18  20 
```

...

Ninth row...

```
  9  18  27  36  45  54  63  72  81  90
```

Tenth row???

The program will perform fine up until the 10th and final row, which will not be logged since the outer `for` loop is specified to stop after completing the 9th interation, as specified by `i < 10`. If the code is changed to `i <= 10`, then the program will run as expected.  

###### LS Solution

No, the result is not as expected; the code generates the multiplication table for only the numbers from `1` to `9`.  

###### Discussion

This is an example of an off-by-one bug. The value of `i`, which is responsible for the rows of the table, only goes up to `9`. Therefore, the entire row for the values of `10 x 1`, `10 x 2`, `...`, `10 x 10` is not logged. To fix this bug, the `for` loop should be written as shown below.  

```javascript
for (let i = 1; i <= 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }
  
  console.log(row);
}
```

---

### 4. Selected Columns

The `getSelectedColumns` function selects and extracts specific columns to a new array. Currently, the function is not producing the expected result. Go over the function and the sample runs shown below. What do you think the problem is?  

```javascript
function getSelectedColumns(numbers, cols) {
  var result = [];
  
  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }
      
      result[j][i] = numbers[i][cols[j]];
    }
  }
  
  return result;
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]
```

###### My Solution

I suspect that the problem has to do with the way in which we are declaring and defining the `length` variable for each `for` loop. Specifically, the problem is that we are using the same variable name for each loop. Thus, the outer `for` loop does not have a chance to iterate over all of the `numbers` array's elements because the `length` variable is reassigned to a smaller value associated with the `cols` length.  

We could fix this by changing the name of the `length` variable for one of the loops:

```javascript
function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length1 = cols.length; j < length1; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}
```

###### LS Solution

The problem is that the `length` variable is reassigned a new value in the second loop.  

###### Discussion

The intention of declaring the variable `length` is to save on repetitive calls to the `.length` property. However, we are declaring `length` with the `var` keyword, which gives it function scope. As a result, the two declarations of `length` only create one `length` variable that is used in both loops. Thus, on line 5, we're reassigning the same variable used on line 4.  

To resolve this, we can declare the variables using `let`. Variables declared with `let` have block scope, so the `length` variable in the inner loop is different from the `length` variable in the outer loop.  

```javascript
// Possible Solution
function getSelectedColumns(numbers, cols) {
  const result = [];

  for (let i = 0, length = numbers.length; i < length; i += 1) {
    for (let j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) {
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  return result;
}
```

---

### 5. Counter

What will the following code snippets log?  

###### Code Snippet 1

```javascript
var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}
```

###### Code Snippet 2

```javascript
function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;
```

###### Code Snippet 3

```javascript
var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
```

###### Code Snippet 4

```javascript
let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
```

###### My Solution

##### Snippet 1

```
The total value is 15
```

After running the code, it is confirmed that this is correct.

##### Snippet 2

This one I feel less sure about, but...

```
The total value is 15
```

After running the code, the correct answer is...

```
The total value is NaN
```

##### Snippet 3

```
The total value is 15
```

After running the code, it is confirmed that this is correct.

##### Snippet 4

```
The total value is 15
```

After running the code, the correct answer is that the program raises the following exception...

```
SyntaxError: Identifier 'counter' has already been declared
```

###### LS Solution

The fundamental concepts exemplified in this exercise are **hoisting**, **variable declarations**, and **function declarations**.  

The key thing to note about **function declarations** is that, like variable declarations, they result in the creation of a variable. A function declaration creates a variable with the same name as the function name.  

Recall that **hoisting** works differently depending on the type of declaration. With function declarations, both the function name and body are hoisted, whereas, with variable declarations, only the variable name is hoisted but not the assignment.  

Finally, although function and variable **declarations** are both hoisted, function declarations are hoisted first; any succeeding variable declarations with the *same name* (e.g., `counter`) are seen as duplicates. With `var` declarations these duplicates are ignored, but `let` declarations work a little differently (see below).  

After hoisting, the code snippets are equivalent to the following:  

##### Code Snippet 1

```javascript
function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15
```

##### Code Snippet 2

```javascript
function counter(count) {
  // ...
}

var rate;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is NaN

counter = 5;
rate = 3;
```

##### Code Snippet 3

```javascript
function counter(count) {
  // ...
}

var rate;

counter = 5;
rate = 3;

console.log('The total value is ' + String(counter * rate));
// logs: The total value is 15
```

##### Code Snippet 4

```javascript
function counter(count) {
  // ...
}

let counter = 5;
let rate = 3;

console.log('The total value is ' + String(counter * rate));
```

##### Discussion

Notice that after **hoisting**, the first and third code snippets are effectively the same. Notice also, that in the first three code snippets, the variable declaration for `counter` is effectively overwritten by the function declaration with the same name.  

The differentiating factor for the second code snippet is the position of the call to `console.log` relative to the variable assignments; since the assignments happen after the `console.log` call, the expression `counter * rate` evaluates to `NaN`.  

You can't declare a variable multiple times when one or more of those declarations use `let` or `const`. Since snippet 4 declares `counter` using `let`, it raises a `SyntaxError`. However, the error occurs on line 4 -- the function declaration -- from the original code. Since `SyntaxError`s usually occur during the creation phase, hoisting has no direct effect on the behavior.

---

### 6. Logger

Read through the following code. Why will it log `'debugging'`?

```javascript
function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }
  
  logger();
}

debugIt();
```

###### My Solution

On the final line we invoke the `debugIt()` function.  Within that function, there is a call to invoke the `logger()` function which is locally defined within the `debugIt()` function. That `logger()` function calls for the `status` variable to be logged to the console. On line 2, the `status` variable was declared and assigned the string value `'debugging'`. Thus, this is the value that is logged to the console when the `debugIt()` function is invoked.  

###### LS Solution

On line 4, the `status` variable has a value of `'debugging'` because of JavaScript's lexical scoping rules.

The `debugIt` function defines a local variable named `status` and a function named `logger`. `logger` is an inner (nested) function, so it has access to any variables declared in the scope of its outer (parent) function, `debugIt`, due to lexical scoping rules.

---

### 7. Invoice

The `invoiceTotal` function in the code below computes the total amount for an invoice containing four "line items". How can you refactor the function so that it will work with invoices containing any number of line items?  

```javascript
function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);							// works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);			// does not work; how can you make it work?
```

###### My Solution

Refactored code:

```javascript
function invoiceTotal(...amounts) {
  let total = 0;
  for (let i = 0; i < amounts.length; i += 1) {
    total += amounts[i];
  }
  
  return total;
}
```

###### LS Solution

```javascript
function invoiceTotal(...args) {
  let total = 0;
  
  for (let i = 0; i < args.length; i += 1) {
    total += args[i];
  }

	return total;
}
```

###### Discussion

The solution uses the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters) syntax to refactor the `invoiceTotal` function so that it accepts a variable number of `amount` arguments to sum up.

---

### 8. Product of Sums

The `productOfSums` function shown below is expected to return the product of the sums of two arrays of numbers. Read through the following code. Will it produce the expected result? Why or why not?  

```javascript
function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum;
  
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  
  sum;
}
```

###### My Solution

No, it will not produce the expected result. There are two key changes that we need to make. First, when declaring the `sum` variable in the `total()` function we need to assign it to the value `0`. Secondly, we need to put the keyword `return` before the invocation of the `sum` variable on the last line of the `total()` function definition.

```javascript
function productOfSums(array1, array2) {
  let result = total(array1) * total(array2);
  return result;
}

function total(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }

  return sum;
}
```

###### LS Solution

The code does not produce the expected result. The current implementation returns `NaN`.  

###### Discussion

This code has two issues. The first is that the `total` function does not have an explicit `return` statement, and thus returns `undefined`. Since `total` returns `undefined`, the expression `total(array1) * total(array2)` becomes `undefined * undefined`, which evaluates to `NaN`. The second issue is that in the `total` function, the `sum` variable is not explicitly assigned a value, which means that it has a value of `undefined` by default. Therefore, at the end of each iteration of the loop, `sum` is assigned a value of `NaN` because the expression `undefined + numbers[i]` evaluates to `NaN`.  

A corrected version of the `total` function is shown below.  

```javascript
function total(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
  }
  
  return sum;
}
```

