function preload (){
bg= loadImage("space.jpeg");
plane = loadImage("plane.png");
object = loadImage("Asteroid.png");
object2 = loadImage("asteroid_1.png");
object3 = loadImage("asteroid_2.png");
object4 = loadImage("asteroid_3.png");
bullet = loadImage("bullet.png");
}
function setup() {
  createCanvas(1000,600);
 // createSprite(400, 200, 50, 50);

 // creating plane 
 plane1= createSprite(500,500,20,20);
 plane1.addImage(plane);
 plane1.scale=0.4;

 score=0;

 //creating groups 
 obj1=new Group();
 obj2=new Group();
 obj3=new Group();
 obj4=new Group();
 bullet1=new Group(); 
}

function draw() {
  background(bg); 
  
  plane1.x = World.mouseX;
   // release bullet when space key is pressed
   if (keyDown("space")) {
    createBullet();
  }
    
//creating continous enemies
var select_asteroid = Math.round(random(1,4));
  
if (World.frameCount % 10 == 0) {
  if (select_asteroid == 1) {
    asteroid_obj();
  } else if (select_asteroid == 2) {
    asteroid_obj_2();
  } else if (select_asteroid == 3) {
    asteroid_obj_3();
  } else {
    asteroid_obj_4();
  }
}

if (bullet1.isTouching(obj1)){
  obj1.destroyEach();
  bullet1.destroyEach();
  score=score+2;
}  

if (bullet1.isTouching (obj2)){
  obj2.destroyEach();
  bullet1.destroyEach();
  score=score+2;
}  

if (bullet1.isTouching (obj3)){
  obj3.destroyEach();
  bullet1.destroyEach();
  score=score+2;
}  

if (bullet1.isTouching (obj4)){
  obj4.destroyEach();
  bullet1.destroyEach();
  score=score+2;
}  

  drawSprites();
  textSize(30);
  fill("white");
    text("Score: "+ score, 860,50);
}

function asteroid_obj(){
  var obj_a  = createSprite(0,Math.round(random(400,980)), 40, 40);
  obj_a.addImage(object);
  obj_a.velocityY = 6;
  obj_a.lifetime = 150;
  obj_a.scale = 0.1;
   obj1.add(obj_a);
  return obj_a
  
}

function asteroid_obj_2(){
  var obj_b  = createSprite(0,Math.round(random(400,980)), 40, 40);
  obj_b.addImage(object2);
  obj_b.velocityY = 6;
  obj_b.lifetime = 150;
  obj_b.scale = 0.4;
   obj2.add(obj_b);
  return obj_b
  
}

function asteroid_obj_3(){
  var obj_c  = createSprite(0,Math.round(random(500)), 40, 40);
  obj_c.addImage(object3);
  obj_c.velocityY = 6;
  obj_c.lifetime = 150;
  obj_c.scale = 0.4;
   obj3.add(obj_c);
  return obj_c
  
}

function asteroid_obj_4(){
  var obj_d  = createSprite(0,Math.round(random(400,980)), 40, 40);
  obj_d.addImage(object4);
  obj_d.velocityY = 6;
  obj_d.lifetime = 150;
  obj_d.scale = 0.4;
   obj4.add(obj_d);
  return obj_d
  
}

// Creating  bullets 
function createBullet() {
  var b= createSprite(100, 100, 60, 10);
  b.addImage(bullet);
  b.x = plane1.x;
  b.y=360;
  b.velocityY = -4;
  b.lifetime = 100;
  b.scale = 0.3;
    bullet1.add(b);
  return b;
  
}
