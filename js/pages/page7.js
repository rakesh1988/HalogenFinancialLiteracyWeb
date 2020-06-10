var page7ObjInner=pageArray[6];

bakery.setBreakEvenDataObject = function(){

//document.getElementById("sellingPriceTxt").value
	 page7ObjInner.setBreakEvenUnit(document.getElementById("breakEvenUnitTxt").value);
	 
	
}

bakery.restoreBreakEvenDataObject = function()
{

	 if(page7ObjInner  !=null && page7ObjInner.getBreakEvenUnit() !=null )
	 {
		document.getElementById("breakEvenUnitTxt").value=page7ObjInner.getBreakEvenUnit();
	 }
 
}

bakery.evaluateBreakEvenUnitExp= function(){
var enteredVal=document.getElementById("breakEvenUnitTxt").value;
var actualTotalVal=Math.ceil(parseInt(document.getElementById("fxdPriceTxt").value)/parseInt(document.getElementById("contriMarginTxt").value));

	if(actualTotalVal==Math.ceil(enteredVal))
	{
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
	   page7ObjInner.setValEvaluated(true);
	}
	else
	{
	  document.getElementById('evalResult').innerHTML="Oops, try again";
	  document.getElementById("evalResult").classList.remove('fixedEvalCorrect');
      document.getElementById("evalResult").classList.add('fixedEvalWrong');
	  document.getElementById("nxtButtonId").style.display="none";
	}
}

 bakery.checkResultExpValueBrkEven=function()
 {
	if(page7ObjInner.getValEvaluated())
	 {
	 
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
	   page7ObjInner.setValEvaluated(true);
	 }
 }






