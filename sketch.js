
var trex ,trex_running;
var ground ,edges;
function preload(){
  trex_running = loadAnimation('trex1.png', 'trex3.png', 'trex4.png')

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  ground = createSprite(300,180,600,5)
  edges = createEdgeSprites()
 trex = createSprite(25,160,10,50)
 trex.addAnimation('running', trex_running)
 trex.scale = 0.5 
}

function draw(){
  background("pink")
  if(keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY + 0.5

  trex.collide(ground)
drawSprites()
}
