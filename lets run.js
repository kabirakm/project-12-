var track;
var runningSurfer; 

function preload(){
  runningSurfer = loadAnimation("Runner-1.png, Runner-2.png");
  track = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  runningSurfer = createSprite(50,200,30,30);
  runningSurfer.addAnimation("running", runningSurfer);
  runningSurfer.velocityY = 4; 
  
  track = createSprite(200,200);
  track.addImage("ground", trackImage);
  ground.velocityY = 4;

  ground.scale=1.2;
  ground.y = 200;

  edges = createEdgeSprites();

 }


function draw() 
 {
  if(ground.y > 400 ){
  ground.y = height/2;
 }

  running.x = mouse.x;

  running.collide(edges)
  drawSprites();

}
