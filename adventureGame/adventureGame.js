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
const helpBtn = document.getElementById("helpBtn");
const muteBtn = document.getElementById("muteBtn");
const theme = document.getElementById("theme");
const congrats = document.getElementById("congrats");
const choice = document.getElementById("choice");
const wrong = document.getElementById("wrong");


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
let items = ["wine bottle", "flute"];
let itemLocations = [1, 4];

const map = ["Ballroom", "Dining Room", "Billiard Room", "Study", "Lounge", "Conservatory", "Library", "Hall", "Kitchen"];

const actions = ["north", "south", "east", "west", "take secret passage", "help", "take", "give", "unlock door", "talk", "hint", "play flute", "backpack", "map"];


// event listeners

sumbit.addEventListener("click", changeRoom, false);
play.addEventListener("click", playGame, false);

solve.addEventListener("click", solveIt, false);
answer.addEventListener("click", checkAnswer, false);
back.addEventListener("click", playGame, false);
saveIt.addEventListener("click", saveGame, false);
loadIt.addEventListener("click", loadGame, false);
restartIt.addEventListener("click", restartGame, false);
helpBtn.addEventListener("click", function() { gameMessage.textContent = helpText; }, false);
muteBtn.addEventListener("click", function() { mute(theme); }, false);





const locationDiscription = { 0: "A place of frivolity and dancing. You see Miss Scarlet practicing her dance.", 1: "An opportunity to experience culinary excellence. You might be able to find something to drink here.", 2: "A place of challenging gamesmanship. You see Mrs. White sitting on a chair looking like she just finished crying.", 3: "The center of knowledge and wisdom. You see Mrs. Peacock reading a murder mystery novel.", 4: "An island of relaxation from the busy pace of everyday life. You see musical instruments scattered all around the room. ", 5: "Exposure to the sights and scents of flowers can restore the soul. You see Professor Plum sitting on a examining all of the different plantlife.", 6: "A repository of knowledge that will enrich your mind and inspire your heart. Colonel Mustard is browsing all of the shelves.", 7: "The long passage connecting other rooms", 8: "The source of all things culinary and delightfully tasty! Mr. Green seems to have gotten hungry and is attempting to make himself dinner." };

const locationImage = ["images/ballroom.jpg", "images/diningroom.jpg", "images/BilliardRoom.jpg", "images/study.jpg", "images/lounge.jpg", "images/conservitory.jpg", "images/library.jpg", "images/hall.jpg", "images/kitchen.jpg"];

const talkHelp = "Did you talk to the person in this room yet?";
const needKey = " You need a key to get in to the ball room...";
const needPickup = " There might be something in this room you could pick up...";

const errorMessages = {
    0: "You cannot go north of here, you are at the edge of the map.",
    1: "You cannot go east of here, you are at the edge of the map.",
    2: "You cannot go south of here, you are at the edge of the map.",
    3: "You cannot go west of here, you are at the edge of the map.",
    4: "The door is locked, you need to unlock it with a key.",
    5: "There is no item to take here.",
    6: "There is no secret passage in this room.",
    7: "You do not have an item to play.",
    8: "You do not have an item that anyone in the room wants.",
    9: "There is no one in this room."
};



// create help text
helpText = "You can enter: " + actions[0];
for (let i = 1; i < actions.length; i++) {
    helpText += ", " + actions[i];
}
helpText += ".";

// people
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
let green = new Person("Mr. Green", true, "You are wasting your time questioning me, I don’t know anything. Please go talk to the other people to find the murderer. I’m going to finish making my dinner.", 8, "images/green.jpg", "");
let mustard = new Person("Colonel Mustard", false, "Thanks for the wine, it’s a most excellent vintage. You know, ever since the war, whenever I hear a gunshot I get a bit out of sorts and can’t quite function. I don’t know who could do such a thing, but I am quite sure that the only people who know how to use a gun are Mr. Green and myself. Here take this key that, it will get you into the Billiard Room.", 6, "images/mustard.jpg", "I’m altogether beside myself, and what I really need is a good bottle of wine.");
let peacock = new Person("Mrs. Peacock", true, "I didn’t know the victim very well at all. But I think that the victim, Mr. Green and Professor Plum must have been well acquainted as they were always arguing.", 3, "images/peacock.jpg", "");
let plum = new Person("Professor Plum", true, "I knew him quite well. We always had a lovely time debating politics. Of course, I was always right, but I will miss have someone to argue with. I hope you find his killer.", 5, "images/plum.jpg", "");
let scarlet = new Person("Miss Scarlet", true, "I was in the Conservatory at the time of the murder, so I didn’t see or hear anything. Later, when we were told about the murder, I did notice that Mr. Green seemed surprisingly calm when he heard the news. Everyone else was in shock. I’m afraid that’s all I can tell you.", 0, "images/scarlet.jpg", "");
let white = new Person("Mrs. White", false, "Thank you for helping me calm down. I was so freaked out because while I was cleaning I found ton of blood in the billiard room. I know the body was found in a closet in the dining room, so I'm not sure why there is blood here. Unless he was killed here.", 2, "images/white.jpg", "I’m sorry, I’m extremely upset and I can’t talk to you in that state of mind. If only I could hear some flute music… that always calms me down.");

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
        congrats.style.display = "block";
        introDisplay.style.display = "none";
        gameDisplay.style.display = "none";
        solution.style.display = "none";
    } else {
        choice.style.display = "none";
        wrong.style.display = "block";

    }
}

