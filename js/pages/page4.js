var page4ObjInner=pageArray[3];
bakery.setExpenditureDataObject = function(){
if (document.getElementById("mnthlyTotalExpenses")== null)
  page4ObjInner.setFixedExpVal("");
else if(document.getElementById("mnthlyTotalExpenses").value=='undefined')
  page4ObjInner.setFixedExpVal("");
else
 page4ObjInner.setFixedExpVal(document.getElementById("mnthlyTotalExpenses").value);
}

bakery.restoreExpenditureDataObject = function(){

 if(page4ObjInner  !=null)
 {

 document.getElementById("mnthlyTotalExpenses").value=page4ObjInner.getFixedExpVal();
   
 }
 
}

bakery.evaluateFixedExp=function(){

var totalMnthlyExpActual=parseInt(empSalary,10)+parseInt(pageArray[1].getExpRental().substring(1,pageArray[1].getExpRental().length),10)+parseInt(pageArray[1].getExpUtility().substring(1,pageArray[1].getExpUtility().length),10);

if(totalMnthlyExpActual==parseInt(document.getElementById('mnthlyTotalExpenses').value))
{
document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
document.getElementById("evalResult").classList.remove('fixedEvalWrong');
document.getElementById("evalResult").classList.add('fixedEvalCorrect');
document.getElementById("mnthlyTotalExpenses").style.borderBottom = "solid 2px #797979";
document.getElementById("nxtButtonId").style.display="inline";

}

else
{
document.getElementById('evalResult').innerHTML="Oops, try again";
document.getElementById("evalResult").classList.remove('fixedEvalCorrect');
document.getElementById("evalResult").classList.add('fixedEvalWrong');
document.getElementById("mnthlyTotalExpenses").style.borderBottom = "solid 2px #C44575";
document.getElementById("nxtButtonId").style.display="none";

}
}




