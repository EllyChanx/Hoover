"use strict";

function Hoover() {
  let fs = require('fs');
  this.inputInstruction = fs.readFileSync('/home/elly/Desktop/Hoover/input.txt').toString().split("\n");
  console.log(this.inputInstruction)
}

Hoover.prototype.getRoomDimensions = function() {
  let roomDimensions = this.inputInstruction[0].split(" ")
  this.roomWidth = Number(roomDimensions[0])
  this.roomHeight = Number(roomDimensions[1])
};

Hoover.prototype.getInitialCoord = function() {
  let initialCoord = this.inputInstruction[1].split(" ")
  this.initialXCoord = Number(initialCoord[0])
  this.initialYCoord = Number(initialCoord[1])
  if (this.initialXCoord > this.roomWidth || this.initialYCoord > this.roomHeight) { 
    throw new Error ("hoover doesn't work outdoor") 
  }
};

Hoover.prototype.outputResult = function(first_argument) {
  console.log(true);
  hoover.getRoomDimensions();
  hoover.getInitialCoord();
};

module.exports = Hoover;

let hoover  = new Hoover();
hoover.outputResult();
