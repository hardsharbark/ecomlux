//////////////////////////
//                      //
//CSMA10                //
//Intro To Programming  //
//Fall 19a              //
//Hector Garcia Torres  //
//407-520-2802          //
//////////////////////////

var colorTable;
var popYear = [];
var popPR = [];
var popPRNum = [];





function preload(){
    
    colorTable = loadTable("assets/population.csv");
}




function setup()
{
    
    createCanvas (900,600);
    
    noStroke();
    
    
    for(var i = 0; i < colorTable.getRowCount(); i++)
    {
        
        popYear[i] = colorTable.getNum(i,0);
        popPR[i] = colorTable.getString(i, 1);
        popPRNum[i] = colorTable.getNum(i, 2);  
        popPRNum[i] = popPRNum[i] * 50;
    }
    
}

function draw()
{
    
    background(255);
    
    textSize(25);
    fill(0);
    text("Puerto Rico Population Bar Graph",30,30)
    for(var i = 0; i < colorTable.getRowCount(); i++)
    {
        fill(0);
        
        textSize(20);
        text(popYear[i], 75 * (i+1), 500);
        
        textSize(12);
        text(popPR[i], 75 * (i+1), 525);
        

        textSize(12);
        
        
        fill(255,0,0);
        rect(70,250,25,popPRNum[0]);
        rect(150,255,25,popPRNum[1]);
        rect(225,260,25,popPRNum[2]);
        rect(300,265,25,popPRNum[3]);
        rect(370,270,25,popPRNum[4]);
        rect(450,275,25,popPRNum[5]);
        rect(522,280,25,popPRNum[6]);
        rect(600,285,25,popPRNum[7]);
        rect(675,290,25,popPRNum[8]);
                    
        

    }
    
    
    
}



    
    