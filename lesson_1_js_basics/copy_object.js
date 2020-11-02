let objToCopy = {
  foo: 1,
  bar: 2,
}

function copyObj(obj, keys = []) {
  let newObj = {};

  if (keys.length === 0) {
    newObj = obj;
  } else {
    keys.forEach(function(key) {
      newObj[key] = obj[key];
    });
  }

  return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);
console.log(newObj.bar);

let newObj2 = copyObj(objToCopy, ['foo']);
console.log(newObj2.foo);
console.log(newObj2.bar);

