

var str = prompt("Enter a string to check: ");

check(str)

function check(){
var longestlength = 0;
var str1 = "";
var long;
  for(var i = 0; i < str.length; i++){
    if (str.charAt(i) !== " "){
      str1 = str1 + str.slice(i,i+1);
      if (str1.length > longestlength){
        longestlength = str1.length;
        long = str1; 
      }
    }
    else{
      str1 = "";
    }
  }
  document.write(long + " is the longest word in string with length "+longestlength);
}
