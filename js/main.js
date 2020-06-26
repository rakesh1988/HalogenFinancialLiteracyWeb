
var bakery={};

var isStartOfGame;
var bakeryHeader;
var bakeryTemplatePage1;
var bakeryTemplatePage2;
var bakeryTemplatePage3;
var bakeryTemplatePage4;
var bakeryTemplatePage5_Bakery;
var bakeryTemplatePage5_Cafe;
var bakeryTemplatePage6;
var bakeryTemplatePage7;
var bakeryTemplatePage8;
var bakeryShowLoadingPopup;
var bakeryShowCalc;
var currentPage="";
var navCnt=0;
var maxNavCnt=6;
var minNavCnt=0;
var empSalary;


$(document).ready(function(){
document.getElementById("nxtbckBtnPTag").style.textAlign ="right";

 $(document).keydown(function(event) {
	    	    if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        
		event.preventDefault();
		return;
		// 107 Num Key  +
		//109 Num Key  -
		//173 Min Key  hyphen/underscor Hey
		// 61 Plus key  +/=
	     }
	});

	$(window).bind('mousewheel DOMMouseScroll', function (event) {
	       if (event.ctrlKey == true) {
         
		   event.preventDefault();
		   return;
	       }
	});
	isStartOfGame=true;
	currentPage="welcome";
	bakery.initializeUbsPages();	
	bakery.translateScenarios();		
	bakery.intitializeTemplates();		
	bakery.renderPages();
	
	
	//alert("Your screen resolution is: " + screen.width + "x" + screen.height);
  
 //alert("Your screen resolution is 2: " + $(window).width() + "x" + $(window).height());
 
 //alert(parseInt($(window).width()));
  
  if(parseInt(screen.width)<1400)
  {  
	$('body').css('zoom', '90%');
  }
  else
  {
 
     $('body').css('zoom', '100%');
  }

	
});


bakery.renderPages = function(){

if(isStartOfGame)
	{
	
	   document.getElementById("bakeryheader").innerHTML=bakeryHeader(bakery.pages);	   
	   document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage1(bakery.pages);
}	   
	   
}

bakery.intitializeTemplates = function() {
try{

	bakeryHeader=            Template7.compile(bakery.bakeryHeader);  	
	bakeryTemplatePage1=     Template7.compile(bakery.page1);
	bakeryTemplatePage2=     Template7.compile(bakery.page2);	
	bakeryTemplatePage3=     Template7.compile(bakery.page3);	
	bakeryTemplatePage4=     Template7.compile(bakery.page4);
	bakeryTemplatePage5_Bakery=     Template7.compile(bakery.page5_Bakery);
	bakeryTemplatePage5_Cafe=     Template7.compile(bakery.page5_Cafe);
	bakeryTemplatePage6=     Template7.compile(bakery.page6);	
	bakeryTemplatePage7=     Template7.compile(bakery.page7);
	bakeryTemplatePage8=     Template7.compile(bakery.page8);	
	bakeryShowLoadingPopup	=Template7.compile(bakery.showWaitingPopup);
	bakeryShowCalc     =     Template7.compile(bakery.showcalculator);	
	
	}
	catch(err) {

}
	
}

bakery.initializeUbsPages = function() {

    bakery.pages= {
    };  	
	bakery.pages=$.extend(bakery.pages,bakery.headerPageConfig);	
	bakery.pages=$.extend(bakery.pages,bakery.page1Config);	
	bakery.pages=$.extend(bakery.pages,bakery.page2Config);	
	bakery.pages=$.extend(bakery.pages,bakery.page3Config);
	bakery.pages=$.extend(bakery.pages,bakery.page4Config);
	bakery.pages=$.extend(bakery.pages,bakery.page5Config);
	bakery.pages=$.extend(bakery.pages,bakery.page6Config);
	bakery.pages=$.extend(bakery.pages,bakery.page7Config);
	bakery.pages=$.extend(bakery.pages,bakery.page8Config);
}

