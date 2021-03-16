var Background;
var balloon,balloonImage;
var aeroplane,aeroplaneImage,car,carImage;
var database;
var height;


function preload(){
Background = loadImage("5e25fbe041e83e91534440ceb014cc6d.jpg");
balloonImage = loadImage("clipart-balloon-row-7.png");
aeroplaneImage = loadImage("cartoon-airplane-png-MW56SM-clipart.png");
carImage = loadImage("broken-down-car-clipart-free-18.png")
}
function setup() {
  //database = firebase.database();
  createCanvas(1000,700);
  balloon = createSprite(300, 500, 50, 50);
  balloon.addImage("clipart-balloon-row-7.png",balloonImage);
  balloon.scale = 0.1;

  aeroplane = createSprite(-50,100,10,10);
  aeroplane.addImage("cartoon-airplane-png-MW56SM-clipart.png",aeroplaneImage);
  aeroplane.scale = 0.02;
  aeroplane.velocityX = 1;
  aeroplane.velocityY = -0.05;

  car = createSprite(-100,600,10,10);
  car.addImage("broken-down-car-clipart-free-18.png",carImage);
  car.scale = 0.05;
  car.velocityX = 5;
  

  //var balloonHeight = database.ref('balloon/height');
  //balloonHeight.on("value",readHeight,showError);
 textSize(20);
}

function draw() {
  background(Background); 
  
 textSize(30);
 fill("black");
 stroke(5);
 text("USE ARROW KEYS TO MOVE THE HOT AIR BALLOON",10,30);

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
    balloon.scale = balloon.scale-0.002
  }
  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
    balloon.scale = balloon.scale+0.002
    }
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
   }
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
   }
  drawSprites();
}
function updateHeight(x, y)
{
  database.ref('balloon/height').set({
    'x':height.x + x,
   'y':height.y + y
   })
}

function readHeight(data)
{
    height = data.val();

    balloon.x = height.x;
    balloon.y = height.y;
}

function showError()
{
    console.log("Error in writing to the database");
}
