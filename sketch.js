const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;
function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
box1=new Box(200,100,50,50)
box2=new Box(220,50,40,100)
ground=new Ground(200,390,1000,20)


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    box2.display()
    ground.display()
}