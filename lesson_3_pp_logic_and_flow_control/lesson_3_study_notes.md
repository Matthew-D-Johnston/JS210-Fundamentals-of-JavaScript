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