bakery.translateScenarios=function(){
	var string=JSON.stringify(bakery.pages);

    var pattern = /\{{([^}]+)\}}/g;

	var resultString = string.replace( pattern, function replacer(match){
        return bakery.getTranslation(match.substring(2,match.length - 2));
    } );

	bakery.pages=JSON.parse(resultString);
	string=JSON.stringify(bakery.pages);
	var resultString = string.replace( pattern, function replacer(match){
            return bakery.getTranslation(match.substring(2,match.length - 2));
        } );


	bakery.pages=JSON.parse(resultString);
}

bakery.getTranslation = function(key) {
  if(bakery.translation[key]) {
    return bakery.translation[key];
  }

  return "";
}

bakery.gotoPage = function(breadCrum) {
var retVal=bakery.highlightHeader(breadCrum);


if(retVal)
   {
 
		if(breadCrum=='Welcome')
		{
			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			
			bakery[functionToSetData]();
		
			var functionToRestoreData='restoreWelcomeDataObject';			
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage1(bakery.pages);
			bakery[functionToRestoreData]();
			curPos=0;
			navCnt=0;
			
			bakery['hidePrevNextButton']();
			document.getElementById("showCalculator").innerHTML='';
			bakery.changeShopNameInImage();
			
			
		
		}
		else if(breadCrum=='Location')
		{
		  

			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			bakery[functionToSetData]();
			
			var functionToRestoreData='restoreLocationDataObject';			
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage2(bakery.pages);
			bakery[functionToRestoreData]();
			curPos=1;
			navCnt=1;
			bakery['hidePrevNextButton']();
			document.getElementById("showCalculator").innerHTML='';
			//document.getElementById("incrementalImages").innerHTML='<img src="images/cafe.svg" style="width:400px;height:150px"></img><img src="images/cafe.svg" style="width:400px;height:150px"></img>';
			
			
		}
		
		else if(breadCrum=='Staff')
		{	
		 if(pageArray[0].getShopName()==null && pageArray[0].getPMngr() == null && pageArray[0].getSMngr()==null)
		  {
			  for(i=0;i<10;i++) 
			  {
				$('#shopAnchorId').fadeTo('slow', 0.5).fadeTo('slow', 1.0);
			  }
			  return;
		  }
		  
			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			
			bakery[functionToSetData]();
			
			var functionToRestoreData='restoreStaffDataObject';			
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage3(bakery.pages);
			bakery[functionToRestoreData]();	
			
			curPos=2;
			navCnt=2;
			
			bakery['hidePrevNextButton']();
			document.getElementById("showCalculator").innerHTML='';
		}
		
		else if(breadCrum=='Expenditure')
		{	
		
		    var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';	
		
			bakery[functionToSetData]();
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage4(bakery.pages);			
			empSalary=pageArray[2].getEmpQty1()*staff[0][0].substring(1, staff[0][0].length)+pageArray[2].getEmpQty2()*staff[1][0].substring(1, staff[1][0].length)+pageArray[2].getEmpQty3()*staff[2][0].substring(1, staff[2][0].length);
			
			
			document.getElementById("mnthlyRen").value= pageArray[1].getExpRental()+document.getElementById("mnthlyRen").value;	
			document.getElementById("mnthlyUtility").value= pageArray[1].getExpUtility()+document.getElementById("mnthlyUtility").value ;	
			document.getElementById("mnthlySalary").value='$'+empSalary+document.getElementById("mnthlySalary").value;	
			
			
			var empImgString="<img class='selectionImgDimen' src='"+factsDetails[pageArray[1].getLocationImgInx()][0]+"'/>";
			var emp1Qty=pageArray[2].getEmpQty1();
			for(var cnter=0;cnter<emp1Qty;cnter++)
			{
			   empImgString= empImgString+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<img class='selectionImgDimen' src='"+staff[0][3]+"'/>";
			}
			
			document.getElementById("selectionsMade").innerHTML=empImgString;
			document.getElementById("showCalculator").innerHTML=bakeryShowCalc(bakery.pages);
			
			
			
			
			var functionToRestoreData='restoreExpenditureDataObject';				
			bakery[functionToRestoreData]();
			
			curPos=3;
			navCnt=3;
			
			bakery['hidePrevNextButton']();			
			bakery.checkResultExpValueExp();
				
		}
		
		else if(breadCrum=='Inventory')
		{			
			
			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			
			bakery[functionToSetData]();
			
			if(pageArray[0].getShopType()=='Cafe')
			{
				chkBoxImageAndPrice=chkBoxImageAndPriceCafe;
				document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage5_Cafe(bakery.pages);
			}
		    else
			{
				chkBoxImageAndPrice=chkBoxImageAndPriceBakery;
				document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage5_Bakery(bakery.pages);
			}
			
			
			
		
			var functionToRestoreData='restoreInventoryDataObject';				
			bakery[functionToRestoreData]();
			
			
			
			curPos=4;
			navCnt=4;
			
			bakery['hidePrevNextButton']();
			document.getElementById("showCalculator").innerHTML=bakeryShowCalc(bakery.pages);
			
			bakery.checkResultExpValueInv();
			
			
		}
		
		else if(breadCrum=='Accounting')
		{		
					
			
			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			
			bakery[functionToSetData]();
			
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage6(bakery.pages);
		
			var functionToRestoreData='restoreAccountingDataObject';				
			bakery[functionToRestoreData]();
			
			var expObj=pageArray[4];
			document.getElementById("variableCostTxt").value=expObj.getTotalInvExp();
			
			curPos=5;
			navCnt=5;
			
			bakery['hidePrevNextButton']();
			
			
			
			document.getElementById("showCalculator").innerHTML=bakeryShowCalc(bakery.pages);
			
			bakery.checkResultExpValueAccnting();
			
			  document.getElementById('bakeryNameLblDynamic').innerHTML=pageArray[0].getShopName();
		}
		
		else if(breadCrum=='BreakEven')
		{		
			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			
			bakery[functionToSetData]();
			
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage7(bakery.pages);
		
			var functionToRestoreData='restoreBreakEvenDataObject';				
			bakery[functionToRestoreData]();
			
			var fixedExpObj=pageArray[3];
			var contriMarginObj=pageArray[5];
			
			
			document.getElementById("fxdPriceTxt").value=fixedExpObj.getFixedExpVal();
			document.getElementById("contriMarginTxt").value=contriMarginObj.getContributionMargin();
			
			curPos=6;
			navCnt=6;
			
			bakery['hidePrevNextButton']();
			
			
			
			document.getElementById("showCalculator").innerHTML=bakeryShowCalc(bakery.pages);
			
			bakery.checkResultExpValueBrkEven();
			
			  document.getElementById('bakeryNameLblDynamic').innerHTML=pageArray[0].getShopName();
		}
		
		else if(breadCrum=='Result')
		{
			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			
			bakery[functionToSetData]();			

			document.getElementById("bakeryBase").innerHTML=bakeryShowLoadingPopup(bakery.pages);
	
			setTimeout(bakery.loadProfitLossResult, 10000);
		
		}
	}
	
	else
	{
	  return;
	}
}

