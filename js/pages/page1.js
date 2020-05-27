bakery.setWelcomeDataObject = function(){
var page1ObjInner=pageArray[0];

var e = document.getElementById("shopTypeId");
page1ObjInner.setShopType(e.value);
page1ObjInner.setShopName(document.getElementById("shopNameId").value);
page1ObjInner.setPMngr(document.getElementById("pMngrId").value);
page1ObjInner.setSMngr(document.getElementById("sMngrId").value);



}

bakery.restoreWelcomeDataObject = function(){

var page1ObjInner=pageArray[0];

document.getElementById("shopTypeId").value = page1ObjInner.getShopType();
document.getElementById("shopNameId").value=page1ObjInner.getShopName();
document.getElementById("pMngrId").value=page1ObjInner.getPMngr();
document.getElementById("sMngrId").value=page1ObjInner.getSMngr();


}

bakery.resetManagerNameFields = function(){
document.getElementById("pMngrId").value='';
document.getElementById("sMngrId").value='';
document.getElementById("shopNameId").value='';
}