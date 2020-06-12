bakery.bakeryHeader =
'<table style="width: 100%;">'+
	' <tr>'+
		' <td style="height: 15%;" colspan="9">&nbsp;</td>'+
	'</tr>'+
	'<tr>'+
		' <td class="headerNavWidth15">'+
		' </td>'+
		'<td  class="headerNavWidth15Txt"><a id ="shopAnchorId" onclick="bakery.gotoPage(\'Welcome\')" onMouseOver="bakery.underlineText(this)" onMouseOut="bakery.underlineTextNone(this)">'+
				 '{{shopTypeLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth15Txt">'+
			'<a id ="locationAnchorId" onclick="bakery.gotoPage(\'Location\')" onMouseOver="bakery.underlineText(this)" onMouseOut="bakery.underlineTextNone(this)">{{locationLbl}}</a>'+
		'</td>'+
		'<td  class="headerNavWidth10Txt">'+
			'<a id ="staffAnchorId" onclick="bakery.gotoPage(\'Staff\')" onMouseOver="bakery.underlineText(this)" onMouseOut="bakery.underlineTextNone(this)">{{staffLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth15Txt">'+
			'<a id ="expAnchorId" onclick="bakery.gotoPage(\'Expenditure\')" onMouseOver="bakery.underlineText(this)" onMouseOut="bakery.underlineTextNone(this)">{{ExpLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth15Txt">'+
			'<a id ="inventoryAnchorId" onclick="bakery.gotoPage(\'Inventory\')" onMouseOver="bakery.underlineText(this)" onMouseOut="bakery.underlineTextNone(this)">{{inventoryLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth15Txt">'+
			'<a id ="accountingAnchorId" onclick="bakery.gotoPage(\'Accounting\')" onMouseOver="bakery.underlineText(this)" onMouseOut="bakery.underlineTextNone(this)">{{accountingLbl}}</a>'+
		'</td>'+
		'<td class="headerNavWidth15Txt">'+
			'<a id ="brkEvenAnchorId" onclick="bakery.gotoPage(\'BreakEven\')" onMouseOver="bakery.underlineText(this)" onMouseOut="bakery.underlineTextNone(this)">{{brkEvenLbl}}</a>'+
		'</td>	'+			 
		'<td class="headerNavWidth15">'+				 
		'</td>'+
	'</tr>'+
 '</table>'

bakery.page1='</br></br></br>'+
'<table>'+
	'<tr>'+
		'<td>'+
			'<table class="tableRowSpacing">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{welcomeLbl}}</td>'+
				'</tr>'+							
				'<tr>'+					
					'<td class="lightHeaderFrutiger">'+
						'{{getStarted1Lbl}}</br>{{getStarted2Lbl}}</td>'+
				'</tr>'+				
				'<tr>'+					
					'<td><select style="border-radius: 15px; padding: 10px;" class="classic inputTextFont inputDropBoxDimension" id="shopTypeId" onChange="bakery.resetManagerNameFields()">'+
							'<option >{{cafeLbl}}</option>'+
							'<option >{{bakeryLbl}}</option>'+
					'</select></td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</br>Name'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="shopNameId" maxlength="30"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Primary&nbsp;&nbsp;&nbsp;&nbsp; </br>Manager'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="pMngrId" maxlength="30"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Secondary </br>Manager'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="sMngrId" maxlength="30"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
			'</table>'+
		'</td>'+
		'<td style="height: 70px; "><img src="images/cafe.svg" style="width:600px" />'+					
		'</td>'+
	'</tr>'+
'</table>';


