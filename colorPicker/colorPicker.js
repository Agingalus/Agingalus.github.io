var change = document.getElementById("change");

change.addEventListener("click", showMeColor, false);


function showMeColor(e) {

    var val1 = document.querySelector('input[name="red"]').value;
    var val2 = document.querySelector('input[name="green"]').value;
    var val3 = document.querySelector('input[name="blue"]').value;



    colorBar.style.backgroundColor = "green"; //"rgb(" + val1 + "," + val2 + "," + val3 + ")";

    console.log("hello");



}