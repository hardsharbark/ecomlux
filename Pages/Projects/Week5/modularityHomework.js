//////////////////////////
//                      //
//CSMA10                //
//Intro To Programming  //
//Fall 19a              //
//Hector Garcia Torres  //
//407-520-2802          //
//////////////////////////

var player;

function setup()
{
createCanvas(800, 800);
    

    
    player = new Ball(300,300);
}

function draw()
{
    background(255);
    player.drawBall();
    player.moveBall();
    
    
    rect(0,0,800,30);
    rect(0,0,30,800);
    rect(770,0,30,800);
    rect(0,770,800,30);
    
    if(player.collisionBall == true)
        {
            console.log("WORKED OMG");
        }
    
}

function Ball(ballX,ballY)
{
    this.x = ballX;
    this.y = ballY;

    
    
    
    // draws ball
    this.drawBall = function() 
    {
        fill(0);
        noStroke();
        ellipse(this.x, this.y, 30,30);
    }
    
    
    // moves ball
    this.moveBall = function() 
    {
        
        
    if(keyCode === DOWN_ARROW)
        {
            this.y += 2;

        }
        
    if(keyCode === UP_ARROW)
        {
            this.y -= 2;

        }
    if(keyCode === LEFT_ARROW)
        {
            this.x -= 2

        }
        
    if(keyCode === RIGHT_ARROW)
        {
            this.x += 2;

        }
        
    
        
        
    }
    

    

}



