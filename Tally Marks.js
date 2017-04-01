var i = 0; //counter
var x = i*20; //position of line

function setup() {
  createCanvas (700, 150);
  background('#818181');
}

function mousePressed() {
    stroke(255);
    i++; //count number of lines

    if (i % 5 === 0) {
      stroke('#a00000');
      strokeWeight(5);
      line (x+5, 30, x-35, 100);
      x+=20;
    }
    else {
      strokeWeight(3);
      line(x+=10, 30, x, 100);
    }
  }
