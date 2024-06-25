var path,boy,cash,giftbox,jewelry,coal;
var pathImg,boyImg,cashImg,giftboxImg,jewelryImg,coalImg;
var treasureCollection = 0;
var cashG,giftboxG,jewelryG,coalGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("biker.png");
  cashImg = loadImage("cash.png");
  giftboxImg = loadImage("giftbox.png");
  jewelryImg = loadImage("jewelry.png");
  coalImg = loadImage("coal.png");

}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,50,50);
boy.addAnimation("SahilBiking",boyImg);
boy.scale = 0.35;

createSprite()
  
  
cashG=new Group();
giftboxG=new Group();
jewelryG=new Group();
coalGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    creategiftbox();
    createjewelry();
    createcoal();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 50;
    }
    else if (giftboxG.isTouching(boy)) {
      giftboxG.destroyEach();
      treasureCollection = treasureCollection + 100;
      
    }else if(jewelryG.isTouching(boy)) {
      jewelryG.destroyEach();
      treasureCollection = treasureCollection + 150;
      
    }else{
      if(coalGroup.isTouching(boy)) {
        gameState=END;
        
       
     
         cashG.destroyEach();
         giftboxG.destroyEach();
         jewelryG.destroyEach();
         coalGroup.destroyEach();
        
        
        cashG.setVelocityYEach(0);
        giftboxG.setVelocityYEach(0);
        jewelryG.setVelocityYEach(0);
        coalGroup.setVelocityYEach(0);
        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function creategiftbox() {
  if (World.frameCount % 320 == 0) {
  var giftbox = createSprite(Math.round(random(50, 350),40, 100, 100));
  giftbox.addImage(giftboxImg);
  giftbox.scale=0.1;
  giftbox.velocityY = 3;
  giftbox.lifetime = 150;
  giftboxG.add(giftbox);
}
}

function createjewelry() {
  if (World.frameCount % 410 == 0) {
  var jewelry = createSprite(Math.round(random(50, 350),40, 10, 10));
  jewelry.addImage(jewelryImg);
  jewelry.scale=0.13;
  jewelry.velocityY = 3;
  jewelry.lifetime = 150;
  jewelryG.add(jewelry);
  }
}

function createcoal(){
  if (World.frameCount % 530 == 0) {
  var coal = createSprite(Math.round(random(50, 350),40, 100, 100));
  coal.addImage(coalImg);
  coal.scale=0.3;
  coal.velocityY = 3;
  coal.lifetime = 150;
  coalGroup.add(coal);
  }
}
