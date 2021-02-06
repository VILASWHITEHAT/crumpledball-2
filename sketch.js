
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var left, right, bottem;

function preload(){
  
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paper = new Paper(150, 300, 20);
	left = new Dustbin1(900, 660, 10, 60);
	right = new Dustbin1(1100, 660, 10, 60);
	bottem = new Dustbin(900, 550, 200, 150);
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  ground.display();
  left.display();
  right.display();
  bottem.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:75, y:-85});
	}
	
}



