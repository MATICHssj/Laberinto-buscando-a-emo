var edges

var bg;

//pelota
var ball,ball1;

//premio
var tesoro,tesoro1;


//Tiempos
var gameState = 'SERVE';

//Trampas
var ta;

var ta2;

var ta3;

var ta4;

var ta5;

var ta6;

var ta7;

var ta8;

//Paredes
var wall;

var wall2;

var wall3;

var wall4;

var wall5;

var wall6;

var wall7;

var wall8;

var wall9;

var wall10;

var wall11;

var wall12;

var wall13;

var wall14;

var wall15;

var wall16;

var wall17;

var wall18;

var wall19;

var wall20;

var wall21;

var wall22;

var wall23;

var wall24;

var wall25;

var wall26;

var wall27;

var wall28;

var wall29;

var wall30;

var wall31;

var wall32;

var wall33;

var wall34;

var wall35;

var canvas;

function preload(){
  ball1=loadImage("Naruto.png");
  tesoro1=loadImage("sasuke.png");
}

function setup(){
  createCanvas(1600,500);

 bg=createSprite(800,300,400,400); 
 bg.shapeColor="blue";

//pelota
ball = createSprite(20+200*3,20+100,10,10);
ball.addImage(ball1);
ball.scale=0.15;

//premio
tesoro = createSprite(25+200*3,375+100,15,15);
tesoro.addImage(tesoro1);
tesoro.scale=0.15;

//Tiempos
var gameState = 'SERVE';

//Trampas
ta = createSprite(25+200*3,200+100,10,10);
ta.shapeColor = 'red';

ta2 = createSprite(75+200*3,200+100,10,10);
ta2.shapeColor = 'red';

ta3 = createSprite(125+200*3,200+100,10,10);
ta3.shapeColor = 'red';

ta4 = createSprite(175+200*3,200+100,10,10);
ta4.shapeColor = 'red';

ta5 = createSprite(225+200*3,200+100,10,10);
ta5.shapeColor = 'red';

ta6 = createSprite(275+200*3,200+100,10,10);
ta6.shapeColor = 'red';

ta7 = createSprite(325+200*3,200+100,10,10);
ta7.shapeColor = 'red';

ta8 = createSprite(375+200*3,200+100,10,10);
ta8.shapeColor = 'red';


//Paredes
wall = createSprite(50+200*3,25+100,5,50);
wall.shapeColor = (0);

wall2 = createSprite(50+200*3,100+100,100,5);
wall2.shapeColor = (0);

wall3 = createSprite(100+200*3,75+100,5,50);
wall3.shapeColor = (0);

wall4 = createSprite(126+200*3,50+100,50,5);
wall4.shapeColor = (0);

wall5 = createSprite(200+200*3,75+100,5,50);
wall5.shapeColor = (0);

wall6 = createSprite(200+200*3,100+100,100,5);
wall6.shapeColor = (0);

wall7 = createSprite(150+200*3,125+100,5,50);
wall7.shapeColor = (0);

wall8 = createSprite(100+200*3,150+100,100,5);
wall8.shapeColor = (0);

wall9 = createSprite(250+200*3,50+100,5,100);
wall9.shapeColor = (0);

wall10 = createSprite(225+200*3,100+100,50,5);
wall10.shapeColor = (0);

wall11 = createSprite(50+200*3,175+100,5,50);
wall11.shapeColor = (0);

wall12 = createSprite(150+200*3,200+100,100,5);
wall12.shapeColor = (0);

wall13 = createSprite(127+200*3,250+100,248,5);
wall13.shapeColor = (0);

wall14 = createSprite(250+200*3,175+100,5,50);
wall14.shapeColor = (0);

wall15 = createSprite(2+200*3,200+100,5,400);
wall15.shapeColor = (0);

wall16 = createSprite(200+200*3,2+100,400,5);
wall16.shapeColor = (0);

wall17= createSprite(200+200*3,175+100,5,50);
wall17.shapeColor = (0);

wall18 = createSprite(275+200*3,150+100,150,5);
wall18.shapeColor = (0);

wall19 = createSprite(300+200*3,50+100,100,5);
wall19.shapeColor = (0);

wall20 = createSprite(300+200*3,75+100,5,50);
wall20.shapeColor = (0);

wall21 = createSprite(375+200*3,100+100,50,5);
wall21.shapeColor = (0);

wall22 = createSprite(350+200*3,200+100,100,5);
wall22.shapeColor = (0);

wall23 = createSprite(300+200*3,300+100,5,100);
wall23.shapeColor = (0);

wall24 = createSprite(350+200*3,275+100,5,50);
wall24.shapeColor = (0);

wall25 = createSprite(325+200*3,300+100,50,5);
wall25.shapeColor = (0);

wall26 = createSprite(300+200*3,350+100,100,5);
wall26.shapeColor = (0);

wall27 = createSprite(325+200*3,300+100,50,5);
wall27.shapeColor = (0);

wall28 = createSprite(250+200*3,275+100,5,50);
wall28.shapeColor = (0);

wall29 = createSprite(200+200*3,325+100,5,50);
wall29.shapeColor = (0);

wall30 = createSprite(200+200*3,398+100,400,5);
wall30.shapeColor = (0);

wall31 = createSprite(398+200*3,200+100,5,400);
wall31.shapeColor = (0);

wall32 = createSprite(150+200*3,350+100,100,5);
wall32.shapeColor = (0);

wall33 = createSprite(50+200*3,325+100,5,50);
wall33.shapeColor = (0);

wall34 = createSprite(150+200*3,375+100,5,50);
wall34.shapeColor = (0);

wall35 = createSprite(100+200*3,300+100,100,5);
wall35.shapeColor = (0);
}

