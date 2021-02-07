var drops=[]

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1,boy
var Maxdrops
function preload(){
   
}

function setup(){
   createCanvas(700,700)
   
   engine = Engine.create();
   world = engine.world;
   for(var i=0; i<Maxdrops ; i++){
      this.drops.push(new drops(random(0,400),random(0,400)));
      }
   //ball1= new rain(20,20)
   boy= new umbrella(202,200)

}

function draw(){
   background(0)
   Engine.update(engine); 
   for(var i = 0; i<Maxdrops; i++){ drops[i].display()};
 
   boy.display();
}   
