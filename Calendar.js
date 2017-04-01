var y = 75;
var s = 15;
var d;
var fillElipse;

function setup() {
  createCanvas (700, 150);
  background(150);
  d = day();
  }

function draw() {
  for(i=1; i<=31; i++) {
    if (i===d) {
          fill('#d13a3a')
        }
      else {
          fill(0);
        }
    ellipse(25+i*20, y, s, s);
  }
}
