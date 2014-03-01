describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
    describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });
  describe("create", function() {
    it("creates a new Space object", function() {
      var testSpace = Space.create(1, 2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
  describe("find", function() {
    it("finds a space by its coordinates", function() {
      var testGame = Game.create();
      var foundSpace = Space.find(2, 1);
      foundSpace.xCoordinate.should.equal(2);
      foundSpace.yCoordinate.should.equal(1);
    });
  });
});  

describe("Board", function() {
  describe("initialize", function() {
    it("is initialized with 9 spaces", function () {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces.length.should.equal(9);
    });
  });
  describe("create", function() {
    it("creates a new board object", function() {
      var testBoard = Board.create();
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
});

describe("Game", function() {
  describe("initialize", function() {
    it("is initialized with a board and players", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.players.length.should.equal(2);
      testGame.board.spaces.length.should.equal(9);
    });
  });
  describe("create", function() {
    it("creates a game", function() {
      var testGame = Game.create();
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
});
