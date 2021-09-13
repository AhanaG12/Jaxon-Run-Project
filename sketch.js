var runner, runner_running;
var path;
function preload(){
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
pathimage = loadImage("path.png");
}
function setup(){
createCanvas (400,400);
  //create sprites here
  path=createSprite (200,200);
  path.addImage(pathimage);
  path.scale=1.2;
  runner=createSprite (200, 200, 5, 5);
  runner.scale=0.1
  runner.addAnimation("running", runner_running);
 
}

function draw() {
  background(0);
  runner.x=World.mouseX;
  path.velocityY=4;
  if (path.y>400){
    path.y=height/2;
  }
drawSprites();
}