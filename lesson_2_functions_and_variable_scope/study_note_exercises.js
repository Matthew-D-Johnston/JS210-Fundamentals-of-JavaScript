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

// bar();              // logs undefined
// var foo = 'hello';

// function bar() {
//   console.log(foo);
// }


// let basket = 'empty';

// function goShopping() {
//   function shop1() {
//     basket = 'tv';
//   }

//   console.log(basket);

//   let shop2 = function() {
//     basket = 'computer';
//   };

//   const shop3 = () => {
//     let basket = 'play station';
//     console.log(basket);
//   };

//   shop1();
//   shop2();
//   shop3();

//   console.log(basket);
// }

// goShopping();


// function hello() {
//   let a = 'hello';
// }

// hello();
// console.log(a);

// console.log(a);

// let a = 1;


// console.log(a);

// function hello() {
//   a = 1;
// }

// function say() {
//   if (false) {
//     let a = 'hello from inside a block';
//   }

//   console.log(a);
// }

// say();

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     var a = 'hello again';
//   }
// }

// hello();
// console.log(a);

// function hello() {
//   a = 'hello';
//   console.log(a);

//   if (false) {
//     let a = 'hello again';
//   }
// }

// hello();
// console.log(a);

// var a = 'hello';

// for (var index = 0; index < 5; index += 1) {
//   var a = index;
// }

// console.log(a);

// let a = 'hello';

// for (let index = 0; index < 5; index += 1) {
//   let a = index;
// }

// console.log(a);

// var a = 'global';

// function checkScope() {
//   var a = 'local';
//   const nested = function() {
//     var a = 'nested';
//     let superNested = () => {
//       a = 'superNested';
//       return a;
//     };

//     return superNested();
//   };

//   return nested();
// }

// console.log(checkScope());
// console.log(a);

let a = 'outer';
let b = 'outer';

console.log(a);
console.log(b);
setScope(a);
console.log(a);
console.log(b);

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}