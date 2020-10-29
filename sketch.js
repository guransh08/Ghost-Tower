var climber,climberImage,door,doorImage,ghostJumpi,ghostJump,ghostStandi,ghostStand,spookySound,tower,towerImage,dg,cg,lg;
var line;
var PLAY=1;
var gameState=PLAY;
var END=0;



function preload(){
  
  climberImage=loadImage("climber.png")
  doorImage=loadImage("door.png");
  ghostJumpi=loadImage("ghost-jumping.png");
  ghostStandi=loadImage("ghost-standing.png");
  spookySound=loadSound("spooky.wav");
  towerImage=loadImage("tower.png");
  
}
function setup(){
  createCanvas(600,600);
  
  
  
  tower=createSprite(300,300,10,10);
  tower.addImage("tower",towerImage);
  tower.scale=1;
  tower.velocityY=5;
  
  ghostStand=createSprite(300,300,10,10);
  ghostStand.addImage("ghostStand",ghostStandi);
  ghostStand.scale=0.3;
  
  dg=createGroup();
  lg=createGroup();
  cg=createGroup();
  
  
}

function draw(){
  
  background("black");
  
 if(gameState===PLAY) {
 if(tower.y>400) {
tower.y=300;
  
 }
  
  if(keyDown("space")){
    ghostStand.velocityY=-5;
  }
  ghostStand.velocityY=ghostStand.velocityY+0.8;     
  
  if(keyDown("right")){
    ghostStand.x=ghostStand.x+8;
  }
  if(keyDown("left")){
    ghostStand.x=ghostStand.x-8;
  }
         
  if(cg.isTouching(ghostStand)){
ghostStand.velocityY=0;       
  }
if(lg.isTouching(ghostStand)|| ghostStand.y>600){
  ghostStand.destroy();
  gameState=END;
}
  Door();
  drawSprites();
   
   spookySound.play();
 }
  
  if(gameState===END){
    textFont("Forte")
    fill("yellow");
    textSize(40);
    text("GAME OVER",200,300);
  }
}
function Door(){
if(frameCount%150===0){
  door=createSprite(200,0,10,10);
  door.addImage("door",doorImage);
  door.velocityY=+5;
  door.x=Math.round(random(100,400));
  dg.add(door);
  
  climber=createSprite(door.x,50,10,10);
  climber.addImage("climber",climberImage);
  climber.velocityY=+5;
  cg.add(climber);
  
  ghostStand.depth=door.depth+1; 
  
  line=createSprite(door.x,57,climber.width,2);
  line.velocityY=+5;
  line.shapeColor=("green");
  lg.add(line);
  
  
}
  
  
}












