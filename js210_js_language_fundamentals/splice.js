function splice(array, start, deleteCount, ...elems) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  let deleted = [];
  let undeleted = []

  let end = start + deleteCount - 1;

  for (let index = 0; index < array.length; index += 1) {
    if (index >= start && index <= end) {
      deleted.push(array[index]);
    } else {
      undeleted.push(array[index]);
    }
  }

  while (array.length > 0) {
    array.pop();
  }

  for (let index = 0; index < undeleted.length; index += 1) {
    if (index === start) {
      while (elems.length > 0) {
        array.push(elems.shift());
      }
    }

    array.push(undeleted[index]);
  }

  while (elems.length > 0) {
    array.push(elems.shift());
  }

  return deleted;
}

console.log(splice([1, 2, 3], 1, 2));
console.log(splice([1, 2, 3], 1, 3));
console.log(splice([1, 2, 3], 1, 0));
console.log(splice([1, 2, 3], 0, 1));
console.log(splice([1, 2, 3], 1, 0, 'a'));

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));
console.log(arr2);

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));
console.log(arr3);

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));
console.log(splice(arr4, 1, 0, 'a'));
console.log(arr4);

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));
console.log(arr5);