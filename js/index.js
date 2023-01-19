const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const road = new Image();
road.src = "../images/road.png";

const car = new Image();
car.src = "../images/car.png";

startingX = canvas.width / 2;
startingY = canvas.height - 100;

class Obstacle {
  constructor() {
    this.x = Math.random() * 700;
    this.y = 0;
    this.width = 20 + Math.floor(Math.random() * 350);
    this.height = 20;
  }

  newPosition () {
    this.y++;
  }

  draw(){
    ctx.fillStyle = "brown"
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function updateCanvas() {

ctx.clearRect(0, 0, 500, 700);

ctx.drawImage(road, 0, 0, 500, 700);

player.draw();

for (let i = 0; i < obstaclesArray.length; i++) {
  obstaclesArray[i].newPosition()
  obstaclesArray[i].draw()
}

}

const player = {

  x: startingX,
  y: startingY,

  draw: function () {

  ctx.drawImage(car, this.x, this.y, 50, 100);
  },

  moveright: function () {  
    this.x = this.x + 5
  },

  moveLeft: function () {
    this.x = this.x - 5
  },
  
  moveUp: function () {
    this.y = this.y - 5;
  },

  moveDown: function () {
    this.y = this.y + 5;
  }
}

const obstaclesArray = []

function createObstacle (){

  let intervalId = setInterval(() => {
    obstaclesArray.push(new Obstacle())
  }, 2000)
}


function animationLoop(){
  let animationId = setInterval(() => {
    updateCanvas()
  },16)

}


function startGame() {
  ctx.drawImage(road, 0, 0, 500, 700);
  player.draw();
  createObstacle();
  animationLoop();
}

window.onload = () => {

  document.getElementById('start-button').onclick = () => {
    startGame();

  };

  document.addEventListener('keydown', e => {
    switch (e.keyCode) {
      case 38:
        player.moveUp();
        console.log("up", player)
        break;
      case 40:
        player.moveDown();
        console.log ("down", player)
        break;
      case 37: 
        player.moveLeft();
        console.log("left", player)
        break;
      case 39: 
        player.moveright();
        console.log("right", player)
        break;
    }
    updateCanvas();
  });
};

