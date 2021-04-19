##### JS210 - Small Problems > Medium Problems 1

---

## Stack Machine Interpretation

**Problem Description:**

A *stack* is a list of values that grows and shrinks dynamically. A stack may be implemented as an `Array` that uses two `Array` methods: `Array.prototype.push` and `Array.prototype.pop`.  

A *stack-and-register* programming language is a language that uses a stack of values. Each operation in the language operates on a *register*, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.  

Consider a `MULT` operation in a stack-and-register language. It removes the value from the `stack`, multiplies the removed `stack` value with the `register` value, , then stores the result back in the `register`. For example, if we start with a `stack` of `[3, 6, 4]` (where `4` is the topmost item in the `stack`) and a `register` value of `7`, the `MULT` operation mutates the `stack` to `[3, 6]` (the `4` is removed), and the result of the multiplication, `28`, is left in the `register`. If we do another `MULT` at this point, the `stack` is mutated to `[3]`, and the `register` is left with the value `168`.  

Write a function that implements a miniature stack-and-register-based programming language that has the following *commands* (also called *operations* or *tokens*):

- `n` : Place a value, `n`, in the `register`. Do not modify the `stack`.
- `PUSH` : Push the `register` value onto the `stack`. Leave the value in the `register`.
- `ADD` : Pop a value from the `stack` and add it to the `register` value, storing the result in the `register`.
- `SUB` : Pop a value from the `stack` and subtract it from the `register` value, storing the result in the `register`.
- `MULT` : Pop a value from the `stack` and multiply it by the `register` value, storing the result in the `register`.
- `DIV` : Pop a value from the stack and divide the register value by the popped stack value, storing the *integer* result back in the register.
- `REMAINDER` : Pop a value from the stack and divide the register value by the popped stack value, storing the *integer* remainder of the division back in the register.
- `POP` : Remove the topmost item from the `stack` and place it in the `register`.
- `PRINT` : Print the `register` value.

All operations are *integer* operations (which is only important with `DIV` and `REMAINDER`).  

*Programs* will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the `stack`, and they will not contain any unknown *tokens*.  

Initialize the `stack` and `register` to the values `[]` and `0`, respectively.  

**Input/Output:**

* Inputs: a string of commands.
* Outputs: log integer values to the console based on the input commands.

**Definitions and Rules (explicit and implicit):**

* Stack: an array of values, which are there because they have been pushed from the register, and they are removed for certain commands. The stack is mutable.
* Register: the current value. The starting value of the register is `0`.
* Command: an order to perform on operation on either the register, the stack, or both. The commands come in a format where they are delimited by spaces.
* Only dealing with integer values (important for the `DIV` and `REMAINDER` commands).

**Mental Model:**

The program will take a string of commands and must parse the input into individual commands. The commands are delimited by spaces. Starting with the first command, perform the operation commanded. This will mean operating on the register or both the register and the stack. There are four basic categories of commands: 1) `n` or value, which is just placing a value in the register (stack is not modified); 2) `PUSH` and `POP`, which either push the value from the register to the top of the stack or pop the topmost stack value and put it in the register; 3) some arithmetic operation that uses both the register value and the topmost value of the stack and places the resulting value in the register and removes the topmost value from the stack; 4) `PRINT`, which logs the current value of the register to the console.

---

### Examples / Test Cases

```javascript
minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
```

---

### Data Structure

**Input**

* A string representing a list of commands.

**Output**

* Log the current value of the register whenever the `PRINT` command is invoked.

**Intermediate Data Structures:**

* The register will be a number.
* The stack we will represent as an array.
* We might want to transform the input commands into an array of individual strings to make it easier to iterate over.
* Perhaps we could create some different functions corresponding to our different command categories. Although, perhaps the only one we would really care to do this for is the arithmetic operations. It would take a command argument, the register argument, and the topmost value of the stack argument.

---

### Algorithm

* Declare a `commands` variable and initialize it with the value returned from calling `split(' ')` on the input string.
* Declare a `register` variable and initialize it with the value of `0`.
* Declare a `stack` variable and initialize it with the value `[]`.
* Now iterate over the `commands` array using the `forEach` method.
* Within the loop, we will need a number of conditional statements.
  * 1) If the command contains an integer;
    * convert the string version of the integer into a number using `parseInt`.
    * assign the integer value to the `register` variable.
  * 2) If the command is `POP`;
    * pop the topmost value from the stack and store it in the register.
  * 3) If the command is or`PUSH`
    * push the value stored in the `register` to the top of the `stack`.
  * 4) If the command is an arithmetic operation.
    * pop the topmost value from the stack.
    * pass the command, `register` value, and popped value from `stack` to an `arithmeticOperation` functiont that we need to define.
    * Store the return value from the operation in the `register`.
  * 5) If the command is `PRINT`
    * `console.log(register)`.
