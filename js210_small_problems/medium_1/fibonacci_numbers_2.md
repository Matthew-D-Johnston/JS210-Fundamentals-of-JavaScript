##### JS210 - Small Problems > Medium Problems 1

---

## Fibonacci Numbers (Procedural)

### Problem

**Problem Description:**

In the previous exercise, we developed a recursive solution for computing the `nth` Fibonacci number. In a language that is not optimized for recursion, some (but not all) recursive functions can be extremely slow and may require massive quantities of memory and/or stack space. If you tested for bigger `nth` numbers, you might have noticed that getting the `50th` fibonacci number already takes a significant amount of time.  

Fortunately, every recursive function can be rewritten as a non-recursive (or *procedural*) function.  

Rewrite your recursive `fibonacci` function so that it computes its results without using recursion.  

**Input/Output:**

* Input: an integer.
* Output: an integer.

**Definitions and Rules (explicit and implicit):**

* Fibonacci number is the sum of the two previous Fibonacci numbers in the sequence.
* Use a procedural programming method.
* In: `1` => out: `1`
* In: `2` => out: `1`
* In: `3` => out: `1` + `1` = `fibonacci(1)` + `fibonacci(1)` = `2`
* In: `4` => out: `2` + `1`= `fibonacci(3)` + `fibonacci(2)` = `3`
* In: `5` => out: `3` + `2` = `fibonacci(4)` + `fibonacci(2)` = `5`

**Mental Model:**

Take an integer and if it is less than two, simply return the number `1`. Otherwise, we must the following formula to retreive the fibonacci number: `fibonacci(n - 1) + fibonacci(n - 2)`. However, we must do this using a procedural programming method.

---

### Examples / Test Cases

```javascript
fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050
```

Note that JavaScript can accurately compute integers up to 16 digits long; this means that `fibbonacci(78)` is the largest Fibbonacci number that you can accurately compute with simple operations in JavaScript.

---

### Data Structure

**Input:**

* A number representing the nth position in the Fibonacci sequence.

**Output:**

* A number representing the number at the nth postion of the Fibonacci sequence.

**Intermediate Data Structures:**

* ???

---

### Algorithm

* Input argument: `number`

* If `number <= 2`, then `return 1`.

* Essentially the given number will be an iteration limit.

* We can assign the first two fibonacci sequence numbers as the following:

  * `nMinusOne = 1`
  * `nMinusTwo = 1`

* And we can declare a `fibonacci` variable.

* We then begin a loop starting at an index of `3` that will iterate until we reach the limit as given by `number`.

  * Within the loop, we make `fibonacci = nMinusOne + nMinusTwo`.

  * Then reassign:

    * `nMinusTwo = nMinusONe`

    * `nMinusOne = fibonacci`

* When the loop reaches the limit, we `return fibonacci`.

---

### Code

```javascript
function fibonacci(number) {
  let result = 1;
  let nMinusOne = 1;
  let nMinusTwo = 1;

  for (let index = 3; index <= number; index += 1) {
    result = nMinusOne + nMinusTwo;
    nMinusTwo = nMinusOne;
    nMinusOne = result;
  }

  return result;
}
```

---

### LS Solution

##### Hint: Recursive vs. Procedural

Here are two figures that give a visual comparison of a recursive approach vs. a procedural approach.  

The first figure shows what happens during a recursive call for the `7th` Fibonacci number. You can see that to get the `7th` Fibonacci number, the function gets the sum of the `6th` and `5th` Fibonacci numbers via the return values from calls to itself: `fib(6) + fib(5)`. The function gets `fib(6)` by adding the return values of `fib(5)` and `fib(4)`. This goes on, branching as necessary until the function reaches the ending condition — that `nth` is less than or equal to `2` (as described in the previous exercise). Once the function reaches this stopping condition, it returns the values starting from the bottom up.  



![img](https://dbdwvr6p7sskw.cloudfront.net/js-exercises/images/Fibonacci_recursive.png)



As you can see and imagine, the recursive approach can quickly become computationally expensive. This is in contrast to the procedural approach shown in the next image.  

The procedural approach is straightforward. Instead of having an ending condition, it has a starting condition. The function starts by setting the values of the first two Fibonacci numbers. Using the first two, the function iteratively gets the `nth` fibonacci.  



![img](https://dbdwvr6p7sskw.cloudfront.net/js-exercises/images/Fibonacci_procedural.png)



Keep in mind that both approaches have their pros, cons, and appropriate use cases. There are also ways to optimize recursive calls, as you will see in the next exercise.  

##### Solution

```javascript
function fibonacci(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}
```

###### Discussion

The procedural solution uses an array, `previousTwo`, to store the values of the current two numbers in the Fibonacci series.  

The solution starts by initializing the `previousTwo` array to the first two numbers in the series. Using these numbers as a starting point, the solution loops and reassigns the value of `previousTwo` `nth - 2` times. When the `nth` value to look for is one of the first two numbers, the solution does not need to iterate, and can return either value of the `previousTwo` array. The solution returns the second element so that when `nth` is greater than `2`, the return value is still valid.  

For example, given an argument of `4`, the values of `previousTwo` — starting with its initial value — are shown below:  

```javascript
[1, 1]    // this is used as the return value for when `nth` is equal to 1 or 2
[1, 2]    // nth = 3; returns previousTwo[1], or 2
[2, 3]    // nth = 4; returns previousTwo[1], or 3
```

If you run `fibonacci(100)`, you will notice that there is a discrepancy in the result. This is because the size of the `100th` Fibonacci number is very big. JavaScript does not handle big numbers well. In fact, running `fibonacci(10000)` returns `Infinity`, because the `10000th` Fibonacci number is greater than the value of `Number.MAX_VALUE`.  





