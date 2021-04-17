##### JS210 - Small Problems > Interpretive Problem Solving

---

## Seeing Stars

### Problem

**Problem Description:**

Write a function that displays an 8-pointed star in an `n`x`n` grid, where `n` is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a `7`x`7` grid (i.e., when `n` is `7`).

**Rules and Definitions:**

* `n` : the input argument, representing an odd integer; it's lowest value can be assumed to be `7`.

**Input/Output:**

* Input: an odd integer.
* Output: logging `n` lines to the screen of width `n`. Each line will be composed of `*`s and white spaces.

**Mental Model:**

Given an odd integer we must create an 8-pointed star. This star is symmetrical around a middle line of `*`s equal to `n`. Each half has a base of just `*`s and no white spaces. But each consecutive layer of the pattern inserts a white space between the `*`s until the length of the line between the two endpoint `*`s is equal to `n`. Each of the lines, except for the base, have only three stars.

```javascript
star(7);
// logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
```

```javascript
star(9);
// logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
```

```javascript
star(11);
// logs
*    *    *		margin = 0; spaces = 4;
 *   *   *		margin = 1; spaces = 3;
  *  *  *			margin = 2; spaces = 2;
   * * *			margin = 3; spaces = 1;
    ***				margin = 4; spaces = 0;
***********
    ***				margin = 4; spaces = 0;
   * * *			margin = 3; spaces = 1;
  *  *  *			margin = 2; spaces = 2;
 *   *   *		margin = 1; spaces = 3;
*    *    *		margin = 0; spaces = 4;
```

---

### Data Structure

**Input**

* An integer representing the size of the grid.

**Output**

* `n` strings made up of `*`s and white spaces.

**Intermediate Data Structures:**

* ???

---

### Algorithm

* Start by creating the first line.
  * This will be composed of a `*` at either end of the line, marking the two end points.
  * The number of white spaces in between each end point and the middle `*`, will depend on this formula: `(n - 3) / 2`.
  * So, `numberOfSpaces = (n - 3) / 2`;
  * So, `spaces = ' '.repeat(numberOfSpaces)`
  * `marginSize = 0`
  * also, `margin = ''`;
  * also, `decrement = true`;
  * Thus, `topLine = margin + '*' + spaces + '*'+ spaces + '*'`;
* Now that we have our starting line, we want to figure out an algorithm that will construct consecutive lines.
  * Given our `topLine`, the next line will consist in prepending the line with a white space and removing a white space from each of the spaces within the endpoints and middle point.
  * `console.log(margin + '*' + spaces + '*' + spaces + '*'`;
  * `if (numberOfSpaces === 0)`
    * `console.log('*'.repeat(n))`
    * `decrement = !decrement`;
  * `if (decrement)`
    * `numberOfSpaces -= 1`;
    * `marginSize += 1`;
  * `else`
    * `numberOfSpaces +=1`
    * `marginSize -= 1`
  * `spaces = ' '.repeat(numberOfSpaces)`
  * `margin = ' '.repeat(marginSize)`

---

### Code

```javascript
function stars(n) {
  let numberOfSpaces = (n - 3) / 2;
  let spaces = ' '.repeat(numberOfSpaces);
  let marginSize = 0;
  let margin = '';

  while (numberOfSpaces > 0) {
    console.log(margin + '*' + spaces + '*' + spaces + '*');

    numberOfSpaces -= 1;
    marginSize += 1;
    spaces = ' '.repeat(numberOfSpaces);
    margin = ' '.repeat(marginSize);
  }

  console.log(margin + '*' + spaces + '*' + spaces + '*');
  console.log('*'.repeat(n));

  while (marginSize > 0) {
    console.log(margin + '*' + spaces + '*' + spaces + '*');

    numberOfSpaces += 1;
    marginSize -= 1;
    spaces = ' '.repeat(numberOfSpaces);
    margin = ' '.repeat(marginSize);
  }
  
  console.log(margin + '*' + spaces + '*' + spaces + '*');
}
```

---

### LS Solution

##### Understanding the Problem

- Input

  - `n`: an odd integer that indicates the size of the grid that the "8-pointed star" will occupy. Its smallest value is `7`.

