function happyFace() {
  //FACE
  //HEAD
    fill(244, 152, 87);
    ellipse (250, 150, 220, 260);
  //EYES
    fill(255);
    ellipse (210, 120, 50, 30);
    ellipse (300, 120, 50, 30);
    fill (94, 57, 43);
    ellipse (210, 120, 20, 20);
    ellipse (300, 120, 20, 20);
    //PUPILS
    fill (0);
    ellipse (210, 120, 10, 10);
    ellipse (300, 120, 10, 10);
  //EYEBROWS
    fill (94, 57, 43);
    quad (180, 90, 230, 90, 230, 95, 180, 100);
    quad (280, 90, 330, 90, 330, 100, 280, 95);
  //MOUTH
    stroke(0);
    fill(0);
    bezier(200, 200, 250, 250, 300, 250, 300, 200);
}

function sadFace() {
  //FACE
  //HEAD
    fill(227, 152, 130);
    ellipse (320, 240, 220, 260);
  //EYES
    fill(255);
    ellipse (280, 210, 50, 30);
    ellipse (370, 210, 50, 30);
    fill (94, 57, 43);
    ellipse (280, 210, 20, 20);
    ellipse (370, 210, 20, 20);
    //PUPILS
    fill (0);
    ellipse (280, 210, 10, 10);
    ellipse (370, 210, 10, 10);
  //EYEBROWS
    fill (94, 57, 43);
    quad (250, 180, 300, 170, 300, 175, 250, 190);
    quad (350, 170, 400, 180, 400, 190, 350, 175);
  //MOUTH
    stroke(0);
    fill(0);
    bezier(270, 310, 300, 260, 370, 260, 370, 310);

}

function angryFace() {
  //FACE
  //HEAD
    fill(112, 65, 57);
    ellipse (320, 240, 220, 260);
  //EYES
    fill(255);
    ellipse (280, 210, 50, 30);
    ellipse (370, 210, 50, 30);
    fill (94, 57, 43);
    ellipse (280, 210, 20, 20);
    ellipse (370, 210, 20, 20);
    //PUPILS
    fill (0);
    ellipse (280, 210, 10, 10);
    ellipse (370, 210, 10, 10);
  //EYEBROWS
    fill (0);
    quad (250, 180, 300, 190, 300, 195, 250, 190);
    quad (350, 190, 400, 180, 400, 190, 350, 195);
  //MOUTH
    stroke(0);
    strokeWeight(5);
    line(280, 290, 340, 320)

}

var faces = [happyFace, sadFace, angryFace];

function setup () {
  createCanvas(640, 480);
  background(100);
  noStroke(0);
}

function draw() {

}
function mousePressed() {
  background(100);
  noStroke(0);
  random(faces)();
}
