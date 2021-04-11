##### JS210 - Small Problems > Interpretive Problem Solving

---

## 1000 Lights

### Problem

**Problem Description:**

You have a bank of switches before you, numbered from `1` to `n`. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches `2`, `4`, `6`, and so on. On the third pass, you go back to the beginning again, this time toggling switches `3`, `6`, `9`, and so on. You continue to repeat this process until you have gone through `n` repetitions.  

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after `n` repetitions.  

**Definititions / Rules (explicit/implicit):**

* Bank of switches: panel of switches.
* Switch: turns a light on or off; 1 switch per light.
* Switches are initially off.
* Number of switches: `n`, given as an argument to the function.
* Switches are in a row.
* First pass: walk down the row and toggle every one of them.
* Second pass: walk down the row and toggle every other switch, starting with the second one (i.e. `2`, `4`, `6` ...); thus, the switches to toggle are multiples of 2.
* Third pass: walk down the row and toggle switches that are multiples of 3, starting with the third switch (i.e. `3`, `6`, `9`...).
* We can infer from these two examples, that on the fourth pass: walk down the row and toggle switches that are multiples of 4, starting with fourth switch (i.e. `4`, `8`, `12`...).
* Continue until you have gone through `n` repetitions. What is a repetition? Does it mean passes? Are we to do `n` passes where we toggle switches? Or does the first pass not count, only the ones after it? Let's assume that repetitions just means passes. So above, we have done three repetitions. If `n` was equal to `4` then that would be enough.

**Input/Output:**

* The program will take one argument: the total number of switches.
* It will return an array of lights that are on after `n` repetitions.

**Mental Model:**

* Given`n` number of switches, we are going to go through the list of switches `n` times. Each time we will toggle certain switches. Which switches to toggle will change depending on how many passes we have done through the list. The first pass will require us to toggle every switch, so that the are now all on. The second pass will require us to toggle all switches that are multiples of `2`, beginning with switch number `2`. The second pass requires us to toggle all switches that multiples of the multiple number from the last pass (i.e. `2`) plus `1`, which will be `3`. Each pass will require us to increase the multiple by `1`, up until the current pass number is equal to the total number of switches.

---

### Examples / Test Cases

```javascript
function lightsOn(switches) {
  // ...
}

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

lightsOn(6);
// Round 1: all lights are on
// Round 2: lights 2, 4, and 6 are now off; 1, 3, and 5 are on
// Round 3: lights 2, 3, 4, are now off; 1, 5, and 6 are on
// Round 4: lights 2 and 3 are now off; 1, 4, 5, and 6 are on
// Round 5: lights 2, 3, and 5 are now off; 1, 4, and 6 are on
// Round 6: lights 2, 3, 5, and 6 are now off; 1 and 4 are on
=> [1, 4]

lightsOn(2);
// Round 1: all lights are on
// Round 2: light 2 is now off; 1 is on
=> [1]

lightsOn(1);
// Round 1: one light is on
=> [1]

lightsOn(0);
=> []
```

---

### Data Structure

**Input**

* An integer representing the total number of lights and total rounds to be taken.

**Output**

* An array containing the light numbers that are on after all toggle rounds have been completed; will be an empty array if the total number of lights is `0`.

**Intermediate Data Structures:**

* Boolean values may come in handy to represent the state of a particular light, where `true` can represent the "on" state and `false` represents the "off" state of a particular light.
* We can use an array to represent our panel of lights. However, we should be conscious of the fact that the first light will have an index of `0`. Thus to represent a light number using indexes, we must note that for an index `idx`, we will have to add `1` to get the light number. For example, to represent light number 3 we will have the `idx = 2` and we need to add `1` to get `3`. Or if we are dealing with the third light, to access it we have to use `idx = 3 - 1`, which is `idx = 2`.
* Our multiple variable will need to be represented by an integer, and we will need to increment this integer by one. The multiple variable will need to start at `1`. This multiple variable also represents the current round number, so that after completig the `n`th round, we exit the loop.
* We will also want some sort of `indexStart` variable as the starting index for each round. It will be an integer, starting at `0`. 

---

### Algorithm

Process 1:

* Begin by creating an array called `lightPanel` that is populated with `false` values equal to the number of lights, `n`.
* Declare some `startingIndex` variable and initialize it with a value of `0`.
* Declare some `multiple` variable and initialize it with a value of `1`.
* Begin a `while` loop that will loop until `multiple <= n`.
* Then begin a `for` loop that has the following initial index, index limit, and index incrementing rules: `(let index = startingIndex; index <= n; index += multiple)`.
* Within the `for` loop, we want to toggle the boolean values within the `lightPanel` array according to the current `index`. Hence, `lightPanel[index] = !lightPanel[index]`.
* After this is completed, increment the `startingIndex` by `1` and the `multiple` by `1`.

Process 2:

