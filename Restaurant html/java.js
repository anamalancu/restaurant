var AddItemId=0;
function addToCart(item)
{
  AddItemId +=1;
  var selectedItem= document.createElement('div');
  selectedItem.classList.add('cartImg');
  selectedItem.setAttribute('id',AddItemId);
  var img= document.createElement('img');
  img.setAttribute('src',item.children[0].currentSrc);
 var title=document.createElement('div');
  title.innerText=item.children[1].innerText;
 var select=document.createElement('span');
  var cartItems=document.getElementById('title');
  selectedItem.append(img);
  selectedItem.append(title);
  cartItems.append (selectedItem);
 
}
function myFunction() {
  alert("Thank you for your purchase!");
}


		
		