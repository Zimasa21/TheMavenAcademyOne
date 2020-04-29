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
 document.getElementById("show").addEventListener("click",
    function() {
        document.querySelector(".sidebar").style.display = "flex";
    
});
//close cart selection
 document.getElementById("remove").addEventListener("click",
    function() {
        document.querySelector(".sidebar").style.display = "none";
    
});