function fibonacci(location) {
  let firstNum = 1;
  let secondNum = 1;

  let result;

  if (location === 1 || location === 2) {
    return 1;
  } else {
    for (let index = 3; index <= location; index += 1) {
      result = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = result;
    }
  }
  
  return result;
}

function findFibonacciIndexByLength(length) {
  let location = 0;
  let currentLocation = 1;

  while (location === 0) {
    let currentLength = String(fibonacci(currentLocation)).length;

    if (currentLength === length) {
      location = currentLocation;
    }

    currentLocation += 1;
  }

  return location;
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(16));
