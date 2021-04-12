##### JS210 - Small Problems > Interpretive Problem Solving

---

## Diamonds

### Problem

**Problem Description:**

Write a function that displays a four-pointed diamond in an `n`x`n` grid, where `n` is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.  

**Definitions / Rules (explicit and implicit):**

* Four-pointed diamond: four points, one on each side of the `n` x `n` grid.
* `n` must be an odd integer (assume it is always odd).

**Input/Output:**

* Input: `n`, an odd integer, representing the width and height of the grid.
* Output: `*`s arranged in a diamond pattern. The distance from the points of the `*`s making up the diamond will be equal to `n`.

**Mental Model:**

Given an odd integer `n`, construct a diamond pattern out of `*`s. The diamond will have four points that are aligned along a vertical and horizontal axis. On either axis, the distance between the points of the diamond will be equal to the integer supplied as an argument. Between the points, `*`s will populate the inner part of the diamond. If we think of constructing the diamond by creating consecutive rows, we now that there will be `n` rows. The vertical axis will run `(n - 1) / 2` spaces from the left of the screen.

---

### Examples / Test Cases

```javascript
diamond(1);
// logs
*
```

```javascript
diamond(3);
// logs
 *
***
 *
```

```javascript
diamond(9);
// logs
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

---

### Data Structure

**Input**

* An odd integer, representing the height and width of the diamond.

**Output**

* Consecutive strings containing white spaces and `*`s.
* Each string is output to the console, the total number will be equal to the odd integer given as an argument.

**Intermediate Data Structures:**

* Use strings to construct the separate components of the diamond: a string for white spaces and a string for `*`s.
* Will need to rely on integers and being able to increment them.

---

### Algorithm

Each line will need to follow the basic procedure:

* Construct a string of an appropriate number of white spaces.
* Construct a string of an appropriate number of `*`s.
* Join these strings together.
* Output them to the console.
* Then move on to constructing the next line, which will be dependent on the number of white spaces and `*`s making up the previous line.

Let's think about how we would construct the first line using an example like `n = 5`:

* Declare a variable called `stars` and initialize it with `'*'`.
* Declare a variable called `spaces` and intitialize it with `' '.repeat(n - 1)`.
* We would then do something like this to output it to the console: `console.log(spaces + stars)`.

Now we want to think about our incrementing formula:

* We will increment `stars` by `2`.
* We will decrement `spaces` by `1`.
* We do this until the number of `stars` reaches `n`.
* Then we decrement `stars` by `2`.
* And increment `spaces` by `1`.
* We do this until the number of `stars` reaches `1`.

We may want to introduce two other variables keeping track of the total number of stars and spaces:

* At the start of the function declare a variable `numberOfStars` and initialize it with the value of `1`.
* Also declare a `numberOfSpaces` variable and initialize it with the value of `(n - 1)`.

We need to think about the type of looping algorithm we want:

* We need to first keep looping until `numberOfStars = n`.
* Then `numberOfStars` begins to decrement and we want to exit the loop after reaching the value of `1`.
* We could do one loop where we are incrementing the number stars and then move onto a second loop where decrement the number of stars.
* Or, we could implement some kind of switch variable that gets toggled when the `numberOfStars = n`.
* We know we need to output a string `n` number of times. But we can then implement the toggle switch once `numberOfStars = n`.

---

### Code

```javascript
function diamond(size) {
  let numberOfStars = 1;
  let numberOfSpaces = (size - 1) / 2;
  let incrementStars = true;

  for (let index = 1; index <= size; index += 1) {
    let stars = '*'.repeat(numberOfStars);
    let spaces = ' '.repeat(numberOfSpaces);

    console.log(spaces + stars);

    if (incrementStars) {
      numberOfStars += 2;
      numberOfSpaces -= 1;
    } else {
      numberOfStars -= 2;
      numberOfSpaces += 1;
    }

    if (numberOfStars === size) {
      incrementStars = !incrementStars;
    }
  }
}
```

---

### LS Solution

##### Understanding the Problem

- Input

  - An odd integer `n` that represents the size of the diamond
  - `n` represents the total number of rows, as well as the width of the widest row

- Output

  - The return value of the function is not significant
  - The program should print out a diamond made up of `*` characters

- **Requirements**

  - A big part of this exercise is to translate the implicit requirements of "diamond shapes" to precise and explicit requirements that can be used to solve the problem. This can be done in a few different ways, such as the one shown below:

  Using `n = 5` as an example:

  - Each row is a string of asterisks, prepended by spaces
  - The 5 rows will have `1`, `3`, `5`, `3`, and `1` asterisks
  - The 5 rows will have `2`, `1`, `0`, `1`, and `2` spaces prepended

- **Mental Model**

  - Given the above, we can come up with a general model for a diamond of size

     

    ```
    n
    ```

    :

    - Each row is a string of asterisks, prepended by spaces
    - The `n` rows will have `1, 3, ... n, ... 3, 1` asterisks
    - Each row will have `(n - countOfAsterisks) / 2` spaces

  - There are other ways to model diamonds, such as breaking the diamond into two parts (a top triangle and a reverse/bottom triangle). The way you mentally model the diamond shape will dictate your algorithm and your code solution

##### Algorithm

Looking at the way we have broken down the problem, the core algorithm is to generate a sequence of numbers:

```
1, 3, 5, ... n, n-2, ... 1
```

for a given odd number `n`. Once we have this sequence of numbers, we can use it to represent the number of asterisks for each row, and then the rest of the problem is not too difficult:

Copy Code

```plain
for each number in this sequence
  log out the concatenation of `(n - number) / 2` spaces and `number` asterisks
