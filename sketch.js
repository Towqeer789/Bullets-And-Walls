var thickness,wall;
var bullet,speed,weight  
function setup() {
  createCanvas(1600,400);
thickness=random(22,83);
speed=random(223,321);
weight=random(30,50);
bulletWeight=random(30,52);
bulletSpeed=random(223,321);

car=createSprite(50,200,50,50);
car.shapeColor ="white"
car.velocityX=speed;

wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);


 
}


function draw() {
  background(0);  
 
  function hasCollided(bullet,wall){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
   return false;
  }

function hasCollided(bullet,wall)
{
bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

if (damage>10)
{
  wall.shapeColor=color(225,0,0);
}

if (damage<10)
{
  wall.shapeColor=color(0,225,0);
}

}

  

  drawSprites();
}