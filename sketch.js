
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var circle,circle1,circle2,circle3,circle4;
var chain1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(330,200,390,20);
	circle = new bob(200,450,70);
	circle1 = new bob(270,450,70);
	circle2 = new bob(340,450,70);
	circle3 = new bob(410,450,70);
	circle4 = new bob(480,450,70);

	chain1= new Chain(ground.body, circle.body);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  ground.display();
  circle.display();
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  chain1.display();

  drawSprites();
 
}