```

We're going to use the following algorithm to generate the sequence of numbers:

- Initialize `increment` to `2`
- Start with the first `number`, `1`, incrementing the `number` by `increment` with each step
- When the `number` is equal to `n`, flip the `increment` to `-2`
- Stop when we get to a negative `number`

##### Solution

```javascript
function diamond(n) {
  numberSequence(n).forEach(number => {
    console.log(repeat(' ', (n - number) / 2) + repeat('*', number));
  });
}

function numberSequence(n) {
  const result = [];
  let increment = 2;

  for (let number = 1; number > 0; number += increment) {
    result.push(number);
    if (number === n) {
      increment = -2;
    }
  }

  return result;
}

function repeat(char, times) {
  let repeated = '';

  for (let i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}

```

##### Discussion

The key to solving this problem is to break it down into smaller problems.

The smaller problem of generating the number sequence is much easier to solve than the larger problem of thinking through the rows of the diamond and what string to output for each row. This is something that you should always be mindful of—if you're feeling that you're working with too much complexity, take a step back and spend some time to think about how you can break the problem down into smaller problems, instead of just powering through.

Also, a note on the `repeat` function: in our solution, we built a small implementation of the function ourselves. If you use ES6, check out the [String.prototype.repeat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) method, which is much more powerful.

---

### Further Exploration

The current solution builds a solid diamond—refactor it to build a hollow diamond.

##### My Algorithm

* Create a separate `hollowStars` function.
* This function will be invoked if we are dealing with more than `1` star.
* It will reassign a value to the `stars` variable but it will also take the `stars` variable as its sole argument.
* It will take the length of the total string, subtract `2` , this will represent the total number of white spaces.

##### My Solution

```javascript
function diamond(size, hollow) {
  let numberOfStars = 1;
  let numberOfSpaces = (size - 1) / 2;
  let incrementStars = true;

  for (let index = 1; index <= size; index += 1) {
    let stars = createStarsString(numberOfStars, hollow);
    let spaces = ' '.repeat(numberOfSpaces);

    console.log(spaces + stars);

    if (incrementStars) {
      numberOfStars += 2;
      numberOfSpaces -= 1;
    } else {
      numberOfStars -= 2;
      numberOfSpaces += 1;
    }

    if (numberOfStars === size) {
      incrementStars = !incrementStars;
    }
  }
}

function createStarsString(numberOfStars, hollow) {
  if (hollow && numberOfStars !== 1) {
    return '*' + (' '.repeat(numberOfStars - 2)) + '*';
  } else {
    return '*'.repeat(numberOfStars);
  }
}
```





