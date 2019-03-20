"use strict";
// Coord. = Coordination; Instr. = Instruction

function Hoover() {
  let fs = require('fs');
  this.inputInstr = fs.readFileSync('/home/elly/Desktop/Hoover/input.txt').toString().split("\n");
  console.log(this.inputInstr)
}

Hoover.prototype.getRoomDimensions = function() {
  let roomDimensions = this.inputInstr[0].split(" ")
  this.roomWidth = Number(roomDimensions[0])
  this.roomHeight = Number(roomDimensions[1])
};

Hoover.prototype.getInitialCoord = function() {
  let initialCoord = this.inputInstr[1].split(" ")
  this.initialXCoord = Number(initialCoord[0])
  this.initialYCoord = Number(initialCoord[1])
  if (this.initialXCoord > this.roomWidth || this.initialYCoord > this.roomHeight) { 
    throw new Error ("hoover doesn't work outdoor") 
  }
};

Hoover.prototype.getMoves = function() {
  let movetIndex = this.inputInstr.length - 1
  this.moves = this.inputInstr[movetIndex].split("")
};

Hoover.prototype.applyMoves = function() {
  let self = this;
  let X = self.initialXCoord;
  let Y = self.initialYCoord;
  self.moveTrace = [[X, Y]]
  self.moves.map(function(i) {
    switch (i) {
    case "N":
      Y + 1 > self.roomHeight ? true : self.moveTrace.push([X, Y+=1]);
      break;
    case "E":
      X + 1 > self.roomWidth ? true : self.moveTrace.push([X+=1, Y]);
      break;
    case "S":
      Y - 1 < 0 ? true : self.moveTrace.push([X , Y-=1])
      break;
    case "W":
      X - 1 < 0 ? true : self.moveTrace.push([X-=1 , Y])
    }
  });
  return self.moveTrace
};

Hoover.prototype.outputResult = function() {
  console.log(true);
  hoover.getRoomDimensions()
  hoover.getInitialCoord()
  hoover.getMoves()
  hoover.applyMoves()
  console.log(hoover.moveTrace)
  
};

module.exports = Hoover;

let hoover  = new Hoover();
hoover.outputResult();
