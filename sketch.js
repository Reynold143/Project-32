const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball


function setup() {
  createCanvas(1200,500);
  

  engine = Engine.create();
	world = engine.world;

  //Create Bodies here
  ball = new Ball(110,285);

  sling = new Slingshot(ball.body,{x:180,y:285});
  //level one
  log1 = new Ground(450,395,180,10) 
  log2 = new Ground(533,320,10,130)
  log3 = new Ground(360,355,10,90)
//level two
  log4 = new Ground(890,135,180,10)
  log5 = new Ground(970,75,10,120)
  log6 = new Ground(800,100,10,70)
//level three
  log7 = new Ground(895,425,180,10)
  log8 = new Ground(800,385,10,90)
  log9 = new Ground(985,360,10,145)



  Engine.run(engine)
}

function draw() {
  background("black");  

text("x:"+mouseX+", y:"+mouseY,40,65)


  ball.display();
  sling.display();
  log1.display();
  log2.display();
  log3.display();

  log4.display();
  log5.display();
  log6.display();

  log7.display();
  log8.display();
  log9.display();



  drawSprites();
}

//works only when the mouse is dragged 
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY})
}
//works once the mouse button is released
function mouseReleased(){
  sling.fly()
}
