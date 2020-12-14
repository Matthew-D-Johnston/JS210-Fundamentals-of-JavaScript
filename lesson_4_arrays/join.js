function join(array, string) {
  let joinedString = '';

  for (let index = 0; index < array.length; index += 1) {
    joinedString += String(array[index]);

    if (array.length - index !== 1) {
      joinedString += string;
    }
  }

  return joinedString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));
console.log(join([1, 2, 3], ' and '));
