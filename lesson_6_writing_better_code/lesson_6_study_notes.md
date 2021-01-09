##### JS210 Fundamentals of JavaScript for Programmers > Writing Better Code

---

## 3. JavaScript Style Guide

The flexibility of many programming languages can be both a benefit and a liability. A flexible language provides a developer with a high degree of control while writing a program. However, that same degree of control means that another programmer must first understand what is happening before he or she can work with the code.

A process called "code linting" has emerged to help avoid the trickier, more dangerous, or less readable code. Just as you can remove lint from a freshly laundered shirt to keep it clean and presentable, code linting tools help a developer keep their code clean and presentable. They do this by identifying stylistic, syntactic, and procedural errors that deserve attention.

Code linting tools identify potential issues within your code. However, the developer must decide whether and how to change the code. We'll work with code linting tools in a future course.

As useful as code linting tools are, ultimately, they only identify potential issues in existing code. To avoid writing problem code from the start, though, you need developer education. Software teams and projects often adopt a "style guide" that describes how they wish to write code with a specific programming language. The [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) offers widely-adopted style suggestions for JavaScript code.

### Problems

Identify the code that violates the Airbnb JavaScript style guide, and update the code to fix the issues you identify. There may be more than one issue in each code snippet.

1. 

   ```javascript
   let title = "The Three-Body Problem";
   ```

   ###### My Solution

   Violations:

   * Used double quotes when single quotes should be used for string values.

   ###### LS Solution

   The style guide recommends using single quotes (`'`) with Strings, unless the String contains single quotes:

   ```javascript
   let title = 'The Three-Body Problem';
   ```

2. 

   ```javascript
   let title = 'The Three-Body Problem',
       author = 'Cixin Liu',
       page_count = 400;
   ```

   ###### My Solution

   Violations:

   * The code use just a single `let` statement to declare three variables and assign them, while the style guide instructs use of "one `const` or `let` declaration per variable or assignment."
   * The code uses an underscore in the last variable name, `page_count`; the style guide says to "camelCase when naming objects, functions, and instances."

   ```javascript
   let title = 'The Three-Body Problem.';
   let author = 'Cixin Liu';
   let pageCount = 400;
   ```

   ###### LS Solution

   The style guide recommends one `let` declaration per variable. Also, variable names should use cameCase:

   ```javascript
   let title = 'The Three-Body Problem';
   let author = 'Cixin Liu';
   let pageCount = 400;
   ```

3. 

   ```javascript
   let completed = lastPageRead == 400;
   ```

   ###### My Solution

   Violations:

   * The code uses the `==` equality operator, which employs type coercion. The style guide says to use `===` over `==`.

   ###### LS Solution

   The style guide recommends that you always use the strict equality operators:

   ```javascript
   let completed = lastPageRead === 400;
   ```

4. 

   ```javascript
   if (finishedBook())
     console.log('You have finished reading this book');
   ```

   ###### My Solution

   Violations:

   * The code does not use curly braces, `{}`, for this multiline block; the style guide indicates that it multiline blocks should employ the use of curly braces.

   ```javascript
   if (finishedBook()) {
     console.log('You have finished reading this book');
   }
   ```

   ###### LS Solution

   The style guide recommends using braces around multi-line `if` statements:  

   ```javascript
   if (finishedBook()) console.log('You have finished reading this book');
   
   // or
   
   if (finishedBook()) {
     console.log('You have finished reading this book');
   }
   ```

5. Fifth

   ```javascript
   function read(pages) {
     console.log('You started reading.');
     for (let page=0; page<pages; page += 1) {
       			let message = 'You read page '+page;
       			console.log(message);
     }	
   }
   
   read(400);
   ```

   ###### My Solution

   Violations:

   * There are no white spaces between operators (e.g. `page<pages`); the style guide indicates there should be a single space surrounding operators.
   * The statements within the function and the `for` loop use more identation than necessary; the style guide suggests using soft tabs set to 2 spaces.

   ```javascript
   function read(pages) {
     console.log('You started reading.');
     for (let page = 0; page < pages; page += 1) {
       let message = 'You read page ' + page;
       console.log(message);
     }
   }
   
   read(400);
   ```

   ###### LS Solution

   The style guide recommends using two spaces to indent code, and surrounding operators with spaces. This is especially helpful to new JavaScript developers, as it clearly shows what happens when JavaScript hoists the declarations. Another thing it recommends is to use explicit string coercion, and as such, the `page` variable is coerced to a string. The style guide recommends avoiding the `++` and `--` operators. Finally, the guide also recommends using named function expressions instead of function declarations:

   ```javascript
   let read = function read(pages) {
     console.log('You started reading.');
     for (let page = 0; page < pages; page += 1) {
       let message = 'You read page ' + String(page);
       console.log(message);
     }
   }
   
   read(400);
   ```

