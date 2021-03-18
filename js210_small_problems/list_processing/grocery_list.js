"use strict";

function buyFruit(groceries) {
  let result = [];

  groceries.forEach(item => {
    result = result.concat(stringMultiplier(item[0], item[1]));
  });

  return result;
}

function stringMultiplier(string, number) {
  let strings = [];

  for (let index = 1; index <= number; index += 1) {
    strings.push(string);
  }

  return strings;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
