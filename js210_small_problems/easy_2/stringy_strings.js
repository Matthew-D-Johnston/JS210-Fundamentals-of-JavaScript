function stringy(integer) {
  let string = '';
  let zeros = false;

  for (let index = 1; index <= integer; index += 1) {
    zeros ? string += '0' : string += '1';

    zeros = !zeros;
  }

  return string;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");
