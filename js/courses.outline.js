"use strict"
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