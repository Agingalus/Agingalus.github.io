window.addEventListener("load", init);

function init() {
    if (typeof(Storage) !== "undefined") {

        display();

        var button = document.getElementById("button");
        button.addEventListener("click", saveInfo);
    } else {
        //old bowser	
    }
}

function saveInfo() {
    var doughnut = document.getElementById("doughnut").value;

    var toppings = document.getElementById("toppings").value;
    var frosting = document.querySelector('input[name="sorter"]:checked').value;
    var comments = document.getElementById("comments").value;


    localStorage.setItem("doughnutName", doughnut);
    localStorage.setItem("userComments", comments);
    localStorage.setItem("anyToppings", toppings);;
    localStorage.setItem("wantFrosting", frosting);


    display();

}

function display() {
    var rightBox = document.getElementById("useroutput");
    var TheDoughnut = localStorage.getItem("doughnutName");
    var theComments = localStorage.getItem("userComments");
    var theToppings = localStorage.getItem("anyToppings");
    var theFrosting = localStorage.getItem("wantFrosting");



    if (theComments == undefined) {
        document.getElementById("useroutput").innerHTML = "";
    } else {
        document.getElementById("useroutput").innerHTML = "Your previous order  <hr /><br /><br />Type of Doughnut: " + TheDoughnut +
            "<br /><br />  Extra toppings: " + theToppings +
            "<br /><br />  Extra frosting: " + theFrosting +
            "<br /><br />  Why you like this doughnut best: " + theComments;
    }




}