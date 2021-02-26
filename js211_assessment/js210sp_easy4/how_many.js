"use strict";

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(vehicles) {
  let count = {};

  vehicles.forEach(function (vehicle) {
    if (count[vehicle]) {
      count[vehicle] += 1;
    } else {
      count[vehicle] = 1;
    }
  });

  for (let vehicle in count) {
    console.log(`${vehicle} => ${count[vehicle]}`);
  }
}

countOccurrences(vehicles);
