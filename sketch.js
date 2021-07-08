var jumper,ground,bg1,plank,cowboy;
var START=0;
var PLAY=1;
var END=2;
var gameState=START;
var blcks=[];
var blockGroup;

function preload(){
     bg1=loadImage("bg.jpg");
     plank=loadImage("plank.png");
     cowboy=loadImage("cowboy.png");
}

 function setup(){
    createCanvas(400,630);

     jumper=createSprite(100,300,30,30);
     jumper.addImage(cowboy);
     jumper.scale=0.3;
     blockGroup=new Group();
 }

 function draw(){
     background(bg1);
     if(gameState===START){
         textSize(20);
         fill("black");
         text("Press space to start",150,300);
         if(keyDown("space")){
             gameState=PLAY;
         }
     }
     if(gameState===PLAY){
        spawnBlocks();

        if(keyDown(RIGHT_ARROW)){
            jumper.x=jumper.x+4;
        }    
        if(keyDown(LEFT_ARROW)){
            jumper.x=jumper.x-4;
        }
        if(keyDown("space")){
            jumper.velocityY = -13;
        }
        jumper.velocityY = jumper.velocityY + 0.8

        if(blockGroup.isTouching(jumper)){
            jumper.velocityY = 0;
          }

        if(jumper.y>=630){
            gameState=END;
        }
     }

     drawSprites();

     if(gameState===END){
         background("black");
         textSize(22);
         fill("blue");
         text("GAME OVER",150,300);
     }
 }

 function spawnBlocks() {
    //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var jumpBlock = createSprite(200,0,100,30);
      jumpBlock.addImage(plank);
      jumpBlock.x = Math.round(random(60,550));
      jumpBlock.velocityY = 3;
      jumpBlock.scale=0.3;
       //assign lifetime to the variable
      jumpBlock.lifetime = 210;   
      //add each cloud to the group
      blockGroup.add(jumpBlock);
    }
    
  }