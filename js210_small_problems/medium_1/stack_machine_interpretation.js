"use strict";

// function minilang(commands) {
//   let register = 0;
//   let stack = [];

//   commands.split(' ').forEach(command => {
//     if (/[0-9]/.test(command)) {
//       register = parseInt(command, 10);
//     } else if (command === 'POP') {
//       let poppedValue = stack.pop();
//       if (poppedValue !== undefined) {
//         register = poppedValue;
//       }
//     } else if (command === 'PUSH') {
//       stack.push(register);
//     } else if (/(ADD|SUB|MULT|DIV|REMAINDER)/.test(command)) {
//       let poppedValue = stack.pop();
//       register = arithmeticOperation(register, poppedValue, command);
//     } else if (command === 'PRINT') {
//       console.log(register);
//     }
//   });
// }

// function arithmeticOperation(registerValue, stackValue, operation) {
//   switch (operation) {
//     case 'ADD':
//       return registerValue + stackValue;
//     case 'SUB':
//       return registerValue - stackValue;
//     case 'MULT':
//       return registerValue * stackValue;
//     case 'DIV':
//       return Math.round(registerValue / stackValue);
//     case 'REMAINDER':
//       return registerValue % stackValue;
//   }
// }


// console.log(minilang('PRINT'));
// console.log(minilang('5 PUSH 3 MULT PRINT'));
// console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// console.log(minilang('5 PUSH POP PRINT'));
// console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// console.log(minilang('-3 PUSH 5 SUB PRINT'));
// console.log(minilang('6 PUSH'));

// Further Exploration

const ValidCommands = ['POP', 'PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'PRINT'];

function minilang(commandList) {
  let commands = commandList.split(' ');
  let register = 0;
  let stack = [];

  for (let index = 0; index < commands.length; index += 1) {
    let command = commands[index];
    if (!validCommand(command)) {
      return `Error: invalid command ${command}.`;
    } else if (/[0-9]/.test(command)) {
      register = parseInt(command, 10);
    } else if (command === 'POP') {
      let poppedValue = stack.pop();
      if (poppedValue === undefined) {
        return `Error: empty stack.`;
      }
      register = poppedValue;
    } else if (command === 'PUSH') {
      stack.push(register);
    } else if (/(ADD|SUB|MULT|DIV|REMAINDER)/.test(command)) {
      let poppedValue = stack.pop();
      register = arithmeticOperation(register, poppedValue, command);
    } else if (command === 'PRINT') {
      console.log(register);
    }
  }
}

function arithmeticOperation(registerValue, stackValue, operation) {
  switch (operation) {
    case 'ADD':
      return registerValue + stackValue;
    case 'SUB':
      return registerValue - stackValue;
    case 'MULT':
      return registerValue * stackValue;
    case 'DIV':
      return Math.round(registerValue / stackValue);
    case 'REMAINDER':
      return registerValue % stackValue;
  }
}

function validCommand(command) {
  return /^[+-]?[0-9]/.test(command) || ValidCommands.includes(command);
}

console.log(minilang('PRINT'));
console.log(minilang('5 PUSH 3 MULT PRINT'));
console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
console.log(minilang('5 PUSH POP PRINT'));
console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
console.log(minilang('-3 PUSH 5 SUB PRINT'));
console.log(minilang('6 PUSH'));
console.log(minilang('6 PUSH POP POP'));
console.log(minilang('6 PUSH PO POP'));


