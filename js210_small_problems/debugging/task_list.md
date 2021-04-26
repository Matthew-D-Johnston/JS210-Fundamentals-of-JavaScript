##### JS210 - Small Problems > Debugging

---

## Task List

### Problem

**Problem Description:**

We were asked to implement a task list and the following functionality:

- adding a new task
- completing a given number of existing tasks
- displaying the task list

We decided to keep things simple and model the tasks as strings. Completing a task for us simply means deleting the string from the array of tasks.

Experimenting with our code reveals that it doesn't work exactly as we expected. Find the problem and fix it.

```javascript
const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`)
  console.log('---------------------');

  for (let i = 0; i < todos.length; i++) {
    console.log(`-- ${todos[i]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();
```

---

### My Solution

The problem is that our output looks like this:

```
wash car complete!
undefined complete!
undefined complete!
3 tasks completed; 11 remaining.
ToDo list (11 tasks):
---------------------
-- undefined
-- exercise
-- buy groceries
-- balance budget
-- call plumber
-- feed fido
-- get gas
-- organize closet
-- oil change
-- dentist
-- homework
```

After outputting `'wash car complete!'`, we have two outputs that say `undefined complete!`. The reason we are getting the `undefined`s is because we are using `delete` to remove the first element from the `todos` array. While this deletes the content of the element it maintains the element as an empty element, which when called returns a value of `undefined`. We should replace the line `delete todos[0]` with `todos.splice(0, 1)` to remove the first element.

```javascript
// ... rest of code omitted for brevity
function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.splice(0, 1);														// fixed this line
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}
```

That seems to have worked! We now get the following output:

```
wash car complete!
exercise complete!
buy groceries complete!
3 tasks completed; 8 remaining.
ToDo list (8 tasks):
---------------------
-- balance budget
-- call plumber
-- feed fido
-- get gas
-- organize closet
-- oil change
-- dentist
-- homework
```

---

### LS Solution

###### Hint

Log `todos` to the console from line 19, within the `while` loop. Do you see what you expect?  

###### Solution

```javascript
function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}
```

###### Discussion

Recall that [Arrays are Objects](https://launchschool.com/lessons/0539330a/assignments/8630526d). The [`delete` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) is used to remove a property from an object. When `delete` is used to remove an array element, an empty slot remains in its place in the array. The `length` of the array remains the same, and using bracket notation with the deleted item's index will return `undefined`. *Using `delete` with an array can therefore lead to unexpected results and should generally be avoided*.  

[The `Array.prototype.shift()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) provides the behavior appropriate for our code. It removes the first element of an array, shifts the values at consecutive indexes down, and updates the length of the array.  

Another very useful method for deleting array elements is [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).  

###### Further Exploration

The default function parameter syntax on line 12 of the original code was added to JavaScript in ES2015. Check the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) if you haven't seen it before.