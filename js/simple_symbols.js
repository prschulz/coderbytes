// Using the JavaScript language, have the function SimpleSymbols(str)
// take the str parameter being passed and determine if it is an
// acceptable sequence by either returning the string true or false.
// The str parameter will be composed of + and = symbols with several
// letters between them (ie. ++d+===+c++==a) and for the string to be
// true each letter must be surrounded by a + symbol. So the string to
// the left would be false. The string will not be empty and will have
// at least one letter.

function SimpleSymbols(str) {

  strArr = str.split('');
  var i = 0;
  var bool = false;

  //end cases are always false
  if (strArr[i] !== "=" && strArr[i] !== "+") return false;
  if (strArr[strArr.length-1] !== "=" && strArr[strArr.length-1] !== "+") return false;

  strArr.forEach(function(c) {
    if(c === "=" || c === "+"){
      if (bool === false){
        bool = c === "+" ? true : false;
      }
    }
    else {
      if (!bool) return false;
      if (bool && strArr[i+1] !== "+" || strArr[i+1] !== "="){
        return false;
      }
      else if (bool && strArr[i+1] === "="){
        for (var n = 1; n < strArr.length - i; n++) {
          if(strArr[i+n] !== "+" || strArr[i+n] !== "=" ){
            return false;
          }
        }// end for loop
      }//end else if
    } //end else
    i++; //index counter
  }); // end forEach loop

  return true;
} //end of function

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols("f++d+");
SimpleSymbols("++d+===+c++==a");
SimpleSymbols("+d+=3=+s+");
SimpleSymbols("+d+=3==+s+");

