

var word = prompt("Enter a word to check: ");
var reversed = "";
for(var i=(word.length-1); i>=0; i--)
{
  reversed = reversed + word.slice(i,i+1);
}
document.write(reversed);
if (reversed === word)
{
    document.write("<br> <br>The word is palindrome");
}
else
{
    document.write("<br> <br> The word is not palindrome");
}
/* alternative

for(var i=(word.length-1); i>=0; i--)
{
  reversed = reversed + word.charAt(i);
}*/
