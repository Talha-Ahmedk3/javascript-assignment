
var word = prompt("Enter a word: ");
for(var i = 0; i<word.length; i++)
{var upd = "";
  for(var j=i; j<word.length; j++)
  {
  upd = upd + word.slice(j,j+1);
  document.write(upd + ",");
  }
}
