##### JS210 Fundamentals of JavaScript for Programmers > Practice Problems: Logic and Flow Control

---

# Chrome Developer Tools

## Further Reading

- [How to Set Line-of-code Breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#loc)
- [How to Step Through Code](https://developers.google.com/web/tools/chrome-devtools/javascript/reference#stepping)
- [How to Use Code Snippets](https://www.alexkras.com/using-code-snippets-in-chrome-developer-tools/)

---

# JavaScript Coding Styles

### Spacing

Use soft tabs set to two spaces.

```javascript
// Each ∙ represents a single space character

// bad
function foo() {
∙∙∙∙let name;
}

// bad
function bar() {
∙let name;
}

// good
function baz() {
∙∙let name;
}
```

Place one space before the leading brace.

```javascript
// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}
```

Place one space before the opening parenthesis in control statements (`if`, `while`, etc.). Place no space between the argument list and the function name in function calls and declarations.  

```javascript
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```

Set off operators with spaces.

```javascript
// bad
let x=y+5;

// good
let x = y + 5;
```

Do not add spaces inside parentheses.

```javascript
// bad
let bar = function( foo ) {
  return foo;
};

// good
let bar = function(foo) {
  return foo;
};

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}
```

Unary special-character operators (e.g., `!`, `++`) must not have spaces between them and their operand.

```javascript
// bad
index ++;

// good
index++;
```

No precedeing spaces before `,` and `;`.

```javascript
// bad
func(a ,b) ;

// good
func(a, b);
```

No whitespace at the end of lines or on blank lines.

```javascript
// bad
func(a, b);∙

// good
func(a, b);
```

The `?` and `:` in a ternary conditional must have a space on both sides.

```javascript
// bad
let maybe1 > maybe2?'bar':null;

// good
let maybe1 > maybe2 ? 'bar' : null;
```

Ternaries should not be nested and should generally be single line expressions.

```javascript
// bad
let foo = maybe1 > maybe2
  ? 'bar'
  : value1 > value2 ? 'baz' : null;

// better
let maybeNull = value1 > value2 ? 'baz' : null;

let foo = maybe1 > maybe2
  ? 'bar'
  : maybeNull;

// best
let maybeNull = value1 > value2 ? 'baz' : null;

let foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

Avoid unneeded ternary statements.

```javascript
// bad
let foo = a ? a : b;
let bar = c ? true : false;
let baz = c ? false : true;

// good
let foo = a || b;
let bar = !!c;
let baz = !c;
```

### Blocks

Leave a blank line after blocks and before the next statement.

```javascript
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;
```

Do not pad your blocks with blank lines.

```javascript
// bad
function bar() {

  console.log(foo);

}

// also bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// good
function bar() {
  console.log(foo);
}

// good
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
```

Use braces with all multi-line blocks.

```javascript
// bad
if (test)
  return false;

// good
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function foo() { return false; }

// good
function bar() {
  return false;
}
```

If you're using multi-line blocks with `if` and `else`, put `else` on the same line as your `if` block's closing brace.  

```javascript
// bad
if (test) {
  thing1();
  thing2();
}
else {
  thing3();
}

// good
if (test) {
  thing1();
  thing2();
} else {
  thing3();
}
```

### Semicolons

Use semicolons after every statement, except for statements ending with a block.  

```javascript
// bad
let number
number = 5
number = number + 1

// good
let number;
number = 5;
number = number + 1;

// bad
while (number > 0) {
  number -= 1;
};

// good
while (number > 0) {
  number -= 1;
}
```

Semicolons should be used after statements ending with a function expression, however.

```javascript
// bad
function foo() {
  return 'function declaration';
};

let bar = function () {
  return 'function expression';
}

let qux = () => 'arrow function'

// good
function foo() {
  return 'function declaration';
}

let bar = function () {
  return 'function expression';
};

let qux = () => 'arrow function';
```

### Naming Conventions

Use camelCase for variable and function names.

```javascript
// bad
let Hello = 'hello';
let my_name = 'john';
function call_me() {}

// good
let hello = 'hello';
let myName = 'john';
function callMe() {}
```

It's common to use SCREAMING_SNAKE_CASE for constants, but not always required:

```javascript
// acceptable
const WhatsUpDoc = "What's up, Doc?";
const WHATS_UP_DOC = "What's up, Doc?";
```

You can define imported function names with camelCase names even when declaring the names with `const`:

```javascript
// ok
const readlineSync = require('readline-sync');
```

### Strings

Use single quotes `''` for strings.

```javascript
// bad
let name = "Capt. Janeway";

// good
let name = 'Capt. Janeway';
```

Use explicit coercion.

```javascript
// bad
let a = 9;
let string = a + '';

// good when you want to raise errors
null.toString();

// good when you want to guarantee coercion to a String
String(null);
```

### Numbers

Use `Number` for type casting and `parseInt` always with a radix for parsing strings.

```javascript
let inputValue = '4';

// bad
let val = new Number(inputValue);

// bad
let val = +inputValue;

// bad
let val = parseInt(inputValue);

// good
let val = Number(inputValue);

// good
let val = parseInt(inputValue, 10);
```

### Booleans

```javascript
let age = 0;

// bad
let hasAge = new Boolean(age);

// good
let hasAge = Boolean(age);

// best
let hasAge = !!age;
```

### Variable Declarations

Use `let` and `const` in preference to `var`.  

When using `let` and `const`, declare variables as close to their first use as possible; don't put them all at the top of the scope. When using `var`, declare your variables at the top of the scope.  

Use `const` if the variable will never be reassigned. If the variable won't be reassigned but it might get mutated, decide for yourself whether to use `const` or `let`. However, be consistent:

```javascript
// bad
let myConstArr1 = [1, 2, 3];
const myConstArr2 = [4, 5, 6];

myConstArr1[1] *= 2;
myConstArr2[1] *= 3;

// okay
let myConstArr1 = [1, 2, 3];
let myConstArr2 = [4, 5, 6];

myConstArr1[1] *= 2;
myConstArr2[1] *= 3;


// okay
const myConstArr1 = [1, 2, 3];
const myConstArr2 = [4, 5, 6];

myConstArr1[1] *= 2;
myConstArr2[1] *= 3;
```

### Functions

Never declare a function in a non-function block (`if`, `while`, etc.). Use a function expression or arrow function instead.

```javascript
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = function () {
    console.log('Yup.');
  };
}

// good
let test;
if (currentUser) {
  test = () => console.log('Yup.');
}
```

Never name a parameter `arguments`. This takes precedence over the `arguments` object that is given to every function scope.

```javascript
// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}
```

Use arrow functions to define function expressions used as callbacks:

```javascript
// okay
let arr = [1, 2, 3].map(function (value) {
  return value * 2;
});

// better
let arr = [1, 2, 3].map(value => value * 2);
```

---

# Odd Numbers

Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.  

###### Exaple

```javascript
logOddNumbers(19);

// output on console
1
3
5
7
9
11
13
15
17
19
```

###### My Solution

Function:

```javascript
function logOddNumbers(num) {
  for (let index = 1; index <= num; index += 2) {
    console.log(index);
  }
}
```

Output:

```javascript
logOddNumbers(19);

1
3
5
7
9
11
13
15
17
19
```

###### LS Solution

```javascript
function logOddNumbers(number) {
  for (let currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 2 === 1) {
      console.log(currentNumber);
    }
  }
}
```

###### Further Exploration

For more practice, consider the following:

- You can remove the conditional inside the loop and increment `currentNumber` by 2 with each step, instead of 1. How would you write code to do that?
- Instead of a conditional that checks for odd numbers, you can write a conditional that checks for even numbers, but skips them with the `continue` statement. How would you write your code?

###### My Solution

I already did the first option, so I'll try the second.

```javascript
function logOddNumbers(num) {
  for (let index = 1; index <= num; index += 1) {
    if (index % 2 === 0) {
      continue;
    }

    console.log(index);
  }
}
```

Output:

```javascript
logOddNumbers(19);

1
3
5
7
9
11
13
15
17
19
```

---

# Multiples of 3 and 5

Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, appened an "!" to the number.  

###### Example

```javascript
multiplesOfThreeAndFive();

// output on console
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
// ... remainder of output omitted for brevity
```

###### My Solution

Function:

```javascript
function multiplesOfThreeAndFive() {
  for (let index = 1; index <= 100; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      if (index % 3 === 0 && index % 5 === 0) {
        console.log(index + '!');
      } else {
        console.log(index);
      }  
    }
  }
}
```

###### LS Solution

```javascript
const multiplesOfThreeAndFive = function() {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log(String(number) + '!');
    } else if (number % 3 === 0 || number % 5 === 0) {
      console.log(String(number));
    }
  }
}
```

###### Further Exploration

For additional practice, how would you change your function so it takes, as arguments, the range of numbers it should check?

###### My Solution

```javascript
function multiplesOfThreeAndFive(begin, end) {
  for (let index = begin; index <= end; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      if (index % 3 === 0 && index % 5 === 0) {
        console.log(String(index) + '!');
      } else {
        console.log(String(index));
      }  
    }
  }
}