bakery.page2='</br></br></br>'+
'<table>'+
	'<tr>'+
	'<td style="height: 100px; "><img src="images/mblm.svg" style="width:430px;height:270px" id="locationImgTag"/><div class="locDiv" id="locationFactsTxt"></br>&nbsp;&nbsp;LOCATION FACTS </br></br>&nbsp;&nbsp;Marina Bay Link Mall is situated directly below The Lawn @ Marina Bay and it is &nbsp;&nbsp;surrounded by multiple office buildings. The area is frequented by working adults &nbsp;&nbsp;from the surrounding offices. As it is a financial and corporate district, there is high &nbsp;&nbsp;human traffic on weekdays. However, there may be little to no patrons on the &nbsp;&nbsp;weekends when offices are closed.</br></br></div>'+					
		'</td>'+
		'<td style="vertical-align:top">'+
			'<table class="tableRowSpacing">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{pickLocLbl}}</td>'+
				'</tr>'+
				'<tr height = 20px></tr>'+	
				'<tr>'+					
					'<td><select style="border-radius: 15px; padding: 10px;" class="classic inputTextFont inputDropBoxDimensionLoc" id="locationId" onChange="bakery.setPrice();bakery.updateFacts()">'+
							'<option >{{locMarinaLbl}}</option>'+
							'<option >{{locBugisLbl}}</option>'+
							'<option >{{locSerangoonLbl}}</option>'+
					'</select></td>'+
				'</tr>'+
				'<tr height = 5px></tr>'+	
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Expected </br>Rental&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension" id="expRental" readonly></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr height = 5px></tr>'+	
				'<tr>'+					
					'<td>'+
						'<table class="tableUnderlineCls">'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'Expected </br>Utility Expenses'+
								'</td>'+
								
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension" id="expUtility" readonly></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+				
			'</table>'+
		'</td>'+		
	'</tr><tr style="height:40px"></tr>'+
'</table>';


bakery.page3='</br></br></br>'+
'<table>'+
	'<tr>'+	
		'<td style="vertical-align:top;width:70%">'+
			'<table class="tableRowSpacing" style="width:100%;height:100%">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{hireStaffLbl}}</td>'+
				'</tr>'+
				'<tr height = 20px></tr>'+	
				'<tr>'+					
					'<td>'+
					   '<table class="staffDetailsTable">'+
						 '<tr>'+
							'<td style="width:30px"></td>'+
						    '<td colspan ="2" class="whiteInputTextBold" style="font-size: 24px;"><div id="staffTitleDynamic"></br>'+
							staff[0][2]+
							'</div>'+
							'</td>'+
						 '</tr>'+
						 '<tr>'+
							'<td style="width:30px"></td>'+
							'<td>'+
							'<p class="whiteInputTextLight" style="font-size: 14px;">'+
							'Speciality</br>'+
							'</p>'+
							'<p class="whiteInputTextBold" style="font-size: 24px;" id="staffSpecialityDynamic">'+
							
							staff[0][1]+						
							'</p>'+
							'</td>'+
							'<td>'+
							'<p class="whiteInputTextLight" style="font-size: 14px;">'+							
							'Monthly Salary</br>'+
							'</p>'+
							'<p class="whiteInputTextBold" style="font-size: 24px;" id="staffSalaryDynamic">'+			
							staff[0][0]+							
							'</p>'+
							'</td>'+							
						 '</tr>'+
						 '<tr>'+
							'<td style="width:30px"></td>'+
							'<td colspan ="2" class="whiteInputTextBold" style="font-size: 24px;height:70px">'+
							   '<table>'+
							   '<tr>'+
							   '<td>'+
							    '{{hireQtyStaffLbl}}'+
							   '</td>'+							    
							   '<td  style="background-color: white">'+
								'<div><img src="images/btn-plus.svg" style="vertical-align: middle" onClick="bakery.hireStaffIncrement()"/><input type="text" style="vertical-align: middle;border:0;padding:10px;outline:none" id="staffQtyDynamic" class="inputTextFont" readOnly></input>'+
								'<img src="images/btn-minus.svg" style="vertical-align: middle" onClick="bakery.hireStaffDecrement()"/></div>'+
							   '</td>'+
							   '</tr>'+
							   '</table>'+				
							'</td>'+
						 '</tr>'+
					 '</table>'+
					'</td>'+
				'</tr>'+
