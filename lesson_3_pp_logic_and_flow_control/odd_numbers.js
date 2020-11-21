function logOddNumbers(num) {
  for (let index = 1; index <= num; index += 2) {
    console.log(index);
  }
}

logOddNumbers(19);

console.log('------------------------');
console.log('Further Exploration');

// Further Exploration

function logOddNumbers(num) {
  for (let index = 1; index <= num; index += 1) {
    if (index % 2 === 0) {
      continue;
    }

    console.log(index);
  }
}

logOddNumbers(19);
