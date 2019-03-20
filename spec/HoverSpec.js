describe("Hoover", function() {
  var Hoover = require('../src/Hoover');

  beforeEach(function() {
    hoover = new Hoover();
  });

  it("#getRoomDimensions get the room's width and height", function() {
    hoover.getRoomDimensions();
    expect(hoover.roomWidth).toEqual(5);
    expect(hoover.roomHeight).toEqual(5);
    });

  it("#initialCoord get the hoover's initial X & Y coord.", function() {
    hoover.getInitialCoord();
    expect(hoover.initialXCoord).toEqual(1);
    expect(hoover.initialYCoord).toEqual(2);
  });

  it("#initialCoord error if initial X is outside of the room", function() {
    hoover.roomWidth = 0;
    expect(function(){hoover.getInitialCoord()}).toThrowError("hoover doesn't work outdoor")
  });

  it("#initialCoord error if initial Y is outside of the room", function() {
    hoover.roomHeight = 1;
    expect(function(){hoover.getInitialCoord()}).toThrowError("hoover doesn't work outdoor")
  });
});
