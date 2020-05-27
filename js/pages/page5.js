var page5ObjInner=pageArray[4];
bakery.selectIngridients = function(elmentSelected){

	var cnt=0;
	$('input[type=checkbox]').each(function () {
	if(this.checked)
	 cnt++;
	});

	if(cnt==5)
	{

	 document.getElementById(elmentSelected).checked = false;
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
	alert(selectedList);
	page5ObjInner.setSelectedInventoryItems(selectedList);
	 
	});
}

bakery.restoreInventoryDataObject = function(){

 if(page5ObjInner  !=null)
 {
 
    var selectedChkBox=page5ObjInner.getSelectedInventoryItems().split(",");
	alert(selectedChkBox);
	for (i = 0; i < selectedChkBox.length; i++) 
	{
	  document.getElementById(selectedChkBox[i]).checked = true; 
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