// diplays room withi picture and discriptions
function displayRoom() {
    printLocation.textContent = map[curentLocation];
    printDiscription.textContent = locationDiscription[curentLocation];
    printImage.innerHTML = "<img src= \"" + locationImage[curentLocation] + "\" alt=\"" + map[curentLocation] + "\"" + "height=\"500\" width=\"500\" " + ">";
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
            } else if (i === backPack.length - 1) {
                gameMessage.textContent = errorMessages[8];
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

function hasFlute() {
    for (let i = 0; i < backPack.length; i++) {
        if (backPack[i] === "flute") {
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
        case 7:
            hintPrint.textContent = "Move to a different room.";
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

    }
    playSound(music);
}

//switches screen to game scree
function playGame() {
    introDisplay.style.display = "none";
    gameDisplay.style.display = "block";
    solution.style.display = "none";

    loadGame();
}

//plays sound if sound it off or turns sound on if off
function playSound(music) {
    if (sound) {
        music.play();
        music.volume = 0.3;
    }


}
// plays sound for spisific duration
function playSoundDuration(music, duration) {
    let audio = document.createElement("audio");
    audio.src = music;
    theme.volume = 0.05;

    audio.play();
    audio.volume = 0.3;
    setTimeout(function() { audio.muted = true; }, duration, audio);

    theme.volume = 0.3;
}

// displays the solution screen
function solveIt() {
    introDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    solution.style.display = "block";
    choice.style.display = "block";
    wrong.style.display = "none";
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
    if (itemLocations.length === 0) {
        gameMessage.textContent = errorMessages[5];

    }
    for (let i = 0; i < itemLocations.length; i++) {
        if (curentLocation === itemLocations[i]) {
            backPack.push(items[i]);
            itemLocations.splice(i, 1);
            gameMessage.textContent = "You have picked up the " + items[i] + ".";

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
        setTimeout(typeWriterHappy, 50);
    }
}

//gives the effect of diolog by slowing the speed words are writen to the html page
function typeWriterNotHappy() {
    if (counter < personArray[curentLocation].notHappyClue.length) {

        printClue.textContent += personArray[curentLocation].notHappyClue.charAt(counter);
        counter++;
        setTimeout(typeWriterNotHappy, 50);
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

            if (hasFlute()) {
                if (sound) {
                    playSoundDuration(fluteMusic, 5000);
                }

                if (curentLocation === 2 && white.happy === false) {
                    white.happy = true;

                    talkToPerson();

                } else {
                    gameMessage.textContent = "Although you play the flute beautifuly, no one is paying attention to you.";
                }
            } else {
                gameMessage.textContent = "You dont have a flute.";
            }

            break;
        case "map":
            personImgPrint.innerHTML = "<img src=\"images/map.png\" alt=\"Map\" >";
            printClue.textContent = "";

            break;
        case "backpack":

            if (backPack.length === 0) {
                gameMessage.textContent = " You do not have anything in your backpack.";
            } else {
                gameMessage.textContent = " Items in your backpack: " + backPack[0];
                for (let i = 1; i < backPack.length; i++) {
                    gameMessage.textContent += ", " + backPack[i];

                }
                gameMessage.textContent += ".";
            }
            break;



    }
}

// save game features
function saveGame() {
    let arraySize = backPack.length;
    for (let i = 0; i < backPack.length; i++) {
        localStorage.setItem("backPack" + i, backPack[i]);
    }
    localStorage.setItem("arraySizeBackPack", arraySize);
    localStorage.setItem("isMustardHappy", mustard.happy);
    localStorage.setItem("isWhiteHappy", white.happy);
    localStorage.setItem("curentLocation", curentLocation);
    localStorage.setItem("wantSound", sound);
    localStorage.setItem("unlocked", unlocked);

    let arraySizeItemLocations = itemLocations.length;
    for (let i = 0; i < itemLocations.length; i++) {
        localStorage.setItem("itemLocation" + i, itemLocations[i]);
    }
    localStorage.setItem("arraySizeItemLocations", arraySizeItemLocations);

}

function loadGame() {
    let arraySizeBackPack = localStorage.getItem("arraySizeBackPack");
    for (let i = 0; i < arraySizeBackPack; i++) {
        backPack[i] = localStorage.getItem("backPack" + i);
    }
    mustard.happy = (localStorage.getItem("isMustardHappy") == "true");
    white.happy = (localStorage.getItem("isWhiteHappy") == "true");
    curentLocation = parseInt(localStorage.getItem("curentLocation"));
    sound = (localStorage.getItem("wantSound") == "true");
    unlocked = localStorage.getItem("unlocked") == "true";

    let arraySizeItemLocations = localStorage.getItem("arraySizeItemLocations");

    for (let i = 0; i < arraySizeItemLocations; i++) {
        itemLocations[i] = parseInt(localStorage.getItem("itemLocation" + i));
    }
    playSound(theme);
    displayRoom();
}

function restartGame() {
    backPack = [];
    mustard.happy = false;
    white.happy = false;
    curentLocation = 7;
    sound = true;
    playSound(theme);
    itemLocations = [1, 4];

    unlocked = false;
    displayRoom();
    saveGame();
}