multiplesOfThreeAndFive();
```

---

# Print Multiples

Write a function `logMultiples` that takes one argument `number`. It should log all multiples of the argument between 0 and 100 (inclusive) that are also odd numbers. Log the values in descending order.  

You may assume that `number` is an integer between 0 and 100.  

###### Example

```javascript
logMultiples(17);
// output (5x, 3x and 1x)
85
51
17

logMultiples(21);
// output (3x and 1x)
63
21
```

###### My Solution

```javascript
function logMultiples(num) {
	for (let index = 100; index >= 0; index -= 1) {
    if (index % 2 === 1 && index % num === 0) {
      console.log(String(index));
    }
  }
}
```

###### LS Solution

```javascript
function logMultiples(number) {
  for (let candidate = 100; candidate >= number; candidate -= 1) {
    if (candidate % 2 === 1 && candidate % number === 0) {
      console.log(candidate);
    }
  }
}
```

###### Further Exploration

This solution must step through every number between 100 and 0. Alternatively, you can determine the number's largest multiple that is less than 100, then start the loop with that multiple. With each iteration of the loop you can decrement the number by the argument; when the result is negative, you can quit.  

As above, we must check each multiple to determine whether it is odd. If it is odd, we log it.  

`Math.floor(100 / number) * number` returns the largest multiple of `number` that is between 0 and 100. If you're not familiar with the `floor` method, see [the documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).  

###### My Solution

```javascript
function logMultiples(number) {
  let largestMultiple = Math.floor(100 / number) * number;
  for (let index = largestMultiple; index >= number; index -= number) {
    if (index % 2 === 1) {
      console.log(String(index));
    }
  }
}
```

###### LS Solution

Possible Solution 1: Here's a solution that uses this approach and a `while` loop:

```javascript
function logMultiples(number) {
  let multiple = Math.floor(100 / number) * number;
  
  while (multiple > 0) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
    
    multiple -= number;
  }
}
```

Possible Solution 2: This solution uses `for` instead of `while`. Effectively, it puts the starting value, the decrementing logic, and the final condition in a single line:

```javascript
function logMultiples(number) {
  for (let multiple = Math.floor(100 / number) * number; multiple > 0; multiple -= number) {
    if (multiple % 2 === 1) {
      console.log(multiple);
    }
  }
}
```

This is dense code and difficult to read thanks to the calculation, so it may not be the best solution. You might consider a refactor that computes the largest multiple as a separate function.  

---

# FizzBuzz

Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.  

Your output should look like this:

```javascript
fizzbuzz();

