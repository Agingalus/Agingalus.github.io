/* eslint-disable no-console */
"use strict";

// Author: Aaron Greene
//Date created: 2/5/2019

// get elements
const printLocation = document.getElementById("location");
const printDiscription = document.getElementById("description");
const printImage = document.getElementById("image");
const gameMessage = document.getElementById("gameMessage");
const hintPrint = document.getElementById("hint");
const printClue = document.getElementById("printClue");
const personImgPrint = document.getElementById("personImg");
const play = document.getElementById("play");
const introDisplay = document.getElementById("intro");
const gameDisplay = document.getElementById("allDetails");
const introHelp = document.getElementById("introHelp");
const solve = document.getElementById("solve");
const answer = document.getElementById("answer");
const solution = document.getElementById("solution");
const fluteMusic = document.getElementById("fluteMusic").src;
const back = document.getElementById("back");
const saveIt = document.getElementById("saveIt");
const loadIt = document.getElementById("loadIt");
const restartIt = document.getElementById("restartIt");
const sumbit = document.getElementById("submit");


// event listeners

sumbit.addEventListener("click", changeRoom, false);
play.addEventListener("click", playGame, false);
solve.addEventListener("click", solveIt, false);
answer.addEventListener("click", checkAnswer, false);
back.addEventListener("click", playGame, false);
saveIt.addEventListener("click", saveGame, false);
loadIt.addEventListener("click", loadGame, false);
restartIt.addEventListener("click", restartGame, false);


// constents
const items = ["wine bottle", "flute"];
const itemLocations = [1, 4];

const map = ["Ballroom", "Dinning Room", "Billard Room", "Study", "Lounge", "Conservatory", "Library", "Hall", "Kichen"];

const locationDiscription = ["Where people dance", "where people eat", "where people play pool", "where people study", "where people chill", "lots of flowers", "I love to read", "a long passage leading somwhere un-known", "Fooooooooood!!!"];

const locationImage = ["images/ballroom.jpg", "images/diningroom.jpg", "images/BilliardRoom.jpg", "images/study.jpg", "images/lounge.jpg", "images/conservitory.jpg", "images/library.jpg", "images/hall.jpg", "images/kitchen.jpg"];

const talkHelp = "Did you talk to the person in this room yet?";
const needKey = " You need a key to get in to the ball room...";
const needPickup = " There might be something in this room you could pick up...";

const errorMessages = {
    0: "You can not go north of here, you are at the edge of the map.",
    1: "You can not go east of here, you are at the edge of the map.",
    2: "You can not go south of here, you are at the edge of the map.",
    3: "You can not go west of here, you are at the edge of the map.",
    4: "The door is locked, you need to unlock it with a key.",
    5: "There is no item to take here.",
    6: "There is not secret passage in this room.",
    7: "You do not have an item to play.",
    8: "You do not have an item that anyone in the room wants.",
    9: "There is no one in this room."
};

const actions = ["north", "east", "south", "west", "take secret passage", "help", "take", "give", "unlock door", "talk", "hint", "play flute"];



//variables
let guessPerson;
let guessWepon;
let guessPlace;
let sound = true;
let backPack = [];
let curentLocation = 7;
let unlocked = false;
let counter = 0;

let helpText;
helpText = "You can enter: " + actions[0];
for (let i = 1; i < actions.length; i++) {
    helpText += ", " + actions[i];
}
helpText += ".";

class Person {

    constructor(name, happy, happyClue, room, picture, notHappyClue) {
        this.name = name;
        this.happy = happy;
        this.happyClue = happyClue;
        this.room = room;
        this.picture = picture;
        this.notHappyClue = notHappyClue;
    }
}

let scarlet = new Person("Miss Scarlet", true, "I was in the Conservatory at the time of the murder, but I did notice that Mr. Green was surprisingly calm when everyone else seemed in complete shock. That is all I can tell you.", 0, "images/white.jpg", "");
let white = new Person("Mrs. White", false, "Thank you for helping me calm down. I was so freaked out because while I was cleaning I found ton of blood in the billiard room. I know the body was found in a closet in the dinning room, so I'm not sure why there is blood here. Unless he was killed here.", 2, "images/white.jpg", "I’m sorry I’m just to scared, I cant talk to you. The only thing that calms me down is the flute.");
let peacock = new Person("Mrs. Peacock", true, "I did not know the victim very well, but Mr. Green, Professor Plum and him where always fighting.", 3, "images/peacock.jpg", "");
let plum = new Person("Professor Plum", true, "I knew him very well. We always used to debate politics. I was always right of course, but I will miss have someone to argue with. I hope you find his killer.", 5, "images/plum.jpg", "");
let mustard = new Person("Colonel Mustard", false, "Thanks for that drink, ever since the war, when ever I hear a gun shot it brings me back to the times of war. I don’t know who could do such a thing and kill him, but the ony people who know how to use a gun are me and Mr. Green.", 6, "images/mustard.jpg", "I don’t talk to any one with out a bottle of good wine.");
let green = new Person("Mr. Green", true, "You are wasting your time talking to me, talk to the other people to find the real murderer. In the mean time I’m going to finish making my dinner.", 8, "images/green.jpg", "");


