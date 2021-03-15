"use strict";

function multiplyAllPairs(array1, array2) {
  const Results = [];

  array1.forEach(outerInteger => {
    array2.forEach(innerInteger => Results.push(outerInteger * innerInteger));
  });

  return Results.sort(sortIntegers);
}

function sortIntegers(integer1, integer2) {
  return integer1 - integer2;
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