'<tr>'+
'<td>'+
'<p style ="color:orange;font-family: Frutiger45Light;font-style: italic;display:none" id="employeeValidation">You can select a max of 5 employees</p>'+
'</td>'+
'</tr>'+				
			'</table>'+
		'</td>'+
		'<td style="height: 100px;width:30% "><img src="images/bubble-2800.svg" style="width:100px;padding-left:300px"/><img src="images/chef.svg" style="width:430px;height:270px"/>'+					
		'</td>'+		
	'</tr><tr style="height:30px"></tr>'+
'</table>';

bakery.page4='</br></br></br>'+
'<table style="height:100%; width:100%">'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" colspan="7">{{ExpLbl}}</td>'+
	'</tr>'+
    '<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="7">{{expLbl1}}</td>'+
	  
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
	'<tr>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{mnthlyRentalLbl}}</td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{mnthlyUtilityLbl}}</td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;" colspan="2">{{mnthlySalaryLbl}}</td>'+
	   '<td class="boldHeaderFrutiger" style="font-size:16px;">{{mnthlyFixedLbl}}</td>'+
	'</tr><tr style="height:10px"></tr>'+
	'<tr style="height:5px">'+	
	  '<td class="boldHeaderFrutiger" style="font-size:16px;"><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;"  id="mnthlyRen" readonly></input></td>'+
	  '<td><div>+</div></td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;"><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;"  id="mnthlyUtility" readonly></input></td>'+
	  '<td><div>+</div></td>'+
	  '<td class="boldHeaderFrutiger" style="font-size:16px;"><input type="text" class="inputTextFont expTextBoxCls" style="font-color:black;"  id="mnthlySalary" readonly></input></td>'+
	  '<td><div>=</div></td>'+
	   '<td class="boldHeaderFrutiger" style="font-size:16px;">$<input type="text" class="inputTextFont expTextBoxCls" id="mnthlyTotalExpenses" onChange="bakery.hideNextButtonExpPage()"></input>&nbsp;&nbsp;<input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateFixedExp()"/></td>'+
	'</tr>'+
	'<tr>'+
	  '<td colspan="6">&nbsp;</td>'+	 
	  '<td colspan="1"><div id="evalResult"></div></td>'+	
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td class="lightHeaderFrutiger" style="font-size:24px;" colspan="7">{{expLbl2}}</td>'+	 
	'</tr>'+
	'</tr>'+	
	'<tr>'+
	  '<td colspan="7"><div id="selectionsMade" style="width:100% ; height:100%">'+
			'</div>'+
			'</td>'+
	'</tr>'+
	'</tr><tr style="height:30px"></tr>'+
