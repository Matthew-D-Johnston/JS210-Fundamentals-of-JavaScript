function timeOfDay(deltaMinutes) {
  let date = new Date();
  date.setTime(0);
  date.setMinutes(deltaMinutes);
  
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  
  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);
  
  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }
  
  return numberString;
}

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));
