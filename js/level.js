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
    'alien1': { sx: 0,  sy: 0,  w: 23, h: 18, cls: Alien, frames: 3 },
    'alien2': { sx: 0,  sy: 18, w: 23, h: 18, cls: Alien, frames: 3 },
    'player': { sx: 0,  sy: 36, w: 26, h: 17, cls: Player, frames: 2 },
    'missile': { sx: 0,  sy: 86, w: 3,  h: 14, cls: Missile }
  }
/* start screen intro */  function startGame() {
    var screen = new GameScreen("Goat Adventures","Not for pussies. Press space to play",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
    Game.loop();
  }
/* if you fail this screen appears */
  function endGame() {
    var screen = new GameScreen("You are a shit goat","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

/* win screen */
  function winGame() {
    var screen = new GameScreen("You Goat","(press space to restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }
/* sounds for game */
  $(function() {
    GameAudio.load({ 'fire' : 'media/laser_2_.ogg', 'die' : 'media/ah.ogg' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



