"use strict";
// Coord. = Coordination; Instr. = Instruction

function Hoover() {
  let fs = require('fs');
  this.inputInstr = fs.readFileSync(__dirname + '/input.txt').toString().split("\n");
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
  self.moveTrace = [[`${X}`, `${Y}`]]
  self.moves.map( i => {
    switch (i) {
    case "N":
      Y + 1 > self.roomHeight ? true : self.moveTrace.push([`${X}`, `${Y+=1}`]);
      break;
    case "E":
      X + 1 > self.roomWidth ? true : self.moveTrace.push([`${X+=1}`, `${Y}`]);
      break;
    case "S":
      Y - 1 < 0 ? true : self.moveTrace.push([`${X}` , `${Y-=1}`])
      break;
    case "W":
      X - 1 < 0 ? true : self.moveTrace.push([`${X-=1}` , `${Y}`])
    }
  });
  self.lastCoord = self.moveTrace.slice(-1)[0]
};

Hoover.prototype.getDirtCoord = function() {
  let dirtInput = this.inputInstr.slice(2, -1)
  this.dirtCoord = dirtInput.map( i =>
    i = i.split(" ")
  )
};

Hoover.prototype.countDirtCleaned = function() {
  this.dirtCleaned = 0
  let self = this;
  self.dirtCoord.map( i => {
    if (JSON.stringify(self.moveTrace).includes(JSON.stringify(i))){
      self.dirtCleaned++
    } 
  })
};

Hoover.prototype.outputResult = function() {
  hoover.getRoomDimensions()
  hoover.getInitialCoord()
  hoover.getMoves()
  hoover.applyMoves()
  hoover.getDirtCoord()
  hoover.countDirtCleaned()
  console.log(Number(this.lastCoord[0]) + " " + this.lastCoord[1])
  console.log(this.dirtCleaned)
};

module.exports = Hoover;

let hoover  = new Hoover();
hoover.outputResult();
