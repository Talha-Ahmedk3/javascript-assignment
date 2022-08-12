
arn();
function arn(){
  var arr = [];
  var total = +prompt("How many numbers: ");
  
  for(var i = 0; i<total; i++) {
    arr[i] = +prompt("Enter number");
  }
  document.write(arr+"<br> <br>");
  var sg = 0;
  var greatest= arr[0];
  var sl = 99999999999999;
  var lowest = arr[0];
  for(var i = 1; i<arr.length; i++){
    if(arr[i]>greatest){
    sg = greatest;
    greatest = arr[i];
    }
    else if (arr[i]!==greatest && arr[i]>sg){
      sg = arr[i];
    }
  }
  for(var i = 1; i<arr.length; i++){
    if(arr[i]<lowest){
    sl = lowest;
    lowest = arr[i];
    }
    else if (arr[i]!==lowest && arr[i]<sl){
      sl = arr[i];
    }
  }
  document.write(sg+", "+sl);
}

