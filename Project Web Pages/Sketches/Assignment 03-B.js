function setup() {
  createCanvas(300, 600);
  noStroke();
  background(0);
}

var x = 150;
var y = height/2;

//INITIAL MOVEMENT
function draw() {
  background(100);
  fill(255);
  ellipse(x, y, 50, 50);
}
  //BOUNCE OFF TOP