* For the `arithmeticOperation(registerValue, stackValue, operation)` function we need to handle five different cases:
  * `ADD`: simply add the two values.
  * `SUB`: subtract the `stackValue` from the `registerValue`.
  * `MULT`: multiply the two values.
  * `DIV`: divide the `registerValue` by the `stackValue`.
  * `REMAINDER`: divide the `registerValue` by the `stackValue` and return the integer remainder of the division.

---

### Code

```javascript
function minilang(commands) {
  let register = 0;
  let stack = [];

  commands.split(' ').forEach(command => {
    if (/[0-9]/.test(command)) {
      register = parseInt(command, 10);
    } else if (command === 'POP') {
      let poppedValue = stack.pop();
      if (poppedValue !== undefined) {
        register = poppedValue;
      }
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (/(ADD|SUB|MULT|DIV|REMAINDER)/.test(command)) {
      let poppedValue = stack.pop();
      register = arithmeticOperation(register, poppedValue, command);
    } else if (command === 'PRINT') {
      console.log(register);
    }
  });
}

function arithmeticOperation(registerValue, stackValue, operation) {
  switch (operation) {
    case 'ADD':
      return registerValue + stackValue;
    case 'SUB':
      return registerValue - stackValue;
    case 'MULT':
      return registerValue * stackValue;
    case 'DIV':
      return Math.round(registerValue / stackValue);
    case 'REMAINDER':
      return registerValue % stackValue;
  }
}
```

---

### LS Solution

##### Solution

```javascript
function minilang(program) {
  let register = 0;
  const stack = [];

  program.split(' ').forEach(token => {
    switch (token) {
      case 'ADD':
        register += stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register = Math.floor(register % stack.pop());
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        register = parseInt(token, 10);
    }
  });
}
```

###### Discussion

This problem may seem daunting because the explanation of the stack machine is quite long, but the implementation is relatively straightforward.  

The solution starts off by initializing the `stack` and `register` to `[]` and `0`, respectively. Next, the solution loops through each `token` of the `program` argument. The solution gets the list of `token`s by splitting the `program` using a space (`' '`) as a separator. The solution then passes each `token` to the `switch` statement, which performs the corresponding processing — as described in the problem specifications — on the value of each `token`.  

Notice that for the `DIV` and `REMAINDER` operations, the solution uses the `Math.floor` method to ensure that the resulting value is always an integer.  

###### Further Exploration

Refactor the `minilang` function to include some error handling. In particular, the function should detect and report empty `stack` conditions, and invalid `token`s in the `program`. Ideally, the function should return an error message if an error occurs, or `undefined` if the `program` runs successfully.

##### My Solution

```javascript
const ValidCommands = ['POP', 'PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'PRINT'];

function minilang(commandList) {
  let commands = commandList.split(' ');
  let register = 0;
  let stack = [];

  for (let index = 0; index < commands.length; index += 1) {
    let command = commands[index];
    if (!validCommand(command)) {
      return `Error: invalid command ${command}.`;
    } else if (/[0-9]/.test(command)) {
      register = parseInt(command, 10);
    } else if (command === 'POP') {
      let poppedValue = stack.pop();
      if (poppedValue === undefined) {
        return `Error: empty stack.`;
      }
      register = poppedValue;
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (/(ADD|SUB|MULT|DIV|REMAINDER)/.test(command)) {
      let poppedValue = stack.pop();
      register = arithmeticOperation(register, poppedValue, command);
    } else if (command === 'PRINT') {
      console.log(register);
    }
  }
}

function arithmeticOperation(registerValue, stackValue, operation) {
  switch (operation) {
    case 'ADD':
      return registerValue + stackValue;
    case 'SUB':
      return registerValue - stackValue;
    case 'MULT':
      return registerValue * stackValue;
    case 'DIV':
      return Math.round(registerValue / stackValue);
    case 'REMAINDER':
      return registerValue % stackValue;
  }
}

function validCommand(command) {
  return /^[+-]?[0-9]/.test(command) || ValidCommands.includes(command);
}
```

