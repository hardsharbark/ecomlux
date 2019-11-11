//////////////////////////
//                      //
//CSMA10                //
//Intro To Programming  //
//Fall 19a              //
//Hector Garcia Torres  //
//407-520-2802          //
//////////////////////////

var x = 0;
var y = 600;
var speed = 3;
var onOff = true;
var bright1 = 0;


var waveX = 0;
function setup()
{
    createCanvas (1000,600);
    
    colorMode(HSB,360,100,100);
    
    noStroke();
}

function draw()
{
    background(203,70,bright1);
    
    fill(30,100,100);
    
    
    
    ellipse(x,y,100,100);
    
    fill(203,50,100);
    rect(0,400,1000,300)
    fill(203,50,100);
    
    ellipse(waveX,400,200,120);
   
            
        
    if( x != 600  && onOff == true)
        {
            y = y - speed;
            x = x + speed;
            bright1 += 0.5;
            
        }
    
    else
        {
            onOff = false;
            y = y + speed;
            x = x + speed;
            bright1 -= 0.5;
            
            waveX += 5;
        }
            


}