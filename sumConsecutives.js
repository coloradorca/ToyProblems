// Codewars Kata level 6

// https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript


// You are given a list/array which contains only integers (positive and negative). Your job is to sum only the numbers that are the same and consecutive. The result should be one list.

// Extra credit if you solve it in one line. You can assume there is never an empty list/array and there will always be an integer.

// Same meaning: 1 == 1

// 1 != -1

// #Examples:

// [1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

// """So as you can see sum of consecutives 1 is 1
// sum of 3 consecutives 4 is 12
// sum of 0... and sum of 2
// consecutives 3 is 6 ..."""

// [1,1,7,7,3] # should return [2,14,3]
// [-5,-5,7,7,12,0] # should return [-10,14,12,0]

function sumConsecutives(s) {
  //instantiate a temporary sum variable and return array that will get added to from consecutive numbers
  let array = [], sum = 0;
  //loop thru the array
  for(let i = 0; i < s.length; i++){
  //conditional for seeing whether next element is a consective
    if(s[i] === s[i +1]){
    //if so, add it to the sum
      sum += s[i]
    }
    //if no consecutive number
    if(s[i] !== s[i +1] && sum === 0){
      array.push(s[i])
    }
    //if no consecutive, sum the numbers and push them, then zero out the sum
    if(s[i] !== s[i +1] && sum !== 0){
      sum += s[i]
      array.push(sum)
    // zero out that sum when there isn't a consecutive number
      sum = 0;
      }
    }
return array;
}

console.log(sumConsecutives([-5,-5,7,7,12,0]))