var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;
var carw
var carr
var cars
var allplayers
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  track1 = loadImage("./assets/track.jpg");
  car1 = loadImage("./assets/car1.png");
  car2 =loadImage("./assets/car2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getstate();
  game.start();

}

function draw() {
  background(backgroundImage);
  if(playerCount==2){
    game.update(1)
  }
  if(gameState==1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
