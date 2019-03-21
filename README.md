# Hoover
Hoover is a Node.js console application that follows the instructions from [here](https://gist.github.com/DavidJSimpsonEsq/71dcf396a2303ad5edd08690289d016d).

## Requirements
Hoover program processes `input.txt` that reside in the same directory of `Hoovers.js` and takes input as the following format:

* the first line holds the room dimensions (X Y), separated by a single space 
* the second line holds the initial hoover coordinates
* subsequent lines contain the zero or more positions of patches of dirt (one per line)
* the next line then always contains the driving instructions (at least one)

The goal of the program is to take the above information then output the following on terminal:

* The final hoover position (X, Y)
* The number of patches of dirt the robot cleaned up

## Installation

To install dependencies, clone the repo to a machine with [Node](https://nodejs.org/en/) installed and run:
```
npm install
``` 

### Usage
Ensure `input.txt` is in the same folder as `Hoover.js` and is populated with desired input. At the root directory of the program and run:
```
node Hoover.js
or
npm start
```

### Testing and Coverage

Unit tests were written in Jasmine v3.3.1 and track coverage with Istanbul. To use `jasmine` and `istanbul` command, following packages are required to be installed globally:
```
npm install jasmine-node jasmine istanbul -g
``` 
#### Test
To run tests, enter:
```
jasmine
or
npn test
```
#### Coverage
To see coverage, enter:
```
istanbul cover Hoover.js
```
