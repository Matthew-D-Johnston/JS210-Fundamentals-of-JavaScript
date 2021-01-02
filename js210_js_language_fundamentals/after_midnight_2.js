const MINUTES_PER_MILLISECOND = 1 / 60000;

function afterMidnight(timeStr) {
  let baseDate = new Date('January 1, 2000 00:00:00');
  let date = new Date(`January 1, 2000 ${timeStr}:00`);

  let minutes = (date.getTime() - baseDate.getTime()) * MINUTES_PER_MILLISECOND;

  if (minutes === 1440) {
    return 0;
  } else {
    return minutes;
  }
}

function beforeMidnight(timeStr) {
  let minutes = 1440 - afterMidnight(timeStr);
  if (minutes === 1440) {
    return 0;
  } else {
    return minutes;
  }
}

console.log(afterMidnight('12:34'));
console.log(beforeMidnight('12:34'));
console.log(afterMidnight('24:00'));
console.log(beforeMidnight('24:00'));
console.log(afterMidnight('00:00'));
console.log(beforeMidnight('00:00'));