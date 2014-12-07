// Using the JavaScript language, have the function LetterCapitalize(str)
// take the str parameter being passed and capitalize the first letter of
// each word. Words will be separated by only one space.

function LetterCapitalize(str) {

  strArr = str.split(' ');
  newStr = [];
  strArr.forEach(function(word){
    capWord = word.charAt(0).toUpperCase() + word.slice(1);
    newStr.push(capWord);
  });
  return console.log(newStr.join(' '));

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize("this is it");