- Output

  - "8-pointed star": going by the example, the function creates the "star" by logging

     

    ```
    n
    ```

     

    rows of asterisks (

    ```
    *
    ```

    ).

    - Each row is of length `n`.
    - Each row has three asterisks.
    - The rows have varying amounts of spaces between the three asterisks and varying amounts of padding on the left and right sides.
    - The middle row is an exception—it logs out `n` number of asterisks and no spaces.

- Requirements

  - The most important part of this problem is determining the pattern for each row of asterisks (except the middle row). We can figure out the pattern by walking through each row of the first example, where

     

    ```
    n
    ```

     

    is

     

    ```
    7
    ```

    . To better visualize the star, we'll use underscores (

    ```
    _
    ```

    ) to represent the spaces and we'll separate the asterisks (

    ```
    *
    ```

    ) and underscores (

    ```
    _
    ```

    ) with spaces.

    - Row 1 (`* _ _ * _ _ *`): there are no spaces of padding on either the left or right side. There are two spaces between each pair of asterisks.
    - Row 2 (`_ * _ * _ * _`): there is one space of padding on both the left and right sides. There is one space between each pair of asterisks.
    - Row 3 (`_ _ * * * _ _`): there are two spaces of padding on both the left and right sides. There are no spaces between each pair of asterisks.
    - Row 4 (`* * * * * * *`): this row is an exception—there are `n` asterisks and no spaces.
    - Row 5 (`_ _ * * * _ _`): there are two spaces of padding on both the left and right sides. There are no spaces between each pair of asterisks.
    - Row 6 (`_ * _ * _ * _`): there is one space of padding on both the left and right sides. There is one space between each pair of asterisks.
    - Row 7 (`* _ _ * _ _ *`): there are no spaces of padding on either the left or right side. There are two spaces between each pair of asterisks.

  - After going through each row step-by-step, we can make the following observations:

    - There is an inverse relationship between the padding and the spaces between the asterisks.
    - As we approach the middle row, the number of spaces of padding increases and the number of spaces between asterisks decreases.
    - The value of the number of spaces between each pair of asterisks starts at `(n - 3) / 2` for the first row, then decrements by `1` for each row—until the row before the middle, where its value is `0`. Inversely, the value of the number of spaces of padding starts at `0`, and increments by `1` for each row—until the row before the middle, where its value is `(n - 3) / 2`.
    - After the middle row, the above pattern is mirrored—i.e., the pattern repeats, but in the opposite order.

- Mental Model

  - One way we can think of building a row is by joining three asterisks together with the correct number of spaces between each pair. After the joining, we can pad the left and right sides accordingly.
  - Next, we'll need to keep track of the current row that we're building, so that we can apply the corresponding row-pattern based on the observations we made above.
    - **First row up to the row before the middle:** join three asterisks together, starting with `(n - 3) / 2` spaces between each pair, up to `0` spaces. Pad the left and right sides, starting with `0` spaces up to `(n - 3) / 2` spaces.
    - **Middle row:** build with `n` asterisks and no spaces.
    - **Row after the middle up to the last row:** join three asterisks together, starting with `0` spaces between each pair, up to `(n - 3) / 2` spaces. Pad the left and right sides, starting with `(n - 3) / 2` spaces up to `0` spaces.
  - We can also simplify the padding of spaces to just the left side, since the spaces on the right won't be visible when displayed on the screen/console.

##### Data Structure and Algorithm

For our data structure—considering our mental model of joining three asterisks together—we'll use an array and leverage the `Array.prototype.join` method.

Now let's build an algorithm that processes our data structure to produce the expected output.

1. Compute the value of the index of the middle row—the integer division of `n / 2`—and store the result in a variable, `middleIdx`.

2. Iterate starting from the index of the first row (

   ```
   0
   ```

   ) up to but not including the

    

   ```
   middleIdx
   ```

   . For each row:

   1. Initialize an array of three asterisks.
   2. Join the asterisks in the array together with `((n - 3) / 2) - current iteration number` of spaces.
   3. Pad the left side with `current iteration number` of spaces.
   4. Log the row.

3. Log a row of `n` number of asterisks and no spaces.

