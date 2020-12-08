function getGrade(score1, score2, score3) {
  let meanScore = (score1 + score2 + score3) / 3;

  if (meanScore >= 90) {
    return 'A';
  } else if (meanScore >= 80) {
    return 'B';
  } else if (meanScore >= 70) {
    return 'C';
  } else if (meanScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));
console.log(getGrade(23, 10, 56));
