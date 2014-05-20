/*Array for positioning alien sprites*/
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,1,0,0,0],
          [0,0,0,0,0,0,1,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,1,2,2,0,0,0,0],
          [0,0,0,0,1,2,2,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,2,2,2,2,0,0,0,0],
          [0,0,0,2,2,2,2,0,0,0,0],
          [0,0,0,2,2,2,2,0,0,0,0]],
     2:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,0]] };

/*lists objects and where they are positioned on the spritesheet */
  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 46, h: 30, cls: Alien, frames: 2 },
    'alien2': { sx: 2,  sy: 38, w:38, h: 13, cls: Alien, frames: 2 },
    'player': { sx: 0,  sy: 76, w: 38, h: 42, cls: Player, frames: 5 },
    'missile': { sx: 0,  sy: 58, w: 4,  h: 5, cls: Missile }
  }
/* start screen intro */  function startGame() {
    var screen = new GameScreen("Moose Invaders","Not for pussies. Press space to play",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }
/* if you fail this screen appears */
  function endGame() {
    var screen = new GameScreen("You are a shit Moose","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

/* win screen */
  function winGame() {
    var screen = new GameScreen("You are a-moose-ing!","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }
/* sounds for game */
  $(function() {
    GameAudio.load({ 'fire' : 'media/laser_2_.ogg', 'die' : 'media/laser.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



