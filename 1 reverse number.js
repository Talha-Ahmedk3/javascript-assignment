
var likho = prompt("Enter a number: ");
var reversed;

for(var i=(likho.length-1); i>=0; i--)
{
  reversed = likho.slice(i,i+1);
  document.write(reversed);
}
