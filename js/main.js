
var bakery={};

var isStartOfGame;
var bakeryHeader;
var bakeryTemplatePage1;
var bakeryTemplatePage2;
var bakeryTemplatePage3;
var bakeryTemplatePage4;
var bakeryTemplatePage5;
var bakeryTemplatePage6;
var currentPage="";
var navCnt=0;
var maxNavCnt=6;
var minNavCnt=0;
var empSalary;


$(document).ready(function(){
	isStartOfGame=true;
	currentPage="welcome";
	bakery.initializeUbsPages();	
	bakery.translateScenarios();		
	bakery.intitializeTemplates();		
	bakery.renderPages();
	
	
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
	bakeryTemplatePage5=     Template7.compile(bakery.page5);	
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
		}
		
		else if(breadCrum=='Expenditure')
		{	
		    var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';	
		
			bakery[functionToSetData]();
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage4(bakery.pages);			
			empSalary=pageArray[2].getEmpQty1()*staff[0][0].substring(1, staff[0][0].length)+pageArray[2].getEmpQty2()*staff[1][0].substring(1, staff[1][0].length)+pageArray[2].getEmpQty3()*staff[2][0].substring(1, staff[2][0].length);
			
			
			document.getElementById("mnthlyRen").innerHTML= '&nbsp;&nbsp;&nbsp;'+pageArray[1].getExpRental()+document.getElementById("mnthlyRen").innerHTML;	
			document.getElementById("mnthlyUtility").innerHTML= '&nbsp;&nbsp;&nbsp;'+pageArray[1].getExpUtility()+document.getElementById("mnthlyUtility").innerHTML ;	
			document.getElementById("mnthlySalary").innerHTML='&nbsp;&nbsp;&nbsp;$'+empSalary+document.getElementById("mnthlySalary").innerHTML;	
			
			
			var empImgString="<img class='selectionImgDimen' src='"+factsDetails[pageArray[1].getLocationImgInx()][0]+"'/>";
			var emp1Qty=pageArray[2].getEmpQty1();
			for(var cnter=0;cnter<emp1Qty;cnter++)
			{
			   empImgString= empImgString+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<img class='selectionImgDimen' src='"+staff[0][3]+"'/>";
			}
			
			document.getElementById("selectionsMade").innerHTML=empImgString;
			
			
			
			var functionToRestoreData='restoreExpenditureDataObject';				
			bakery[functionToRestoreData]();
			
			curPos=3;
			navCnt=3;
			
			bakery['hidePrevNextButton']();
		}
		
		else if(breadCrum=='Inventory')
		{
			
			
			
			var functionToSetData='set'+nextPrevNav[curPos]+'DataObject';
			
			bakery[functionToSetData]();
			alert("before html");
			document.getElementById("bakeryBase").innerHTML=bakeryTemplatePage5(bakery.pages);
		
			var functionToRestoreData='restoreInventoryDataObject';				
			bakery[functionToRestoreData]();
			alert("after html");
			bakery['hidePrevNextButton']();
			
			curPos=4;
			navCnt=4;
			
		}
		
		else if(breadCrum=='accounting')
		{		
			curPos=5;
			navCnt=5;
			
			bakery['hidePrevNextButton']();
		}
	}
	
	else
	{
	  return;
	}
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
	
		navCnt=navCnt-1;
		
		bakery.gotoPage(nextPrevNav[navCnt]);	

}

bakery.hidePrevNextButton= function(){

   if(navCnt==0)
      { 
        document.getElementById("backButtonId").style.display="none";
      }
      
   else
      {
        document.getElementById("backButtonId").style.display="inline";
      }
	
   if(navCnt==7 || navCnt==3)
      { 
        document.getElementById("nxtButtonId").style.display="none";
      }      
   else
      {
        document.getElementById("nxtButtonId").style.display="inline";
      }

}



bakery.showCalculator=function(){
var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
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
		alert("enter key");
		e.preventDefault();
        // Get all focusable elements on the page
		alert($(this).next());
		debugger;
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