const personArray = { 0: scarlet, 1: null, 2: white, 3: peacock, 4: null, 5: plum, 6: mustard, 7: null, 8: green };

//start game  function callsed
displayRoom();
introHelp.textContent = helpText;

// ************* functions in a-z order **************

//validates and reacts for user put and resets form
function changeRoom() {
    event.preventDefault();
    gameMessage.textContent = "";
    hintPrint.textContent = "";
    let userInput = document.querySelector("input[name='userInput']").value;
    for (let i = 0; i < actions.length; i++) {
        if (userInput.toLowerCase().includes(actions[i])) {
            valadateMovment(actions[i]);
            break;
        } else if (i === actions.length - 1) {
            gameMessage.textContent = "Sorry, I did not understand that...";
        }
    }
    document.forms["form1"].reset();
}


// validates the guesses of the user
function checkAnswer() {
    if (guessPerson === "green" && guessPlace === "billiardRoom" && guessWepon === "revolver") {
        console.log("you win!");
    } else {
        console.log("you lose");
    }
}

// diplays room withi picture and discriptions
function displayRoom() {
    printLocation.textContent = map[curentLocation];
    printDiscription.textContent = locationDiscription[curentLocation];
    printImage.innerHTML = "<img src= \"" + locationImage[curentLocation] + "\" alt=\"" + map[curentLocation] + "\"" + "height=\"700\" width=\"700\" " + ">";
    personImgPrint.textContent = "";
    printClue.textContent = "";
}

// used in html for onchange
// eslint-disable-next-line no-unused-vars
function getValue() {
    guessPerson = document.querySelector("select[name='guiltyName']").value;
    guessPlace = document.querySelector("select[name='guiltyPlace']").value;
    guessWepon = document.querySelector("select[name='guiltyWepon']").value;
}
// gives item in backpack to person
function give() {
    if (curentLocation === 6) {
        for (let i = 0; i < backPack.length; i++) {
            if (backPack[i] === "wine bottle") {
                backPack.splice(i, 1);
                mustard.happy = true;

                talkToPerson();
                itemLocations.push(6);
                items.push("key");
            }
        }
    } else {
        gameMessage.textContent = errorMessages[8];
    }
}
// validates if user has key in backpack
function hasKey() {
    for (let i = 0; i < backPack.length; i++) {
        if (backPack[i] === "key") {
            return true;
        }
    }
}

// if user enter "hint" depending on room what it displays
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

// allows the user to mute all noise
function mute(music) {
    if (sound === true) {
        sound = false;
        music.volume = 0;
    } else {
        sound = true;
        music.volume = 0.3;
    }
}

//swiches screen to game scree
function playGame() {
    introDisplay.style.display = "none";
    gameDisplay.style.display = "block";
    solution.style.display = "none";
}
//plays sound if sound it off or turns sound on if off
function playSound(music) {
    let audio = document.createElement("audio");
    audio.src = music;

    audio.play();
    audio.volume = 0.3;
    mute(music);
}
// plays sound for spisific duration
function playSoundDuration(music, duration) {
    let audio = document.createElement("audio");
    audio.src = music;

    audio.play();
    audio.volume = 0.3;
    setTimeout(function() { audio.muted = true; }, duration, audio);
}

// displays the solution screen
function solveIt() {
    introDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    solution.style.display = "block";
}
// this will diplays the messege of the perosn in the room depending on their state of happyness
function talkToPerson() {
    printClue.textContent = "";
    counter = 0;
    if (personArray[curentLocation] == null) {
        gameMessage.textContent = errorMessages[9];
    } else {
        personImgPrint.innerHTML = "<img src= \"" + personArray[curentLocation].picture + "\" alt=\"" + personArray[curentLocation].name + "\"" + "height=\"200\" width=\"200\" " + ">";

        if (personArray[curentLocation].happy === true) {
            typeWriterHappy();

        } else {
            typeWriterNotHappy();
        }
    }
}

