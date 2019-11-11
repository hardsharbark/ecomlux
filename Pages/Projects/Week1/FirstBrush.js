//////////////////////////
//                      //
//CSMA10                //
//Intro To Programming  //
//Fall 19a              //
//Hector Garcia Torres  //
//407-520-2802          //
//////////////////////////
function setup() 
{
  createCanvas(400, 400);
  background(255);
}


function draw() 
{

}

function mouseDragged()
{
fill(random(100,255), random(100,255), random(100,255));
noStroke();
ellipse(10 + mouseX,mouseY,5);
ellipse(15 + mouseX,mouseY,5);
ellipse(20 + mouseX,mouseY,5);
ellipse(25 + mouseX,mouseY,5);

  
}