function repeatedCharacters(string) {
  let result = {};

  for (let index = 0; index < string.length; index += 1) {
    let regex = RegExp(string[index], 'gi');
    let total = string.match(regex).length;

    if (total > 1) {
      result[string[index].toLowerCase()] = total;
    }
  }

  return result;
}

console.log(repeatedCharacters('Programming'));
console.log(repeatedCharacters('Combination'));
console.log(repeatedCharacters('Pet'));
console.log(repeatedCharacters('Paper'));
console.log(repeatedCharacters('Baseless'));
