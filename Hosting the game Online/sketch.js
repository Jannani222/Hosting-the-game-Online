
var monster,monsterGroup
var knife,knifeImg;
var fruit1,fruitImg1,fruitImg2,fruitImg3,fruitImg4;
var fruitGroup,monsterGroup;
var Fruit=0;
var gameover,gameoverImg;
var gamestate="play",end;

function preload(){
  
 
  monsterImage = loadAnimation("alien1.png","alien2.png")
  knifeImg=loadImage("knife.png")
  fruitImg1=loadImage("fruit1.png")
  fruitImg2=loadImage("fruit2.png")
  fruitImg3=loadImage("fruit3.png")
  fruitImg4=loadImage("fruit4.png")
  gameoverImg=loadImage("gameover.png")

}

function setup() {
  createCanvas(600, 600);
  knife=createSprite(200,200)
  knife.scale=0.8
  knife.addImage(knifeImg) 
  Fruit=0;
  fruitGroup=createGroup();
  monsterGroup=createGroup();
}

function draw() {
  background("lightblue");
  if(gamestate=="play")
    {
  knife.y=mouseY;
  knife.x=mouseX;
   
  if(fruitGroup.isTouching(knife))
  {
    fruitGroup.destroyEach();
    Fruit=Fruit+5
  }
  
  if(monsterGroup.isTouching(knife))
    {
     gamestate=end
       fruitGroup.visible=false;
      monsterGroup.visible=false;
      fruitGroup.destroyEach();
      monsterGroup.destroyEach();
     fruitGroup.setVelocityXEach(0);
     monsterGroup.setVelocityXEach(0);
     knife.addImage(gameoverImg)
     knife.x=300
     knife.y=300
      fruitGroup.visible=false;
      monsterGroup.visible=false;
    }
    }
    Monster();
    fruites()      
  drawSprites();
  //Display score
  textSize(25);
  fill("black")
  text("Fruit : "+ Fruit ,250,50)
} 


function Monster(){
  if(World.frameCount%350===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    
    monster.velocityX=-8
    monsterGroup.add(monster)
}
}

function fruites()
{
  if(frameCount%100==0) 
  {
    fruit=createSprite(400,random(50,400))
    fruit.scale=0.2
    position= Math.round(random(1,2))
    if(position==1)
    {
     fruit.x=0
     fruit.velocityX=4
    }
    else if(position==2)
    {
     fruit.x=600
     fruit.velocityX=-4
    }
    rand=Math.round(random(1,4))
    if(rand==1)
     {
      fruit.addImage(fruitImg1)
     }
      else if(rand==2)
     {
      fruit.addImage(fruitImg2)           
     }
       else if(rand==3)
     {
      fruit.addImage(fruitImg3)            
     }
       else if(rand==4)
     {
      fruit.addImage(fruitImg4)          
     }   
     rand=Math.round(random(50,400))
     fruit.lifetime=250  
    fruitGroup.add(fruit)
}
}  