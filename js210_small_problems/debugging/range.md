##### JS210 - Small Problems > Debugging

---

## Range

### Problem

We are assigned the task to implement a `range` function that returns an array of integers beginning and ending with specified start and end numbers. When only a single argument is provided, that argument should be used as the ending number and the starting number should be 0.

Check our code below. Why do the example invocations fail with an error saying `Maximum call stack size exceeded`? Can you fix the code, so it runs without error and satisfies the requirements?  

```javascript
function range(start, end) {
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```

---

### My Solution

Well, the first problem is we have two functions with the same name, `range`. The second one is the one that results in the `Maximum call stack size exceeded` error.  If we remove this function, then our code runs as expected for the first call on line 17, but we need to implement a way to assign `0` to the `start` parameter when only one argument is passed to the function.  

I removed the second `range` function definition and modified the original function:

```javascript
function range(start, end) {
  if (!end) {
    end = start;
    start = 0;
  }
  
  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));
```

---

### LS Solution

###### Solution

```javascript
function range(start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  const range = [];
  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```

###### Discussion

In our original code, we have defined two `range` functions. One function signature expects two arguments, and one expects only a single argument. But JavaScript does not support [function overloading](https://en.wikipedia.org/wiki/Function_overloading) (the ability to utilize multiple functions of the same name with different signatures). So with the second definition of `range`, the first one is overridden. That is, it is always `range(end)` on lines 11-13 that is executed, no matter how many arguments you provide. So when we call `range(10, 20)` on line 18, the parameter `end` is assigned to `10`, and the second argument, `20`, is ignored. The function then executes its body, line 12, calling itself again, this time with two arguments, `0` and `10`. Since our program only recognizes the `range` function on lines 11-13, the function will continue to call itself repeatedly until the stack size is exceeded.  

###### Further Exploration

There are two reasons why the following is *not* a working solution. Can you spot them?   

```javascript
function range(start, end) {
  if (!end) {
    start = 0;
    end = start;
  }

  // ...
}
```

The first issue is that we reassign `start` to `0` before we have assigned `end`. Thus, `end` simply gets assigned `0` because that is what was just assigned to `start`. This two lines should be flipped.  The only other possible issue I can see is if `end` is originally assigned a value of `0`. Unlike any other number `0` evaluates to `false` and so it will cause the conditional `if` statement to evaluate to `true` when, in this case, that is not what is intended. However, I don't see how this is a huge issue since it is unlikely that if one is trying to get a range that `end` would intentionally be given a value of `0`. The only case where it might seem plausiable is if both `start` and `end` are assigned a value of `0`, but then nothing is affected by having them reassgined within the body of the `if` conditional statement--both will simply still be `0`. It's only when the `start` parameter is given a value other than `0` that we then get something that maybe wasn't intended. `end` will be given the `start` value and `start` will become `0`. That actually isn't a horrible outcome, but it may not be what is intended. However, it is hard to imagine what is intended when a value for `start` that is greater than the `end` value is input.

