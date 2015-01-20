// Using the JavaScript language, have the function Palindrome(str)
// take the str parameter being passed and return the string true if
// the parameter is a palindrome, (the string is the same forward as
// it is backward) otherwise return the string false. For example:
// "racecar" is also "racecar" backwards. Punctuation and numbers will
// not be part of the string.

function Palindrome(str) {

  var forwards = str.split(' ').join('').split('');
  var backwards = [];
  for (var i = 0; i < forwards.length; i++) {
    backwards.unshift(forwards[i]);
  }

  return backwards.join('') === forwards.join('');
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
console.log(Palindrome("racecar"));
console.log(Palindrome("poop"));
console.log(Palindrome("pupppyyyp"));