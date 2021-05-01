var background, backgroundImg;
var  cat,cat1Img,cat2Img;
var mouse,mouse1Img,mouse2Img;

//----------------------------------------

function preload() {
 
backgroundImg = loadImage("garden.png");
mouse1Img = loadAnimation("mouse1.png");
mouse2Img = loadAnimation("mouse2.png","mouse3.png");
mouse3Img = loadAnimation("mouse4.png");
cat1Img = loadAnimation("cat1.png");
cat2Img = loadAnimation("cat2.png","cat3.png");
cat3Img = loadAnimation("cat4.png");

}

//----------------------------------------

function setup(){
createCanvas(600,600);

cat = createSprite(500,450);
cat.addAnimation("catSleeping",cat1Img);
cat.scale = 0.1;
//----------------------------------------
mouse = createSprite(100,450);
mouse.addAnimation("mouseStanding",mouse1Img);
mouse.scale = 0.1;
}

//----------------------------------------

function draw() {

background(backgroundImg);
//----------------------------------------
if (cat.x - mouse.x < (cat.width - mouse.width)){
mouse.addAnimation("mouseHappy", mouse3Img);
mouse.changeAnimation("mouseHappy");
mouse.scale = 0.1;
//----------------------------------------
cat.velocityX = 0;
cat.addAnimation("catHappy", cat3Img);
cat.x = 500;
cat.y = 450
cat.scale = 0.1;
cat.changeAnimation("catHappy");
}

//----------------------------------------

drawSprites();
}

//----------------------------------------

function keyPressed(){

if (keyCode === RIGHT_ARROW){
mouse.addAnimation("mouseTeasing", mouse2Img, mouse3Img);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 10;
}

//----------------------------------------

if (keyCode === LEFT_ARROW){
cat.addAnimation("catMoving", cat2Img, cat3Img);
cat.changeAnimation("catMoving");
cat.velocityX = -2;
}

}

//----------------------------------------
