"use strict";

function binarySearch(array, searchValue) {
  let arrayCopy = array.slice();
  const iterations = Math.round(arrayCopy.length / 2);
  let indexTracker = 0;

  for (let iteration = 1; iteration <= iterations; iteration += 1) {
    let midpoint = Math.floor(arrayCopy.length / 2);

    if (arrayCopy[midpoint] === searchValue) {
      return midpoint + indexTracker;
    } else if (arrayCopy[midpoint] > searchValue) {
      arrayCopy = arrayCopy.slice(0, midpoint);
    } else {
      arrayCopy = arrayCopy.slice(midpoint);
      indexTracker += midpoint;
    }
  }

  return -1;
}

const yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));
console.log(binarySearch(yellowPages, 'Apple Store'));
console.log(binarySearch(yellowPages, 'Zooper'));

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));
