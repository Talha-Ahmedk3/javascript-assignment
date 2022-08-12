

var str = prompt("Enter a string to convert: ");
str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
convert(str);
function convert()
{
  var str1 = "";
  for(var i=0; i<str.length; i++)
 { 
   if (str.charAt(i) !== " ")
   {
    str1 = "" + str.slice(i,i+1);
    document.write(str1);
   }
  else
  {
    str1 = " " + str.slice(i+1,i+2).toUpperCase();
    document.write(str1);
    i++;
  }
 }
}