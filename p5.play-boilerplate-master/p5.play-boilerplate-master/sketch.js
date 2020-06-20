var moving,fixed ;
var abc,xyz
function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,200,50,50);
  abc = createSprite (300,400,50,50)
  xyz = createSprite(600,400,50,50)
  moving.velocityX = 5
  fixed.velocityX = -5
}

function draw() {
  background("blue");  
//moving.y = mouseY
//moving.x = mouseX



//isTouching(moving,fixed);
//isTouching(moving,abc);
 if (bounceOff(moving,fixed)){

moving.velocityX = moving.velocityX * (-1)
fixed.velocityX = fixed.velocityX * (-1)
}
  

  drawSprites();
}
function isTouching (object1,object2) {
  if (object1.x - object2.x<object1.width/2+object2.width/2
    && object2.x - object1.x<object1.width/2+object2.width/2
    && object1.y - object2.y<object1.height/2+object2.height/2
    && object2.y - object1.y<object2.height/2 +object2.height/2 ){
      object1.shapeColor = "green"
      object2.shapeColor = "yellow"
    }
}

function bounceOff (object1,object2) {
  if (object1.x - object2.x<object1.width/2+object2.width/2
    && object2.x - object1.x<object1.width/2+object2.width/2
    && object1.y - object2.y<object1.height/2+object2.height/2
    && object2.y - object1.y<object2.height/2 +object2.height/2 ){
      return  true
    }
}