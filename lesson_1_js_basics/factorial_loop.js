function factorial(number) {
  let result = number;

  if (number === 0) {
    result = 1;
  }

  for (let index = 1; index < number; index += 1) {
    result *= (number - index);
  }

  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
