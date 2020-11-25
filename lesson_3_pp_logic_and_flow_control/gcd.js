let gcd = function (num1, num2) {
  let smallestNum;

  if (num1 < num2) {
    smallestNum = num1;
  } else {
    smallestNum = num2;
  }
  
  let greatestCommonDivisor;
  
  for (let divisor = smallestNum; divisor > 0; divisor -= 1) {
    if (num1 % divisor === 0 && num2 % divisor === 0) {
      greatestCommonDivisor = divisor;
      break;
    }
  }

  return greatestCommonDivisor;
};

console.log(gcd(12, 4));
console.log(gcd(15, 10));
console.log(gcd(9, 2));
console.log(gcd(32, 72));


// Further Exploration

function gcd(numbers) {
  while (numbers.length !== 1) {
    let num1 = numbers.pop();
    let num2 = numbers.pop();

    let temp;

    while (num2 !== 0) {
      temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }

    numbers.unshift(num1);
  }

  return numbers[0];
}
