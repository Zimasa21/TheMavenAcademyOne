"use strict"
//Couses slide show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("item");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

//Tab show
$(document).ready(function(){ 
    $("#createdTab a").click(function(e){
        e.preventDefault();
        $(this).tab('show');
        
    });
});

//popup form document/ display form
 document.getElementById("button").addEventListener("click",
    function() {
        document.querySelector(".bg-model").style.display = "flex";
    
});
//close form
 document.getElementById("close").addEventListener("click",
    function() {
        document.querySelector(".bg-model").style.display = "none";
    
});

//view cart selection
 document.getElementById("view-busket").addEventListener("click",
    function() {
        document.querySelector(".sidebar").style.display = "flex";
    
});
//close cart selection
 document.getElementById("remove").addEventListener("click",
    function() {
        document.querySelector(".sidebar").style.display = "none";
    
});

var removeCartItem = document.getElementsByClassName('remove-product')
console.log(removeCartItem)
for (var i = 0; i < removeCartItem.length; i++) {
  var buttons = removeCartItem[i]
  buttons.addEventListener('click', function(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
  })
}
  
  // Add to cart
  document.addItemToCart = function(id, price, count) {
    for(var item in cart) {
      if(cart[item].id === id) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }
    var item = new Item(id, price, count);
    cart.push(item);
    saveCart();
  }
  // Add item
$('.Add-to-cart').click(function(event) {
  event.preventDefault();
  var product = $(this).show('product');
  productCart.addItemToCart(id, 1);
  displayCart();
});


