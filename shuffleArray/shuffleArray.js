"use strict"
let userArray = []; //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let copy1 = userArray;
let shuffleArray = [];

const addButton = document.getElementById("addButton");
const shuffleIt = document.getElementById("shuffleIt");
const clear = document.getElementById("clear");

const printArraySpace = document.getElementById("printArray");
const original = document.getElementById("original");


addButton.addEventListener("click", addit, false);
shuffleIt.addEventListener("click", shuffleItEvent, false);
clear.addEventListener("click", clearIt, false);

function shuffleItEvent() {
    shuffle(userArray);
}






function clearIt() {
    document.forms["form1"].reset();
    userArray = [];
    original.textContent = "";
    printArraySpace.textContent = "";


}


function addit() {
    let numberToAdd = document.querySelector('input[name="addNumber"]').value;
    if (Number(numberToAdd)) {
        userArray.push(numberToAdd);
        printArray(userArray, original);
    }
    document.forms["form1"].reset();
}



function printArray(array, where) {
    let number;
    number = array[0];


    for (let i = 1; i < array.length; i++) {
        number += ", " + array[i];



    }
    where.textContent = "";
    where.textContent = number;
}

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