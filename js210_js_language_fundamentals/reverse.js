function reverse(arg) {
  let startIndex = arg.length - 1;

  if (Array.isArray(arg)) {
    let arr = [];
    for (let index = startIndex; index >= 0; index -= 1) {
      arr.push(arg[index]);
    }

    return arr;
  } else {
    let str = '';
    for (let index = startIndex; index >= 0; index -= 1) {
      str += arg[index];
    }

    return str;
  }
}

console.log(reverse('Hello'));
console.log(reverse('a'));
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([]));

const array = [1, 2, 3];
console.log(reverse(array));
console.log(array);

