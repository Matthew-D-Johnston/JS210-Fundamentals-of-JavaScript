"use strict"

function countOccurrences(array) {
  let counts = {};

  for (let i = 0; i < array.length; i += 1) {
    if (counts[array[i]]) {
      counts[array[i]] += 1;
    } else {
      counts[array[i]] = 1;
    }
  }

  let elements = Object.keys(counts);

  elements.forEach(element => console.log(element + ' => ' + counts[element]));
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
