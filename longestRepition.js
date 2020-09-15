//https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

function longestRepetition(s) {
  let arr = ["", 0];
  for(var i = 0; i < s.length; i++){
    let repetitions = 1
    while(s[i] ==s[i+ repetitions]){
      repetitions++
    }
    if(repetitions > arr[1]){
      arr = [s[i], repetitions]
    }
  }
  return arr;
}


console.log(longestRepetition("aaaabb"))