function draw() {
//fondo
background (0);
  
//funciones
drawSprites();

edges=createEdgeSprites();
  
//rebote
ta.bounceOff(wall16);
ta2.bounceOff(wall16);
ta3.bounceOff(wall16);
ta4.bounceOff(wall16);
ta5.bounceOff(wall16);
ta6.bounceOff(wall16);
ta7.bounceOff(wall16);
ta8.bounceOff(wall16);

ta.bounceOff(wall30);
ta2.bounceOff(wall30);
ta3.bounceOff(wall30);
ta4.bounceOff(wall30);
ta5.bounceOff(wall30);
ta6.bounceOff(wall30);
ta7.bounceOff(wall30);
ta8.bounceOff(wall30);

//Inicio juego
if(keyDown("space")&& gameState === 'SERVE')  {
gameState = 'PLAY';
ta.velocityY = 8;
ta2.velocityY = -8;
ta3.velocityY = 8;
ta4.velocityY = -8;
ta5.velocityY = 8;
ta6.velocityY = -8;
ta7.velocityY = 8;
ta8.velocityY = -8;
}
  
//Ganar  
if(ball.isTouching(tesoro)){
  gameState = 'OVER';
}

if(gameState === 'SERVE'){
    textSize(35);
    text('Presione space',80+200*3,180+100);
}

if(gameState === 'PLAY'){
  flechas();
//  playSound("Mi-video-2-remix.mp3");
}

if(gameState === 'OVER'){
  textSize(50);
  text('Ganaste',75+200*3,200+100);
  ta.velocityY = 0;
  ta2.velocityY = 0;
  ta3.velocityY = 0;
  ta4.velocityY = 0;
  ta5.velocityY = 0;
  ta6.velocityY = 0;
  ta7.velocityY = 0;
  ta8.velocityY = 0;
  ball.velocityY = 0;
  ball.velocityX = 0;
}




if(ball.isTouching(wall)
|| ball.isTouching(wall2) 
|| ball.isTouching(wall3) 
|| ball.isTouching(wall4) 
|| ball.isTouching(wall5) 
|| ball.isTouching(wall6) 
|| ball.isTouching(wall7) 
|| ball.isTouching(wall8) 
|| ball.isTouching(wall9) 
|| ball.isTouching(wall10) 
|| ball.isTouching(wall11) 
|| ball.isTouching(wall12) 
|| ball.isTouching(wall13) 
|| ball.isTouching(wall14) 
|| ball.isTouching(wall15) 
|| ball.isTouching(wall16) 
|| ball.isTouching(wall17) 
|| ball.isTouching(wall18)  
|| ball.isTouching(wall19) 
|| ball.isTouching(wall20) 
|| ball.isTouching(wall21) 
|| ball.isTouching(wall22) 
|| ball.isTouching(wall23) 
|| ball.isTouching(wall24) 
|| ball.isTouching(wall25) 
|| ball.isTouching(wall26) 
|| ball.isTouching(wall27)
|| ball.isTouching(wall28)  
|| ball.isTouching(wall29) 
|| ball.isTouching(wall30) 
|| ball.isTouching(wall31) 
|| ball.isTouching(wall32) 
|| ball.isTouching(wall33) 
|| ball.isTouching(wall34)
|| ball.isTouching(ta)
|| ball.isTouching(ta2)  
|| ball.isTouching(ta3) 
|| ball.isTouching(ta4) 
|| ball.isTouching(ta5) 
|| ball.isTouching(ta6) 
|| ball.isTouching(ta7) 
|| ball.isTouching(ta8)){
  ball.x = 20+200*3;
  ball.y = 20+100;
 }
}

function flechas() {
  if(keyIsDown(UP_ARROW)) {
   ball.x=ball.x+0;
   ball.y=ball.y-3.5;
 }
 
  if(keyIsDown(DOWN_ARROW)){
    ball.x=ball.x+0;
    ball.y=ball.y+3.5;
  }
   
  if (keyIsDown(LEFT_ARROW)){
    ball.x=ball.x-3.5;
    ball.y=ball.y+0;
  }
 
  if (keyIsDown(RIGHT_ARROW)){
    ball.x=ball.x+3.5;
    ball.y=ball.y+0;
    }
   }