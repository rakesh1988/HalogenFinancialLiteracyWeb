bakery.underlineText= function(ref){
	
	

	
	$(ref).css("color", "black");
	$(ref).css("display", "inline-block");
    $(ref).css("text-decoration", "none");
    $(ref).css("border-bottom", "3px solid #8ED2D3");
    $(ref).css("margin-bottom", "-1px");


}

bakery.underlineTextNone= function(ref){

 $(ref).css("border-bottom", "none");
 $(ref).css("color", "#797979");
//$(ref).css("display", "none");	

   // $(ref).css("text-decoration", "none");	
	//$(ref).css("color", "#c4c4c0");

}