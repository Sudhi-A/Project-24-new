const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world
var box1,box2,box3,paper,ground
function setup() {
	createCanvas(700,400)
    engine=Engine.create()
	world=engine.world
	ground=new Ground(350,380,700,20)
	box1=new Dustbin(494,315,10,100)
	box2= new Dustbin(550,360,100,10)
	box3=new Dustbin(600,315,10,100)
	paper=new Paper(100,370,20)
	
}
function draw() {
	background(0,0,0)
	Engine.update(engine)
	ground.display()
	box1.display()
	box2.display()
	box3.display()
	paper.display()
}
function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-14});
    
  	}
}





