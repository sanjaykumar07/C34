const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1, ball1;

function preload() {}

function setup() {
  createCanvas(1600, 850);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  ball1 = new ball();
  rope1 = new rope(ball1.body, { x: 500, y: 50 });
  Ground = new ground(800, 840, width, 20);

  box1 = new Box(750, 750, 100, 50);
  box2 = new Box(750, 750, 100, 50);
  box3 = new Box(750, 750, 100, 50);
  box4 = new Box(750, 750, 100, 50);
  //box5 = new Box(750, 750, 100, 50);
  //box6 = new Box(750, 750, 100, 50);
  /*box7 = new Box(750, 750, 50, 50);
  box8 = new Box(750, 750, 50, 50);*/

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("green");
  ball1.display();
  rope1.display();
  Ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  //box5.display();
 // box6.display();
  //box7.display();
  //box8.display();
  //drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
}
