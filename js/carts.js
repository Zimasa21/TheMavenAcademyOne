"use strict"

let enquiry = document.querySelectorAll(".Add-to-enquiry");

for (let i=0; i < enquiry.length; i++) {
    enquiry[i].addEventListener('click', () => {
        console.log("added to cart")
    })
}