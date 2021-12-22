var shooter,shooterimg,ssimg,hurtimg
var zom_a,zom_d,zom_w,zomg
var bgImage
var bullet,bulletImg,bulletG
var ground
var my_logo,logoimg
function preload() {
 shooterimg=loadImage("shooter/shooting.png")
 ssimg=loadImage("shooter/ss.png")
 hurtimg=loadImage("shooter/hurt.png")
 bgImage=loadImage("bg.jpg")
 zom_w=loadAnimation("zw/zw9.png","zw/zw10.png","zw/zw11.png","zw/zw12.png","zw/zw13.png","zw/zw14.png","zw/zw15.png","zw/zw16.png")
 bulletImg=loadImage("bullet.png")
 my_logo=loadImage("MY LOGO.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  logoimg=createSprite(1650,60,10,10)
  logoimg.scale=0.2
  logoimg.addImage("it is logo",my_logo)
  ground=createSprite(windowWidth/2,windowHeight-135,width,20)
  ground.visible=false;
  shooter=createSprite(80,windowHeight-205)
  console.log("passed line 20")
shooter.addImage("standing",ssimg)
shooter.addImage("hurt",hurtimg)
shooter.addImage("shooting",shooterimg)
console.log("passed line 22")
//shooter.collide(ground)
  zomg=new Group()
  bulletG=new Group()
  
}

function draw() {
  
  background(bgImage);
  spawnzombie();
 if(keyWentDown(32)){
  bullet=createSprite(153,windowHeight-202)
  shooter.changeImage("shooting",shooterimg)
  bullet.addImage("buttet",bulletImg)
  bullet.scale=0.3
  bullet.velocity.x=15
  bulletG.add(bullet)
 }
 else if(keyWentUp(32)){
   shooter.changeImage("standing",ssimg)
 }
 /*if(zomg.isTouching(bulletG)){
  for(var i=0;i<zomg.length;i++){     
    
   

   if(zomg[i].isTouching(bulletG)){
        zomg[i].destroy()
        bulletG.destroyEach()
       
        } 
  
  }
}*/

  if(zomg.isTouching(shooter)){
    shooter.changeImage("hurt",hurtimg)
    zomg.destroyEach()
    }
   


 drawSprites();
 
  
}
function spawnzombie(){
  if(frameCount % 500 === 0){
   var zom=createSprite(windowWidth,windowHeight-200,50,50)
   zom.addAnimation("walking",zom_w)
  zom.velocity.x=-1
  zom.scale=2.4
  zom.lifetime=500
  zomg.add(zom)
  

  }
  
}


