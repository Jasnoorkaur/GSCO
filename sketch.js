var car,wall;
var speed,weight;


function setup() {
  createCanvas(600,300);
  speed=random(55,200) 
  weight=random(800,2500)
    car=createSprite(50, 200, 50,50); 
    car.velocityX = speed; 
    car.shapeColor=color(150);

   wall=createSprite(500,200, 60, height/2)
  wall.shapeColor="blue"

}

function draw() {
  background(255,255,255);
    deformation();
  drawSprites();
}
function deformation() { 
  if(wall.x-car.x < (car.width+wall.width)/2) { 
    car.velocityX=0;
    var deformation=0.5 * weight *speed /22500; 
    
if(deformation>180) { 
  car.shapeColor=color(255,0,0); 
   stroke("red");
   text("Car name : Zenia",200,160); 
  text("Rating:D-",200,180);
  text("lethal",200,200); 

} 
if(deformation<180 && deformation>100) { 
  car.shapeColor=color(230,230,0); 
  stroke("red");
  text("Car name : Zenia",200,160); 
  text("average",200,200); 
  text("Car name :Taurus",200,160); 
  text("Rating:B-",200,180);
   } 
if(deformation<100) {
  car.shapeColor=color(0,255,0);
  stroke("red");
  text("Car name : Cyclap",200,160); 
  text("Rating:A-",200,180);
text("good",200,200); 
  } 
 } 
}       
                 
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
               
            