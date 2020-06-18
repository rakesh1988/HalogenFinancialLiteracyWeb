bakery.setResultDataObject = function(){


	 
	
}
bakery.getProfitLossVal = function(){

var fixedValExp=pageArray[3].getFixedExpVal();
var costPrice=pageArray[4].getTotalInvExp();

var brkEvenCnt=pageArray[6].getBreakEvenUnit();

var contriMarginVal=parseInt(pageArray[5].getContributionMargin());

var random=Math.floor(Math.random() * (brkEvenCnt - 0 + 1)) + 0;


var totalUnitSold=parseInt(brkEvenCnt)+parseInt(random);

var randomForMultiply=Math.floor(Math.random() * (50 - 0 + 1)) + 0;
//totalUnitSold=parseInt(totalUnitSold)*randomForMultiply;


var profitMade=(parseInt(totalUnitSold)-parseInt(brkEvenCnt))*contriMarginVal;
document.getElementById("resultDisplay").innerHTML="Congratulations you sold total of "+totalUnitSold+" Units And made profit of $"+profitMade+" in one month";





    var expense = (costPrice*totalUnitSold)+parseInt(fixedValExp); //  TOOD: nidhi to send expense value here
	var revenue = parseInt(expense)+parseInt(profitMade); // TOOD: nidhi to send revenue value here
	
	

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
                    backgroundColorForChart,
                    backgroundColorForChart
                ],
                borderColor: [
                    borderColorForChart,
                    borderColorForChart
                ],
                borderWidth: 1
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


