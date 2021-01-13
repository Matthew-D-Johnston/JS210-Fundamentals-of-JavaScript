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

