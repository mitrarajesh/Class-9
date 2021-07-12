
var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50)
}

function draw() 
{
  background("pink");

  if(keyDown("right")){
    box.x += 5
  }

  if(keyDown("left")){
    box.x -= 5
  }

  if(keyIsDown(UP_ARROW)){
    box.y -= 5
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y += 5
  }

  drawSprites()

}




