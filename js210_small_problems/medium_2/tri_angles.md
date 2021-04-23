##### JS210 - Small Problems > Medium Problems 2

---

## Tri-Angles

### Problem

**Problem Description:**

A triangle is classified as follows:

- **Right:** One angle is a right angle (exactly `90` degrees).
- **Acute:** All three angles are less than `90` degrees.
- **Obtuse:** One angle is greater than `90` degrees.

To be a valid triangle, the sum of the angles must be exactly `180` degrees, and every angle must be greater than `0`. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: `'right'`, `'acute'`, `'obtuse'`, or `'invalid'`.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

**Definition and Rules (explicit and implicit):**

* Valid Triangle:
  * the sum of all angles is equal to 180
  * all angles are greater than 0.
* Right: one angle is equal to 90
* Obtuse: one angle is greater than 90
* Acute: all angles are less than 90
* all angles have integer values.
* arguments are in degrees.



---

### Examples / Test Cases

```javascript
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
```

---

### Data Structures

**Input:**

* Three arguments: all three are integers.

**Output:**

* One of four strings: `"acute"`, `"right"`, `"obtuse"`, or `"invalid"`.

**Intermediate Data Structures:**

* An array to store the input angles in a list.

---

### Algorithm

* We will use if conditional statements testing all of our conditions, starting with whether it's a valid triangle.
* Then whether it is an accute triangle
* Then right triangle
* Then obtuse

---

### Code

```javascript
function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];

  if (!validTriangle(angles)) {
    return "invalid";
  } else if (angles.every(angle => angle < 90)) {
    return "acute";
  } else if (angles.some(angle => angle === 90)) {
    return "right";
  } else {
    return "obtuse";
  }
}

function validTriangle(angles) {
  let sumOfAngles = angles[0] + angles[1] + angles[2];
  return angles.every(angle => angle > 0) && sumOfAngles === 180;
}
```

---

### LS Solution

```javascript
function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return "invalid";
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightTriangle)) {
    return "right";
  } else if (angles.every(testAcuteTriangle)) {
    return "acute";
  } else {
    return "obtuse";
  }
}

function testRightTriangle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}
```

###### Discussion

Like the previous exercise, this one also classifies triangles but this time using angles instead of sides. This solution follows the same pattern as the previous. The difference, however, is in the implementation of the solution. This solution takes a more declarative route by using more of the list processing abstractions. If you followed the more imperative route, notice that the conditionals are not that long to type out. For instance, testing for a right triangle could be written as: `if (angle1 === 90 || angle2 === 90 || angle3 === 90)`.  

This problem is not that big, and the conditionals are not that complicated, so going the declarative route might seem too verbose. That said, use the solution as a means of trying out the approach and as a means of comparison to a more imperative approach. It is essential to be able to determine when one approach is better than the other.  

Note that we use the functions `testRightTriangle` and `testAcuteTriangle` as arguments to `some` and `every` rather than entering them inline as a function expression or arrow function. All we have to do here is use the function name. Note, in particular, that we **do not** use parentheses when passing the functions as arguments -- the `some` and `every` function will take care of invoking the functions. We just want to pass the functions in to them.  

