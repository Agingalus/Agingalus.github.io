"use strict";

// Arrow key codes
let UP = 38,
    DOWN = 40,
    RIGHT = 39,
    LEFT = 37,
    UFO_UP = 87,
    UFO_DOWN = 90;

// rocket object
let rocket = {
    img: document.querySelector("#rocket"),
    x: 490,
    y: 200,
    width: 100
};
const torpedo = document.querySelector("#torpedo"),
    startBtn = document.querySelector("#start"),
    fireBtn = document.querySelector("#fire"),
    muteBtn = document.querySelector("#muteBtn");

let theme = document.getElementById("themeSong");
let velocity = 5;
let sound = true;
let missileSound = document.getElementById('missileSound').src;
// the ufo info
let ufoObject = {
        img: document.querySelector("#ufo"),
        y: 200,
        moveUFO: (event) => {
            if (event.keyCode === UFO_UP) {
                ufoObject.y -= 10;
                if (ufoObject.y < 100) { ufoObject.y = 100; }


            } else if (event.keyCode === UFO_DOWN) {
                ufoObject.y += 10;
                if (ufoObject.y > 360) { ufoObject.y = 360; }
            }
            render();


        }
    }
    // plays a sound at 2x speed
function playSound(music) {
    let audio = document.createElement('audio');
    audio.src = music;
    audio.playbackRate = 2;
    audio.play();

}


// Initialize objects on the screen
render();

startBtn.addEventListener("click", startGameHandler, false);
fireBtn.addEventListener("click", fireTorpedoHandler, false)
window.addEventListener("keydown", keydownHandler, false);
window.addEventListener("keydown", ufoObject.moveUFO, false);
window.addEventListener("keydown", spaceShoot, false);
muteBtn.addEventListener("click", mute, false);

// allows space key to fire missile
function spaceShoot(e) {
    if (e.keyCode === 32) {
        fireTorpedoHandler()
    }
}

// starts game play
function startGameHandler() {
    // Hide the intro screen, show the game screen
    introScreen.style.display = "none";
    gameScreen.style.display = "block";
    rocket.img.style.display = "block";
    ufoObject.img.style.display = "block";

    theme.play();
    theme.volume = 0.3;
}
// make the ufo disapre when hit and swich locations
let hideUFO = () => {
        ufoObject.img.style.visibility = "hidden";
        let number = Math.floor(Math.random() * 350 + 50);
        ufoObject.y = number;
        setTimeout(showUFO, 3000);
    }
    //reveals new ufo

let showUFO = () => {
        ufoObject.img.style.visibility = "visible";

        render();

    }
    // stops th sound
function mute() {
    if (sound === true) {
        sound = false;
        theme.volume = 0

    } else {
        sound = true;
        theme.volume = 0.3;
    }

}

function fireTorpedoHandler() {

    // Fire the photon torpedo!
    // CSS animation occurs whenever torpedo
    // 'left' property changes value
    torpedo.style.visibility = "visible";
    if ((rocket.x - 600) < 0) {
        torpedo.style.left = "60px"

    } else {
        torpedo.style.left = (rocket.x - 600) + "px";
    }
    if (sound === true) {
        playSound(missileSound)
    };
    if (rocket.y <= ufoObject.y + 45 && rocket.y >= ufoObject.y - 37) {
        setTimeout(hideUFO, 700);
    }
    setTimeout(render, 700);







}

function keydownHandler(event) {
    // handle user keyboard input

    if (event.keyCode === UP) {
        rocket.y -= velocity;
        if (rocket.y < 0) {
            rocket.y = 0;
        }
    }
    if (event.keyCode === LEFT) {
        rocket.x -= velocity;
        if (rocket.x < 30) {
            rocket.x = 30;

        }

    }
    if (event.keyCode === DOWN) {
        rocket.y += velocity;
        if (rocket.y > 390) {
            rocket.y = 390;
        }
    }
    if (event.keyCode === RIGHT) {
        rocket.x += velocity;
        if (rocket.x > 490) {
            rocket.x = 490;

        }
    }


    render();
}

function render() {
    // position objects on the screen
    rocket.img.style.left = rocket.x + "px";
    rocket.img.style.top = rocket.y + "px";
    torpedo.style.left = (rocket.x + 10) + "px";
    torpedo.style.top = (rocket.y + 8) + "px";
    torpedo.style.visibility = "hidden";
    ufoObject.img.style.top = ufoObject.y + "px";
    ufoObject.img.style.top = ufoObject.y + "px";
}