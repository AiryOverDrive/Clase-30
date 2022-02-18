const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit, fruit_con;
var bg_img, food, rabbit;
var bunny
var button;

function preload(){
  bg_img = loadImage("./assets/background.png");
  food = loadImage("./assets/melon.png");
  rabbit = loadImage("./assets/Rabbit-01.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  button = createImg("./assets/cut_btn.png");
  button.position(220,30);
  button.size(50,50);
  button.mouseClicked(drop);

  bunny = createSprite(200,620,100,100);
  bunny.addImage(rabbit);
  bunny.scale = 0.2
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);

  ground = new Ground(200,690,600,20);
  rope = new Rope(6,{x:245,y:30});

  var fruit_options = {
    density:0.001
  }

  fruit = Bodies.circle(300,300,15,fruit_options);
  Matter.Composite.add(rope.body , fruit); 
  fruit_con = new Link(rope,fruit)

}

function draw() {
  background(51);
  image(bg_img,width/2,height/2,490,690)

  ground.show();
  rope.show();

  image(food,fruit.position.x,fruit.position.y,70,70)
  Engine.update(engine);
  
  drawSprites();
   
}

function drop(){
  rope.break();
  fruit_con.detach();
  fruit_con = null
}




