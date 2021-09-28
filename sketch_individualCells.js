
// Triangle01: Bottom Big Triangle
let bigTriangleBottom = {
  colorR: 245,
  colorG: 238,
  colorB: 128,
  x1: 60,
  y1: 440,
  x2: 300,
  y2: 580,
  x3: 300,
  y3: 300
}


let angle = 0;

let honeyCellWidth = 480;
let honeyCellHeightOffset = 420;


function setup() {
  createCanvas(1600, 1600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  //Larger Shape (below)
  noStroke();




  
  oneHoneyCell();
  push();
  translate(honeyCellWidth, 0);
  oneHoneyCell();
  pop();

  push();
  translate(honeyCellWidth * 2, 0);
  oneHoneyCell();
  pop();

  push();
  translate(honeyCellWidth/2, honeyCellHeightOffset);
  oneHoneyCell();
  pop();

  push();
  translate(honeyCellWidth*3/2, honeyCellHeightOffset);
  oneHoneyCell();
  pop();



}


function oneHoneyCell() {

    //Bottom big triangle
    fill(bigTriangleBottom.colorR, bigTriangleBottom.colorG, bigTriangleBottom.colorB);
    push();
    triangle(bigTriangleBottom.x1, bigTriangleBottom.y1, bigTriangleBottom.x2, bigTriangleBottom.y2,bigTriangleBottom.x3, bigTriangleBottom.y3);
    triangle(300,580,540,440,300,300);
    pop();


    //Right big triangle
    fill(221,167,79);

    push();
    triangle(540,440,540,160,300,300);
    triangle(540,160,300,20,300,300);
    pop();

    // Left big triangle
    fill(184,108,44)

    push();
    triangle(300,20,60,160,300,300);
    triangle(60,160,60,440,300,300);
    pop();


    //Smaller Shape (above)
    fill(184,108,44)
    // bottom small triangles
    push();
    triangle(180,370,300,440,300,300);
    pop();

    push();
    triangle(300,440,420,370,300,300);
    pop();

    fill(245,238,128)

    // Right small triangles
    push();
    triangle(420,370,420,230,300,300);
    pop();

    push();
    triangle(420,230,300,160,300,300);
    pop();

    fill(221,167,79)

    // left small triangles
    push();
    triangle(300,160,180,230,300,300);
    pop();

    push();
    triangle(180,230,180,370,300,300);
    pop();

}
