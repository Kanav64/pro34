
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgImg
function preload(){
backgImg=loadImage('constructionsite.png')
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
 
}


function draw() 
{
  background(backgImg);
  Engine.update(engine);
  drawSprites()
}

