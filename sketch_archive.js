let angle = 0;


function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  //Larger Shape (below)
  noStroke();

  fill(245,238,128);
  push();
  // translate(300, 0);
  rotate(angle);
  triangle(60,440,300,580,300,300);
  triangle(300,580,540,440,300,300);
  pop();

  // angle++;

  fill(221,167,79);

  push();
  translate(0, 0);
  rotate(angle);
  triangle(540,440,540,160,300,300);
  triangle(540,160,300,20,300,300);
  pop();

  // angle++;

  fill(184,108,44)

  push();
  // translate(0, 200);
  rotate(angle);
  triangle(300,20,60,160,300,300);
  triangle(60,160,60,440,300,300);
  pop();


  //Smaller Shape (above)
  fill(184,108,44)

  push();
  // translate(0, 349);
  rotate(angle);
  triangle(180,370,300,440,300,300);
  pop();

  push();
  // translate(70, 0);
  rotate(angle);
  triangle(300,440,420,370,300,300);
  pop();

  fill(245,238,128)

  push();
  // translate(0, 60);
  rotate(angle);
  triangle(420,370,420,230,300,300);
  pop();

  push();
  // translate(10, 0);
  rotate(angle);
  triangle(420,230,300,160,300,300);
  pop();

  fill(221,167,79)

  push();
  // translate(0, 200);
  rotate(angle);
  triangle(300,160,180,230,300,300);
  pop();

  push();
  // translate(100, 0);
  rotate(angle);
  triangle(180,230,180,370,300,300);
  pop();









}
