// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// solution("camelCasing")  ==  "camel Casing"

let  solution = (string) => {
  let returnString = ''
  for(let i = 0; i < string.length; i++){
    if(string.charCodeAt(i + 1) <= 90){
      returnString += string[i]
      returnString += " "
    } else {
      returnString += string[i]
    }
  }
  return returnString
}

console.log(solution('camelCasing'))