// allow user to jump from one room to the other using th secret passege
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
    displayRoom();
}

// adds the item in the room to the array backPack
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
//gives the effect of diolog by slowing the speed words are writen to the html page
function typeWriterHappy() {
    if (counter < personArray[curentLocation].happyClue.length) {

        printClue.textContent += personArray[curentLocation].happyClue.charAt(counter);
        counter++;
        setTimeout(typeWriterHappy, 75);
    }
}

//gives the effect of diolog by slowing the speed words are writen to the html page
function typeWriterNotHappy() {
    if (counter < personArray[curentLocation].notHappyClue.length) {

        printClue.textContent += personArray[curentLocation].notHappyClue.charAt(counter);
        counter++;
        setTimeout(typeWriterNotHappy, 75);
    }
}
//validates if the door is unlocked already or if there is a door to unlock and unlocks it
function unlockDoor() {
    if (hasKey()) {
        if (unlocked === false) {
            if (curentLocation === 1 || curentLocation === 5) {
                unlocked = true;
                gameMessage.textContent = "You have unlocked the door.";
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
// tranlates the user choises in to action
function valadateMovment(choice) {
    switch (choice) {
        case "north":
            if (curentLocation === 5 && unlocked === false) {
                gameMessage.textContent = errorMessages[4];
            } else if (curentLocation >= 2) {
                curentLocation -= 3;
                displayRoom();
            } else {
                gameMessage.textContent = errorMessages[0];
            }
            break;
        case "east":
            if (curentLocation === 1 && unlocked === false) {
                gameMessage.textContent = errorMessages[4];
            } else if (curentLocation % 3 != 2) {
                curentLocation += 1;
                displayRoom();
            } else {
                gameMessage.textContent = errorMessages[1];
            }
            break;
        case "south":
            if (curentLocation <= 5) {
                curentLocation += 3;
                displayRoom();
            } else {
                gameMessage.textContent = errorMessages[2];
            }
            break;
        case "west":
            if (curentLocation % 3 != 0) {
                curentLocation -= 1;
                displayRoom();
            } else {
                gameMessage.textContent = errorMessages[3];
            }
            break;
        case "talk":
            talkToPerson();
            break;
        case "take secret passage":
            takePassage();
            break;
        case "help":
            gameMessage.textContent = helpText;
            break;
        case "hint":
            hint(curentLocation);
            break;
        case "take":
            takeItem();
            break;
        case "unlock door":
            unlockDoor();
            break;
        case "give":
            give();
            break;
        case "play flute":
            playSoundDuration(fluteMusic, 5000);
            if (curentLocation === 2 && white.happy === false) {
                white.happy === true;
                talkToPerson();
            } else {
                gameMessage.textContent = "Although you play the flute beautifuly, no one is paying attention to you.";
            }
            break;
        default:
            console.log("error");
            break;
    }
}

// save game features
function saveGame() {
    let arraySize = backPack.length;
    for (let i = 0; i < backPack.length; i++) {
        localStorage.setItem("backPack" + i, backPack[i]);
    }
    localStorage.setItem("isMustardHappy", mustard.happy);
    localStorage.setItem("isWhiteHappy", white.happy);
    localStorage.setItem("curentLocation", curentLocation);
    localStorage.setItem("wantSound", sound);
    localStorage.setItem("unlocked", unlocked);
    localStorage.setItem("arraySize", arraySize);
}

function loadGame() {
    let arraySize = localStorage.getItem("arraySize");
    for (let i = 0; i < arraySize; i++) {
        backPack[i] = localStorage.getItem("backPack" + i);
    }
    mustard.happy = localStorage.getItem("isMustardHappy");
    white.happy = localStorage.getItem("isWhiteHappy");
    curentLocation = localStorage.getItem("curentLocation");
    sound = localStorage.getItem("wantSound");
    unlocked = localStorage.getItem("unlocked");
}

function restartGame() {
    backPack = [];
    mustard.happy = false;
    white.happy = false;
    curentLocation = 7;
    sound = true;
    unlocked = false;
}

//const wepons = ["lead pipe", "rope", "candle stick", "knife", "wrench", "revolver"];

//const people = ["Mrs. Peacock", "Mr. Green", "Mrs. White", "Professor Plum", "Coronel Mustard", "Miss Scarlet"];
//people dont think i need this
//let personRoom = [0, 2, 3, 5, 6, 8];
//let pesonName = ["Miss Scarlet", "Mrs. White", "Mrs. Peacock", "Professor Plum", "Colonel Mustard", "Mr. Green"];
// look at this later https://codepen.io/linrock/pen/Amdhr