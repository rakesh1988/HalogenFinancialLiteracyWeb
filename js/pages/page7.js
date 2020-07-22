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
	   var snd = new Audio("audio/04_CorrectAnswer"+ ".mp3");
	   snd.play();
	   document.getElementById("nxtButtonId").style.display="inline";
	   document.getElementById('evalResult').innerHTML="<img src='images/confirm.svg'/>&nbsp;Correct";
	   document.getElementById("evalResult").classList.remove('fixedEvalWrong');
	   document.getElementById("evalResult").classList.add('fixedEvalCorrect');
	   document.getElementById("breakEvenUnitTxt").value=Math.ceil(enteredVal);
	   page7ObjInner.setValEvaluated(true);
	}
	else
	{
	   var snd = new Audio("audio/05_WrongAnswer"+ ".mp3");
	   snd.play();
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
 
  bakery.hideNextButtonBrkEvenPage=function()
  {
	  page7ObjInner.setValEvaluated(false);
	  document.getElementById('evalResult').innerHTML="";	 
	  document.getElementById("nxtButtonId").style.display="none";
  }
  
  bakery.scrollTheImages=function()
  {
        var scroller = $('#scroller div.innerScrollArea');
        var scrollerContent = scroller.children('ul');
        scrollerContent.children().clone().appendTo(scrollerContent);
        var curX = 0;
        scrollerContent.children().each(function(){
            var $this = $(this);
            $this.css('left', curX);
            curX += $this.outerWidth(true);
			
        });
		
        var fullW = curX / 2;
        var viewportW = scroller.width();

        // Scrolling speed management
        var controller = {curSpeed:0, fullSpeed:2};
        var $controller = $(controller);
        var tweenToNewSpeed = function(newSpeed, duration)
        {
            if (duration === undefined)
                duration = 600;
            $controller.stop(true).animate({curSpeed:newSpeed}, duration);
        };

        // Pause on hover
        scroller.hover(function(){
            tweenToNewSpeed(0);
        }, function(){
            tweenToNewSpeed(controller.fullSpeed);
        });

        // Scrolling management; start the automatical scrolling
        var doScroll = function()
        {
            var curX = scroller.scrollLeft();
            var newX = curX + controller.curSpeed;
            if (newX > fullW*2 - viewportW)
                newX -= fullW;
            scroller.scrollLeft(newX);
        };
        setInterval(doScroll, 20);
        tweenToNewSpeed(controller.fullSpeed);
    };






