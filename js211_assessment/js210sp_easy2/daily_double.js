"use strict";

function crunch(text) {
  let result = text[0] || '';

  for (let index = 1; index < text.length; index += 1) {
    let char = text[index];

    result += (result[result.length - 1] === char) ? '' : char;
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));

