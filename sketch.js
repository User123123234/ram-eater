//needed to define
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine;
var world;
var plinkos=[];
//end

//name the objects
var ground, box, ball;
var wall1,wall2,wall3,wall4,wall5,wall6;


function setup() {
//needed
engine=Engine.create()
world=engine.world
//end
ground=new Rectangle(250,800,500,10)
ball=new Circle(200,100,20)

wall1=new Rectangle(0,700,5,200)
wall2=new Rectangle(100,700,5,200)
wall3=new Rectangle(200,700,5,200)
wall4=new Rectangle(300,700,5,200)
wall5=new Rectangle(400,700,5,200)
wall6=new Rectangle(500,700,5,200)

for(var j = 40; j<=width; j=j+50){
  plinkos.push(new Obstacle(j,75))
  }

  createCanvas(500,800);
}

function draw() {
  background(250,250,250); 

for(var j = 0; j<=plinkos.length; j=j++){
plinkos[j].display()
}



//important for matter.js
Engine.update(engine)

ground.display()
ball.display()
wall2.display()
wall3.display()
wall4.display()
wall5.display()
wall6.display()



}