// console output
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
// … rest of output omitted for brevity
```

###### My Solution

Function:

```javascript
function fizzbuzz() {
  for (let number = 1; number <= 100; number += 1) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log('FizzBuzz');
    } else if (number % 3 === 0) {
      console.log('Fizz');
    } else if (number % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(String(number));
    }
  }
}
```

Output:

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
```

###### LS Solution

```javascript
let fizzbuzz = () => {
  for (let index = 1; index <= 100; index += 1) {
    let message = index;
    
    if (index % 3 === 0 && index % 5 === 0) {
      message = 'FizzBuzz';
    } else if (index % 3 === 0) {
      message = 'Fizz';
    } else if (index % 5 === 0) {
      message = 'Buzz';
    }
    
    console.log(message);
  }
};
```

###### Further Exploration

This solution is more verbose than called for. Can you refactor it to make it more concise?  

Here is one approach:  

```javascript
let fizzbuzz = () => {
  for (let index = 1; index <= 100; index += 1) {
    let message = '';
    
    if (index % 3 === 0) {
      message += 'Fizz';
    }
    
    if (index % 5 === 0) {
      message += 'Buzz';
    }
    
    console.log(message || index);
  }
};
```

---

# Prime Check

Write a function that takes a number argument, and returns `true` if the number is prime, or `false` if it is not.  

You may assume that the input is always a non-negative integer.  

###### Example

```javascript
isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
```

###### My Solution

Function:

```javascript
function isPrime(number) {
  let multiple = (number + 1) / 2;
  let result = true;
  
  while (multiple > 0) {
    if (number % multiple === 0) {
      result = false;
      break;
    }
    
    multiple -= 1;
  }
  
  return result;
}
```

Output:

```javascript
isPrime(1);   // false
isPrime(2);   // true
isPrime(3);   // true
isPrime(43);  // true
isPrime(55);  // false
isPrime(0);   // false
```

###### LS Solution

```javascript
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let currentNumber = 2; currentNumber < number; currentNumber += 1) {
    if (number % currentNumber === 0) {
      return false;
    }
  }
  
  return true;
}
```

There is a special case we must deal with: the numbers 0 and 1 are not prime, but the loop fails to make this determination.  Therefore, we use a "Guard Clause" at the top of the function to return `false` immediately when the argument is 0 or 1.  

###### Further Exploration

If we use the fact that even numbers greater than 2 can't be prime (they're all divisible by 2), we can add this to the gaurd clause as well, and return immediately for even numbers greater than 2. This also means that we only need to test odd divisors; odd numbers are never divisible by even numbers.

```javascript
function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }
  
  let divisor = 3;
  
  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }
    
    divisor += 2;
  }
  
  return true;
}
```

---

# XOR

For boolean values, the `||` operator returns `true` if either or both of its operands are `true`, `false` if both operands are `false`. The `&&` operator, on the other hand, returns `true` if both of its operands are `true`, and `false` if either operand is `false`. This works great until you need only one of two conditions to be `true`, the so-called "exclusive or", or `XOR`.  

Write a function named `isXor` that takes two arguments, and returns `true` if exactly one argument is **truthy**, `false` otherwise. Your function should work with the boolean values of `true` and `false`, but also any JavaScript values based on their "truthiness".  

###### Example

```javascript
isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false
```

###### My Solution

```javascript
function isXor(arg1, arg2) {
    return (!!arg1 && !arg2) || (!arg1 && !!arg2);
}
```

###### LS Solution

```javascript
function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  }
  
  if (!value1 && value 2) {
    return true;
  }
  
  return false;
}
```

We can also use an equivalent `if...else` structure:

```javascript
function isXor(value1, value2) {
  if (value1 && !value2) {
    return true;
  } else if (!value1 && value2) {
    return true;
  } else {
    return false;s
  }
}
```

###### Further Exploration

You can write a solution that is even more concise:  

Alternative 1:  

```javascript
function isXor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}
```

The two exclamation points (`!!`) coerce the return value to a boolean value (`true` or `false`). By default, logical operators return the value of the values of the operands, not a boolean value. Without the `!!`, the function returns the truthy (e.g., `'a'` or `2`) or falsy (e.g., `''`) values; the `!!` guarantees that the result is boolean.  

###### Example

```javascript
// expression form
((expr1 && expr2) || (expr3 && expr4))

isXor('a', undefined);    // true
// series of evaluations:
!!(('a' && !undefined) || (undefined && !'a'))
!!(('a' && true) || (undefined && false))
!!( true || undefined )
!!( true )                // true


isXor(null, '');          // false
// series of evaluations:
!!((null && !'') || ('' && !null))
!!((null && true) || ('' && true))
!!( null || '' )
!!( '' )                  // false
```

Alternative 2:

```javascript
function isXor(value1, value2) {
  return Boolean(value1) !== Boolean(value2);
}
```

While these solutions are more concise, they take a little more effort to understand.  

###### Questions to Think About

`||` and `&&` are so-called short-circuit operators; JavaScript evaluates the second operand only when needed. For instance, in `a || b`, you don't need to evaluate `b` if `a` is truthy. Does the `isXor` function perform short-circuit evaluation? Why or why not? Does short-circuit evaluation in XOR operations make sense?  

