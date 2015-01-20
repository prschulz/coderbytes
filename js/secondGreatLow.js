// I HAVE THE FLU! THIS CODE IS POO!

// Using the JavaScript language, have the function SecondGreatLow(arr)
// take the array of numbers stored in arr and return the second lowest and
// second greatest numbers, respectively, separated by a space. For example:
// if arr contains [7, 7, 12, 98, 106] the output should be 12 98.
// The array will not be empty and will contain at least 2 numbers. It can get
// tricky if there's just two numbers!

function SecondGreatLow(arr) {
  //if length is 2 edge case
  if (arr.length === 2){
    sortedArr = arr.sort();
    return sortedArr[1]+" "+sortedArr[0];
  }

  var min, max, min2, max2;
  sortedArr = arr.sort();
  min = sortedArr[0];
  max = sortedArr[sortedArr.length];
  min2 = max;
  max2 = min;
  for (var i = 0; i < sortedArr.length; i++) {
    //set min2
    if (sortedArr[i] !== min){
      if(sortedArr[i] < min2){
        min2 = sortedArr[i];
      }
    }
    //set max2
    if (sortedArr[i] !== max){
      if(sortedArr[i] > max2){
        max2 = sortedArr[i];
      }
    }
  }//end loop
  return min2+" "+max2;
}//end function


SecondGreatLow([7, 7, 12, 98, 106]);