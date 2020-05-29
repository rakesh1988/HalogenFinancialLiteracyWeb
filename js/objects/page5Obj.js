class Page5Obj{
setSelectedInventoryItems(invntryItems)
{
  this.invntryItems=invntryItems;
}

getSelectedInventoryItems()
{
if(this.invntryItems==undefined)
 return "";
 else
 return this.invntryItems;
}

setTotalInvExp(invExpTotal)
{
  this.invExpTotal=invExpTotal;
}

getTotalInvExp()
{
if(this.invExpTotal==undefined)
 return "";
 else
 return this.invExpTotal;
}





}
