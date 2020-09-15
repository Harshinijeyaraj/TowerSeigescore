const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos = [];
var division = [];
var particles;
var score = 0;

var divisionHeight = 300;



function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}

//var particles = [];
var plinkos = [];
var division = [];
var particles;

var divisionHeight = 300;

particles.createSprite();


for(var k=0; k<=width;k = k+80) {
  divisions.push(new Divisions(k, height.divisonHeight/2,10,divisionHeight));
}

for(var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <=width-10; j=j+50)
{
  plinkos.push( new Plinko(j,175));
}

for(var j = 0; j < particles.length; j++) {
  particles[j].display();
}

for(var k = 0; k < divisions.length; k++) {
  particles[k].display();
}

score.display(200,200,20,20)
function draw() {
  background(255,255,255);
  textSize(35);
    fill("white");
    text("score:" + score,width-300,50);
    Engine.update(engine);
  if(keyDown(space)){
  particles.velocityY = -10;
  } 
  
  if(particles.isTouching(ground)){
    score = score+100;
  }
  drawSprites();
}