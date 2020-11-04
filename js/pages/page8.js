bakery.setResultDataObject = function(){	 
	
}

bakery.startGameAgain = function(){
window.location.reload();	
}
bakery.getProfitLossVal = function(){
	
	
	var scenarioSelected=pageArray[0].getScenario();
	if(scenarioSelected=='A')
	{
	
	   var snd = new Audio("audio/04_CorrectAnswer"+ ".mp3");
	   snd.play();
	}
	if(scenarioSelected=='B')
	{
	   var snd = new Audio("audio/05_WrongAnswer"+ ".mp3");
	   snd.play();
	}

	if(scenarioSelected=='C')
	{
		var snd = new Audio("audio/04_CorrectAnswer"+ ".mp3");
	   snd.play();
	}

var fixedValExp=pageArray[3].getFixedExpVal();
var costPrice=pageArray[4].getTotalInvExp();

var brkEvenCnt=pageArray[6].getBreakEvenUnit();

var contriMarginVal=parseInt(pageArray[5].getContributionMargin());

var random=Math.floor(Math.random() * (brkEvenCnt - 0 + 1)) + 0;


var totalUnitSoldProfit=parseInt(brkEvenCnt)+parseInt(random);
var totalUnitSoldLoss=parseInt(brkEvenCnt)-parseInt(random);

//var randomForMultiply=Math.floor(Math.random() * (50 - 0 + 1)) + 0;
//totalUnitSold=parseInt(totalUnitSold)*randomForMultiply;


var profitMade=(parseInt(totalUnitSoldProfit)-parseInt(brkEvenCnt))*contriMarginVal;
var lossIncurred=(parseInt(brkEvenCnt)-parseInt(totalUnitSoldLoss))*contriMarginVal;
if(scenarioSelected=='A')
document.getElementById("resultDisplay").innerHTML="<font face='Frutiger45Light' size='+2' color='gray'><b>Congratulations!</b></font></br> </br><font face='Frutiger45Light' size='+1' color='gray'>You sold total of "+totalUnitSoldProfit+" Units , And made a profit of $"+profitMade+" in one month</font>";
else if(scenarioSelected=='B')
	document.getElementById("resultDisplay").innerHTML="<font face='Frutiger45Light' size='+2' color='gray'><b>Sorry!</b></font> </br></br><font face='Frutiger45Light' size='+1' color='gray'>You could sell a total of "+totalUnitSoldLoss+" Units , And incurred a loss of $"+lossIncurred+" in one month</font>";
else if(scenarioSelected=='C')
	document.getElementById("resultDisplay").innerHTML="<font face='Frutiger45Light' size='+2' color='gray'><b>This is a break even situation</b></font></br></br> <font face='Frutiger45Light' size='+1' color='gray'>You sold a total of "+brkEvenCnt +" Units ,Hence no profit and no loss</font>";

 var expense;
 var revenue ; 

if(scenarioSelected=='A')
{
     expense = (costPrice*totalUnitSoldProfit)+parseInt(fixedValExp); //  TOOD: nidhi to send expense value here
	 revenue = parseInt(expense)+parseInt(profitMade); // TOOD: nidhi to send revenue value here
}
else if(scenarioSelected=='B')
{
	 expense = (costPrice*totalUnitSoldLoss)+parseInt(fixedValExp); //  TOOD: nidhi to send expense value here
	 revenue = parseInt(expense)-parseInt(lossIncurred); // TOOD: nidhi to send revenue value here
}

else if(scenarioSelected=='C')
{
	 expense = (costPrice*totalUnitSoldLoss)+parseInt(fixedValExp); //  TOOD: nidhi to send expense value here
	 revenue = expense; // TOOD: nidhi to send revenue value here
}

	
	
	

    var graphColorBackground = {
        PROFIT: 'rgba(54, 162, 235, 0.2)',
        LOSS: 'rgba(255, 206, 86, 0.2)',
        BREAK_EVEN: 'rgba(75, 192, 192, 0.2)'
    };

    var graphColorBorder = {
        PROFIT: 'rgba(54, 162, 235, 1)',
        LOSS: 'rgba(255, 206, 86, 1)',
        BREAK_EVEN: 'rgba(75, 192, 192, 1)'
    };

    var ctx = document.getElementById('Chart');

    var dataForChart = [revenue, expense]
    var backgroundColorForChart;
	var borderColorForChart;
	var backgroundColorForChartRevenue='rgba(74, 173, 182, 0.3)';
	var backgroundColorForChartExpense='rgba(196, 69, 117, 0.3)';
	var borderColorForChartRevenue='#4AADB6';
	var borderColorForChartExpense='#C44575';
    
    if (revenue > expense) {//profit
        backgroundColorForChart = graphColorBackground.PROFIT;
        borderColorForChart = graphColorBorder.PROFIT;
    } else if (revenue === expense) { // break even
        backgroundColorForChart = graphColorBackground.BREAK_EVEN;
        borderColorForChart = graphColorBorder.BREAK_EVEN;
    } else { // loss
        backgroundColorForChart = graphColorBackground.LOSS;
        borderColorForChart = graphColorBorder.LOSS;
    }


    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Revenue', 'Expenses'],
            datasets: [{
                data: dataForChart,
                backgroundColor: [
                    backgroundColorForChartRevenue,
                    backgroundColorForChartExpense
                ],
                borderColor: [
                    borderColorForChartRevenue,
                    borderColorForChartExpense
                ],
                borderWidth: 3
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
	
}


