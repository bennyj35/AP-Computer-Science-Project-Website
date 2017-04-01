function setup() {
  createCanvas(600, 300);
}
function draw() {
  background(170, 190, 200);
  noStroke();
  var fixme = 600-mouseX;
  fill(255);
  ellipse(mouseX, 100, 60, 60);
  fill(0);
  ellipse(fixme, 200, 60, 60);
}
