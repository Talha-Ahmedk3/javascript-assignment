
var initial = prompt("Enter string: ");
upd(initial);
function upd(){
 var arr = [];
 for(var i = 0; i<initial.length; i++){
  arr[i] = initial.charAt(i);
 }
 arr.sort();
 var s = initial.length;
 initial = "";
 for(var j = 0; j<s; j++){
  initial = initial + arr[j];
 }
 document.write(initial);
}
