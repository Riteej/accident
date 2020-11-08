var fr;
var mr;


function setup() {
  createCanvas(800,400);
 mr=createSprite(400, 200, 50, 50);
  fr=createSprite(500,200);

  mr.shapeColor="red";
  fr.shapeColor="red";
}

function draw() {
  background("blue");  
mr.x=mouseX;
mr.y=mouseY;

isTouching();
  drawSprites();
}
function isTouching(){
  if(( mr.x-fr.x<mr.width/2 +fr.width/2)&& 
  ( (fr.x-mr.x<fr.width/2 +mr.width/2))&&
  (fr.y-mr.x<fr.height/2 +mr.height/2) &&
 ( mr.y-fr.y<mr.height/2 +fr.height/2) ){
  mr.shapeColor="lime";
  fr.shapeColor="lime";}
  else {

    mr.shapeColor="red";
    fr.shapeColor="red";
 }
}