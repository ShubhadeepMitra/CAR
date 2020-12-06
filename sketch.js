var car1,car2,car3,car4,wall;


function setup() {
  createCanvas(1600,400);
  car1=createSprite(1400, 50, 100, 15);
  car1.shapeColor=("yellow");
  car1.velocityX=-5;

  car2=createSprite(1400, 150, 100, 15);
  car2.shapeColor=("red");

  car3=createSprite(1400, 250, 100, 15);
  car3.shapeColor=("blue");

  car4=createSprite(1400, 350, 100, 15);
  car4.shapeColor=("green");

  wall=createSprite(10,200,10,400);
  wall.shapeColor=("white");
}

function draw() {
  background(0); 
  
  car1.collide(wall);
  
  drawSprites();
  if(car1.isTouching(wall)){
    fill("white");
    textSize=20;
    text("Car Damaged 25%",800,200);
  }

}