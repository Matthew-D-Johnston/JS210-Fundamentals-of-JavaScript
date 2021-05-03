"use strict";

const WORD_LISTS = { nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
                     adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
                     verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
                     adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
                   };


function madlibs(template) {
  let nounList = template.match(/'noun[0-9]?'/g) || [];
  let verbList = template.match(/'verb[0-9]?'/g) || [];
  let adjectiveList = template.match(/'adjective[0-9]?'/g) || [];
  let adverbList = template.match(/'adverb[0-9]?'/g) || [];

  let nounCount = nounList.length;
  let verbCount = verbList.length;
  let adjectiveCount = adjectiveList.length;
  let adverbCount = adverbList.length;

  let nouns = makeRandomWordList('nouns', nounCount);
  let verbs = makeRandomWordList('verbs', verbCount);
  let adjectives = makeRandomWordList('adjectives', adjectiveCount);
  let adverbs = makeRandomWordList('adverbs', adverbCount);

  nouns.forEach(noun => template = template.replace(/'noun[0-9]?'/g, noun));
  verbs.forEach(verb => template = template.replace(/'verb[0-9]?'/, verb));
  adjectives.forEach(adjective => template = template.replace(/'adjective[0-9]?'/, adjective));
  adverbs.forEach(adverb => template = template.replace(/'adverb[0-9]?'/, adverb));

  return template;
}

function randomWordGenerator(type) {
  let words = WORD_LISTS[type];
  let randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function makeRandomWordList(type, count) {
  let words = [];
  let index = 1;

  while (index <= count) {
    words.push(randomWordGenerator(type));
    index += 1;
  }

  return words;
}

let template1 = "The 'adjective1' brown 'noun1' 'adverb1'\n'verb1' the 'adjective2' yellow\n'noun2', who 'adverb2' 'verb2' his\n'noun3' and looks around.";
let template2 = "The 'noun' 'verb' the 'noun''s 'noun'.";

console.log(madlibs(template1));
console.log('-----------');
console.log(madlibs(template2));
