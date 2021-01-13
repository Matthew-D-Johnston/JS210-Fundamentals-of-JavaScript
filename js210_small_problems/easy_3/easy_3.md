##### JS210 - Small Problems > Easy 3

---

### 1. How Old is Teddy

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between `20` and `200` (inclusive).  

Example Output:

```
Teddy is 69 years old!
```

###### My Solution

```javascript
let teddysAge = function teddysAge() {
  let age = Math.floor(Math.random() * (201 - 20) + 20);

  console.log(`Teddy is ${age} years old!`)
}

teddysAge();
```

###### LS Solution

Hint:

- The `Math` object has a `random()` method that might be useful. Check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) on MDN.
- How many possible numbers can be generated?
- How can you make sure that the numbers generated won't go below the minimum value?

```javascript
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);
```

###### Discussion

The solution makes use of the `random()` method of the `Math` object. The `random()` method generates a random floating-point number between `0` (inclusive) and `1` (exclusive). To have the random number be between `20` and `200`, the solution uses the function `randomBetween`. It takes a `min` and a `max` value as arguments.  

The first part of the expression returned by `randomBetween` function, `Math.floor(Math.random() * (max - min + 1))`, generates a number based on the range (distance) between the `max` and the `min`. If the arguments passed are `20` and `200`, there are 181 possible values, starting from `0` up to `180`.  

The second part, `+ min;`, which completes the expression, offsets the current value so that the number returned falls within the range of the arguments passed.  

Finally, the `Math.floor()` method turns the generated number into an integer. The method takes a number and reduces it to the next lower integer, effectively truncating any digits following the decimal point.

###### Further Exploration

The `randomBetween` function used the `Math.floor()` method. Would it make a difference if the `Math.round()` method was used instead?  

Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to `min` was greater than `max`)?  

###### My FE Solution

Yes, it would make a difference if we used the `Math.round()` function instead of the `Math.floor()` function. The reason is that the `Math.round()` function will round to the nearest integer, which means we may get a value outside the range, that is we could get a value of `181` and then when the offset of `20` is added we would end up with `201`, which is outside the acceptable range.  

For the second part, we could do something like this...

```javascript
function randomBetween(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);
```

---

### 2. Searching 101