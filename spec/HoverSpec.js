describe("Hoover", function() {
  var Hoover = require('../Hoover');

  beforeEach(function() {
    hoover = new Hoover();
  });

  it("#getRoomSize get the room's width and height", function() {
    hoover.getRoomSize();
    expect(hoover.roomWidth).toEqual(5);
    expect(hoover.roomHeight).toEqual(5);
    });

  it("#getInitialCoord get the hoover's initial X & Y coord.", function() {
    hoover.getInitialCoord();
    expect(hoover.initialXCoord).toEqual(1);
    expect(hoover.initialYCoord).toEqual(2);
  });

  it("#getInitialCoord error if initial X is outside of the room", function() {
    hoover.roomWidth = 0;
    expect(function(){hoover.getInitialCoord()}).toThrowError("hoover doesn't work outdoor")
  });

  it("#getInitialCoord error if initial Y is outside of the room", function() {
    hoover.roomHeight = 0;
    expect(function(){hoover.getInitialCoord()}).toThrow(new Error("hoover doesn't work outdoor"))
  });

  it("#getMoveInstr get array of the instructed movements", function() {
    hoover.getMoveInstr();
    expect(hoover.moves).toEqual([ 'N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ])
  });

  it("#applyMoves turn moves into move coord trace as ary", function() {
    hoover.getInitialCoord();
    hoover.getMoveInstr();
    hoover.applyMoves()
    expect(hoover.moveTrace).toContain([ '1', '3' ] && [ '1', '4' ]);
  });

  it("#getDirtCoord get array of dirt coord", function() {
    hoover.getDirtCoord();
    expect(hoover.dirtCoord).toEqual([ ['1', '0'], ['2', '2'], ['2', '3'] ]);
  });

  it("#countDirtCleaned count no. of dirt coords match robot trace", function() {
    hoover.getInitialCoord();
    hoover.getMoveInstr();
    hoover.applyMoves()
    hoover.getDirtCoord();
    hoover.countDirtCleaned();
    expect(hoover.dirtCleaned).toEqual(1);
  });

});
