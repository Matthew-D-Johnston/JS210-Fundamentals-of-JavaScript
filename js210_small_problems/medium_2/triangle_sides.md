##### JS210 - Small Problems > Medium Problems 2

---

## Triangle Sides

### Problem

**Problem Description:**

A triangle is classified as follows:  

- **Equilateral:** All three sides are of equal length.
- **Isosceles:** Two sides are of equal length, while the third is different.
- **Scalene:** All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than `0`. If either of these conditions is not satisfied, the triangle is invalid.  

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: `'equilateral'`, `'isosceles'`, `'scalene'`, or `'invalid'`.  

**Definitions and Rules (explicit and implicit):**

* Inputs are the sides of the triangle.
* Valid Triangle:
  * Sum of the lengths of shortest 2 sides is greater than length of longest side.
  * Every side must have a length greater than 0.
* Equilateral: all sides are equal.
* Isosceles: Two sides are equal but third is different.
* Scalene: All sides are different lengths.

**Mental Model:**

Given three numbers check to see if they can act as the sides of a triangle (i.e. see if the triangle is valid). If so, then check what type of triangle it is, based on the lengths of the sides. Return a string indicating the type of triangle or `"invalid"` if the sides do not form a valid triangle.

---

### Examples / Test Cases

```javascript
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
```

---

### Data Structures

**Inputs:**

* Three arguments, each a number.
* Number can be integer or decimal.
* May be positive, zero, or negative.

**Outputs:**

* One of four different strings: `"equilateral"`, `"isosceles"`, `"scalene"`, or `"invalid"`.

---

### Algorithm

* Create a function called `validTriangle(side1, side2, side3)`
  * if all  sides are greater than zero then it's valid. `[side1, side2, side3].every(side => side > 0)`
  * find the longest side; then take the sum of the other two sides. If they are greater than the longest side then it is valid. Use the `sort()` method and then use indexes to retrieve the first two elements and add them together; then compare them with the third element.
    * let `ordered = [side1, side2, side3].sort()`
    * let `shortSidesGreaterThanLongSide = (ordered[0] + ordered[1]) > ordered[2]`
  * `return allSidesGreaterThanZero && shortSidesGreaterThanLongSide`;
* Main function: `triangle(side1, side2, side3)`
* `if (!validTriangle(side1, side2, side3))`
  * `return "invalid"`
* `else if (side1 === side2 && side2 === side3 && side1 === side3)`
  * `return "equilateral"`
* `else if (side1 !== side2 && side2 !== side3 && side1 !== side 3)`
  * `return "scalene"`
* `else`
  * `return isosceles`

---

### Code

```javascript
function triangle(side1, side2, side3) {
  if (!validTriangle(side1, side2, side3)) {
    return "invalid";
  } else if (side1 === side2 && side2 === side3 && side1 === side3) {
    return "equilateral";
  } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
    return "scalene";
  } else {
    return "isosceles";
  }
}

function validTriangle(side1, side2, side3) {
  let ordered = [side1, side2, side3].sort();
  let allSidesGreaterThanZero = ordered.every(side => side > 0);
  let shortSidesGreaterThanLongSide = (ordered[0] + ordered[1]) > ordered[2];
  return allSidesGreaterThanZero && shortSidesGreaterThanLongSide;
}
```

---

### LS Solution

##### Hint: Valid Triangle

Valid triangles must have the following two characteristics:  

1. All sides must have lengths greater than zero — i.e., the `shortest` side is greater than zero (`shortest > 0`).
2. The sum of the two shortest sides must be greater than the longest side (`shortest + middle > longest`).

##### Solution

```javascript
function triangle(side1, side2, side3) {
  const perimeter = side1 + side2 + side3;
  const longest = Math.max(side1, side2, side3);
  const shortest = Math.min(side1, side2, side3);
  const middle = perimeter - longest - shortest;

  if (isValid(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return 'invalid';
  }
}

function isValid(shortest, middle, longest) {
  return shortest > 0 && (shortest + middle > longest);
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}
```

###### Discussion

The tricky part of this problem is determining whether a triangle is valid. To check for a valid triangle, the solution identifies the longest and the two shortest sides. It gets the `longest` and `shortest` using `Math.max` and `Math.min` respectively. The other shortest, or `middle` side, is the length left over after the `longest` and `shortest` are subtracted from the `perimeter`, which is the sum of all the sides.  

The `getTriangleType` helper function implements the classification of a triangle. The first condition checks if all sides are equal (`'equilateral'`). All sides are equal if `side1 === side2 === side3` — i.e., `side1 === side2 && side2 === side3`. The second condition checks if two sides are equal (`'isosceles'`). The series of `||` operations evaluates to `true` if any of the three comparisons are `true`. Finally, since the triangle is valid, if it is not either of the first two classifications, then it must be the third (`'scalene'`).