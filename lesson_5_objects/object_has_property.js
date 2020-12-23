function objectHasProperty(object, name) {
  for (let n in object) {
    if (n === name) {
      return true;
    }
  }

  return false;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));
console.log(objectHasProperty(pets, 'lizard'));
console.log(objectHasProperty(pets, 'mice'));
