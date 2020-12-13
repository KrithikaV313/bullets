var wall,thickness;
var car, weight,speed;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 400);
speed=random(50,99);
weight=random(400,1500);
thickness=random(22,83);

	//Create the Bodies Here.
 car=createSprite(50,200,30,10);
 car.velocityX=speed;
 car.shapeColor=255;
 wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor=(80,80,80);
  
}

function hasCollided(car,wall){
	carRightEdge=car.x + car.width;
	wallLeftEdge=wall.x;
	if(carRightEdge >= wallLeftEdge){
		return true;
	}
	return false; 

}

function draw() {
  background(0);
  if (hasCollided(car,wall)){
	  car.velocityX=0;
	  var damage =0.5 * weight * speed * speed /(thickness * thickness * thickness);
	  if(damage>10){
		  car.shapeColor=color(255,0,0);
	  }
	  if(damage<10){
		  car.shapeColor=color(0,255,0);
	  }
  }
  drawSprites();
 
}



