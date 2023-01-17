var spaceship1;
var enemyspaceship1;
var enemyspaceship2;
var background;
var spaceshipImg;
var backgroundImg;
var enemy1Img;
var enemy2Img;

function preload(){
    spaceshipImg = loadImage("player.png");
    backgroundImg = loadImage("Gif2.gif");
    enemy1Img = loadImage("enemy1.jpeg");
    enemy2Img = loadImage("enemy2.jpeg");
}

 function setup(){
    //canvas = createCanvas(windowWidth,windowHeight);
    canvas = createCanvas(1000,1000);
    spaceship1 = createSprite(500,800,20,20);
    spaceship1.addImage("spaceship1",spaceshipImg);
    spaceship1.scale = 0.1
    enemyspaceship1 = createSprite(500,200,20,20);
    enemyspaceship1.addImage("enemyspaceship1",enemy1Img);
    enemyspaceship1.scale = 0.1

}

function draw(){

    background(backgroundImg);
    fill("yellow");
    stroke("yellow")
    text("WELCOME TO MY GAME!!!",500,500);
    textSize(30);
    
    movingSpaceship();
    drawSprites();
}
function movingSpaceship(){
    if(keyDown(LEFT_ARROW)){
        spaceship1.x=spaceship1.x-3;
       spaceship1.velocityX = -2;
    }
    if(keyDown(RIGHT_ARROW)){
        spaceship1.x=spaceship1.x+3;
        spaceship1.velocityX = 2;
    }
    if(keyDown(UP_ARROW)){
        spaceship1.velocityY = -2;
    }
    if(keyDown(DOWN_ARROW)){
        spaceship1.velocityY = 2;
    }
}
