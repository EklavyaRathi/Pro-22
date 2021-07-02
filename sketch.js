var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy,fairyImg,fairyVoice;
var fairy2Img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");
	fairy2Img=loadAnimation("images/fairy.png");
	
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	//fairyVoice.play();
     
	//create fairy sprite and add animation for fairy
	fairy=createSprite(30,500);
	fairy.addAnimation("fairy",fairyImg);
	fairy.scale=0.25;

	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  edges = createEdgeSprites();
  
  fairy.collide(edges);
  fairy.collide(star);
 
  

  
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  //console.log(star.y);
  
  //write code to stop star in the hand of fairy
  Engine.update(engine);
  if(star.y > 470  &&  starBody.position.y > 470){
	Matter.Body.setStatic(starBody,true);
    }

  

if(fairy.isTouching(star)){
	fairy.addAnimation("fairy2",fairy2Img);
	fairy.changeAnimation("fairy2");
	fairy.scale=0.2;
}
  

  keyPressed();
  drawSprites();
  

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		
	}

	//write code to move fairy left and right
	if(keyDown("LEFT_ARROW")){
		fairy.velocityX=-4;
	}
	if(keyDown("RIGHT_ARROW")){
		fairy.velocityX=4;
	}
}
