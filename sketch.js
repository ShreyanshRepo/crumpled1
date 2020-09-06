var ball,dust1,dust2,dust3,ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	

	 dust1= new Dustbin(700,550,100,10);

  	 dust2= new Dustbin(650,515,10,70);
	
 	 dust3= new Dustbin(750,515,10,70);
	
	 ground1= new Ground(400,560,800,10);
	
	 ball= new Ball(150,540,30);
	
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine);

  ground1.display();

  dust1.display();
  dust2.display();
  dust3.display();

  ball.display();

  Engine.update(engine);
  
  drawSprites();
 
}


function keyPressed(){

	if(keyCode===UP_ARROW){
		
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:85});


	}
}


