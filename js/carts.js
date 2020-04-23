"use strict"

document.getElementsByClassName('close')
console.log(removeProductButton)
for (var i = 0; i < removeProductButton.length; i++) {
    var button = removeProductButton[i]
    button.addEventListener('click', function() {
        console.log('clicked')
    })
}