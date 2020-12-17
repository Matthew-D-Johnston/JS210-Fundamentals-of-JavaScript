function concat(...args) {
  let concatenated = args[0].slice();

  let numOfArguments = args.length;

  for (let index = 1; index < numOfArguments; index += 1) {
    if (Array.isArray(args[index])) {
      let arrayArg = args[index];
      for (let subIndex = 0; subIndex < arrayArg.length; subIndex += 1) {
        concatenated.push(arrayArg[subIndex]);
      }
    } else {
      concatenated.push(args[index]);
    }
  }

  return concatenated;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(concat([1, 2], 'a', ['one', 'two']));
console.log(concat([1, 2], ['three'], 4));


