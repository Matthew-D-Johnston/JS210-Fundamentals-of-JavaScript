function wordCount(string) {
  let names = string.split(' ');
  let object = {};

  for (let index = 0; index < names.length; index += 1) {
    if (object[names[index]]) {
      object[names[index]] += 1;
    } else {
      object[names[index]] = 1;
    }
  }

  return object;
}

console.log(wordCount('box car cat bag box'));
