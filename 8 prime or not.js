

var number = +prompt("Enter a number to check: ");
check(number);
function check(){
  if ((number % 2 === 0 || number % 3 === 0) && (number !== 2 && number !== 3) || number === 1)
  {
     document.write("<br> The number is a not prime number");
  }
  else
  {
     document.write("<br> The number is a prime number");
  }
}
