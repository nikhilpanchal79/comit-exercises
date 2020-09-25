"use strict";

let myTime = prompt("Please enter your the current hour (out of 0-23)");

if (myTime < 0 || myTime > 23) {
    alert("Please enter correct hour.");
} else if (myTime < 8 || myTime >= 18){
    alert("Our office is closed now.");
} else {
    alert("Our office is Open now.");
}