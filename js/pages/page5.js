var page5ObjInner=pageArray[4];
bakery.selectIngridients = function(elmentSelected){
	
	bakery.hideNextButtonInvPage();

	var cnt=0;
	$('input[type=checkbox]').each(function () {
	if(this.checked)
	 cnt++;
	});

	if(cnt==5)
	{
     document.getElementById("errMsgInventory").innerHTML="Cannot select more than 4 ingridients";
	 document.getElementById(elmentSelected).checked = false;
	}
	else
	{
	  document.getElementById("errMsgInventory").innerHTML="";
	}
}


bakery.setInventoryDataObject = function(){

var selectedList="";
var cnt=1;
$('input[type=checkbox]').each(function () {

	if(this.checked)
	{
	  selectedList=selectedList+'cb'+cnt+",";
	  cnt++;
	  
	}
	else
	{
	  cnt++;
	}
	 
	});
	
	if(selectedList.indexOf(",")!=-1)
	 {
	   selectedList =selectedList.substr(0,selectedList.length-1);
	 }
	 page5ObjInner.setSelectedInventoryItems(selectedList);
	 page5ObjInner.setTotalInvExp(document.getElementById("totalInvExpTxt").value);
	
}

bakery.restoreInventoryDataObject = function(){

 if(page5ObjInner  !=null && page5ObjInner.getSelectedInventoryItems() !=null )
 {
 
    var selectedChkBox=page5ObjInner.getSelectedInventoryItems().split(",");
	
	 if(selectedChkBox != '')
	 {
		for (i = 0; i < selectedChkBox.length; i++) 
		{
		  document.getElementById(selectedChkBox[i]).checked = true; 
		}	
	}	
	document.getElementById("totalInvExpTxt").value=page5ObjInner.getTotalInvExp();
	
 }
 
}

bakery.evaluateInvExp= function(){
var enteredVal=document.getElementById("totalInvExpTxt").value;
var cntCheckedBox=1;
var actualTotalVal=0;
$('input[type=checkbox]').each(function () {

	if(this.checked)
	{
	var selectedItmPrice=chkBoxImageAndPrice[cntCheckedBox-1][1];
	  actualTotalVal=parseInt(actualTotalVal)+parseInt(selectedItmPrice.substring(1,selectedItmPrice.length));	  
	  cntCheckedBox++;	  
	}
	else
	{
	  cntCheckedBox++;
	}
	 
	});	
	if(actualTotalVal==enteredVal)
	{
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
	   page5ObjInner.setValEvaluated(true);
	}
	else
	{
	  document.getElementById('evalResult').innerHTML="Oops, try again";
	  document.getElementById("evalResult").classList.remove('fixedEvalCorrect');
      document.getElementById("evalResult").classList.add('fixedEvalWrong');
	  document.getElementById("nxtButtonId").style.display="none";
	}
}

bakery.checkResultExpValueInv=function(){
if(page5ObjInner.getValEvaluated())
 {
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
 }
}

bakery.hideNextButtonInvPage = function(){
	
	  page5ObjInner.setValEvaluated(false);
	  document.getElementById('evalResult').innerHTML="";	 
	  document.getElementById("nxtButtonId").style.display="none";
	  pageArray[5].setValEvaluated(false);
	  pageArray[6].setValEvaluated(false);
}

var chkBoxImageAndPrice = [
    ['images/cocopowder.jpg', '$5'],
	['images/cream.jpg', '$6'],
    ['images/bakingpowder.jpg', '$2'],
	['images/cocopowder.jpg', '$5'],
	['images/cream.jpg', '$6'],
	['images/bakingpowder.jpg', '$2'],
	['images/cocopowder.jpg', '$5'],
	['images/cream.jpg', '$6'],
	['images/bakingpowder.jpg', '$2'],
	['images/cocopowder.jpg', '$5'],
	['images/cream.jpg', '$6'],
	['images/bakingpowder.jpg', '$2'],
   
    
];