bakery.loadProfitLossResult = function() {
	
	
			
			
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage8(bakery.pages);
		
			
			
			
			curPos=7;
			navCnt=7;
			
			document.getElementById("showCalculator").innerHTML='';
			bakery.getProfitLossVal();
			
			bakery['hidePrevNextButton']();
}

bakery.getNotNullValue = function(docId) {
if(document.getElementById(docId).value =='undefined')
 return "";
else
  return document.getElementById(docId).value;	
}

bakery.getNotNullValueObj = function(objVal) {
if(objVal ==undefined)
 return "";
else
 return objVal;
}

bakery.nxtButton = function(){	
	var snd = new Audio("audio/buttonClick"+ ".mp3");
    snd.play();
	var retVal=bakery.highlightHeader(nextPrevNav[navCnt+1]);
	if(retVal)
	{
		navCnt=navCnt+1;	
		
		bakery.gotoPage(nextPrevNav[navCnt]);
	}
	else
	{
	  return;
	}
	
	
}

bakery.prevButton = function(){
	var snd = new Audio("audio/buttonClick"+ ".mp3");
    snd.play();
	
		navCnt=navCnt-1;
		
		bakery.gotoPage(nextPrevNav[navCnt]);	

}

bakery.hidePrevNextButton= function(){

   if(navCnt==0)
      { 
        document.getElementById("nxtbckBtnPTag").style.textAlign ="right";
      }
      
   else
      {
       //document.getElementById("nxtbckBtnPTag").style.removeProperty('textAlign');
	   document.getElementById("nxtbckBtnPTag").style.textAlign ="center";
      }

   if(navCnt==0 || navCnt==7)
      { 
        document.getElementById("backButtonId").style.display="none";
      }
      
   else
      {
        document.getElementById("backButtonId").style.display="inline";
      }
	
   if(navCnt==7 || navCnt==3 || navCnt==4 || navCnt==5 || navCnt==6)
      { 
        document.getElementById("nxtButtonId").style.display="none";
		
      }      
   else
      {
        document.getElementById("nxtButtonId").style.display="inline";
      }
	

}

