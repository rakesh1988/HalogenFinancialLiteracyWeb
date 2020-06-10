var page6ObjInner=pageArray[5];

bakery.setAccountingDataObject = function(){

//document.getElementById("sellingPriceTxt").value
	 page6ObjInner.setSellingPrice(document.getElementById("sellingPriceTxt").value);
	 page6ObjInner.setContributionMargin(document.getElementById("contriMarginTxt").value);
	
}

bakery.restoreAccountingDataObject = function(){

 if(page6ObjInner  !=null && page6ObjInner.getSellingPrice() !=null )
 {
 document.getElementById("sellingPriceTxt").value=page6ObjInner.getSellingPrice();
 }
 if(page6ObjInner  !=null && page6ObjInner.getContributionMargin() !=null )
 {
 document.getElementById("contriMarginTxt").value=page6ObjInner.getContributionMargin();
 }
 
    
 
}

bakery.evaluateContriExp= function(){
var enteredVal=document.getElementById("contriMarginTxt").value;
var actualTotalVal= parseInt(document.getElementById("sellingPriceTxt").value)-parseInt(document.getElementById("variableCostTxt").value);

	if(actualTotalVal==enteredVal)
	{
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
	   page6ObjInner.setValEvaluated(true);
	}
	else
	{
	  document.getElementById('evalResult').innerHTML="Oops, try again";
	  document.getElementById("evalResult").classList.remove('fixedEvalCorrect');
      document.getElementById("evalResult").classList.add('fixedEvalWrong');
	  document.getElementById("nxtButtonId").style.display="none";
	}
}

bakery.checkResultExpValueAccnting=function(){
if(page6ObjInner.getValEvaluated())
 {
       document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
 }
 }






