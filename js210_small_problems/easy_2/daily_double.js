// function crunch(string) {
//   let newString = '';

//   for (let index = 0; index < string.length; index += 1) {
//     if (string[index] !== string[index - 1]) {
//       newString += string[index];
//     }
//   }

//   return newString;
// }

// console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
// console.log(crunch('4444abcabccba') === "4abcabcba");
// console.log(crunch('ggggggggggggggg') === "g");
// console.log(crunch('a') === "a");
// console.log(crunch('') === "");

// Further Exploration

function crunch(string) {
  let newString = string;

  for (let index = 0; index < string.length; index +=1) {
    let regex = RegExp(`${string[index]}{2,}`);
    newString = newString.replace(regex, string[index]);
  }

  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");
