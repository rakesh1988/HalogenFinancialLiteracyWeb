bakery.setResultDataObject = function(){


	 
	
}
bakery.getProfitLossVal = function(){

var brkEvenCnt=pageArray[6].getBreakEvenUnit();
var contriMarginVal=parseInt(pageArray[5].getContributionMargin());

var random=Math.floor(Math.random() * (brkEvenCnt - 0 + 1)) + 0;


var totalUnitSold=parseInt(brkEvenCnt)+parseInt(random);
var profitMade=(parseInt(totalUnitSold)-parseInt(brkEvenCnt))*contriMarginVal;
document.getElementById("resultDisplay").innerHTML="Congratulations you sold total of "+totalUnitSold+" Units And made profit of $"+profitMade+" in one month";
	
}