* We now have an array of boolean values representing the state of corresponding light switches.
* We now want an array that contains the index numbers of the lights that are on (i.e. `true` )  incremented by one.
* We can use a combination of the `map` method and the `filter` method to obtain the desire result.

----

### Code

```javascript
function lightsOn(totalLights) {
  let lightPanel = [];

  for (let index = 0; index < totalLights; index += 1) {
    lightPanel.push(false);
  }

  let startingIndex = 0;
  let multiple = 1;

  while (multiple <= totalLights) {
    for (let index = startingIndex; index < totalLights; index += multiple) {
      lightPanel[index] = !lightPanel[index];
    }

    startingIndex += 1;
    multiple += 1;
  }

  return listOfLightsOn(lightPanel);
}

function listOfLightsOn(lightPanel) {
  return lightPanel.map((lightStatus, lightIndex) => {
    if (lightStatus) {
      return lightIndex + 1;
    } else {
      return lightStatus;
    }
  }).filter(lightNumber => lightNumber);
}
```

Refactored:

```javascript
function lightsOn(totalLights) {
  let lightPanel = constructLightPanel(totalLights);

  lightPanel = toggleLightSwitches(lightPanel, totalLights);

  return listOfLightsOn(lightPanel);
}

function toggleLightSwitches(lightPanel, rounds) {
  let startingIndex = 0;
  let multiple = 1;

  while (multiple <= rounds) {
    for (let index = startingIndex; index < rounds; index += multiple) {
      lightPanel[index] = !lightPanel[index];
    }

    startingIndex += 1;
    multiple += 1;
  }

  return lightPanel;
}

function constructLightPanel(totalLights) {
  let lightPanel = [];

  for (let index = 0; index < totalLights; index += 1) {
    lightPanel.push(false);
  }

  return lightPanel;
}

function listOfLightsOn(lightPanel) {
  return lightPanel.map((lightStatus, lightIndex) => {
    if (lightStatus) {
      return lightIndex + 1;
    } else {
      return lightStatus;
    }
  }).filter(lightNumber => lightNumber);
}
```

---

### LS Solution

##### Understanding the Problem

To better understand the problem, let's break it down into the following components:

- Input

  - The last sentence from the problem description makes it clear that there is only one input: the number of `switches`. The end of this sentence is not as straightforward however, because the phrase—*"`n` repetitions"*—begs the question, "what is *`n`*?" If we read through the problem description again, the first sentence tells us that every switch has a number from `1` to `n`. We can therefore infer that the number of repetitions is equal to the number of switches.

- Output

  - An array of the lights that are turned on after toggling the appropriate switches `n` number of times.

- Rules

  - All the lights are initially turned off.
  - For the `nth` round, every switch that is a multiple of `n` gets toggled. For example, in the first round, all the switches get toggled because all integers are multiples of `1`. In the second round, only the switches that are multiples of `2` get toggled.
  - The number of switches dictates the number of rounds. For instance, if there are `10` switches then there will be `10` rounds of toggling.
  - Return an array containing the switch numbers of the lights that are on after all the rounds have been completed.

  ##### Data Structure and Algorithm

  We're going to solve this problem using a simulation. We'll have our program go through the `n` rounds of toggling, while keeping track of the states of the lights. At the end, we'll return the lights that are on.

  For our data structure, we'll use an array to track the states of the lights. Since each light has two possible states, it's natural to use the boolean values of `true` and `false` to represent whether a light is on or off. This has the added benefit of allowing us to use the `!` unary operator to easily toggle a light's state.

  Since the lights are numbered starting from `1`, one approach we can consider is to have our array indices also start from `1`. In other words, leave the `0` index as `undefined` and avoid using it, and treat the element at index `1` as the first element of the array.

  We don't use this approach in our solution because it's not very compatible with our algorithm. For example, it makes it harder to use the list processing methods of `Array`. However, this does not mean that this approach won't work well with your solution. Depending on the direction you decide take, it's definitely worth thinking about.

  Algorithm:

  - Loop through the rounds from

     

    ```
    1
    ```

     

    to

     

    ```
    n
    ```

    , and for each round:

    - If the current round is `i`, toggle the lights whose indices are multiples of `i`.
    - Use `map` to return a new array to represent the new states.

  - Filter/map the lights array to return a new array containing the indices of the lights that are on.

##### Solution

```javascript
function lightsOn(n) {
  let lights = initializeLights(n);
  
  for (let i = 1; i <= n; i += 1) {
    lights = toggleLights(lights, i);
  }
  
  let result = [];
  for (let i = 0; i < n; i += 1) {
    if (lights[i]) {
      result.push(i + 1);
    }
  }
  
  return result;
}

function initializeLights(n) {
  const lights = [];
  
  for (let i = 0; i < n; i += 1) {
    lights.push(false);
  }
  
  return lights;
}

function toggleLights(lights, round) {
  return lights.map((light, index) => (index + 1) % round === 0 ? !light : light);
}
```