Can you think of a situation where a boolean `isXor` function is useful? Suppose you were modeling a light at the top of a flight of stairs wired such that you can turn the light on or off from either upstairs or downstairs. This is an XOR configuration, and you can model it in JavaScript using the `isXor` function. Try to think of some more examples.  

---

# Guessing the Password

Write a password guessing program that tracks how many times the user enters the wrong password. If the user enters the password wrong three times, log `You have been denied access.` and terminate the program. If the password is correct, log `You have successfully logged in.` and end the program.  

###### Example

```j
// password = 'password'

// The program displays a dialog that asks the user to enter a password.
// If the user enters the wrong password, keep asking up to three times. After
// three failures, log the access denied.

What is the password: 123
What is the password: opensesame
What is the password: letmein

// message on the console
You have been denied access.

// If the user enters the right password, report login success.
What is the password: password

// message on the console
You have successfully logged in.
```

###### My Solution

```javascript
let password = 'password';

let rlSync = require('readline-sync');
let validated = false;

for (let attempts = 1; attempts <= 3; attempts += 1) {
  let guess = rlSync.question('What is the password: ');

  if (guess === password) {
    validated = true;
    break;
  }
}

if (validated) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access');
}
```

###### LS Logic and Structure

You need to count the failed attempts, and keep prompting the user for the password until she enters the correct password or fails three times.

###### LS Solution

This solution is a direct translation of the guide we provided in the "Logic and Structure" section:

```javascript
const PASSWORD = 'password';
let failedAttempts = 0;

while (true) {
  let guess = prompt('What is the password:');
  
  if (guess === PASSWORD) {
    console.log('You have successfully logged in.');
    break;
  }
  
  failedAttempts += 1;
  
  if (failedAttempts === 3) {
    console.log('You have been denied access.');
    break;
  }
}
```

Alternative Solution:  

For this solution, we keep asking the user to enter the password unless they have already entered the password correctly. We allow up to three failed attempts. Finally, we use the failed attempts count to determine which message we should log.  

```javascript
const PASSWORD = 'password';
let failedAttempts = 0;

do {
  let guess = prompt('What is the password:');
  
  if (guess === password) {
    break;
  }
  
  failedAttempts += 1;
} while (failedAttempts < 3);

if (failedAttempts === 3) {
  console.log('You have been denied access.');
} else {
  console.log('You have successfully logged in.');
}
```

---

# Student Grade

Write a program to determine a student's grade based on the average of three scores you get from the user. Use these rules to compute the grade:  

* If the average score is greater than or equal to `90` then the grade is `'A'`
* If the average score is greater than or equal to `70` and less than `90` then the grade is `'B'`
* If the average score is greater than or equal to `50` and less than `70` then the grade is `'C'`
* If the average score is less than `50` then grade is `'F'`

You may assume that all input values are valid positive integers.  

###### Example

```
// prompts to get the 3 scores
Enter score 1: 90
Enter score 2: 50
Enter score 3: 78

// log to the console
Based on the average of your 3 scores your letter grade is "B".
```

###### My Solution

HTML Chrome Solution:

```javascript
let score1 = Number(prompt('Enter score 1: '));
let score2 = Number(prompt('Enter score 2: '));
let score3 = Number(prompt('Enter score 3: '));

let averageScore = (score1 + score2 + score3) / 3;

let grade;

if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70 && averageScore < 90) {
  grade = 'B';
} else if (averageScore >= 50 && averageScore < 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the avearge of your 3 scores your letter grade is "${grade}".`);
```

Command Line Node Solution:

```javascript
let rlSync = require('readline-sync');

let score1 = Number(rlSync.question('Enter score 1: '));
let score2 = Number(rlSync.question('Enter score 2: '));
let score3 = Number(rlSync.question('Enter score 3: '));

let averageScore = (score1 + score2 + score3) / 3;

let grade;

