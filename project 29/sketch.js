const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var slingshot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

 block17 = new Block(640,175,30,40);
 block18 = new Block(670,175,30,40);
 block19 = new Block(700,175,30,40);
 block20 = new Block(730,175,30,40);
 block21 = new Block(760,175,30,40);
 block22 = new Block(670,135,30,40);
 block23 = new Block(700,135,30,40);
 block24 = new Block(730,135,30,40);
 block25 = new Block(700,95,30,40);


ball = Bodies.circle(50,300,20);
World.add(world,ball);


slingshot = new Slingshot(this.ball,{x:60,y:300});

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block25.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
  fill("grey");
  block16.display();

 block22.display();
 block23.display();
 block24.display();


//imageMode(CENTRE);
image(polygon_img,ball.position.x,ball.position.y,40,40);

slingshot.display();

detectollision(ball,block1);
detectollision(ball,block2);
detectollision(ball,block3);
detectollision(ball,block4);
detectollision(ball,block5);
detectollision(ball,block6);
detectollision(ball,block7);
detectollision(ball,block8);
detectollision(ball,block9);
detectollision(ball,block10);
detectollision(ball,block11);
detectollision(ball,block12);
detectollision(ball,block13);
detectollision(ball,block14);
detectollision(ball,block15);
detectollision(ball,block16);
detectollision(ball,block17);
detectollision(ball,block18);
detectollision(ball,block19);
detectollision(ball,block20);
detectollision(ball,block21);
detectollision(ball,block22);
detectollision(ball,block23);
detectollision(ball,block24);
detectollision(ball,block25);


}

function mouseReleased(){
 {
      slingshot.fly();
  }
  }
  
  function mouseDragged(){
     Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  } 

