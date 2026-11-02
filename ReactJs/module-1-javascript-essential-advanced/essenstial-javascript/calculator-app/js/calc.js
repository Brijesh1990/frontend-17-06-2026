// clear the values of input
function inputClr()
{
    document.getElementById("result").value="";
}
// slice a input values from result 
function sliceInput()
{
 var slc=document.getElementById("result").value;
 var res=slc.slice(0,-1);
 document.getElementById("result").value=res;   
}

// create a function to take button values in result 
function inputValue(val)
{
 document.getElementById("result").value+=val;   
}
// create a function for all airthematical calculations
function finalResult()
{
  var x=document.getElementById("result").value;
//   eval()  : evaluate() function 
  var y=eval(x);
  document.getElementById("result").value=y;  
}