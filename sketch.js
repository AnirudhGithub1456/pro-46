var alien, alienImg
var i = 0
var tile
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;
var speed = 0
function preload(){
  alienImg = loadAnimation("alien0.png", "alien1.png")
  backgroundImg = loadImage("background0.png")
  acidImg = loadImage("Acid (1).png")
  tile_1Img = loadImage("Tile (1).png")
  tile_2Img = loadImage("Tile (2).png")
  tile_3Img = loadImage("Tile (3).png")
  megaTileImg = loadImage("mega tile.png")
  alienImg2 = loadAnimation("alien0.png")
  boyImg = loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png","Run (9).png","Run (10).png","Run (11).png","Run (12).png","Run (13).png","Run (14).png","Run (15).png")
  boyJumpImg = loadAnimation("Jump (1).png","Jump (2).png","Jump (3).png","Jump (4).png","Jump (5).png","Jump (6).png","Jump (7).png","Jump (8).png","Jump (9).png","Jump (10).png","Jump (11).png","Jump (12).png","Jump (13).png","Jump (14).png","Jump (15).png")
  boyIdleImg = loadAnimation("Idle (1).png","Idle (2).png","Idle (3).png","Idle (4).png","Idle (5).png","Idle (6).png","Idle (7).png","Idle (8).png","Idle (9).png","Idle (10).png","Idle (11).png","Idle (12).png","Idle (13).png","Idle (14).png","Idle (15).png")
  
  
  
}
function setup() 
{
  createCanvas(1000,windowHeight);
  console.log(windowWidth)
  

  bg = createSprite(800,500, width,height)
  bg.addImage("background", backgroundImg)
  bg.scale = 4
  console.log(bg.width)
  console.log(bg.height)
  
  //bg.x = bg.width /2
  bg.width += 2000
  console.log(bg.width)
  
  alien = createSprite(100,600)
  alien.addAnimation("running", alienImg)
  alien.addAnimation("standing", alienImg2)
  alien.setCollider
  alien.debug = true

  boy = createSprite(500,600)
  boy.addAnimation("running1", boyImg)
  boy.addAnimation("jump", boyJumpImg)
  boy.addAnimation("idle", boyIdleImg)
  boy.scale = 0.25
  boy.setCollider("rectangle", -100,0,300,500)
  boy.debug = true
  

  acid_1 = createSprite(100,900)
  acid_1.addImage("acid", acidImg)
  
  acid_1.setCollider("rectangle", 0,0,300,150)
  

  acid_2 = createSprite(250,900)
  acid_2.addImage("acid", acidImg)
  acid_2.setCollider("rectangle", 0,0,300,150)
 

  acid_3 = createSprite(400,900)
  acid_3.addImage("acid", acidImg)
  acid_3.setCollider("rectangle", 0,0,300,140)
  

  acid_4 = createSprite(550,900)
  acid_4.addImage("acid", acidImg)
  acid_4.setCollider("rectangle", 0,0,300,140)

  acid_5 = createSprite(700,900)
  acid_5.addImage("acid", acidImg)
  acid_5.setCollider("rectangle", 0,0,300,140)
  

  acid_6 = createSprite(850,900)
  acid_6.addImage("acid", acidImg)
  acid_6.setCollider("rectangle", 0,0,300,140)
 

  acid_7 = createSprite(1000,900)
  acid_7.addImage("acid", acidImg)
  acid_7.setCollider("rectangle", 0,0,300,140)
  

  acid_8 = createSprite(1150,900)
  acid_8.addImage("acid", acidImg)
  acid_8.setCollider("rectangle", 0,0,300,140)

  

  tile_1 = createSprite(100,700)
  tile_1.addImage("tile1",tile_1Img)
  tile_1.scale = 0.5
  

  tile_2 = createSprite(400,700)
  tile_2.addImage("tile1",tile_1Img)
  tile_2.scale = 0.5

  tile_3 = createSprite(700,700)
  tile_3.addImage("tile1",tile_1Img)
  tile_3.scale = 0.5

  /*tile_4 = createSprite(1000,700)
  tile_4.addImage("tile1",tile_1Img)
  tile_4.scale = 0.5

  tile_5 = createSprite(1300,700)
  tile_5.addImage("tile1",tile_1Img)
  tile_5.scale = 0.5*/
  

  tileGroup = new Group()
  tileGroup.add(tile_1)
  tileGroup.add(tile_2)
  tileGroup.add(tile_3)
  //tileGroup.add(tile_4)
  //tileGroup.add(tile_5)

  acidGroup = new Group()
  acidGroup.add(acid_1)
  acidGroup.add(acid_2)
  acidGroup.add(acid_3)
  acidGroup.add(acid_4)
  acidGroup.add(acid_5)
  acidGroup.add(acid_6)
  acidGroup.add(acid_8)

  
  

  
  

  
  








  

  

  

  
  
}

