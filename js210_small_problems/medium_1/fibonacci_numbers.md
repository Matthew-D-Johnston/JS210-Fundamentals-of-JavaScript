##### JS210 - Small Problems > Medium Problems 1

---

## Fibonacci Numbers (Recursion)

### Problem

**Problem Description:**

The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. The first two Fibonacci numbers are `1` and `1`. The third number is `1 + 1 = 2`, the fourth is `1 + 2 = 3`, the fifth is `2 + 3 = 5`, and so on. In mathematical terms, this can be represented as:  

```
F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2
```

This simple sequence can easily be computed using a *recursive* function. A recursive function is one in which the function calls itself. For example, the following function is a recursive function that computes the sum of all integers between `1` and `n`:  

```javascript
function sum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum(n - 1);
  }
}
```

A good recursive function has three primary qualities:

1. It calls itself at least once.
2. It has an ending condition — e.g., `if (n === 1)`, in the `sum` function above.
3. The results of each recursion are used in each step — e.g., `n + sum(n - 1)` uses `sum(n - 1)`.

Write a recursive function that computes the `nth` Fibonacci number, where `nth` is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises, so do not be discouraged if you are not able to solve it on your own; recursion is tricky, and even experienced developers can have difficulty dealing with it.

**Inputs/Outputs:**

* Input: a single integer `n` representing the `n`th position in the fibonacci sequence.
* Output: a single integer representing the number at the `n`th position of the fibonacci sequence.

**Definitions and Rules (implicit and explicit):**

* Assume input must be a single positive integer value.
* Must use recursion.
* In: `1` => out: `1`
* In: `2` => out: `1`
* In: `3` => out: `1` + `1` = `fibonacci(1)` + `fibonacci(1)` = `2`
* In: `4` => out: `2` + `1`= `fibonacci(3)` + `fibonacci(2)` = `3`
* In: `5` => out: `3` + `2` = `fibonacci(4)` + `fibonacci(2)` = `5`

**Mental Model:**

If the input, `n`, to the `fibonacci` function is either a `1` or a `2` then simply return a `1`. However, if the input is greater than `2`, then we must add the fibonnaci numbers of `n - 1` and `n - 2`.

---

### Examples / Test Cases

```javascript
fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
fibonacci(5);       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765
```

---

### Data Structure

**Input**

* A number (we are assuming a positive integer).

**Output**

* A number.

**Intermediate Data Structures**

* ???

----

### Algorithm

* If `n <= 2` then `return 1`
* Otherwise, `fibonacci(n - 1) + fibonacci(n - 2)`

---

### Code

```javascript
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}
```

---

### LS Solution

###### Solution

```javascript
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else {
    return fibonacci(nth - 1) + fibonacci(nth - 2);
  }
}
```

###### Discussion

If you are unfamiliar with the use of recursion, even the short function in the solution above might be difficult to come up with. Let's tackle this function in terms of the recursive criteria provided at the beginning of this exercise.  

1. "It calls itself at least once."
   - This is straightforward. The function is called at least once.
2. "It has an ending condition."
   - Recall that the Fibonacci series starts with two (2) ones (`1, 1`), and that the third and subsequent Fibonacci numbers each have a value of the sum of the previous two numbers (e.g., the third number in the series is `2`). This means that whenever the value we are getting is the first or second in the series, no further computation is necessary and hence the processing ends (the "*ending condition*").
3. "The results of each recursion are used in each step."
   - In our `fibonacci` function, this happens in the `else` clause. In the `else` clause, we use the return value of calling the `fibonacci` function again (this is the *recursive call*). Notice that we keep using the recursive call until the argument passed to the recursive call is less than or equal to `2` (the ending condition).

For additional reading material on recursion, here are some forum posts that you might find useful:

- [Reading Material 1](https://launchschool.com/posts/9f4c03bc#comment-53639)
- [Reading Material 2](https://launchschool.com/posts/8a6f4220)
- [Reading Material 3](https://launchschool.com/posts/587959fd#comment-54748)
- [Reading Material 4](https://medium.com/launch-school/recursive-fibonnaci-method-explained-d82215c5498e#.qxl7hr56e)

