bakery.setLocationDataObject = function(){
var page2ObjInner=pageArray[1];
page2ObjInner.setLocation(bakery.getNotNullValue("locationId"));
page2ObjInner.setExpRental(bakery.getNotNullValue("expRental"));
page2ObjInner.setExpUtility(bakery.getNotNullValue("expUtility"));
page2ObjInner.setLocationImgInx(document.getElementById("locationId").selectedIndex);
}

bakery.restoreLocationDataObject = function(){
var page2ObjInner=pageArray[1];
if(bakery.getNotNullValueObj(page2ObjInner.getLocation())==null || bakery.getNotNullValueObj(page2ObjInner.getLocation())=='')
  {
 
	document.getElementById("locationId").value=bakery.translation['locMarina'];
	document.getElementById("expRental").value=locationPrice[0][0];
	document.getElementById("expUtility").value=locationPrice[0][1];
	document.getElementById("locationImgTag").src=factsDetails[0][0];
	document.getElementById("locationFactsTxt").innerHTML=factsDetails[0][1];

  }
else
{
  document.getElementById("locationId").value=bakery.getNotNullValueObj(page2ObjInner.getLocation());
  document.getElementById("expRental").value=bakery.getNotNullValueObj(page2ObjInner.getExpRental());
  document.getElementById("expUtility").value=bakery.getNotNullValueObj(page2ObjInner.getExpUtility());
  document.getElementById("locationImgTag").src=factsDetails[page2ObjInner.getLocationImgInx()][0];
  document.getElementById("locationFactsTxt").innerHTML=factsDetails[page2ObjInner.getLocationImgInx()][1];

}
}

bakery.setPrice = function(){
var selectedIndexLocation=document.getElementById("locationId").selectedIndex;
document.getElementById("expRental").value=locationPrice[selectedIndexLocation][0];
document.getElementById("expUtility").value=locationPrice[selectedIndexLocation][1];
pageArray[3].setValEvaluated(false);
pageArray[6].setValEvaluated(false);
}

bakery.updateFacts = function(){
var selectedIndexLocation=document.getElementById("locationId").selectedIndex;
document.getElementById("locationImgTag").src=factsDetails[selectedIndexLocation][0];
document.getElementById("locationFactsTxt").innerHTML=factsDetails[selectedIndexLocation][1];
}


var locationPrice = [
    ['$ 6000', '$ 1500'],
	['$ 4700', '$ 800'],
    ['$ 3600', '$ 400'],
    
];

var factsDetails = [
    ['images/mblm.svg', '</br>&nbsp;&nbsp;LOCATION FACTS </br></br>Marina Bay Link Mall is situated directly below The Lawn @ Marina Bay and it is surrounded by multiple office buildings. The area is frequented by working adults from the surrounding offices.As it is a financial and corporate district, there is high human traffic on weekdays. However, there may be little to no patrons on the weekends when offices are closed.</br></br>'],
	['images/bugis.svg', '</br>&nbsp;&nbsp;LOCATION FACTS </br></br>Bugis Junction is located in the heart of Singapore\'s Civic and Cultural District. The area is frequented by students from nearby schools, tourists and young adults. The peak periods are weekdays & weekends.</br></br>'],
    ['images/nex-loc.png', '</br>&nbsp;&nbsp;LOCATION FACTS </br></br>NEX is a regional shopping mall in Serangoon, within the North-East Region of Singapore.Nex\'s regular customers tend to be residents from the surrounding HDB flats. Patrons frequent Nex throughout the day, with its peak periods being lunch-time, weekday evenings and weekends.</br></br>'],
    
];