4. Iterate starting from the

    

   ```
   middleIdx + 1
   ```

    

   up to the index of the last row (

   ```
   n - 1
   ```

   ). For each row:

   1. Initialize an array of three asterisks.
   2. Join the asterisks in the array together with `current iteration number` of spaces.
   3. Pad the left side with `((n - 3) / 2) - current iteration number` of spaces.
   4. Log the row.

##### Solution

```javascript
function repeat(char, times) {
  let repeated = '';
  
  for (let i = 0; i < times; i += 1) {
    repeated += char;
  }
  
  return repeated;
}

function buildStarRow(spacesBetween, spacesPadding) {
  const asterisks = ['*', '*', '*'];
  const starRow = asterisks.join(repeat(' '), spacesBetween));
  return repeat(' ', spacesPadding) + starRow;
}

function star(n) {
  const middleIdx = Math.floor(n / 2);
  
  for (let i = 0; i < middleIdx; i += 1) {
    let spacesBetween = ((n - 3) / 2) - i;
    let spacesPadding = i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }
  
  console.log(repeat('*', n));
  
  for (let i = 0; i < middleIdx; i += 1) {
    let spacesBetween = i;
    let spacesPadding = ((n - 3) / 2) - i;
    console.log(buildStarRow(spacesBetween, spacesPadding));
  }
}
```

###### Discussion

You may have noticed that in the second loop of the `star` function, we deviate a little from our algorithm—we don't start the iteration from `middleIdx + 1` and don't end with the index of the last row (`n - 1`). Even though we don't follow our algorithm literally, we're still following it using a mathematical approach. To understand how this works, let's look at steps #4.2 and #4.3 of our algorithm (from the second iteration):

> 4.2: Join the asterisks in the array together with `current iteration number` of spaces.
>
> 4.3: Pad the left side with `((n - 3) / 2) - current iteration number` of spaces.

The important part of these two steps is the value of the `current iteration number`. In the second `for` loop of our solution, this value is the same as the value of `i`, but not the same as the value of the index of the current row. If our solution was a literal translation of our algorithm, `i` wouldn't have the same value as the current iteration number—it would have the value of the index of the current row being iterated over. In the case of `n = 7`, these index values (and `i` values) would be `4`, `5`, and `6`, with each value corresponding to the iteration numbers `0`, `1`, and `2` respectively.  

For example, to implement our algorithm more literally, we would offset the values of `i` in the second `for` loop so that they would be the same as the index values of the rows, such as shown below:  

```javascript
for (let i = middleIdx + 1; i < n; i += 1) {
  let spacesBetween = i - (middleIdx + 1);
  let spacesPadding = ((n - 3) / 2) - i + (middleIdx + 1);
  console.log(buildStarRow(spacesBetween, spacesPadding));
}
```

Instead, we took a more mathematical approach to implement our solution. We factored out the computation of the offset (`middleIdx + 1`), resulting in the two `for` loops iterating over the same `i` values—but not the same row index values.  

###### Further Exploration

The current solution implementation is faithful to our algorithm. Notice, however, that there is similar-looking code in our `for` loops. Try to refactor the current implementation to make the code less repetitive.  

You can also explore alternate mental models for building the `star`. Write out and share your mental model and corresponding solution implementation below.

##### My Solution

```javascript
function stars(n) {
  let numberOfSpaces = (n - 3) / 2;
  let marginSize = 0;
  let decrementSpaces = true;

  for (let index = 1; index < n - 1; index += 1) {
    console.log(buildStarRow(numberOfSpaces, marginSize));

    if (numberOfSpaces === 0) {
      console.log('*'.repeat(n));
      console.log(buildStarRow(numberOfSpaces, marginSize));
      decrementSpaces = !decrementSpaces;
    }

    if (decrementSpaces) {
      numberOfSpaces -= 1;
      marginSize += 1;
    } else {
      numberOfSpaces += 1;
      marginSize -= 1;
    }
  }
}

function buildStarRow(totalSpaces, marginSize) {
  let spaces = ' '.repeat(totalSpaces);
  let margin = ' '.repeat(marginSize);
  return margin + '*' + spaces + '*' + spaces + '*';
}
```

