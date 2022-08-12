

var str = prompt("Enter a string to check vowels: ");
str = str.toLowerCase();
check(str);
function check(){
  var count = 0;
  for(i=0; i<str.length; i++)
  {
    if (str.charAt(i)==="a" || str.charAt(i)==="e" || str.charAt(i)==="i" || str.charAt(i)==="o" || str.charAt(i)==="u")
    {
       count = count + 1;
    }
  }
  document.write(count + " vowels");
}

