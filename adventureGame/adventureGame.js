"use strict";
// get elenents
const printLocation = document.getElementById("location");
const printDiscription = document.getElementById("description");
const printImage = document.getElementById("image");
const gameMessage = document.getElementById("gameMessage");
const hintPrint = document.getElementById("hint");


// event listeners
const sumbit = document.getElementById("submit");
sumbit.addEventListener("click", changeRoom, false);


//map array
const map = ["Ballroom", "Dinning Room", "Billard Room", "Study", "Lounge", "Conservatory", "Library", "Hall", "Kichen"];
// discription of map 
const locationDiscription = ["Where people dance", "where people eat", "where people play pool", "where people study", "where people chill", "lots of flowers", "I love to read", "a long passage leading somwhere un-known", "Fooooooooood!!!"];
// array of image links to arary
const locationImage = ["images/ballroom.jpg", "images/diningroom.jpg", "images/BilliardRoom.jpg", "images/study.jpg", "images/lounge.jpg", "images/conservitory.jpg", "images/library.jpg", "images/hall.jpg", "images/kitchen.jpg"];

const wepons = ["lead pipe", "rope", "candle stick", "knife", "wrench", "revolver"];

const people = ["Mrs. Peacock", "Mr. Green", "Mrs. White", "Professor Plum", "Coronel Mustard", "Miss Scarlet"];

const items = ["wine bottle", "key", "flute"];
const itemLocations = [1, 6, 4];
let backPack = [];

const errorMessages = ["You can not go north of here, you are at the edge of the map.",
    "You can not go east of here, you are at the edge of the map.",
    "You can not go south of here, you are at the edge of the map.",
    "You can not go west of here, you are at the edge of the map.",
    "The door is locked, you need to unlock it with a key.",
    "There is no item to take here.",
    "There is not secret passage in this room.",
    "You do not have an item to play",
    "You do not have an item that anyone in the room wants."
];


const actions = ["north", "east", "south", "west", "take secret passage", "help", "take item", "play item", "give item", "unlock door", "talk", "hint"];

//people
let personRoom = [0, 2, 3, 5, 6, 8];
let pesonName = ["Miss Scarlet", "Mrs. White", "Mrs. Peacock", "Professor Plum", "Colonel Mustard", "Mr. Green"];
let personImg = []; ///////need to do
let personClue = [];

let curentLocation = 7;
let unlocked = false;
let talkHelp = "Did you talk to the person in this room yet?";
let needKey = " You need a key to get in to the ball room...";
let needPickup = " There might be something in this room you could pick up...";
let twoIsHappy = false;
let sixIsHappy = false;
let helpText;

helpText = "You can enter: " + actions[0];
for (let i = 1; i < actions.length; i++) {
    helpText += ", " + actions[i];

}
helpText += ".";
displayRoom();

function hasKey() {
    for (let i = 0; i < backPack.length; i++) {
        if (backPack[i] === "key") {
            return true;
        }

    }
}

function hint(room) {
    switch (room) {
        case 0:
        case 2:
        case 3:
        case 7:
        case 8:
            hintPrint.textContent = talkHelp;
            break;
        case 1:
            hintPrint.innerHTML = talkHelp + "<p> " + needKey + "</p> <p>" + needPickup + "</p>";
            break;
        case 4:
        case 6:
            hintPrint.innerHTML = talkHelp + "<p> " + needPickup + "</p>";
            break;
        case 5:
            hintPrint.innerHTML = talkHelp + "<p> " + needKey + "</p>";
            break;


    }
}

function talkToPerson() {
    if (curentLocation === 6) {
        if (sixIsHappy) {
            //tells you clues
        } else {
            //asks for wine
        }

    } else if (curentLocation === 2) {
        if (twoIsHappy) {
            //tells you clues
        } else {
            //asks for flute
        }
    } else {
        /// write peron diolog
    }
}

function displayRoom() {
    printLocation.textContent = map[curentLocation];
    printDiscription.textContent = locationDiscription[curentLocation];
    printImage.innerHTML = "<img src= \"" + locationImage[curentLocation] + "\" alt=\"" + map[curentLocation] + "\"" + "height=\"700\" width=\"700\" " + ">";
}

function changeRoom() {
    event.preventDefault();
    gameMessage.textContent = "";
    hintPrint.textContent = "";
    let roomNumber = document.querySelector('input[name="roomNumber"]').value;
    for (let i = 0; i < actions.length; i++) {
        if (roomNumber === actions[i]) {
            valadateMovment(roomNumber);
            displayRoom();
            break;
        } else if (i === actions.length - 1) {
            gameMessage.textContent = "Sorry, I did not understat that..."

        }


    }
    document.forms["form1"].reset();


}

function takePassage() {
    if (curentLocation === 8) {
        curentLocation = 3;
    } else if (curentLocation === 3) {
        curentLocation = 8;
    } else if (curentLocation === 5) {
        curentLocation = 4;
    } else if (curentLocation === 4) {
        curentLocation = 5;
    } else {
        gameMessage.textContent = errorMessages[6];

    }
}

function takeItem() {
    for (let i = 0; i < itemLocations.length; i++) {
        if (curentLocation === itemLocations[i]) {
            backPack.push(items[i]);
            gameMessage.textContent = "You have picked up the " + items[i] + ".";
            break;
        } else if (i === itemLocations.length - 1) {

            gameMessage.textContent = errorMessages[5];
        }

    }
}

function unlockDoor() {
    if (hasKey()) {
        if (unlocked === false) {
            if (curentLocation === 1 || curentLocation === 5) {
                unlocked = true;
                gameMessage.textContent = "You have unlocked the door."
            } else {
                gameMessage.textContent = "There are no doors that need a key here...";
            }

        } else {
            if (curentLocation === 5 || curentLocation === 1) {
                gameMessage.textContent = "The door is already unlocked.";
            } else {
                gameMessage.textContent = "There are no doors that need a key here...";
            }

        }

    } else {
        gameMessage.textContent = "You do not have a key...";
    }

}


function valadateMovment(choice) {
    switch (choice) {
        case "north":
            if (curentLocation === 5 && unlocked === false) {
                gameMessage.textContent = errorMessages[4];
            } else if (curentLocation >= 2) {
                curentLocation -= 3;
            } else {
                gameMessage.textContent = errorMessages[0];

            }
            break;
        case "east":
            if (curentLocation === 1 && unlocked === false) {
                gameMessage.textContent = errorMessages[4];
            } else if (curentLocation % 3 != 2) {
                curentLocation += 1;
            } else {
                gameMessage.textContent = errorMessages[1];
            }
            break;
        case "south":
            if (curentLocation <= 5) {
                curentLocation += 3;
            } else {
                gameMessage.textContent = errorMessages[2];
            }
            break;
        case "west":
            if (curentLocation % 3 != 0) {
                curentLocation -= 1;
            } else {
                gameMessage.textContent = errorMessages[3];
            }
            break;
        case "talk":
            talkToPerson()
            break;
        case "take secret passage":
            takePassage()
            break;
        case "help":
            gameMessage.textContent = helpText;

            break;
        case "hint":
            hint(curentLocation);
            break;
        case "take item":
            takeItem();

            break;
        case "unlock door":
            unlockDoor();
            break;
        default:
            console.log("error");
            break;


    }

}
/*
var i = 0;
var txt = 'Lorem ipsum typing effect!';  //The text 
var speed = 50; // The speed/duration of the effect in milliseconds 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/