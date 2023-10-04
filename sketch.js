
//Declare Variables
let enemyxPos = 300
let enemyyPos = 300
let xPos = 100
let yPos = 100
let myleft
let myright
let myup
let mydown
let enemyleft
let enemyright
let enemyup
let enemydown
let snakeImage
let appleImage
let score = 0
let appleArray =[]

function preload(){//images
    snakeImage = loadImage("https://cdn.glitch.global/0aeacffb-a2a7-4aa2-9af6-35aea130f7fc/snake2.png?v=1689965171612")
    appleImage = loadImage("https://cdn.glitch.global/0aeacffb-a2a7-4aa2-9af6-35aea130f7fc/apple.png?v=1689965288667")
}

function setup() {//canvas
    createCanvas(500, 500);
   for(i = 0; i< appleArray.length; i++){
    image(appleImage(appleArray[i].xValue, appleArray[i].yValue, appleArray[i].wValue, appleArray[i].hValue))
}
    noStroke();
    rectMode(CENTER);
 }
 
 
 function draw() {
    background(0);
   
   fill(255);//score display
   textSize(22);
   text("Score:" + score, 140, 480);
   
    
    //Apple
    image(appleImage, enemyxPos,enemyyPos, 50,50)

    //My Square
    image(snakeImage, xPos,yPos, 50,50)

    //Keyboard Events for My Square
    if(keyIsDown(LEFT_ARROW)){
        xPos -= 3
    }

    if(keyIsDown(RIGHT_ARROW)){
        xPos += 3
    }

    if(keyIsDown(DOWN_ARROW)){
        yPos += 3
    }

    if(keyIsDown(UP_ARROW)){
        yPos -= 3
    }
    
    //My Square Borders (since the pixels of the square is 50,50 the origin would be 50 so to find the borders we would find half of that which is 25)
    myleft = xPos - 25
    myright = xPos + 25
    myup = yPos - 25
    mydown = yPos + 25

    //Enemy Square Borders
    enemyleft = enemyxPos - 18
    enemyright = enemyxPos + 18
    enemyup = enemyyPos - 18
    enemydown = enemyyPos + 18

    //Collision Detection
    if (myleft > enemyright || myright < enemyleft || myup > enemydown || mydown < enemyup){ //No collision detected
      
    }
    
    else{
        score += 1 //update score
      
        enemyxPos = random(0,250) //randomize position of next apple
        enemyyPos = random(0,250)
    }
 }

class Apples{
constructor(x, y, w, h){
this.xValue = x;
  this.yValue = y; 
  this.wValue = w;
}
}