if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70 && averageScore < 90) {
  grade = 'B';
} else if (averageScore >= 50 && averageScore < 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the avearge of your 3 scores your letter grade is "${grade}".`);
```

###### LS Solution

```javascript
let score1 = Number(prompt('Enter score 1:'));
let score2 = Number(prompt('Enter score 2:'));
let score3 = Number(prompt('Enter score 3:'));
let total = score1 + score2 + score3;
let average = total / 3;

let grade;
if (average >= 90) {
  grade = 'A';
} else if (average >= 70 && average < 90) {
  grade = 'B';
} else if (average >= 50 && average < 70) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log('Based on the average of your 3 scores your letter grade is "' +
            grade + '".');
```

You can simplify this a bit if you realize that line 11 doesn't need to check `&& average < 90` (line 9 removes all scores >= 90 from consideration). Likewise, you don't need `&& average < 70` on line 13. You can also make `'F'` the default grade. So, lines 8-17 become:

```javascript
let grade = 'F';
if (average >= 90) {
  grade = 'A';
} else if (average >= 70) {
  grade = 'B';
} else if (average >= 50) {
  grade = 'C';
}
```

###### Further Exploration

Our solution limits us to exactly three input scores. Modify it to accept any number of scores. To simplify matters, move the computation of the average into a function.  

```javascript
let rlSync = require('readline-sync');

let numberOfScores = Number(rlSync.question('How many scores do you want to enter? '));

let scores = [];

for (let index = 1; index <= numberOfScores; index += 1) {
  let score = Number(rlSync.question(`Enter score ${index}: `));

  scores.push(score);
}

const SumScores = (total, currentScore) => total + currentScore;

let scoreTotal = scores.reduce(SumScores);

let averageScore = scoreTotal / numberOfScores;

if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70) {
  grade = 'B';
} else if (averageScore >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the avearge of your ${numberOfScores} scores your letter grade is "${grade}".`);
```

---

# Greatest Common Divisor

Create a function that computes the Greatest Common Divisor of two positive integers.

###### Example

```javascript
gcd(12, 4);		// 4
gcd(15, 10);	// 5
gcd(9, 2);		// 1
```

###### My Solution

```javascript
let gcd = function (num1, num2) {
  let smallestNum;

  if (num1 < num2) {
    smallestNum = num1;
  } else {
    smallestNum = num2;
  }
  
  let greatestCommonDivisor;
  
  for (let divisor = smallestNum; divisor > 0; divisor -= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      greatestCommonDivisor = divisor;
      break;
    }
  }

  return greatestCommonDivisor;
};
```

###### LS Solution

This solution employs Euclid's alogorithm.

```javascript
function gcd(num1, num2) {
  var temp;
  
  while (num2 !== 0) {
    temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  
  return num1;
}
```

###### Further Exploration

The examples all put the larger number first. Do you think the program will still work if you reverse the order and place the smaller number first?  

Our solution works with only two numbers. Can you expand it to accept an array of two or more numbers instead? Hint: the GCD is associative. To compute the GCD of 12, 4, and 8, for instance, you can compute:

```javascript
gcd(12, gcd(4, 8));		// 4
```

You can also compute it with:

```javascript
gcd(gcd(12, 4), 8);		// 4
```

###### My Solution

```javascript
function gcd(numbers) {
  while (numbers.length !== 1) {
    let num1 = numbers.pop();
    let num2 = numbers.pop();

    let temp;

    while (num2 !== 0) {
      temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }

    numbers.unshift(num1);
  }

  return numbers[0];
}
```

---

# Goldbach Numbers

Write a function named `checkGoldbach` that uses [Goldbach's Conjecture](https://en.wikipedia.org/wiki/Goldbach's_conjecture) to log every pair of primes that sum to the number supplied as an argument. The conjecture states that _"you can express every integer greater than 2 as the sum of two primes"_. The function takes as its only parameter, an integer `expectedSum`, and logs all combinations of two prime numbers whose sum is `expectedSum`. Log the prime pairs with the smaller number first. If `expectedSum` is odd or less than 4, your function should log `null`.  

Your `checkGoldback` function **may** call the `isPrime` function you wrote for a previous practice problem.  

###### Example

```javascript
checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
```

###### My Solution

```javascript
function isPrime(number) {
  let result = true;

  if (number === 0 || number === 1) {
    result = false;
  } else {
    let multiple = parseInt((number + 1) / 2, 10);
      
    while (multiple > 1) {
      if (number % multiple === 0) {
        result = false;
        break;
      }
      
      multiple -= 1;
    }
  }
  
  return result;
}

function checkGoldbach(expectedSum) {
  let goldbachPairs = [];

  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
  } else {
    for (let num1 = expectedSum / 2; num1 <= expectedSum - 2; num1 += 1) {
      let num2 = expectedSum - num1;

      if (isPrime(num1) && isPrime(num2)) {
        if (num1 < num2) {
          goldbachPairs.unshift([num1, num2]);
        } else {
          goldbachPairs.unshift([num2, num1]);
        } 
      }
    }
  }
  goldbachPairs.forEach(element => console.log(`${element[0]} ${element[1]}`));
}
```

###### LS Solution

```javascript
let isPrime = function(number) {
  if (number < 2) {
    return false;
  }
  
  for (let firstNumber = 2; firstNumber < number; firstNumber += 1) {
    if (number % firstNumber === 0) {
      return false;
    }
  }
  
  return true;
};

let checkGoldbach = function(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }
  
  let num1 = 1;
  let num2;
  
  do {
    num1 += 1;
    num2 = expectedSum - num1;
    if (isPrime(num1) && isPrime(num2)) {
      console.log(num1, num2);
    }
  } while (num1 !== num2);
};
```

Note that our solution uses function expressions instead of declarations. There was no particular reason to do that other than to help keep them in mind. Our solution could just as easily used ordinary function declarations or arrow functions.

---

# Pattern Generation

Write a function that takes a number of rows as the argument `nStars` and logs a square of numbers and asterisks. For example, if `nStars` is 7, log the following pattern:  

```javascript
generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567
```

You may assume that `nStars` is greater than 1 and less than 10.  

###### My Solution

```javascript
function generatePattern(nStars) {
  let numbers = '1';

  for (let index = 1; index <= nStars; index += 1) {
    let stars = '*'.repeat(nStars - index);
    console.log(numbers + stars);
    numbers += (index + 1);
  }
}
```

###### LS Solution

```javascript
function generatePattern(nStars) {
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }
    
    for (let count = lineNumber + 1; count <= nStars; count += 1) {
      string += '*';
    }
    
    console.log(string);
  }
}
```

###### Further Exploration

Have you tried supplying `generatePattern` with a number greater than 9? What did you observe? Can you fix the current implementation so that it still renders as a rectangle? Try it yourself before scrolling down.

###### My Solution

```javascript
function lineLength(number) {
  let string = '';
  for (let index = 1; index <= number; index += 1) {
    string += index;
  }

  return string.length;
}

