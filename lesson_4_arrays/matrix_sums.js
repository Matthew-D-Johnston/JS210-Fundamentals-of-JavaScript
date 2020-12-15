function matrixSums(arr) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sumsArray = [];

  arr.forEach(function(element) {
    sumsArray.push(element.reduce(reducer));
  });

  return sumsArray;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));