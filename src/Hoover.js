"use strict";

function Hoover() {
  let fs = require('fs');
  var inputInstruction = fs.readFileSync('/home/elly/Desktop/Hoover/input.txt').toString().split("\n");
  console.log(inputInstruction)
}

Hoover.prototype.getDimensions = function(array) {
  
};

Hoover.prototype.outputResult = function(first_argument) {
  console.log(true)
};

let hoover  = new Hoover();
hoover.outputResult();
