##### JS210 - Small Problems > Debugging

---

## Random Recipe Generator

### Problem

**Problem Description:**

One bored and hungry evening we decided to randomly generate recipes. We can't wait to see the first suggestions, but JavaScript raises a `TypeError`, telling us that `dishName.join` is not a function. What is wrong?  

```javascript
// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  const elements = array.slice();
  const randomElements = [];

  while (n > 0 && elements.length > 0) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

const ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

const spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

const extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

const adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
const firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
const secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

const dishName = random(adjective) + random(firstNoun) + random(secondNoun);
const dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log(`How about: ${dishName.join(' ')}`);
console.log(`You need: ${dish.join(', ')}`);
```

---

### My Solution

The problem is that `dishName` returns a string and the `join` method is designed to be called on arrays. We might modify the code so that `dishName` is an array. It looks like we would also have to change `dish` into an array as well. But before calling `join()` we need to flatten the arrays since we now have nested subarrays within an outer main array. That is because `random` returns an array.

```javascript
//... rest of code omitted for brevity

const dishName = [random(adjective), random(firstNoun), random(secondNoun)];
const dish = [random(ingredients, 3), random(spices, 2), random(extras, 1)];

console.log(`How about: ${dishName.flat().join(' ')}`);
console.log(`You need: ${dish.flat().join(', ')}`);
```

---

### LS Solution

###### Solution

```javascript
// Rest of the code omitted

const dishName = random(adjective).concat(random(firstNoun)).concat(random(secondNoun));

const dish = random(ingredients, 3).concat(random(spices, 2)).concat(random(extras, 1));

console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dish.join(', '));
```

###### Discussion

On lines 41 and 42 we tried to concatenate arrays with `+`, which does not work as we might expect in JavaScript. The binary `+` operator is either an [arithmetic operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic) adding two numerical values, or a [string operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#String) concatenating two strings. When we apply it to two arrays, JavaScript will convert the arrays into strings, and then concatenate these strings. So `dish` and `dishName` are strings. This is why invoking `join` on them raises an error: `join` is not a method defined for strings.  

To concatenate arrays, we can use the [`Array.prototype.concat()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), as seen in our solution code.