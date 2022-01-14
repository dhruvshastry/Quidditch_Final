


var bg;
var engine;
var world;

var playerImg, player;

var goalKImg, goalK

var edge1, edge2, edge3;

var goalImg, goal;

var quaffleImg1, quaffle, quaffleImg2;

var score;
var score1;
var life1;

var life, gameoverImg,gameover;
var PLAY=1;
var END = 0;
var gameState = PLAY;
var Hedwigtheme, GameOverS, oooSound, WinS, ScoreS;
 var cannon;










function preload(){
  bg = loadImage("HpBg3.png")
  playerImg = loadAnimation("HPB2.png","HPB3.png")
  goalKImg = loadAnimation("HPB4.png","HPB5.png")
  goalImg = loadImage("GoalPost.png")
  quaffleImg1 = loadAnimation("Quaffle.png","Quaffle2.png","Quaffle3.png")
  gameoverImg = loadImage("game over.png")
  Hedwigtheme = loadSound("Hedwigs_theme.mp3")
  GameOverS = loadSound("Game over.mp3")
  oooSound = loadSound("ooo sound.mp3")
  WinS = loadSound("Win sound.mp3")
  ScoreS = loadSound("Score.mp3")
  cannon = loadSound("cannon_explosion.mp3")


}


function setup() {
  createCanvas(windowWidth, windowHeight);

   Hedwigtheme.play();



   score=0
   life = 3;
   score1=0;
   life1=3;


  player = createSprite(windowWidth/2+400,windowHeight/2)
  player.addAnimation("player",playerImg);
  player.scale = 1.5

  goalK = createSprite(400,windowHeight/2)
  goalK.addAnimation("goalK",goalKImg)
  goalK.velocityY = 7

  edge1 = createSprite(windowWidth/2,10,windowWidth,10)
  edge1.visible = true

  edge2 = createSprite(windowWidth/2,windowHeight-10,windowWidth,10)
  edge2.visible = true

  edge3 = createSprite(1,windowHeight/2,10, windowHeight)
  edge3.visible = true

  goal = createSprite(130,windowHeight/2+100)
  goal.addImage("goal",goalImg)
  goal.scale = 0.8

  quaffle = createSprite(player.position.x-90,player.position.y-25)
  quaffle.addAnimation("quaffle",quaffleImg1)
  quaffle.scale = 0.1

  gameover = createSprite(windowWidth/2, windowHeight/2)
  gameover.addImage("gameover",gameoverImg)
  gameover.scale = 2;
  gameover.visible = false;


  goal.setCollider("rectangle",-90,-150, 200,350)
  goal.debug = false

  goalK.setCollider("rectangle",0,-10,150,150)


  
}

function draw() {
  background(bg); 
  textSize(30);
  text("score:"+score,300,40);
  text("life:"+life,windowWidth/2,40)


     goalK.bounceOff(edge1)
     goalK.bounceOff(edge2)
   
    if(quaffle.isTouching(edge3)){
      quaffle.velocityX = 0
      quaffle.position.x = player.position.x-90
      quaffle.position.Y = player.position.y-25
    }


    if(goalK.isTouching(edge2)){
      goalK.velocityY = -4
    }

    if(goalK.isTouching(edge1)){
      goalK.velocityY = 4
    }

  
    if(keyDown("UP_ARROW")){
      player.y+=-10
      quaffle.y+=-10
    }
    if(keyDown("DOWN_ARROW")){
      player.y+=10
      quaffle.y+=10
    }
    if(keyDown("LEFT_ARROW")){
      player.x+=-10
      quaffle.x+=-10
    }
    if(keyDown("RIGHT_ARROW")){
      player.x+=10
      quaffle.x+=10
    }

    if(keyDown("SPACE")){
      quaffle.velocityX = -8

    }

    if(quaffle.isTouching(goal)){
    quaffle.velocityX = 0
    score = score+1
    score1 = score1+1
    quaffle.position.x = player.position.x-90
    quaffle.position.Y = player.position.y-25

    }

    if(quaffle.isTouching(goalK)){
      life = life-1
      life1=life1-1
      quaffle.velocityX = 0
      quaffle.position.x = player.position.x-90
      quaffle.position.Y = player.position.y-25

    }

    if(score1===5){

      WinS.play()
      score1=0;
      }
    else if(WinS.isPlaying() && score1===5){
      textSize(100)
      fill("Blue")
      text("You Win",windowWidth/2-100,windowHeight/2+100);
      quaffle.velocityX = 0;
      goalK.velocityY = 0;
    }


    if(life1===0){
      Hedwigtheme.pause()
      GameOverS.play()
      life1=3
    }
    else if(GameOverS.isPlaying() && life1===3){
      gameover.visible = true;
      quaffle.velocityX = 0;
      goalK.velocityY = 0;
    }

    




  
  
  

  

  
  drawSprites();




}