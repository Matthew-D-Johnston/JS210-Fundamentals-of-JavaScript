false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; //  false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

function evenOrOdd(number) {
  let remainder = number % 2;

  if (remainder === 1) {
    console.log('odd');
  } else if (remainder === 0) {
    console.log('even');
  } else {
    console.log('error: number must be an integer')
  }
}

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('error: number must be an integer');
    return;
  }

  let remainder = number % 2;

  if (remainder === 1) {
    console.log('odd');
  } else {
    console.log('even');
  }
}

if (foo()) {
  return 'bar';
} else {
  return qux();
}

function allCaps(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

function numberRange(number) {
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number >= 51 && number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100`);
  } else {
    console.log(`${number} is less than 0`);
  }
}