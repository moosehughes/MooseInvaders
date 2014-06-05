/*Array for positioning alien sprites*/
  var levelData = { 
     1:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,2,2,2,2,2,2,0,0],
          [0,0,0,2,2,2,2,2,2,0,0],
          [0,0,0,2,2,2,2,2,2,0,0]],
     2:  [[0,0,0,2,0,0,2,2,0,0,0],
          [0,0,2,2,0,2,0,2,2,0,0],
          [0,0,2,0,2,0,0,2,2,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,2,2,2,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,0,2,2,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     3:  [[0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0],
          [0,0,2,2,2,2,2,2,2,2,0]] };

/*lists objects and where they are positioned on the spritesheet */
  var spriteData = {
    'alien1': { sx: 0,  sy: 0,  w: 55, h: 27, cls: Alien, frames: 2 },
    'alien2': { sx: 0,  sy: 36, w:51, h: 21, cls: Alien, frames: 2 },
    'player': { sx: 0,  sy: 68, w: 50, h: 56, cls: Player, frames: 3 },
    'missile': { sx: 0,  sy: 56, w: 3,  h: 10, cls: Missile }
  }
/* start screen intro */  function startGame() {
    var screen = new GameScreen("Moose Invaders","Not for Goats. Press space to play",
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
    GameAudio.load({ 'fire' : 'media/laser_2_.ogg', 'die' : 'media/laser.ogg', 'sound' : 'media/Rymdkraft_-_Ultramumie.wav' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });



