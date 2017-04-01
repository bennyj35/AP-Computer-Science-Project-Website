function setup() {
  createCanvas(600,600);
  background(100);
  noStroke();
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
//NECK
  noStroke();
  fill (244, 152, 87);
  quad (200, 240, 310, 240, 320, 350, 210, 350);
//ARMS
  fill (244, 152, 87);
  quad (100, 350, 108, 450, 50, 600, 0, 600);
  quad (430, 350, 600, 600, 550, 600, 423, 450);
//SHIRT
  fill (255);
  /*rect (170, 350, 100, 100); */
  quad (100, 350, 430, 350, 410, 600, 120, 600);
  //SLEEVES
    quad (100, 350, 108, 450, 120, 450, 70, 410);
    quad (430, 350, 500, 430, 430, 460, 420, 460);
  //BUTTONS AND LINES
    stroke (0);
    strokeWeight(5);
    line (210, 352, 210, 600);
    line (320, 352, 320, 600);
    fill (0);
    ellipse (265, 380, 20, 20);
    ellipse (265, 440, 20, 20);
    ellipse (265, 500, 20, 20);
    ellipse (265, 560, 20, 20);


};
