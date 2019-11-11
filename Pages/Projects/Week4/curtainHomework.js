//////////////////////////
//                      //
//CSMA10                //
//Intro To Programming  //
//Fall 19a              //
//Hector Garcia Torres  //
//407-520-2802          //
//////////////////////////

//The images I have used were collected from pixabay.com, According to their policy, the images are copyright free and require no permission.

var img1;
var img2;
var totalRectangles;
var x, y;
var desiredColor;
var c;

function preload(){
    img1 = loadImage ("data/babylion.jpg");
    img2 = loadImage ("data/biglion.jpg");
    
}

function setup() {	

    
    createCanvas(900, 600);
    background(0);
    
    //loading image data
    img1.loadPixels();
    img2.loadPixels();
    
    //initialize values
    totalRectangles = 300;
    y = 0;
    c = 1;
    
    
        
}

function draw() {
    
    

    
    
    //set rectangle size based off totalRectangles
    var recSize = width/totalRectangles;
    
    //draw Rectangle
    var currentRectangle = 0;
    
    //this keeps the size proportional to your width
    while(currentRectangle < totalRectangles){ // while loop
        
    x = currentRectangle * recSize;


    
    //Get color 
    var desiredColor1 = getColor1();
    var desiredColor2 = getColor2();
    
    if(c>0){
        
        fill(desiredColor1);
    }
    
    if(c<0){
        
        fill(desiredColor2);
    }

    rect(x, y, recSize, recSize);
        
    rotate(PI / 3.0);
        
    currentRectangle++;
        
                                            }
    
    //move down a row
    y = y + recSize;
    
    //start over at top
    if(y > 600){
        totalRectangles = random(100, 300);
        
        c =-c;
        y = 0;
    }
    
    
    
    
}

///////////////
function getColor1() {
    var desiredColor1 = img1.get(floor(x), floor(y));
    return desiredColor1;

    
}

function getColor2() {
    var desiredColor2 = img2.get(floor(x), floor(y));
    return desiredColor2;
    
}