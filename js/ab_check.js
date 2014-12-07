// Using the JavaScript language, have the function ABCheck(str)
// take the str parameter being passed and return the string true
// if the characters a and b are separated by exactly 3 places
// anywhere in the string at least once (ie. "lane borrowed"
// would result in true because there is exactly three characters
// between a and b). Otherwise return the string false.

function ABCheck(str) {
  arr = str.split(' ').join('').split('');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]=== "a" && arr[i+3]==="b" || arr[i-3]==="b"){
      return true;
    }
  }
  return false;
}

console.log(ABCheck("Laura sobs"));