function setup() {
  createCanvas(400, 400);
}

var ballx = 50;
var ballSpeed = 3;

var ballx2 =50;
var ballSpeed2 = 5;


function draw() {
  background(220);
  
  fill(255, 204, 0);
  noStroke(); 
  ellipse(ballx, mouseX, 50) ;
  
  fill(0, 204, 125);
  noStroke(); 
  ellipse(ballx2, mouseY, 50);
  
  ballx = ballx + ballSpeed;
  ballx2 = ballx2 + ballSpeed2;

  if (ballx >= width) {
  ballSpeed = -3;
  }
  
  if (ballx <= 0) {
  ballSpeed = 3;
  }
  
   if (ballx2 >= width) {
  ballSpeed2 = ballSpeed2 * -1;
  }

  if (ballx2 <= 0) {
  ballSpeed2 = ballSpeed2 * -1;
   }
    
}
 
 
