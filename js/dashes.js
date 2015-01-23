// Using the JavaScript language, have the function DashInsert(str)
// insert dashes ('-') between each two odd numbers in str. For example:
// if str is 454793 the output should be 4547-9-3. Don't count zero as an
// odd number.

function DashInsert(str) {
  var arr = str.split('');
  var next = 0;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    next = arr[i+1];
    if(arr[i] % 2 === 1 && next % 2 === 1){
      newArr.push("-");
    }
  }
  return newArr.join('');
}

console.log(DashInsert("99946"));