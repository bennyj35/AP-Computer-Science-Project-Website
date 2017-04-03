var presidentHeights = [188, 170, 189, 163, 183, 171, 185, 168,
173, 183, 173, 173, 175, 178, 183, 193, 178, 173, 174, 183, 188,
180, 168, 180, 170, 178, 182, 180, 183, 178, 182, 188, 175, 179,
183, 192, 182, 183, 177, 185, 188, 188, 182, 185];
var x = 20;
var y = 300;
var rectWidth = 10;
var tallestHeight;

function setup() {
  createCanvas(500, 400);
  background(66, 138, 255);
  fill(40);
  rect(0, 300, 500, 100);
  stroke(60);
  strokeWeight(5);
  fill(66, 138, 255);
  
  for(i=0; i <= presidentHeights.length; i++) {
    rect(x, y, rectWidth, -presidentHeights[i]);
    x+=rectWidth;
  }
}