function generatePattern(nStars) {
  let stars = '*'.repeat(lineLength(nStars));
  let starsArray = stars.split('');

  for (let index = 1; index <= nStars; index += 1) {
    starsArray[index - 1] = String(index);
    while (starsArray.join('').length > stars.length) {
      starsArray.pop();
    }
    console.log(starsArray.join(''));
  }
}
```

###### LS Solution

```javascript
function generatePattern(nStars) {
  let lastRowString = '';
  
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }
  
  let width = lastRowString.length;
  
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }
    
    let numberOfStars = width - string.length;
    for (let count = 1; coount <= numberOfStars; count += 1) {
      string += '*';
    }
    
    console.log(string);
  }
}
```

---

# Index of Substring

Write two functions that each take two strings as arguments. Their expected behaviors are as follows:  

* The `indexOf` function searches for the first instance of a substring in `firstString` that matches the string `secondString`, and returns the index of the character where that substring begins.
* The `lastIndexOf` function searches for the last instance of a substring in `firstString` that matches the string `secondString`, and returns the index of the character where that substring begins.  

###### Examples

```javascript
function indexOf(firstString, secondString) {
  // statements
}

function lastIndexOf(firstString, secondString) {
  // statements
}

indexOf('Some strings', 's');											// 5
indexOf('Blue Whale', 'Whale');										// 5
indexOf('Blue Whale', 'Blute');										// -1
indexOf('Blue Whale', 'leB');											// -1

lastIndexOf('Some strings', 's');									// 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');	// 19
lastIndexOf('Blue Whale, Killer Whale', 'all');		// -1
```

You may use the square brackets (`[]`) to access a character by index (as shown below), and the `length` property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.  

```javascript
'hello'[0];			// "h"
'hello'[4];			// "o"
```

###### My Solution

##### Algorithm:

* Find the length of the `firstString` and that of the `secondString`.
* Create a function that will return an array of substrings of the `firstString` that have the same length as the `secondString`.
* Starting at 0, loop through each index of the `firstString` looking for matches with the `secondString`. The group of characters used for comparison must be the same length as that of the `secondString`.
* Record the index number where the first match occurs.

##### Code:

```javascript
function subString(string, subStringLength) {
  let subStrings = [];
  let numberOfSubStrings = string.length - subStringLength;

  for (let index = 0; index <= numberOfSubStrings; index += 1) {
    let subString = '';

    for (let index2 = index; index2 <= ((subStringLength + index) - 1); index2 += 1) {
      subString += string[index2];
    }

    subStrings.push(subString);
  }

  return subStrings;
}


function indexOf(firstString, secondString) {
  let resultIndex = -1;
  let subStrings = subString(firstString, secondString.length);

  for (let index = 0; index <= (subStrings.length - 1); index += 1) {
    if (subStrings[index] === secondString) {
      resultIndex = index;
      break;
    }
  }

  return resultIndex;
}

function lastIndexOf(firstString, secondString) {
  let resultIndex = -1;
  let subStrings = subString(firstString, secondString.length);

  for (let index = 0; index <= (subStrings.length - 1); index += 1) {
    if (subStrings[index] === secondString) {
      resultIndex = index;
    }
  }

  return resultIndex;
}
```

###### LS Solution

```javascript
function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;
  
  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;
    
    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }
    
    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }
  
  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = limit; indexFirst >= 0; indexFirst -= 1) {
    let matchCount = 0;

    for (let indexSecond = 0; indexSecond < secondString.length; indexSecond += 1) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}
```

---

# Trimming Spaces

Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.  

###### Example

```javascript
trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
```

You may use the square brackets (`[]`) to access a character by index (as shown below), and the `length` property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.  

```javascript
'hello'[0];       // "h"
'hello'[4];       // "o"
```

###### My Solution

##### Algorithm

* Convert to array first.
* Start from the front of the array and remove all whitespaces until a non-whitespace character is reached.
* Then do the same thing, but starting from the end of the array.
* Join the array.
* Find the first character index and the last character index.

##### Function

```javascript
function trim(text) {

  let firstIndex;
  let lastIndex;

  let limit = text.length - 1;

  for (let index = 0; index <= limit; index += 1) {
    if (text[index] !== ' ') {
      firstIndex = index;
      break;
    }
  }

  for (let index = limit; index >= 0; index -= 1) {
    if (text[index] !== ' ') {
      lastIndex = index;
      break;
    }
  }

  let strippedText = '';

  for (let index = firstIndex; index <= lastIndex; index += 1) {
    strippedText += text[index];
  }

  return strippedText;
}
```

###### LS Solution

```javascript
function trim(string) {
  let trimmed = trimLeft(string);
  trimmed = trimRight(trimmed);
  
  return trimmed;
}

function trimLeft(string) {
  let newString = '';
  let copyMode = false;
  
  for (let index = 0; index < string.length; index += 1) {
    if(string[index] !== ' ') {
      copyMode = true;
    }
    
    if (copyMode) {
      newString += string[index];
    }
  }
  
  return newString;
}

