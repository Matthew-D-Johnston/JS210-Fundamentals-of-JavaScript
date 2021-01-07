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

## 4. Strict Mode

