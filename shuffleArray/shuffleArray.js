"use strict";
//  This project allow users to add numbers to an array and to then shuffle it, they can clear the 
//  array if they want to reset the array.
// Author: Aaron Greene
// Date 2/2/19



// variables
let userArray = [];
let copy1 = userArray;
let shuffleArray = [];

const addButton = document.getElementById("addButton");
const shuffleIt = document.getElementById("shuffleIt");
const clear = document.getElementById("clear");

const printArraySpace = document.getElementById("printArray");
const original = document.getElementById("original");

// events
addButton.addEventListener("click", addit, false);
shuffleIt.addEventListener("click", shuffleItEvent, false);
clear.addEventListener("click", clearIt, false);

function shuffleItEvent() {
    shuffle(userArray);
}


// this allows the user to reset the array and clear the data on the screen
function clearIt() {
    document.forms["form1"].reset();
    userArray = [];
    original.textContent = "";
    printArraySpace.textContent = "";


}

// validates the number and then adds it to the array, also clears the input box
function addit() {
    let numberToAdd = document.querySelector('input[name="addNumber"]').value;
    if (Number(numberToAdd)) {
        userArray.push(numberToAdd);
        printArray(userArray, original);
    }
    document.forms["form1"].reset();
}


// prints the array
function printArray(array, where) {
    let number;
    number = array[0];


    for (let i = 1; i < array.length; i++) {
        number += ", " + array[i];



    }
    where.textContent = "";
    where.textContent = number;
}
// shuffles and then prints the array
function shuffle(userArray) {
    let copy = [];
    copy = userArray.slice();
    shuffleArray = [];
    while (copy.length > 0) {
        let number = Math.floor(Math.random() * copy.length);
        shuffleArray.push(copy[number]);
        copy.splice(number, 1);

    }


    printArray(shuffleArray, printArraySpace);
}