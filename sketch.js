var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;;
var database,gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var fuels, powerCoins, obstacles, obstacle1Image, obstacle2Image; // aula 40
var cars = [], lifeImage, blastImage;

function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/pista.png");

  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");

  obstacle1Image = loadImage("assets/obstacle1.png");
  obstacle2Image = loadImage("assets/obstacle2.png");
  lifeImage = loadImage("assets/life.png");
  blastImage = loadImage("assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState(); // pega o valor do estado do jogo!
  game.start(); 
  
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1); 
  }

  if (gameState === 1) {
    game.play(); 
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
