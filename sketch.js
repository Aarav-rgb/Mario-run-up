var mario, mario_running, edges;
var groundImage;
var dummyGround;
var ground;
var invisible;

function preload(){
  mario_running = loadAnimation("mario1.png","mario2.png","mario3.png");
  groundImage = loadImage("ground1.png")
  dummyGround = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
 
  mario = createSprite(50,160,20,50);
  mario.addAnimation("running", mario_running);
  //edges = createEdgeSprites();

  
  ground = createSprite(200,180,400,20);

invisible = createSprite(200,190,400,20);
invisible.visible = false

ground.x = ground.width/2;
ground.addImage(groundImage)


  
  
  mario.scale = 0.5;
  mario.x = 50
}


function draw(){
 
  background("white");
  
  
  console.log(mario.y)
  
  
  if(keyDown("space") && mario.y >= 100){
    mario.velocityY = -10;
  }
  
  mario.velocityY = mario.velocityY + 0.5;

  if (ground.x < 0) {
    ground.x = ground.width/2
  }
  

  
  console.log(ground.x)

  
  mario.collide(invisible)
  drawSprites();
}