bakery.copyTheValue= function(){

if(navCnt==3)
	{ 
	   document.getElementById('mnthlyTotalExpenses').value=document.getElementById('numberInput').value;
	   document.getElementById('numberInput').value="";
	   document.getElementById("calcImg").click();
	}
	
	if(navCnt==4)
	{ 
	   document.getElementById('totalInvExpTxt').value=document.getElementById('numberInput').value;
	   document.getElementById('numberInput').value="";
	   document.getElementById("calcImg").click();
	}
	
	if(navCnt==5)
	{ 
	   document.getElementById('contriMarginTxt').value=document.getElementById('numberInput').value;
	   document.getElementById('numberInput').value="";
	   document.getElementById("calcImg").click();
	}

	
	if(navCnt==6)
	{ 
	   document.getElementById('breakEvenUnitTxt').value=document.getElementById('numberInput').value;
	   document.getElementById('numberInput').value="";
	   document.getElementById("calcImg").click();
	}


}



bakery.showCalculator=function(){
var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
bakery.changeShopNameInImage=function(){
 document.getElementById('bakeryNameLblDynamic').innerHTML=document.getElementById('shopNameId').value; 
}

bakery.addToDisplay=function(clickedButtonVal){
switch(clickedButtonVal){
		case 'C':
			document.getElementById('numberInput').value = '';
			break;
		case 'DEL':
			var value = document.getElementById('numberInput').value;
    		document.getElementById('numberInput').value = value.substr(0, value.length - 1);
			break;
		case '=':
			var expression = document.getElementById('numberInput').value;
			document.getElementById('numberInput').value = String(eval(expression));
			break;
		default:
			document.getElementById('numberInput').value += clickedButtonVal;
	}
	
}


bakery.boldText=function(txtId){
txtId.style.fontWeight = "bold";
}

bakery.normalText=function(txtId){
txtId.style.fontWeight = "normal";
}

bakery.highlightHeader=function(breadCrum)
{

   //if(breadCrum=='Location')
	//{
	 // if($('#shopNameId').val().length == 0 && $('#pMngrId').val().length == 0 && $('#sMngrId').val().length == 0)
	 // {
		//  for(i=0;i<10;i++) 
		 // {
		//	$('#shopAnchorId').fadeTo('slow', 0.5).fadeTo('slow', 1.0);
		 // }
		 // return false;
	 // }
	  
	 // else
	     // return true;
  //  }
	
	return true;
}

bakery.showCalculator=function()
{
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

$(document).ready(function() {

$(".enterKeyPress").keyup( function(e) {

        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
		
        if(key == 13) {
		
		e.preventDefault();  
		
        $(this).next().focus();
		}
    });
	
	$('#nxtButtonId').hover(function() {
        $("#nxtButtonId").addClass('transition');
    
    }, function() {
        $("#nxtButtonId").removeClass('transition');
    });
	
	$('#backButtonId').hover(function() {
        $("#backButtonId").addClass('transition');
    
    }, function() {
        $("#backButtonId").removeClass('transition');
    });
	
	 document.getElementById("backButtonId").style.display="none";
	
	 
});














