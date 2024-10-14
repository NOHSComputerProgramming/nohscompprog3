// var choice = 1;
// function setup() {
//   createCanvas(400, 200);
// 	choice = getURLParams()["choice"];
// 	if (choice === undefined) {
// 		choice = 1;
// 	}
	
// }
var choice = message;
var tx=0,ty=0;
var ex=0,ey=0;
var spiderImg, spaceshipImg, asteroidImg,backgroundImg,rockImg,grassImg;

function preload(){
  spiderImg = loadImage("images/spiderEdit.png");
  spaceshipImg = loadImage("images/spaceShipEdit.png");
  asteroidImg = loadImage("images/asteriodEdit.png");
  backgroundImg = loadImage("images/backgroundImg.jpeg");
  rockImg = loadImage("images/rockTexture.jpeg");
  grassImg = loadImage("images/grass1Edit.png");
  
}
function setup() {
  canvasObject = createCanvas(400,400);
  canvasObject.position(5, 5);
	// choice = getURLParams()["choice"];
	// if (choice === undefined) {
	// 	choice = 1;
	// }
}

function draw() {
	if(choice==1){
		background('lightgray');
	}
	if(choice==2){
		background(backgroundImg);
	}
  
  myBackground();
  tx = 0;
  ty = 0.9*height;
  ex = 0.5*width;
  ey = 0.5*height
}

function myBackground(){

  if(choice == 1){	
  //ground
  fill('darkgreen');
  rect(0,0.9*height,width,height)
  
  //mountain
  fill('#654321');
  rect(0.3*width,0.5*height,0.4*width,0.4*height)
  
  //Make the red rectangle move with the mouse
  fill('red');
  rect(mouseX,mouseY,0.1*width,0.1*height);
  
  //Make tx, ty follow the mouse
  if(mouseX >=0 && mouseX < 0.3*width){
    tx = mouseX;
    ty = 0.9*height;
  }
  else if(mouseX >=0.3*width && mouseX <= 0.7*width){
    tx = mouseX;
    ty = 0.5*height;
  }
  else if(mouseX >=0.7*width && mouseX <= width){
    tx = mouseX;
    ty = 0.9*height;
  }
  fill('orange');
  triangle(tx,ty,tx+0.1*width,ty,tx+0.05*width,ty-0.05*height);
  
  //Make the oval randomly positon
  //when the user mouse presses in the green
  if(mouseIsPressed){
    if(mouseY > 350){
      ex = random(0.1*width,0.9*width);
      ey = random(0.1*width,0.9*height);
    }
  }
  
  fill('ellipse');
  ellipse(ex,ey,0.1*width,0.05*height);
  grid();
  }

	if(choice == 2){

		//mountain
  fill('#654321');
  //rect(0.3*width,0.5*height,0.4*width,0.4*height)
  image(rockImg,0.3*width,0.5*height,0.4*width,0.4*height)
  
    //ground
  fill('darkgreen');
  //rect(0,0.9*height,width,height)
  image(grassImg,0,0.8*height,width,0.2*height)
  
  //Make the red rectangle move with the mouse
  fill('red');
  //rect(mouseX,mouseY,0.1*width,0.1*height);
  image(spaceshipImg,mouseX,mouseY,0.1*width,0.1*height);
  
  //Make tx, ty follow the mouse
  if(mouseX >=0 && mouseX < 0.3*width){
    tx = mouseX;
    ty = 0.9*height;
  }
  else if(mouseX >=0.3*width && mouseX <= 0.7*width){
    tx = mouseX;
    ty = 0.5*height;
  }
  else if(mouseX >=0.7*width && mouseX <= width){
    tx = mouseX;
    ty = 0.9*height;
  }
  fill('orange');
  //triangle(tx,ty,tx+0.1*width,ty,tx+0.05*width,ty-0.05*height);
  image(spiderImg, tx,ty-0.05*height,0.1*width,0.05*height);
  
  //Make the oval randomly positon
  //when the user mouse presses in the green
  if(mouseIsPressed){
    if(mouseY > 0.9*height){
      ex = random(0.1*width,0.9*width);
      ey = random(0.1*width,0.9*height);
    }
  }
  
  fill('ellipse');
  //ellipse(ex,ey,0.1*width,0.05*height);
  image(asteroidImg,ex-0.01*width/2,ey-0.05*height,0.1*width,0.05*height);
  grid();
	}
}

function grid() {
  //noFill();
  stroke(255,255,255,100);
  for (var r = 0; r < 10; r++) {
    line(0, 0.1 * height * r, width, 0.1 * height * r);
  }
  for (var c = 0; c < 10; c++) {
    line(0.1 * width * c, 0, 0.1 * width * c, height);
  }

}


