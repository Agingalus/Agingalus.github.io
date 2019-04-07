"use strict";
var change = document.getElementById("change");
var clear = document.getElementById("clear");
clear.addEventListener("click", clearColor, false)
change.addEventListener("click", showMeColor, false);


function showMeColor(e) {
    var isItGood1;
    var isItGood2;
    var isItGood3;

    var val1 = document.querySelector('input[name="red"]').value;
    var val2 = document.querySelector('input[name="green"]').value;
    var val3 = document.querySelector('input[name="blue"]').value;
    var hexvalue;
    isItGood1 = checkIt(val1);
    isItGood2 = checkIt(val2);
    isItGood3 = checkIt(val3);


    if (isItGood1 && isItGood2 && isItGood3) {
        colorBar.style.backgroundColor = "rgb(" + val1 + "," + val2 + "," + val3 + ")";
        hexvalue = rgbToHex(val1) + rgbToHex(val2) + rgbToHex(val3)

        var inHex = document.getElementById("inHex");
        inHex.textContent = hexvalue;

    } else {
        clearColor();
    }


}

function clearColor() {

    colorBar.style.backgroundColor = "inherit";
    inHex.textContent = "";
    document.forms["form1"].reset();
}

function checkIt(number) {
    const high = 255;
    const low = 0;

    if (number > high || number < low) {
        alert("The number '" + number + "' is not between " + low + "- " + high)
        return false;


    } else {
        return true;
    }


}
var rgbToHex = function(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}