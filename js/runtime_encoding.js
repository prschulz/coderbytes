// Using the JavaScript language, have the function RunLength(str)
// take the str parameter being passed and return a compressed version
// of the string using the Run-length encoding algorithm. This algorithm
// works by taking the occurrence of each repeating character and
// outputting that number along with a single character of the repeating
// sequence. For example: "wwwggopp" would return 3w2g1o2p. The string
// will not contain any numbers, punctuation, or symbols.

function RunLength(str) {

   arr = str.split('');
  rtArr = [];
  var counts = {};
  arr.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
  for (var key in counts){
    rtArr.push(counts[key]);
    rtArr.push(key);
  }

  return rtArr.join('');

}

console.log(RunLength("wwwggopp"));