function trimRight(string) {
  let newString = '';
  let copyMode = false;
  
  for (let index = string.length - 1; index >= 0; index -= 1) {
    if (string[index] !== ' ') {
      copyMode = true;
    }
    
    if (copyMode) {
      newString = string[index] + newString;
    }
  }
  
  return newString;
}
```

---

# Splitting a String

Write a function that takes two arguments:

1. a string to be split
2. a delimiter character

The function logs the split strings to the console as shown below:

###### Examples

```javascript
function splitString(string, delimiter) {
  // ...
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
// (this is a blank line)
// hello
```

You may use the square brackets (`[]`) to access a character by index (as shown below), and the `length` property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.  

```javascript
'hello'[0]; 		// "h"
'hello'[4]; 		// "o"
```

###### My Solution

```javascript
function splitString(string, delimiter) {
  if (delimiter === '') {
    let subStrings = [];

    for (let index = 0; index < string.length; index += 1) {
      subStrings.push(string[index]);
    }

    for (let index = 0; index < subStrings.length; index += 1) {
      console.log(subStrings[index]);
    }
  } else if (delimiter) {
    let subStrings = [];
    let subString = '';

    for (let index = 0; index < string.length; index += 1) {
      if (string[index] !== delimiter) {
        subString += string[index];

        if (index === string.length - 1) {
          subStrings.push(subString);
        }
      } else {
        subStrings.push(subString);
        subString = '';
      }
    }

    for (let index = 0; index < subStrings.length; index += 1) {
      console.log(subStrings[index]);
    }
  } else {
    console.log('ERROR: No delimiter');
  }
}
```

###### LS Solution

```javascript
function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  let tempString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === delimiter) {
      console.log(tempString);
      tempString = '';
    } else if (delimiter === '') {
      console.log(string[index]);
    } else {
      tempString += string[index];
    }
  }
  
  if (tempString) {
    console.log(tempString);
  }
}
```

---

# Repeating Strings

Implement a function that takes a string and a number `times` as arguments. The function should return the string repeated `times` number of times. If `times` is not a number, return `undefined`. If it is a negative number, return `undefined` also. If `times` is `0`, return an empty string. You may ignore the possibility that `times` is a number that isn't an integer.  

```javascript
function repeat(string, times) {
  // …
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined
```

You may concatenate string, but you may not use any other properties or methods from JavaScript's built-in String class.

###### My Solution

```javascript
function repeat(string, times) {
  let repeatedString = undefined;

  if (typeof(times) === 'number' && times >= 0) {
    repeatedString = '';

    for (let index = 0; index < times; index += 1) {
      repeatedString += string;
    }
  }

  console.log(repeatedString);
}
```

###### LS Solution

```javascript
const isCount = value => Number.isInteger(value) && value >= 0;

function repeat(string, times) {
  if (!isCount(times)) {
    return undefined;
  }
  
  let repeated = '';
  for (let counter = 0; counter < times; counter += 1) {
    repeated += string;
  }
  
  return repeated;
}
```

---

# String StartsWith

Implement a function that determines whether a string begins with another string. If it does, the function should return `true`, or `false` otherwise.  

###### Examples

```javascript
function startsWith(string, searchString) {
  // ...
}

let str = 'We put comprehension and mastery above all else';
startsWith(str, 'We');							// true
startsWith(str, 'We put');					// true
startsWith(str, '');								// true
startsWith(str, 'put');							// false

let longerString = 'We put comprehension and mastery above all else!';
startsWith(str, longerString);			// false
```

You may use the square brackets (`[]`) to access a character by index (as shown below), and the `length` property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.  

```javascript
'hello'[0];		// "h"
'hello'[4];		// "o"
```

###### My Solution

##### Algorithm

* If `searchString` is longer than `string` we can return `false` right away.
* Otherwise, we will need to loop through each character of the `searchString` and compare it to the corresponding character of the original `string`.
* If ever the compared characters from each string are not identical then we can immediately return `false`.
* Otherwise, we return `true`.

##### Function

```javascript
function startsWith(string, searchString) {
  if (string.length < searchString.length) {
    return false;
  } else {
    for (let index = 0; index < searchString.length; index += 1) {
      if (string[index] !== searchString[index]) {
        return false;
      }
    }

    return true;
  }
}
```

###### LS Solution

```javascript
function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index += 1) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }
  
  return true;
}
```

---

# Converting Strings to Lower Case

Write a function that returns a string converted to lowercase.  

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the [ASCII table](http://www.asciitable.com/), add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the `String.fromCharCode` and the `String.charCodeAt` methods for these operations. For example:

```javascript
let string = 'A';
let asciiNumeric = string.charCodeAt(0);				// 65
let asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase
```

######  Examples

```javascript
function toLowerCase(string) {
  // ...
}

toLowerCase('ALPHABET');		// "alphabet"
toLowerCase('123');					// "123"
toLowerCase('abcDEF');			// "abcdef"
```

You may use the square brackets (`[]`) to access a character by index (as shown below), and the `length` property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.  

```javascript
'hello'[0]; 	// "h"
'hello'[4];		// "o"
```

###### My Solution

```javascript
function toLowerCase(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let asciiNumeric = string[index].charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
    }

    newString += String.fromCharCode(asciiNumeric);
  }

  return newString;
}
```

Or...

```javascript
function toLowerCase(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    let asciiNumeric = string[index].charCodeAt(0);
    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
      newString += String.fromCharCode(asciiNumeric);
    } else {
      newString += string[index];
    }
  }
}
```

###### LS Solution

```javascript
function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let newString = '';
  
  for (let index = 0; index < string.length; index += 1) {
    let charCode = string.charCodeAt(index);
    
    if (string[index] >= 'A' && string[index] <= 'Z') {
      charCode += CONVERSION_OFFSET;
    }
    
    newString += String.fromCharCode(charCode);
  }
  
  return newString;
}
```

---

# Substring (1)

Write a function that returns a substring of a string based on a starting index and length.  

###### Examples

```javascript
function substr(string, start, length) {
  // ...
}

let string = 'hello world';

