const Hoover = require ('../Hoover')

let hoover = new Hoover();

test("#getRoomSize get the room size from .txt", (done) => {
  hoover.getRoomSize();
  expect(hoover.roomHeight).toEqual(5);
  expect(hoover.roomWidth).toEqual(5);
  done();
})

test("#getInitialCoord error if initial Y is outside of the room", (done) => {
  hoover.roomHeight = 0;
  expect(function(){hoover.getInitialCoord()}).toThrow("hoover doesn't work outdoor");
  done();
})

describe("#applyMoves switch - true condition", () => {
  beforeEach(() => {
    hoover.roomWidth = 2;
    hoover.roomHeight = 2;
  })

  test("N and E walls", (done) => {
    hoover.initialXCoord = 2;
    hoover.initialYCoord = 2;
    hoover.moves = ["N", "E"];
    hoover.applyMoves();
    expect(hoover.lastCoord).toEqual(["2", "2"]);
    done();
  })

  test("S and W walls", (done) => {
    hoover.initialXCoord = 0;
    hoover.initialYCoord = 0;
    hoover.moves = ["S", "W"];
    hoover.applyMoves();
    expect(hoover.lastCoord).toEqual(["0", "0"]);
    done();
  })
})