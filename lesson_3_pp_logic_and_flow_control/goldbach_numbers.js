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

function checkGoldbach(expectedSum) {
  let goldbachPairs = [];

  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
  } else {
    for (let num1 = expectedSum / 2; num1 <= expectedSum - 2; num1 += 1) {
      let num2 = expectedSum - num1;

      if (isPrime(num1) && isPrime(num2)) {
        if (num1 < num2) {
          goldbachPairs.unshift([num1, num2]);
        } else {
          goldbachPairs.unshift([num2, num1]);
        } 
      }
    }
  }
  goldbachPairs.forEach(element => console.log(`${element[0]} ${element[1]}`));
}

checkGoldbach(3);
checkGoldbach(4);
checkGoldbach(12);
checkGoldbach(100);