'</table>';
bakery.page5='</br><p class="boldHeaderFrutiger">Inventory List</p></br><p class="inputTextFont" id="errMsgInventory"></p><ul>'+  
  '<li><input type="checkbox" id="cb1" onClick="bakery.selectIngridients(\'cb1\');"/>'+
    '<label for="cb1"><img src="'+chkBoxImageAndPrice[1][0]+'"/></label>'+
	chkBoxImageAndPrice[0][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb2" onClick="bakery.selectIngridients(\'cb2\');"/>'+
    '<label for="cb2"><img src="'+chkBoxImageAndPrice[1][0]+'"/></label>'+
	chkBoxImageAndPrice[1][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb3" onClick="bakery.selectIngridients(\'cb3\');"/>'+
    '<label for="cb3"><img src="'+chkBoxImageAndPrice[2][0]+'"/></label>'+
	chkBoxImageAndPrice[2][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb4" onClick="bakery.selectIngridients(\'cb4\');"/>'+
    '<label for="cb4"><img src="'+chkBoxImageAndPrice[3][0]+'"/></label>'+
	chkBoxImageAndPrice[3][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb5" onClick="bakery.selectIngridients(\'cb5\');"/>'+
    '<label for="cb5"><img src="'+chkBoxImageAndPrice[4][0]+'"/></label>'+
	chkBoxImageAndPrice[4][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb6" onClick="bakery.selectIngridients(\'cb6\');"/>'+
    '<label for="cb6"><img src="'+chkBoxImageAndPrice[5][0]+'"/></label>'+
	chkBoxImageAndPrice[5][1]+
  '</li></br></br>'+
  '<li><input type="checkbox" id="cb7" onClick="bakery.selectIngridients(\'cb7\');"/>'+
    '<label for="cb7"><img src="'+chkBoxImageAndPrice[6][0]+'"/></label>'+
	chkBoxImageAndPrice[6][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb8" onClick="bakery.selectIngridients(\'cb8\');"/>'+
    '<label for="cb8"><img src="'+chkBoxImageAndPrice[7][0]+'"/></label>'+
	chkBoxImageAndPrice[7][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb9" onClick="bakery.selectIngridients(\'cb9\');"/>'+
    '<label for="cb9"><img src="'+chkBoxImageAndPrice[8][0]+'"/></label>'+
	chkBoxImageAndPrice[8][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb10" onClick="bakery.selectIngridients(\'cb10\');"/>'+
    '<label for="cb10"><img src="'+chkBoxImageAndPrice[9][0]+'"/></label>'+
	chkBoxImageAndPrice[9][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb11" onClick="bakery.selectIngridients(\'cb11\');"/>'+
    '<label for="cb11"><img src="'+chkBoxImageAndPrice[10][0]+'"/></label>'+
	chkBoxImageAndPrice[10][1]+
  '</li>'+
  '<li><input type="checkbox" id="cb12" onClick="bakery.selectIngridients(\'cb12\')"/>'+
    '<label for="cb12"><img src="'+chkBoxImageAndPrice[11][0]+'"/></label>'+
	chkBoxImageAndPrice[11][1]+
  '</li></br><input type="text" id="totalInvExpTxt"></input>'+
			  '</span><input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateInvExp()"/><div id="evalResult"></div>'+
	'</div>'+
  '</br></br>'+
'</ul>'

bakery.page6='</br></br></br>'+
'<table>'+
	'<tr>'+
		'<td>'+
			'<table class="tableRowSpacing">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{contributionmargin1Lbl}}</td>'+
				'</tr>'+					
				'<tr>'+					
					'<td>'+
						'<table>'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'{{sellingPriceLbl}}'+
								'</td>'+
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="sellingPriceTxt" onChange="bakery.hideNextButtonContriPage()"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table>'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'{{variableExpLbl}}'+
								'</td>'+
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="variableCostTxt"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+	
				'<tr>'+					
					'<td>'+
						'<table>'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'{{contriMarginLbl}}'+
								'</td>'+
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="contriMarginTxt" onChange="bakery.hideNextButtonContriPage()"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table>'+							
							'<tr class="tableRowCls">'+
								'<td>'+
									'<input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateContriExp()"/><div id="evalResult"></div>'+
								'</td>'+							
															
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
			'</table>'+
		'</td>'+
		'<td style="height: 70px; "><img src="images/cafe.svg" style="width:600px" />'+					
		'</td>'+
	'</tr>'+
'</table>';


bakery.page7='</br></br></br>'+
'<table>'+
	'<tr>'+
		'<td>'+
			'<table class="tableRowSpacing">'+
				'<tr>'+					
					'<td class="boldHeaderFrutiger">'+
						'{{breakEven1Lbl}}</td>'+
				'</tr>'+					
				'<tr>'+					
					'<td>'+
						'<table>'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'{{fixedExpLbl}}'+
								'</td>'+
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="fxdPriceTxt"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table>'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'{{contriMarginLbl}}'+
								'</td>'+
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="contriMarginTxt"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+	
				'<tr>'+					
					'<td>'+
						'<table>'+
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
									'{{brkEvenUnitLbl}}'+
								'</td>'+
								'<td>'+
								'<table style="height:100%"><tr><td><input type="text" class="inputTextFont textBoxCls inputTextDimension enterKeyPress" id="breakEvenUnitTxt" onchange="bakery.hideNextButtonBrkEvenPage()"></input>'+
								'</input></td></tr></table>'+
								'</td>'+								
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
				'<tr>'+					
					'<td>'+
						'<table>'+							
							'<tr class="tableRowCls">'+
								'<td class= "textLblCls">'+
								'<input type="button" value="Evaluate" class="buttonIdCls" onClick="bakery.evaluateBreakEvenUnitExp()"/><div id="evalResult"></div>'+							
								'</td>'+								
																
							'</tr>'+
						'</table>'+
					'</td>'+
				'</tr>'+
			'</table>'+
		'</td>'+
		'<td style="height: 70px; "><img src="images/cafe.svg" style="width:600px" />'+					
		'</td>'+
	'</tr>'+
'</table>';

bakery.page8='<audio controls autoplay style="display:none"><source src="audio/clapping.mp3" type="audio/mpeg"></audio>'+
'</br></br></br><p id="resultDisplay" class="inputTextFont"></p>';

bakery.showcalculator='<table><tr><td class="lightHeaderFrutiger" style="font-size:12px;padding-left:0px;padding-top:130px">{{calcLbl}}<img src="images/calculator.svg" onclick="bakery.showCalculator()" id="calcImg"/></td></tr>'+
	  '<tr><td><div class="popup">'+
			  '<span class="popuptext" id="myPopup">'+
			  '           <input type="text" readonly size="10" maxlength="7" id="numberInput">'+
			'           <input id="calcButton"  type="button" class="button gray" value="7" onclick="bakery.addToDisplay(7)">'+
			'           <input id="calcButton" class="button gray" type="button" value="8" onclick="bakery.addToDisplay(8)">'+
			'           <input id="calcButton" class="button gray" type="button" value="9" onclick="bakery.addToDisplay(9)">'+
			'           <input id="calcButton" class="button pink" type="button" value="/" onclick="bakery.addToDisplay(\'/\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="4" onclick="bakery.addToDisplay(4)">'+
			'           <input id="calcButton" class="button gray" type="button" value="5" onclick="bakery.addToDisplay(5)">'+
			'           <input id="calcButton" class="button gray" type="button" value="6" onclick="bakery.addToDisplay(6)">'+
			'           <input id="calcButton" class="button pink" type="button" value="*" onclick="bakery.addToDisplay(\'*\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="1" onclick="bakery.addToDisplay(1)">'+
			'           <input id="calcButton" class="button gray" type="button" value="2" onclick="bakery.addToDisplay(2)">'+
			'           <input id="calcButton" class="button gray" type="button" value="3" onclick="bakery.addToDisplay(3)">'+
			'           <input id="calcButton" class="button pink" type="button" value="+" onclick="bakery.addToDisplay(\'+\')">'+
			'           <input id="calcButton" class="button orange" type="button" value="C" onclick="bakery.addToDisplay(\'C\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="0" onclick="bakery.addToDisplay(0)">'+
			'           <input id="calcButton" class="button orange" type="button" value="=" onclick="bakery.addToDisplay(\'=\')">'+
			'           <input id="calcButton" class="button pink" type="button" value="-" onclick="bakery.addToDisplay(\'-\')">'+
			'           <input id="calcButton" class="button gray" type="button" value="." onclick="bakery.addToDisplay(\'.\')">'+
			'			<input id="calcButton" class="button gray" type="button" value="Copy" style="width:50px" onclick="bakery.copyTheValue()">'+

			  '</span>'+
			'</div>'+
	  '</td></tr></table>';
	  
bakery.showWaitingPopup='<div id="myModal" class="modal">'+  
  '<div class="modal-content">'+
    '<span class="close"><img src="images/peopleWalk.gif" style="height:80%;width:100%"/></span>'+
   ' <span><img src="images/loding_icon.gif" style="height:20%;width:40%;padding-left:300px"/></span>'+
 ' </div>'+
'</div>'

	