---

## ES Lint

[ESLint](https://eslint.org/) is a static code analyzer for JavaScript; it analyzes your code and offers advice about style, format, coding practices, possible errors, and other problems. Using ESLint will help you adhere to the rules of your preferred style guide. It's a modular framework that uses a pluggable architecture to insert enforcement rules.

### Linting and Best Practices

ESLint is what developers call a **linter**. Linters inspect your code for potential errors and "code smells," and for adherence to the best practice determined by developers over the years. Linting isn't foolproof, but it can serve as the first line of defense against some of the most common pitfalls in a language (and JavaScript has its share of those). For instance, the configuration we use disallows using assignments as a conditional expression in an `if` statement:

Copy Code

```js
if (result = someFunction()) { // this is legal, but might be a mistake!
  ...
}
```

Some of the most crucial rules in the best practice category apply to function length and complexity. A function that has many lines of code or that has complicated logic can be difficult to understand, maintain, and update. Our ESLint configuration defines generous limits for the rules that check for length and complexity. In most cases, the complaints that ESLint issues in this area are a strong indication that your code leaves room for improvement. You should strive to simplify and shorten your code when you see these complaints. You may decide you don't need to fix something, but it's worth giving every such complaint due consideration. In the long run, try to write simpler code and use smaller functions; it will improve your code quality.

### Installing and Configuring ESLint

ESLint is a Node package, so you install it like any other Node package. While it is possible to install it globally (with the `-g` option), the ESLint team does not recommend it. Therefore, you should install ESLint and all related packages locally as a development dependency:

```terminal
$ npm install eslint eslint-cli babel-eslint --save-dev
```

Note that you **must** install these 3 packages for every project where you need to use ESLint.

Once you've successfully installed ESLint, you should have an `eslint` command available from the command line. Check that your system finds the correct version:

```terminal
$ npx eslint -v
v7.3.1
```

The `eslint` command takes a JavaScript file as an argument. For example, if you have a JavaScript file called `test.js`, you can run ESLint against the file like this:

The following code won't work since we don't yet have a `test.js` file.

```terminal
$ npx eslint test.js
```

### Configuring ESLint

Before we can actually test ESLint, we need to configure it. The rules governing ESLint configuration are somewhat complicated, so we're going to simplify the discussion. If you want all the gory details, you can learn more on the [Configuring ESLint page](https://eslint.org/docs/user-guide/configuring).

For our purposes, we'll use the YAML configuration format since it's easier to read and type. You should place the information in a file named `.eslintrc.yml`. When you run ESLint, it looks for this file (and others) in the current directory or the closest parent directory that contains a usable configuration file, but it **does not look in your home directory**. The easiest way to leverage this search is to put your default `.eslintrc.yml` file in a directory that contains all of your projects as subdirectories. Alternatively, you can put the file in each project directory and customize it as needed.

In practice, nested configurations are allowed, but can be confusing. Put the `.eslintrc.yml` file in your top-level projects directory or put it in each individual project directory. Don't put it in both.

Use the following `.eslintrc.yml` file when working on Launch School projects; it's the file we expect you to use for code reviews and assessments. We may check whether your code passes ESLint checks. Note that these rules are not an exact match for the rules described in the AirBNB Style Guide recommended in our courses. We've made some adjustments that either relax AirBNB rules, or that add additional restrictions not covered by AirBNB. For instance, the Airbnb guide calls for not using the `console` object. Since most of your programs here at Launch School rely on the `console` object, we've disabled this rule.

```yaml
# Last update: 05 Oct 2020
root: true
parser: babel-eslint
parserOptions:
  ecmaVersion: 6
  ecmaFeatures:
    impliedStrict: true
env:
  browser: true
  es6: true
  jest: true
  jquery: true
  node: true
extends:
  - eslint:recommended
globals:
  alert: true
  define: true
  document: true
  global: true
  location: true
  require: true
  window: true
  Handlebars: true
rules:
  accessor-pairs: error
  array-callback-return: error
  arrow-spacing: error
  block-scoped-var: error
  brace-style:
    - error
    - 1tbs
    - allowSingleLine: true
  camelcase: error
  complexity: error
  consistent-return: error
  constructor-super: error
  eqeqeq: error
  id-length:
    - error
    - exceptions:
      - _
      - a
      - b
      - x
      - y
      - z
      min: 2
      properties: never
  indent:
    - error
    - 2
    - SwitchCase: 1
  keyword-spacing: error
  linebreak-style: error
  max-depth: error
  max-len:
    - error
    - code: 80
      tabWidth: 2
      ignoreRegExpLiterals: false
      ignoreStrings: true
      ignoreTemplateLiterals: true
      ignoreTrailingComments: true
      ignoreUrls: true
  max-lines-per-function:
    - error
    - max: 20
      skipBlankLines: true
      skipComments: true
  max-nested-callbacks:
    - error
    - max: 4
  max-statements:
    - error
    - max: 15
    - ignoreTopLevelFunctions: true
  max-statements-per-line: error
  new-parens: error
  no-array-constructor: error
  no-async-promise-executor: error
  no-bitwise: error
  no-buffer-constructor: error
  no-caller: error
  no-class-assign: error
  no-confusing-arrow:
    - error
    - allowParens: true
  no-console: 'off'
  no-const-assign: error
  no-constant-condition:
    - error
    - checkLoops: false
  no-debugger: 'off'
  no-dupe-class-members: error
  no-duplicate-imports: error
  no-eq-null: error
  no-eval: error
  no-extend-native: error
  no-implicit-globals: error
  no-implied-eval: error
  no-inner-declarations:
    - error
    - both
  no-iterator: error
  no-label-var: error
  no-lonely-if: error
  no-loop-func: error
  no-misleading-character-class: error
  no-mixed-operators: error
  no-multi-assign: error
  no-multi-str: error
  no-multiple-empty-lines: error
  no-nested-ternary: error
  no-new: error
  no-new-func: error
  no-new-object: error
  no-new-require: error
  no-new-symbol: error
  no-new-wrappers: error
  no-octal-escape: error
  no-process-env: error
  no-process-exit: error
  no-prototype-builtins: 'off'
  no-restricted-syntax:
    - error
    - message: Do not use `with` statement.
      selector: WithStatement
  no-return-assign: error
  no-return-await: error
  no-script-url: error
  no-self-assign:
    - error
    - props: true
  no-self-compare: error
  no-sequences: error
  no-shadow-restricted-names: error
  no-tabs: error
  no-template-curly-in-string: error
  no-this-before-super: error
  no-throw-literal: error
  no-trailing-spaces: error
  no-unmodified-loop-condition: error
  no-unneeded-ternary: error
  no-unused-expressions: error
  no-unused-vars:
    - error
    - args: all
      argsIgnorePattern: "^_"
      caughtErrors: all
      caughtErrorsIgnorePattern: "^_"
      vars: local
  no-use-before-define:
    - error
    - functions: false
  no-useless-call: error
  no-useless-catch: error
  no-useless-computed-key: error
  no-useless-rename: error
  no-useless-return: error
  no-with: error
  nonblock-statement-body-position: error
  one-var-declaration-per-line: error
  operator-assignment: error
  prefer-promise-reject-errors: error
  quote-props:
    - error
    - consistent-as-needed
  radix: error
  require-await: error
  require-yield: error
  semi:
    - error
    - always
    - omitLastInOneLineBlock: true
  semi-spacing: error
  semi-style: error
  space-before-blocks: error
  space-infix-ops: error
  space-unary-ops:
    - error
    - words: true
      nonwords: false
  vars-on-top: error
```

### Quick Tutorial

With configuration out of the way, we're ready to see ESLint in action with a simple program. Create a file, and name it `hello.js`. The contents of this file should contain a single line:

```javascript
console.log(helloWorld)
```

Now, run ESLint on this file.

```javascript
$ npx eslint hello.js

/Users/wolfy/hello.js
  1:13  error  'helloWorld' is not defined  no-undef
  1:24  error  Missing semicolon            semi

✖ 2 problems (2 errors, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```

---

## 6. Errors

### ReferenceError

A `ReferenceError` occurs when you attempt to use a variable or function that doesn't exist.  

```javascript
a;    // Referencing a variable that doesn't exist results in a ReferenceError.
a();  // The same is true of attempting to call a function that doesn't exist.
```

### TypeError

A `TypeError` usually occurs when you try to access a property on a value that does not have any properties, such as `null`. Trying to call something that isn't a Function can also raise a `TypeError`:

```javascript
var a;      // a is declared but is empty, as it has not been set to a value.
typeof(a);  // "undefined"

a.name;     // TypeError: Cannot read property 'name' of undefined

a = 1;
a();        // TypeError: Property 'a' is not a function
```

### SyntaxError

A `SyntaxError` is special in that one usually occurs immediately after loading a JavaScript program, and before it begins to run. Unlike `ReferenceError` and `TypeError`, which are dependent upon specific variables and values encountered at runtime, JavaScript detects `SyntaxError`s solely from the text of your program.

```javascript
function ( {}                   // SyntaxError: Unexpected token (
```

There are several cases where JavaScript can throw a `SyntaxError` while a program is running. For instance, this code raises a SyntaxError at runtime.  

```javascript
JSON.parse('not really JSON');  // SyntaxError: Unexpected token i in JSON at position 0
```

There are a few other errors that can occur in a JavaScript program, including `RangeError`, `URIError`, among others; these tend to be rarer.

---

## 7. Preventing Errors

The best way to handle errors is to prevent them from happening by paying attention to where they can occur. For example, consider a naive implementation of a Function that returns the first letter of a word in lowercase:  

```javascript
function lowerInitial(word) {
  return word[0].toLowerCase();
}
```

This implementation works well with simple words:  

```javascript
lowerInitial('Joe');    // "j"
lowerInitial('Karen');  // "k"
```

However, what happens if we pass it an empty String?  

```javascript
lowerInitial('');       // TypeError: Cannot read property 'toLowerCase' of undefined
```

Errors typically occur where assumptions are made in code; here, we assume that the word always has a non-zero length (that is, it contains one or more characters). This code violates that assumption by passing an empty String to `lowerInitial`.  

An error like this halts execution of the program entirely. It's easy to think of ways that we can receive an empty string in this Function. For example, if the value comes from a form element, the user might not have entered any data. Alternatively, the data may come from a database that contains missing data.  

### Guard Clause

One way to avoid this type of error is to use a *guard clause*. A guard clause is code that guarantees data meets certain preconditions before it gets used. In `lowerInitial`, we can check whether `word` contains any characters before we try to use it:  

```javascript
function lowerInitial(word) {
  if (word.length === 0) {       // If word contains an empty String,
    return '-';                  // return a dash instead of proceeding.
  }

  return word[0].toLowerCase();  // word is guaranteed to have at least
}                                // 1 character, so word[0] never evaluates
                                 // as undefined.
```

### When To Use Guard Clauses

Guard clauses are best used when a Function can't trust that its arguments are valid. Invalid arguments can have incorrect types, structures, values, or properties. Usually, though, your program should be able to trust itself to do the right thing; you should be able to trust that it always calls its methods with valid values. For example, if you can trust that your program always calls `lowerInitial` with a non-empty String, you don't need the guard clause.  

### Detecting Edge Cases

Most error prevention work stems from examining the assumptions inherent in your code. Think about whether your program can violate your assumptions. What happens when they are? We call these situations *edge cases* because they often involve values at the extreme end of the range of possible values. In `lowerInitial`, the shortest possible String (`''`) is an edge case.  

To identify the edge cases that can break your program, start by considering the code's inputs. For a Function, these are usually the arguments. Each data type has its own set of values that can cause undesired behavior.  

For example, consider an argument that should be numeric. Will the code still work if the argument is negative or zero? Suppose you're expecting a whole number and instead receive a value with a fractional component? These are common places where a valid Number object can violate expectations in your code and cause unintentional behavior and bugs.  

In `lowerInitial`, we saw that empty Strings can be a problem if your Function doesn't expect one. There are many other types of Strings that can be troublesome, such as those that start or end with spaces, contain only spaces, or contain special characters.  

Finally, it is a good idea to think about how particular combinations of values can create unexpected conditions.  

### Planning Your Code

While you can't account for every possible permutation of arguments, it does pay to plan ahead. One good way to do this is to write out the common use cases of a new Function, and check how your Function handles them. This is a great way to identify edge cases.  

Let's say we are writing a function that inserts a new element to an Array in its proper alphabetically sorted position:

```javascript
let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', '));     // Logs "Australia, Brazil, Cuba, Senegal"
```

Let's think about some use cases; we want to ensure that `alphaInsert` can handle:

```javascript
alphaInsert([], 'Brazil');             // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia');  // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba');       // At the end of an Array
alphaInsert(['Brazil'], 'Brazil');     // Duplicate entry
```

We have only four major cases here, but more complex Functions can have many more cases. It may get to be a bit too much to handle. Instead, focus on the "happy path" -- the most basic use case(s). Then revisit your complete list of use cases, and verify that your implementation works well in each case. If a particular case fails, address it and then check the use cases again.  

Note that our list of use cases ignores the problem of invalid data types passed as arguments (for instance, passing a Number when a Function expects a String). You can check argument types when this is a real possibility, but doing so in every Function is unneeded and difficult to maintain.  

---

## 8. Catching Errors

It's not possible to prevent all errors. For example, some built-in JavaScript Functions can throw Errors, but there is no practical way to predict and avoid those errors. Consider the built-in `JSON.parse` method: this method takes a single String argument that contains some data in JSON format, and converts it to an object. If you pass a String to `JSON.parse` that isn't a valid JSON value, all `JSON.parse` can do is throw an Error:

```javascript
let data = 'not valid JSON';

JSON.parse(data);  // throws SyntaxError: Unexpected token i in JSON at position 0
```

The only way to prevent errors in `JSON.parse` is to parse the input String. That is, we need to build a method that can parse JSON Strings. However, that's what `JSON.parse` does. We surely don't want to reimplement it just to avoid errors. Thus, avoiding errors simply isn't realistic here.  

Instead of trying to avoid errors, we can just let `JSON.parse` throw a `SyntaxError`, and **catch** it with a `try/catch/finally` block. This is syntactically similar to `if/else` blocks:  

```javascript
try {
  // Do something that might fail here and throw an Error.
} catch (error) {
  // This code only runs if something in the try clause throws an Error.
  // "error" contains the Error object.
} finally {
  // This code always runs, no matter if the above code throws an Error or not.
}
```

The `finally` clause is optional; you can omit it if you don't need it, just as you can omit the `else` clause in an `if` statement.  

Let's use `try/catch/finally` to handle `JSON.parse` errors:

```javascript
function parseJSON(data) {
  let result;
  
  try {
    result = JSON.parse(data);  // Throws an Error if "data" is invalid
  } catch (e) {
    // We run this code if JSON.parse throws an Error
    // "e" contains an Error object that we can inspect and use.
    console.log('There was a', e.name, 'parsing JSON data:', e.message);
    result = null;
  } finally {
    // This code runs whether `JSON.parse` succeeds or fails.
    console.log('Finished parsing data.');
  }
  
  return result;
}

let data = 'not valid JSON';

parseJSON(data);		// Logs "There was a SyntaxError parsing JSON data:
										// 			 Unexpected token i in JSON at position 0"
										// Logs "Finished parsing data."
										// Returns nulls
```

### When to Use Try/Catch

Only use `try/catch/finally` blocks when the following conditions are both true:  

- A built-in JavaScript Function or method can throw an Error and you need to handle or prevent that Error.
- A simple guard clause is impossible or impractical to prevent the Error.

