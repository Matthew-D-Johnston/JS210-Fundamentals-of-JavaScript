let rlSync = require('readline-sync');

let age = Number(rlSync.question('How old are you? '));

for (let index = 10; index <= 40; index += 10) {
  if (index === 10) {
    console.log(`You are ${age} years old.`);
  }

  console.log(`In ${index} years, you will be ${age + index} years old.`);
}