substr(string, 2, 4);				// "llo "
substr(string, -3, 2);			// "rl"
substr(string, 8, 20);			// "rld"
substr(string, 0, -20);			// ""
substr(string, 0, 0);				// ""
```

* The `start` argument is the starting index. If negative, treat it as `strLength + start` where `strLength` is the length of the string. For example, if `start` is -3, treat it as `strLength - 3`.
* The `length` argument is the maximum length of the desired substring. If `length` exceeds the number character available, just use the available characters.  

You may use the square brackets (`[]`) to access a character by index (as shown below), and the `length` property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.

###### My Solution

```javascript
function substr(string, start, length) {
  let subString = '';
  
  if (start < 0) {
    let startIndex = string.length + start;

    if (startIndex + length <= string.length) {
      limit = startIndex + length;
    } else {
      limit = string.length;
    }

    for (let index = startIndex; index < limit; index += 1) {
      subString += string[index];
    }
  } else {
    let limit;

    if (start + length <= string.length) {
      limit = start + length;
    } else {
      limit = string.length;
    }

    for (let index = start; index < limit; index += 1) {
      subString += string[index];
    }
  }
  
  return subString;
}
```

###### LS Solution

```javascript
function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }
  
  let newString = '';
  for (let counter = 0; counter < length; counter += 1) {
    let index = start + counter;
    
    if (string[index] === undefined) {
      break;
    }
    
    newString += string[index];
  }
  
  return newString;
}
```

---

# Substring (2)

This practice problem is similar to the previous one. This time though, both arguments are indices of the provided string. The following rules apply:

* If both `start` and `end` are positive integers, `start` is less than `end`, and both are within the boundary of the string, return the substring from the `start` index (inclusive), to the `end` index (NOT inclusive).
* If the value of `start` is greater than `end`, swap the values of the two, then return the substring as described above.
* If `start` is equal to `end`, return an empty string.
* If `end` is omitted, the `end` variable inside the function is `undefined`. Return the substring starting at position `start` up through and encluding the end of the string.
* If either `start` or `end` is less than 0 or NaN, treat it as 0.
* If either `start` or `end` is greater than the length of the string, treat it as equal to the string length.

###### Examples

```javascript
function substring(string, start, end) {
  // ...
}

let string = 'hello world';

substring(string, 2, 4);		// "11"
substring(string, 4, 2);		// "11"
substring(string, 0, -1);		// ""
substring(string, 2);				// "llo world"
substring(string, 'a');			// "hello world"
substring(string, 8, 20);		// "rld"
```

###### My Solution

```javascript
function sanitizeInput(number, stringLength) {
  let newNumber;

  if (number === undefined || number > stringLength) {
    newNumber = stringLength;
  } else if (number < 0 || String(Number(number)) === 'NaN') {
    newNumber = 0;
  } else {
    newNumber = number;
  }

  return newNumber;
}

function substring(string, start, end) {
  start = sanitizeInput(start, string.length);
  end = sanitizeInput(end, string.length);

  let subString = '';

  if (start < end) {
    for (let index = start; index < end; index += 1) {
      subString += string[index];
    }
  } else if (start > end) {
    for (let index = end; index < start; index += 1) {
      subString += string[index];
    }
  } else {
    return subString;
  }

  return subString;
}
```

###### LS Solution

```javascript
function substring(string, start, end) {
  if (end === undefined) {
    end = string.length;
  }
  
  if (start < 0 || Number.isNaN(start)) {
    start = 0;
  }
  
  if (end < 0 || Number.isNaN(end)) {
    end = 0;
  }
  
  if (start > end) {
    [start, end] = [end, start];
  }
  
  if (start > string.length) {
    start = string.length;
  }
  
  if (end > string.length) {
    end = string.length;
  }
  
  let newString = '';
  for (let index = start; index < end; index += 1) {
    newString += string[index];
  }
  
  return newString;
}
```

---

# Code Review: Rot13 Cipher

_Rot13_ ("rotate by 13 places") is letter-substitution cipher that translates a String into a new String:  

For each character in the original String:  

* If the character is a letter in the modern English alphabet, change it to the character 13 positions later in the alphabet. Thus, `a` becomes `n`. If you reach the end of the alphabet, return to the beginning. Thus, `o` becomes `b`.
* Letter transformations preserve case. `A` becomes `N` while `a` becomes `n`.
* Don't modify characters that are not letters.

Write a Function, `rot13`, that takes a String and returns that String transformed by the rot13 cipher.

```javascript
console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
```

It's worth noting that rot13 applied twice results in the original string:

```javascript
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
Teachers open the door, but you must enter by yourself.
```

This happens since there are 26 characters in the modern English alphabet: 2 sets of 13.

###### My Solution

```javascript
function rot13(string) {
  let newString = '';

  const Rot13Key = 13;
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz \
                    ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let index = 0; index < string.length; index += 1) {
    let currentChar = string[index];
    let alphabetIndex = ALPHABET.indexOf(currentChar);

    if (alphabetIndex >= 0) {
      newString += ALPHABET[alphabetIndex + Rot13Key];
    } else {
      newString += currentChar;
    }
  }

  return newString;
}
```

###### LS Solution

```javascript
function rot13(text) {
  let transformed = '';
  for (let index = 0; index < text.length; index += 1) {
    transformed += rot13Character(text[index]);
  }
  
  return transformed;
}

function rot13Character(char) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let isUpperCase = false;
  let initialIndex = ALPHABET.indexOf(char);
  
  // no match might mean that we are dealing with an uppercase letter
  if (initialIndex === -1) {
    initialIndex = ALPHABET.indexOf(char.toLowerCase());
    isUpperCase = true;
  }
  
  // if there is still no match, it's not a character between a-z
  if (initialIndex === -1) {
    return char;
  }
  
  let shiftedIndex = (initialIndex + 13) % 26;
  let transformed = ALPHABET[shiftedIndex];
  
  if (isUpperCase) {
    transformed = transformed.toUpperCase();
  }
  
  return transformed;
}
```

---

