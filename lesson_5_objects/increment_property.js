function incrementProperty(object, string) {
  if (object[string] === undefined) {
    object[string] = 1;
  } else {
    object[string] += 1;
  }

  return object[string];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));
console.log(wins);
console.log(incrementProperty(wins, 'lucy'));
console.log(wins);
