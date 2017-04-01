function setup() {
  createCanvas(600, 300);
  background(200, 150, 100);
  noStroke(0);

  var M = 50;

  fill(250);
    ellipse( M*1.5, M*1.5, M, M);
  fill(0);
    rect(M*2, M*2, M, M*3);
  fill(100);
    rect(M*2, M, M*3, M*1);
  fill(250);
    ellipse( M*4, M*3.5, M*2, M*3);
  fill(200);
    rect( M*5, M, M*2, M*2);
  fill(50);
    rect( M*5, M*3, M*2, M*2);
  fill(250);
  triangle( M*7, M, M*8, M*3, M*7, M*5);

};
