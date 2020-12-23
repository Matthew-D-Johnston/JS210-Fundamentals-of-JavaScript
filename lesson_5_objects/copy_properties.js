function copyProperties(object1, object2) {
  let numberOfPropertiesCopied = 0;

  for (let name in object1) {
    object2[name] = object1[name];
    numberOfPropertiesCopied += 1;
  }

  return numberOfPropertiesCopied;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));
console.log(sal);
