"use strict";

let canvas1 = document.getElementById("canvas1");

let ctx = canvas1.getContext("2d");
ctx.translate(50, 20);
ctx.scale(2, 1);
ctx.save();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.fill();
//ctx.restore();

ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(20, 50);
ctx.lineTo(80, 50);
ctx.stroke();
//ctx.save();
ctx.closePath();

ctx.fillStyle = "white";
ctx.font = "bold 14px Arial";
ctx.fillText("DO NOT", 22, 35);
ctx.fillText("ENTER", 25, 75);

ctx.restore();

let canvas2 = document.getElementById("canvas2");
ctx = canvas2.getContext("2d");

ctx.beginPath();
ctx.translate(140, 10);
ctx.scale(4, 2);
ctx.rotate(.75);
ctx.lineWidth = 2;
ctx.lineJoin = "bevel";
ctx.rect(0, 0, 40, 40);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.restore();
ctx.fillStyle = "black";
ctx.rotate(-.75);
ctx.fillRect(-4, 11, 10, 30);
ctx.save();

ctx.closePath();
ctx.save();
ctx.stroke();

ctx.beginPath();
ctx.restore();
ctx.translate(1, 17);
ctx.fillStyle = "red";
ctx.strokeStyle = "red";
ctx.arc(0, 0, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.stroke();



ctx.beginPath();
ctx.restore();

ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow";
ctx.arc(1, 26, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.stroke();



ctx.beginPath();
ctx.restore();

ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.arc(1, 35, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.stroke();


//done















// ctx.save(); // save previous display state
// //  set drawing properties for the sign
// ctx.lineWidth = 32; // nice wide line		
// ctx.lineJoin = "round"; // rounded corners
// ctx.strokeStyle = "red";
// ctx.fillStyle = "red";

// // create octagon linear path
// ctx.beginPath();
// ctx.moveTo(200, 100);
// ctx.lineTo(350, 100);
// ctx.lineTo(450, 200);
// ctx.lineTo(450, 350);
// ctx.lineTo(350, 450);
// ctx.lineTo(200, 450);
// ctx.lineTo(100, 350);
// ctx.lineTo(100, 200);
// ctx.closePath();

// // fill the sign and draw wide red lines
// ctx.fill();
// ctx.stroke();

// // draw narrower white lines -- these will display on top of the wide red lines and make the red lines
// // look like the outside edge -- a nice trick!
// ctx.strokeStyle = "white";
// ctx.lineWidth = 10;
// ctx.stroke();

// // draw STOP text
// ctx.fillStyle = "white";
// ctx.font = "bold 100px Arial";
// ctx.fillText("STOP", 140, 310);
// ctx.restore(); // restore previous display stat