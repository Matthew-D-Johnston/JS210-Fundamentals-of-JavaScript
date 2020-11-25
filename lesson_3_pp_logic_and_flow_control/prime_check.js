function isPrime(number) {
  let result = true;

  if (number === 0 || number === 1) {
    result = false;
  } else {
    let multiple = parseInt((number + 1) / 2, 10);
      
    while (multiple > 1) {
      if (number % multiple === 0) {
        result = false;
        break;
      }
      
      multiple -= 1;
    }
  }
  
  return result;
}

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(43));
console.log(isPrime(55));
console.log(isPrime(0));
console.log(isPrime(4));
console.log(isPrime(8));