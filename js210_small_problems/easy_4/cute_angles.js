"use strict"

// function dms(angle) {
//   let degrees = Math.floor(angle);
//   angle -= degrees;
//   angle *= 60;

//   let minutes = Math.floor(angle);
//   angle -= minutes;
//   angle *= 60;

//   let seconds = Math.floor(angle);

//   minutes = zeroPads(minutes);
//   seconds = zeroPads(seconds);

//   return degrees + String.fromCharCode(176) + minutes + "'" + seconds + "\"";
// }

// function zeroPads(number) {
//   if (number < 10) {
//     return '0' + String(number);
//   } else {
//     return String(number);
//   }
// }


// console.log(dms(30));
// console.log(dms(76.73));
// console.log(dms(254.6));
// console.log(dms(93.034773));
// console.log(dms(0));
// console.log(dms(360));

// Further Exploration

function dms(angle) {
  while (angle > 360) {
    angle -= 360;
  }

  while (angle < 0) {
    angle += 360;
  }

  let degrees = Math.floor(angle);
  angle -= degrees;
  angle *= 60;

  let minutes = Math.floor(angle);
  angle -= minutes;
  angle *= 60;

  let seconds = Math.floor(angle);

  minutes = zeroPads(minutes);
  seconds = zeroPads(seconds);

  return degrees + String.fromCharCode(176) + minutes + "'" + seconds + "\"";
}

function zeroPads(number) {
  if (number < 10) {
    return '0' + String(number);
  } else {
    return String(number);
  }
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));
console.log(dms(-1));
console.log(dms(400));
console.log(dms(-40));
console.log(dms(-420));


