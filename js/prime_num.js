// Using the JavaScript language, have the function PrimeTime(num)
// take the num parameter being passed and return the string true if
// the parameter is a prime number, otherwise return the string false.
// The range will be between 1 and 2^16.

function PrimeTime(num) {
  if (num <= 1) return false;
  if (num <= 3 && num > 1) return true;
  if (num % 2 === 0 || num%3 === 0) return false;
  for (var i = 5; i * i <= num; i+6) {
    if(num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

