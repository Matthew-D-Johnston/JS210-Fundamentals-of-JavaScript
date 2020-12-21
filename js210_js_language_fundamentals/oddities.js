function oddities(array) {
  const oddElements = [];

  for (let i = 0; i < array.length; i += 2) {
    oddElements. push(array[i]);
  }

  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6]) === [2, 4, 6]);
console.log(oddities(['abc', 'def']) === ['abc']);
