// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  let words = x.split(' '),
    result,
    max = 0;
  words.forEach((word) => {
    let points = 0;
    let counter = 0;
    while (counter < word.length) {
      points += word.charCodeAt(counter) - 96;
      counter++;
    }
    if (points > max) {
      max = points;
      result = word;
    }
    points = 0;
    counter = 0;
  });

  return result;
}

console.log(high('man i need a taxi up to ubud'));
