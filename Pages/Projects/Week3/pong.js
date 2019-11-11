//////////////////////////
//                      //
//CSMA10                //
//Intro To Programming  //
//Fall 19a              //
//Hector Garcia Torres  //
//407-520-2802          //
//////////////////////////


//variables for ball
var ballX = 50;
var ballY = 50;
var diameter = 50;
var directionX = 6;
var directionY = 5;

//variables for paddle
var rectX;
var rectY;
var rectW = 100;
var rectH = 25;

//statistics
var started = false;
var score = 0;
var difficultyDisplay = 1;
var difficulty = 1;


function setup() {
    createCanvas(800,800);
    
}

function draw(){
    background(0);
    
    //ball bounces off wall
     ballX = ballX + directionX; // ballX += directionX
     ballY = ballY + directionY;
    
    if (ballX < 0 || ballX > width){
        directionX = -directionX;
    }
    
    if (ballY < 0 || ballY > height){
        directionY = -directionY; 
    }
    
    //detect collision with paddle
    
    if((ballX > rectX && ballX < rectX + rectW) && (ballY + (diameter/2) >= rectY)){
        directionX*= -1;
        directionY*= -1;
        score++;
        difficultyDisplay++;
        rectW = rectW - 7;
        difficulty = difficulty + 15;
    }
    //detect collision with death
     if(ballY >= 750) {
        
         ballX = 250;
         ballY = 0;
         difficultyDisplay--;
         rectW = rectW + 7;
         
    }
    
    //draw ball
    fill(255);
    ellipse(ballX, ballY, diameter, diameter);
    
    //draw paddle
    fill(255);
    rect(rectX, rectY, rectW, rectH);
    

    
    //update paddle location
    if (!started){
        rectX = width/2;
        rectY = height - 100;
        started = true;
    }
    
    //draw score
    fill(255);
    textSize(24);
    text ("Score: " + score, 10, 55);
    text ("Difficulty: " + difficultyDisplay, 10,25);
    
    if (difficultyDisplay >= 10)
    {
        textSize(54);
        text("You WON!!!!",250,400);
        
    }
    
    //tutorial
    textSize(20);
    text("Reach Difficulty 10 to win!",540,35);
}


function keyPressed(){
    
    if(keyCode === LEFT_ARROW){
        
        rectX = ((rectX -50) - difficulty);
    }
    
     if(keyCode === RIGHT_ARROW){
        
        rectX = ((rectX + 50) + difficulty);
    }
}