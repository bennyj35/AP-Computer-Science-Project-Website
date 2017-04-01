//VARIABLES
var x = 150; //original X location of ball
var y = 26; //original X location of ball
var speed = 5; //controls speed/difficulty of the game
var motion;
var distance;  //distance between mouse and ball
var ballXDirection; //X direction of the ball
var ballYDirection; //Y direction of the ball

//INITIAL SETUP AND MOVEMENT
function setup() {
  createCanvas(300, 600);
  noStroke();
  background('#008080');
  motion = function down() {
    y=y+speed;
  }
  ballYDirection = "down";
}

//GAME PHYSICS
function draw() {
    distance = dist(mouseX, mouseY, x, y);
    var randomX = round(random(-speed, speed)); //picks random direction for ball when it touches the mouse
    background('#008080');
    fill(200);
    ellipse(x, y, 50, 50); //ball
    motion();

  //MOUSE BEHAVIOR
    //If the mouse touches the ball
    if (distance<=25 && ballYDirection != "up") {
      motion = function mouseTouch() {
      ballYDirection = "up";
      y=y-speed;
      x=x+randomX;
      }
    }

  //CEILING BEHAVIOR
    //If the ball hits the ceiling and is going right
    if (y<=25 && ballXDirection === "right" && ballYDirection === "up") {
      motion = function ceilingRight() {
        ballXDirection = "right"
        ballYDirection = "down";
        y=y+speed;
        x=x+speed;
      }
    }
    //If the ball hits the ceiling and is going left
    if (y<=25 && ballXDirection === "left" && ballYDirection === "up") {
      motion = function ceilingLeft() {
        ballXDirection = "left";
        ballYDirection = "down";
        y=y+speed;
        x=x-speed;
      }
    }

  //LEFT WALL BEHAVIOR
    //If the ball hits the left wall and is going down
    if (x<=25 && ballYDirection === "down") {
      motion = function downRight() {
        ballXDirection = "right";
        ballYDirection = "down";
        y=y+speed;
        x=x+speed;
      }
    }
    //If the ball hits the left wall and is going up
    if (x<=25 && ballYDirection === "up") {
      motion = function upRight() {
        ballXDirection = "right";
        ballYDirection = "up";
        y=y-speed;
        x=x+speed;
      }
    }

  //RIGHT WALL BEHAVIOR
    //If the ball hits the right wall and is going down
    if (x>=275 && ballYDirection === "down") {
      motion = function downLeft() {
        ballXDirection = "left"
        ballYDirection = "down";
        y=y+speed;
        x=x-speed;
      }
    }
    //If the ball hits the right wall and is going up
    if (x>=275 && ballYDirection === "up") {
      motion = function upLeft() {
        ballXDirection = "left"
        ballYDirection = "up";
        y=y-speed;
        x=x-speed;
      }
    }

    //Game Over
    if (y>600) {
      text("STOP WASTING YOUR LIFE",70,100,300,300);
    }
}
