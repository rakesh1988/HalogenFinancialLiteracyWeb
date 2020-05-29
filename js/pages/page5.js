var page5ObjInner=pageArray[4];
bakery.selectIngridients = function(elmentSelected){

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
	  alert(selectedList);
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
	 
	alert(selectedList);
}

bakery.restoreInventoryDataObject = function(){

 if(page5ObjInner  !=null && page5ObjInner.getSelectedInventoryItems() !=null )
 {
 
    var selectedChkBox=page5ObjInner.getSelectedInventoryItems().split(",");
	alert(selectedChkBox);
	 if(selectedChkBox != '')
	 {
		for (i = 0; i < selectedChkBox.length; i++) 
		{
		  document.getElementById(selectedChkBox[i]).checked = true; 
		}	
	}
 }
 
}

var chkBoxImageAndPrice = [
    ['images/cafe.svg', '$26'],
	['images/cafe.svg', '$22'],
    ['images/cafe.svg', '$24'],
	['images/cafe.svg', '$21'],
	['images/cafe.svg', '$26'],
	['images/cafe.svg', '$25'],
	['images/cafe.svg', '$16'],
	['images/cafe.svg', '$56'],
	['images/cafe.svg', '$76'],
	['images/cafe.svg', '$96'],
	['images/cafe.svg', '$26'],
	['images/cafe.svg', '$76'],
   
    
];




