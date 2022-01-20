var dino 
var dinomov
var dinof
var chao 
var chaoimg
var chaoivi
var nuvem
var nuvemimg

function preload(){
  dinomov = loadAnimation ("trex1.png","trex3.png","trex4.png");
  dinof = loadAnimation ("trex_collided.png");
  chaoimg = loadAnimation("ground2.png");
  nuvemimg = loadAnimation("nuvem.png");
}

function setup(){
  createCanvas(600,200);
  dino = createSprite(50,180,20,50)
  dino.addAnimation("correndo",dinomov);
  dino.addAnimation("morreu",dinof);
  dino.scale = 0.5
  chao = createSprite (200,180,400,20);
  chao.addAnimation("chao",chaoimg);
  chaoivi = createSprite (200,190,400,10);
  chaoivi.visible = false
  
}

function draw(){
  //definir a cor do plano de fundo 
  background("white");
  chao.velocityX = -8

if (chao.x<0){
  chao.x = chao.width/2;

}
console.log(dino.y)
  if (keyDown("space")&& dino.y>=160){
    dino.velocityY = -10;
  }
  dino.velocityY = dino.velocityY + 0.8
  drawSprites();
  dino.collide(chaoivi);
  criarnuvem()
}
function criarnuvem(){
if(frameCount % 60==0){


  nuvem = createSprite(600,100,40,10)
  nuvem.velocityX = -8
  nuvem.addAnimation("nuvem",nuvemimg);
}
}