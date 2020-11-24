let password = 'password';

let rlSync = require('readline-sync');
let validated = false;

for (let attempts = 1; attempts <= 3; attempts += 1) {
  let guess = rlSync.question('What is the password: ');

  if (guess === password) {
    validated = true;
    break;
  }
}

if (validated) {
  console.log('You have successfully logged in.');
} else {
  console.log('You have been denied access');
}


