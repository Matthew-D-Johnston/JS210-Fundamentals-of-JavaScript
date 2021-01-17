function showMultiplicativeAverage(numbers) {
  let total = 1;

  for (let index = 0; index < numbers.length; index += 1) {
    total *= numbers[index];
  }

  let average = total / numbers.length;
  return average.toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));
