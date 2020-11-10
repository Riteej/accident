var bullet,wall;

var speed,weight;


function setup() {
  createCanvas(1000,400);
  //createSprite(400, 200, 50, 50);
  speed=random(55,90);
  weight=random(400,1500);
  
  thickness=random(22,83);
  
  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

wall=createSprite(800,200,thickness,height/2);

}

function draw() {
  
  background("pink"); 
  drawSprites(); 
  if (wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var damage=0.5* weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10 ){
    wall.shapeColor=color(225,0,0);

  } 
  
  if (damage<10){
wall.shapeColor=color(0,255,0);
  }
}
 
}
