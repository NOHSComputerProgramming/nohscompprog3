 var choice = message;
function setup(){
  
	// choice = getURLParams()["choice"];
	// if (choice === undefined) {
	// 	choice = 1;
	// }
if(choice <= 2){
	createCanvas(200,400);
}
	if(choice == 3){
		createCanvas(600,300);
	}
}
function draw(){

  if(choice <= 2){	
  if(mouseX < 0.5*width){
    background('black');
	}
	else{
	    background('grey');
	}
	if (choice == 2){
		if (mouseY < 100){
		  //draw a red ellipse
		  fill('red');
		  ellipse(0.5*width, 0.25*height,50,50);
		}
		else if (mouseY < 200){
		  //draw a yellow ellipse
		  fill('yellow');
		  ellipse(0.5*width, 0.5*height,50,50);
		}
		else{
		  //draw a green ellipse
		  fill('green');
		  ellipse(0.5*width, 0.75*height,50,50);
		}
	}
  }
  if(choice == 3){
	  rectMode(CENTER);
  background(0);
  stroke(255,255,0);
  line(100,0,100,height);
  line(200,0,200,height);
  line(300,0,300,height);
  line(400,0,400,height);
  line(500,0,500,height);
  
  noStroke();
  fill(255,0,0);//set the initial fill to red
  
  if(mouseX < 100){
    rect(50,0,40,100);
  }
  else if(mouseX < 200){
    rect(150,0,40,200);
  }
  else if(mouseX < 300){
    rect(250,0,40,300);
  }
  else if(mouseX < 400){
    rect(350,0,40,400);
  }
  else if(mouseX < 500){
    rect(450,0,40,500);
  }
  else{
    rect(550,0,40,600);
  }
  }
	
}
