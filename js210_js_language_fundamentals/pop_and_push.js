// pop
function pop(arr) {
  let value = arr[arr.length - 1];
  
  if (arr.length > 0) {
    arr.length = arr.length -1;
  }

  return value;
}

const array1 = [1, 2, 3];
console.log(pop(array1));
console.log(array1);
console.log(pop([]));
console.log(pop([1, 2, ['a', 'b', 'c']]));

// push
function push(...args) {
  let newArray = args[0];
  let startIndex = args[0].length;
  let endIndex = startIndex + args.length - 2;
  let argsIndex = 1;

  for (let index = startIndex; index <= endIndex; index += 1) {
    newArray[index] = args[argsIndex];
    argsIndex += 1;
  }

  return newArray.length;
}

const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));
console.log(array2);
console.log(push([1, 2], ['a', 'b']));
console.log(push([], 1));
console.log(push([]));
