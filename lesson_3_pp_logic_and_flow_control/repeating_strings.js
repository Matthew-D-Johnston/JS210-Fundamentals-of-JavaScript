function repeat(string, times) {
  let repeatedString = undefined;

  if (typeof(times) === 'number' && times >= 0) {
    repeatedString = '';

    for (let index = 0; index < times; index += 1) {
      repeatedString += string;
    }
  }

  console.log(repeatedString);
}

repeat('abc', 1);
console.log('------');
repeat('abc', 2);
console.log('------');
repeat('abc', -1);
console.log('------');
repeat('abc', 0);
console.log('------');
repeat('abc', 'a');
console.log('------');
repeat('abc', false);
console.log('------');
repeat('abc', null);
console.log('------');
repeat('abc', '   ');
console.log('------');
repeat('abc', 4);
