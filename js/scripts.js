var Player = {
  initialize: function(symbol) {
    this.symbol = symbol; 
  },
  create: function(symbol) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(symbol);
    return newPlayer;
  }
};

var Space = {
  all: [],
  initialize: function(x, y) {
    this.xCoordinate = x;
    this.yCoordinate = y;
  },
  create: function(x, y) {
    var newSpace = Object.create(Space);
    newSpace.initialize(x, y);
    this.all.push(newSpace);
    return newSpace;
  },
  markBy: function(player) {
    this.markedBy = player;
  },
  find: function(x, y) {
    var match = this.all.filter(function(space) {
      return space.xCoordinate === x && space.yCoordinate === y;
    });
    return match[0];
  }
};

var Board = {
  initialize: function() {
    this.spaces = [];
    for (var x = 1; x <= 3; x++) {
       for (var y = 1; y <= 3; y++) {
        this.spaces.push(Space.create(x, y));
      }
    }
  },
  create: function() {
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  }
};

var Game = {
  initialize: function() {
    this.board = Board.create();
    this.players = [];
    this.players.push(Player.create('X'));
    this.players.push(Player.create('O'));
  },
  create: function() {
    var newGame = Object.create(Game);
    newGame.initialize();
    return newGame;
  }
};



