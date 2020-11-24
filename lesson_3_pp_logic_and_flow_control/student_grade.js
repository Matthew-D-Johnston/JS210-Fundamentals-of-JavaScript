// let score1 = Number(prompt('Enter score 1: '));
// let score2 = Number(prompt('Enter score 2: '));
// let score3 = Number(prompt('Enter score 3: '));

// let averageScore = (score1 + score2 + score3) / 3;

// let grade;

// if (averageScore >= 90) {
//   grade = 'A';
// } else if (averageScore >= 70 && averageScore < 90) {
//   grade = 'B';
// } else if (averageScore >= 50 && averageScore < 70) {
//   grade = 'C';
// } else {
//   grade = 'F';
// }

// console.log(`Based on the avearge of your 3 scores your letter grade is "${grade}".`);

// let rlSync = require('readline-sync');

// let score1 = Number(rlSync.question('Enter score 1: '));
// let score2 = Number(rlSync.question('Enter score 2: '));
// let score3 = Number(rlSync.question('Enter score 3: '));

// let averageScore = (score1 + score2 + score3) / 3;

// let grade;

// if (averageScore >= 90) {
//   grade = 'A';
// } else if (averageScore >= 70 && averageScore < 90) {
//   grade = 'B';
// } else if (averageScore >= 50 && averageScore < 70) {
//   grade = 'C';
// } else {
//   grade = 'F';
// }

// console.log(`Based on the avearge of your 3 scores your letter grade is "${grade}".`);

// Further Exploration

let rlSync = require('readline-sync');

let numberOfScores = Number(rlSync.question('How many scores do you want to enter? '));

let scores = [];

for (let index = 1; index <= numberOfScores; index += 1) {
  let score = Number(rlSync.question(`Enter score ${index}: `));

  scores.push(score);
}

const SumScores = (total, currentScore) => total + currentScore;

let scoreTotal = scores.reduce(SumScores);

let averageScore = scoreTotal / numberOfScores;

if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70) {
  grade = 'B';
} else if (averageScore >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log(`Based on the avearge of your ${numberOfScores} scores your letter grade is "${grade}".`);




