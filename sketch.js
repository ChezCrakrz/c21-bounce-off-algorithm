var fRect, mRect;

function setup() {
  createCanvas(800,400);
  fRect = createSprite(200,100,50,70);
  mRect = createSprite(400,100,70,50);
  fRect.shapeColor = "green";
  mRect.shapeColor = "green";
  fRect.debug = true;
  mRect.debug = true;

  mRect.velocityX = -5;
  fRect.velocityX = +5;
}

function draw() {
  background(255,255,255);

  bounceOff(mRect, fRect)

  drawSprites();
}