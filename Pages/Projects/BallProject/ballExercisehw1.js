var startX;
var startY;
var directionX;
var directionY;

var directionX2;
var directionY2;

var startX2 = 10;
var startY2 = 10;


function setup()
{

    createCanvas(700,700);
    
    

    //starting point
    startX = width/2;
    startY = height/2;
    
    
    //movement
    directionX = 6;
    directionY = 6;
   
}


function draw()
{
    background(200);

      startX = startX + random(directionX);
      startY = startY + directionY;


    
    fill(30,55,100);
    
    triangle(directionY, startX, mouseX, directionX, startY, 70);
    noStroke();
    fill(45,35,255);
    
    
    triangle(mouseX, startY, mouseY, mouseX, startY, 80);
    
    if (startX <= -height || startX >= width )
        {
            directionX = directionX;

        }
    if (startY <= -height || startY >= width )
        {
            directionY = -directionY;
        }
    
    
    

    
    
    
}