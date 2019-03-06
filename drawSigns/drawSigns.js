"use strict";
//draws the do no enter sign
let canvas1 = document.getElementById("canvas1");

//drasw red circle
let ctx = canvas1.getContext("2d");
ctx.translate(50, 20);
ctx.scale(2, 1);
ctx.save();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.fill();

//draws white line
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(20, 50);
ctx.lineTo(80, 50);
ctx.stroke();
ctx.closePath();
// writes text
ctx.fillStyle = "white";
ctx.font = "bold 14px Arial";
ctx.fillText("DO NOT", 22, 35);
ctx.fillText("ENTER", 25, 75);

ctx.restore();

//draws the redlight green light sign
let canvas2 = document.getElementById("canvas2");
ctx = canvas2.getContext("2d");
//draws backround
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
// draws black rectangle
ctx.beginPath();
ctx.restore();
ctx.fillStyle = "black";
ctx.rotate(-.75);
ctx.fillRect(-4, 11, 10, 30);
ctx.save();

ctx.closePath();
ctx.save();
ctx.stroke();

//draws red circle
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

//draws yellow circle
ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow";
ctx.arc(1, 26, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.stroke();



ctx.beginPath();
ctx.restore();
//draws green circle
ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.arc(1, 35, 2, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();
ctx.stroke();


//done