function draw() 
{
  var i = Math.random(100,1000)
  background(255);
  drawSprites()
   speed = (frameCount % 1000)/50
  if(gameState === PLAY){
    bg.velocity.x = -5 -speed
    if(bg.x <200){
      bg.x = bg.width/3
    }
    
    alien.velocity.y = 2.4
    boy.velocity.y =2.4
    boy.velocity.x -= 0.0001
  
    if(keyDown(UP_ARROW)){
      alien.velocity.y = -30
    }
    
    alien.collide(tileGroup)
    if(boy.collide(tileGroup)){
      jump()
    }
    if(boy.collide(acidGroup)){
      boy.y-= 200
    }
    if(alien.collide(boy)){

      boy.destroy()

      

      setTimeout(() => {gameState = WIN}, 5000)


    }
    
    
    if(alien.x < 1){
      fill("#FF0000");
      textAlign("center");
      textSize(100);
      text("You fell out", width / 2, 100);

      setTimeout(() => {gameState = END}, 2000)
    }

    function jump(){
      boy.y -=150
      boy.velocity.y = -30
      boy.changeAnimation("jump", boyJumpImg)
      setTimeout(() => {boy.changeAnimation("running1")}, 2300)

    }
    

      
    
  
    
  
    //spawnTiles()
    
    tileGroup.setVelocityXEach(-5 - speed)
    acidGroup.setVelocityXEach(-5-speed)
  
    if(frameCount % 100 == 0){
      tile = createSprite(500,boy.y + 150)
      tile.addImage("tile", megaTileImg)
      tile.scale = 0.5
      tileGroup.add(tile)

      


      
     
  
      console.log(tile.y)
  
      
    

    }
    if(frameCount % 10 == 0){

      acid = createSprite(1250,900)
      acid.addImage("acid", acidImg)
      acid.setCollider("rectangle", 0,0,300,140)
      acidGroup.add(acid)
  
  

    
   

    

    
  
    }

  

    

  }
  if(gameState === END){
    tileGroup.setVelocityXEach(0)
    bg.velocity.x = 0
    alien.velocity.y = 0
    boy.velocity.y = 0
    boy.velocity.x = 0
    speed = 0
    boy.changeAnimation("idle")
    setTimeout(() => {
      fill("#FF0000");
      textAlign("center");
      textSize(100);
      text("Game over", width / 2, 100);
      alien.x = 100
      alien.y = 600
      alien.changeAnimation("standing",alienImg2)
      
    }, 1000)
    

    

    
    
    
    

    


  }
  if(gameState=== WIN){
    tileGroup.setVelocityXEach(0)
    bg.velocity.x = 0
    alien.velocity.y = 0
    boy.velocity.y = 0
    boy.velocity.x = 0
    speed = 0
    setTimeout(() => {
      fill("#FF0000");
      textAlign("center");
      textSize(100);
      text("You caught the boy!", width / 2, 100);
      alien.x = 100
      alien.y = 600
      alien.changeAnimation("standing",alienImg2)
      
    }, 1000)
    
  }
  
  
  /*else if(frameCount % 100 == 0 && tile.y > 900){
    tile = createSprite(1000,700 - i)
    tile.addImage("tile", tile_1Img)
    tile.scale = 0.5
    tileGroup.add(tile)

  }*/
  
  
  
 
  

 
   //i += 1
}
/*function spawnTiles(){
  if(frameCount % 100 == 0){
    tile = createSprite(1000,Math.random(700,710))
    tile.addImage("tile", tile_1Img)
    tile.scale = 0.5
    tileGroup.add(tile)

    

  }
  
}*/
