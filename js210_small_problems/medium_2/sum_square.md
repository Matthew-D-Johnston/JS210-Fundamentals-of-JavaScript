##### JS210 - Small Problems > Medium Problems 2

---

## Sum Square - Square Sum

### Problem

**Problem Description:**

Write a function that computes the difference between the square of the sum of the first `n` positive integers and the sum of the squares of the first `n` positive integers.  

**Definition and Rules:**

* Difference: subtraction.
* square of sum: add up a bunch of numbers and square the result.
* sum of squares: square a bunch of numbers and add them up.
* first `n` positive integers: all integers from `1` to `n`.

---

### Examples / Test Cases

```javascript
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
sumSquareDifference(0);			 // 0
```

---

### Data Structure

**Input:**

* A number representing an integer, `n`.

**Output:**

* A number representing the difference between the _square of the sum of the first `n` positive integers_ and the _sum of the squares of the first `n` positive integers_.

**Intermediate Data Structures:**

* ???

---

### Algorithm

* There are two intermediate processes that we need to perform and whose return values we must find the difference.
* The first process is finding the square of sums:
  * Given integer `n`.
  * Iterate from `1` to `n`
  * increment a `sum` variable by each successive integer.
  * return the square of that sum.
* The second process is finding the sum of squares:
  * Given integer `n`
  * Iterate from `1` to `n`
  * increment a sum variable by the square of each successive integer
  * return that variable
* return the difference of `squareOfSums(n)` and `sumOfSquares(n)`

---

### Code

```javascript
function sumSquareDifference(int) {
  return squareOfSums(int) - sumOfSquares(int);
}

function squareOfSums(int) {
  let sum = 0;

  for (let idx = 1; idx <= int; idx += 1) {
    sum += idx;
  }

  return sum ** 2;
}

function sumOfSquares(int) {
  let sum = 0;

  for (let idx = 1; idx <= int; idx += 1) {
    sum += idx ** 2;
  }

  return sum;
}
```

---

### LS Solution

###### Solution

```javascript
function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}
```

###### Discussion

The hardest part of this exercise is figuring out what is meant by the terms "square of the sum" and "sum of the squares". The first example demonstrates the meaning of these two terms by including an extended comment that outlines the process for computing the answer.  

The solution shows all the details of this process. It loops through all the integers between `1` and `n`, and computes the `sum` and the `sumOfSquares` as it goes. After the loop finishes, the solution subtracts the `sumOfSquares` from the square of the `sum`, and returns the result.  

