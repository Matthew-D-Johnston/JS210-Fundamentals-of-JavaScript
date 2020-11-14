// console.log(bar);
// var bar = 3;
// console.log(bar);

// console.log(foo);
// let foo;
// console.log(foo);

// function foo() {
//   if (true) {
//     function bar() {
//       console.log("bar");
//     }
//   } else {
//     function qux() {
//       console.log("qux");
//     }
//   }

//   console.log(bar);
//   bar();

//   console.log(qux);
//   qux();
// }

// foo();

// console.log(hello());

// var hello = function () {
//   return 'hello world';
// };


// console.log(hello());    // raises "Uncaught TypeError: hello is not a function"

// let hello = function () {
//   return 'hello world';
// };

bar();              // logs undefined
var foo = 'hello';

function bar() {
  console.log(foo);
}