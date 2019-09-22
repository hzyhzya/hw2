function setup() {
  createCanvas(400, 400);
  strokeCap(SQUARE);
  
}


function draw() {
  background(240);
  { 
    
    //rect
    fill(180, 0, 0);
    noStroke();
    square(0, 50, 100);
    
    
    fill(10, 10, 100);
    rect(0, 300, 250, 100);
    
    fill(255, 255, 0);
    rect(300, 0, 100, 250);
    
    
    //line
    stroke(0, 0, 0);
    strokeWeight(10);
    line(100, 0, 100, 300);
    line(300, 0, 300, 400);
    line(0, 300, 300, 300);
    
    
    strokeWeight(15);
    line(0, 150, 100, 150);
    line(250, 300, 250, 400);
    
  }
}
